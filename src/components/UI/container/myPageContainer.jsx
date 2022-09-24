import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import useForm from "@/hooks/useForm"
import useModal from "@/hooks/useModal"
import styled from "styled-components"
import Text from "@components/UI/atoms/text/text"
import MyPageSidebar from "@components/UI/blocks/mypage/myPageSidebar"
import MyPageOrderList from "@components/UI/blocks/mypage/myPageOrderList"
import MyPageCoupon from "@components/UI/blocks/mypage/myPageCoupon"
import MyPageProfile from "@components/UI/blocks/mypage/myPageProfile"
import MyPageSeller from "@components/UI/blocks/mypage/myPageSeller"
import Modal from "@components/UI/blocks/modal/modal"
import SessionStorage from "@/storage/sessionStorage"
import ProductService from "@/service/productService"
import AuthService from "@/service/authService"
import Theme from "@util/style/theme"
import Validation from "@util/validation/validation"
import ErrorUtil from "@util/errorUtil"

const MyPageContainer = () => {
    const [selectedMenu, setSelectMenu] = useState("Order list")
    const [imgSrc, setImgSrc] = useState(null)
    const [imgPreview, setImgPreview] = useState(null)
    const [modalMsg, setModalMsg] = useState("")
    const [selectCategory, setSelecCategory] = useState("Drink")
    const [productFormValue, handleProductFormValueChange] = useForm({
        name: "",
        description: "",
        origin: "",
        price: "",
        quantity: "",
    })
    const [isOpen, handleOpenButtonClick, handleCloseButtonClick] =
        useModal(false)
    const [isSeller, setIsSeller] = useState(false)

    const history = useHistory()

    useEffect(async () => {
        const userInfo = await AuthService.firebaseCurrentUserInfoRequest()

        setIsSeller(userInfo[0].isSeller)
    }, [])

    const menuItems = [
        "Order list",
        "Coupon",
        "Profile",
        "Unregister",
        isSeller && "Seller",
    ]

    const handleSelectedClick = (selectedName) => () => {
        setSelectMenu(selectedName)
    }

    const handleSelectCategory = (e) => {
        const { value } = e.target
        setSelecCategory(value)
    }

    const handleImgSrcChange = (e) => {
        setImgSrc(e.target.files[0])
        const preview = new FileReader()
        preview.readAsDataURL(e.target.files[0])
        preview.onload = () => {
            setImgPreview(preview.result)
        }
    }

    const handleProductSubmit = async (e) => {
        e.preventDefault()
        const userUuid = SessionStorage.getItem().uid
        const { name, description, origin, price, quantity } = productFormValue
        const isValid = Validation.validateAll([
            name,
            description,
            origin,
            price,
            quantity,
            imgSrc,
        ])
        if (!isValid) {
            setModalMsg("Please check your product information")
            handleOpenButtonClick(true)
            return
        }
        const res = await ProductService.firebaseAddProductRequest(
            userUuid,
            name,
            description,
            origin,
            price,
            quantity,
            selectCategory,
            imgSrc
        )
        if (res) history.push("/")
    }

    const createRightBodyContainer = () => {
        switch (selectedMenu) {
            case "Order list": {
                const productItems = [
                    {
                        img: "defaultimg.png",
                        name: "Orange Mamalade",
                        date: "2022-09-21",
                        price: "13.000",
                        payState: "Complete payment",
                    },
                    {
                        img: "defaultimg.png",
                        name: "Hand made Croatian coffe brew",
                        date: "2022-09-22",
                        price: "6000",
                        payState: "Uncomplete payment",
                    },
                ]

                const handleRefundButtonClick = () => {
                    console.log("refund")
                }

                return (
                    <MyPageOrderList
                        productItem={productItems}
                        onClickRefundEvnet={handleRefundButtonClick}
                    />
                )
            }

            case "Coupon": {
                const couponItems = [
                    {
                        img: "discounts.png",
                        name: "20% Coupon",
                        description:
                            "Discounts are available excluding electronics.",
                        price: "-20%",
                    },
                    {
                        img: "discounts.png",
                        name: "15% Coupon",
                        description:
                            "Discounts are available excluding electronics.",
                        price: "-15%",
                    },
                    {
                        img: "discounts.png",
                        name: "50% Coupon",
                        description:
                            "Discounts are available excluding electronics.",
                        price: "-50%",
                    },
                ]

                return <MyPageCoupon couponItems={couponItems} />
            }

            case "Profile": {
                const profileItems = [
                    "Name",
                    "Password",
                    "Password check",
                    "Email",
                ]

                return <MyPageProfile profile={profileItems} />
            }

            case "Seller": {
                return (
                    <MyPageSeller
                        imgPreview={imgPreview}
                        productFormValue={productFormValue}
                        onProductFormValueChangeEvent={
                            handleProductFormValueChange
                        }
                        onChangeCategoryEvent={handleSelectCategory}
                        onImgSrcChangeEvent={handleImgSrcChange}
                        onProductSubmitEvent={handleProductSubmit}
                    />
                )
            }

            default:
                ErrorUtil.notImplemented()
        }
    }

    if (!SessionStorage.getItem()) {
        history.push("/")
    }

    return (
        <MyPageMainContainer>
            <MyPageHeadContainer>
                <Text type="large" context="My Page" />
            </MyPageHeadContainer>
            <MyPageBodyContainer>
                <MyPageBodyLeft>
                    <MyPageSidebar
                        menuItem={menuItems}
                        onClickSelectedClick={handleSelectedClick}
                    />
                </MyPageBodyLeft>
                <MyPageBodyRight>{createRightBodyContainer()}</MyPageBodyRight>
            </MyPageBodyContainer>
            <Modal isOpen={isOpen} onClickEvent={handleCloseButtonClick}>
                <StyledImgContainer
                    src={`${process.env.PUBLIC_URL}/img/logo.png`}
                />
                <Text context={modalMsg} />
            </Modal>
        </MyPageMainContainer>
    )
}

const MyPageMainContainer = styled.div`
    width: 100%;
    height: 100%;
`

const MyPageHeadContainer = styled.div`
    padding-bottom: 3.25rem;
    padding-left: 1.25rem;
    padding-top: 3rem;
    margin-bottom: 3.25rem;
    color: ${Theme.colors.white};
    background-color: ${Theme.colors.darkBlack};
`

const MyPageBodyContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
`

const MyPageBodyLeft = styled.div`
    width: 20%;
`

const MyPageBodyRight = styled.div`
    width: 70%;
    margin-right: 2rem;
`

const StyledImgContainer = styled.img`
    display: block;
    width: 70%;
    margin: 0 auto;
    padding-bottom: 2rem;
`

export default MyPageContainer
