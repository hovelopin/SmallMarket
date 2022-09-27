import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import useForm from "@/hooks/useForm"
import useModal from "@/hooks/useModal"
import usePaginate from "@/hooks/usePaginate"
import styled from "styled-components"
import Container from "@components/UI/atoms/container/container"
import Text from "@components/UI/atoms/text/text"
import Button from "@components/UI/atoms/button/button"
import Input from "@components/UI/atoms/input/input"
import MyPageSidebar from "@components/UI/blocks/mypage/myPageSidebar"
import MyPageOrderList from "@components/UI/blocks/mypage/myPageOrderList"
import MyPageProfile from "@components/UI/blocks/mypage/myPageProfile"
import MyPageSeller from "@components/UI/blocks/mypage/myPageSeller"
import MyPageSellerOrderList from "@/components/UI/blocks/mypage/myPageSellerOrderList"
import MyPageMenuBar from "@/components/UI/blocks/mypage/myPageMenuBar"
import Modal from "@components/UI/blocks/modal/modal"
import SessionStorage from "@/storage/sessionStorage"
import ProductService from "@/service/productService"
import AuthService from "@/service/authService"
import PayService from "@/service/payService"
import Theme from "@util/style/theme"
import Validation from "@util/validation/validation"
import ErrorUtil from "@util/errorUtil"

const MyPageContainer = () => {
    const [selectedMenu, setSelectMenu] = useState("Order list")
    const [imgSrc, setImgSrc] = useState(null)
    const [imgPreview, setImgPreview] = useState(null)
    const [modalMsg, setModalMsg] = useState("")
    const [selectCategory, setSelecCategory] = useState("Drink")
    const [isSeller, setIsSeller] = useState(false)
    const [orderList, setOrderList] = useState([])
    const [unRegisterEmail, setUnRegisterEmail] = useState("")
    const [userEditFormValue, setUserEditFormValue] = useState({
        username: "",
    })
    const [sellerSelectMenu, setSellerSelectMenu] = useState("Sales list")
    const [sellerItem, setSellerItem] = useState([])
    const [saleItems, setSaleItems] = useState([])
    const [productFormValue, handleProductFormValueChange] = useForm({
        name: "",
        description: "",
        origin: "",
        price: "",
        quantity: "",
    })
    const [isOpen, handleOpenButtonClick, handleCloseButtonClick] =
        useModal(false)
    const [pageValue, handlePageValueChange] = usePaginate({
        limit: 12,
        page: 1,
    })

    const history = useHistory()

    const { limit, page } = pageValue
    const offset = (page - 1) * limit

    useEffect(async () => {
        const userInfo = await AuthService.firebaseCurrentUserInfoRequest()
        if (!userInfo) return
        const orderRes = await PayService.firebaseGetPaymentRequest(
            userInfo.uuid
        )
        const sellerItemRes =
            await ProductService.firebaseGetSellerProductItemRequest(
                userInfo.uuid
            )
        const saleItemRes = await PayService.firebaseGetSellerProductsRequest(
            userInfo.uuid
        )
        setOrderList(orderRes)
        setIsSeller(userInfo.isSeller ? true : false)
        setSellerItem(sellerItemRes)
        setSaleItems(saleItemRes)
    }, [])

    const menuItems = [
        "Order list",
        "Profile",
        "Unregister",
        isSeller && "Seller",
        isSeller && "Seller Order list",
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
                const handleDetailButtonClick = (product) => async () => {
                    const findUser =
                        await AuthService.firebaseGetUserInformationById(
                            product.userUuid
                        )
                    history.push({
                        pathname: `/detail/${product.productUuid}`,
                        state: {
                            item: {
                                ...product,
                                seller: findUser.username,
                            },
                        },
                    })
                }

                return (
                    <MyPageOrderList
                        productItem={orderList}
                        onClickDetailEvnet={handleDetailButtonClick}
                    />
                )
            }

            case "Unregister": {
                const { uid, email } = SessionStorage.getItem()

                const handleUnregisterEmailSubmit = (e) => {
                    setUnRegisterEmail(e.target.value)
                }

                const handleUnregisterClick = async () => {
                    if (unRegisterEmail === email) {
                        await AuthService.firebaseUserDeleteRequest(uid)
                        location.replace("/register")
                    }
                }

                return (
                    <Container>
                        <Text
                            type="large"
                            context="Please enter your email to delete"
                        />
                        <MyPageUserEmailContainer>
                            {email}
                        </MyPageUserEmailContainer>
                        <MyPageUnregisterContainer>
                            <MyPageUnregisterInput>
                                <Input
                                    type="text"
                                    placeholder={email}
                                    onChangeEvent={handleUnregisterEmailSubmit}
                                />
                            </MyPageUnregisterInput>
                            <MyPageUnregisterButton>
                                <Button
                                    type="contrast"
                                    value="OK"
                                    onClickEvent={handleUnregisterClick}
                                />
                            </MyPageUnregisterButton>
                        </MyPageUnregisterContainer>
                    </Container>
                )
            }

            case "Profile": {
                const handleEditInfoSubmit = (e) => {
                    setUserEditFormValue({
                        ...userEditFormValue,
                        [e.target.name]: e.target.value,
                    })
                }

                const { username } = userEditFormValue

                const isValidUsernme = Validation.validateUsername(username)

                const handleEditInfoClick = async () => {
                    if (!isValidUsernme) {
                        setModalMsg("Please check your information")
                        handleOpenButtonClick(true)
                        return
                    }

                    const { username } = userEditFormValue
                    const res = await AuthService.firebaseEditInfoRequest(
                        username
                    )
                    if (res) location.replace("/")
                }

                return (
                    <MyPageProfile
                        onEditInfoSubmitEvent={handleEditInfoSubmit}
                        onEditInfoClickEvent={handleEditInfoClick}
                    />
                )
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

            case "Seller Order list": {
                const handleSellerMenuClick = (selectedMenu) => () => {
                    setSellerSelectMenu(selectedMenu)
                }

                const sellerMenuMove = () => {
                    switch (sellerSelectMenu) {
                        case "Sales list":
                            return (
                                <MyPageMenuBar
                                    sellerItems={sellerItem}
                                    limit={limit}
                                    page={page}
                                    offset={offset}
                                    onPageChangeButtonClickEvent={
                                        handlePageChangeButtonClick
                                    }
                                />
                            )

                        case "Sold list":
                            return (
                                <MyPageMenuBar
                                    sellerItems={saleItems}
                                    limit={limit}
                                    page={page}
                                    offset={offset}
                                    onPageChangeButtonClickEvent={
                                        handlePageChangeButtonClick
                                    }
                                />
                            )

                        default:
                            ErrorUtil.notImplemented()
                    }
                }

                const handlePageChangeButtonClick = (changePage) => () => {
                    handlePageValueChange(changePage)
                }

                return (
                    <MyPageSellerOrderList
                        sellerMenuMove={sellerMenuMove}
                        onSellerMenuClickEvent={handleSellerMenuClick}
                    />
                )
            }

            default:
                ErrorUtil.notImplemented()
        }
    }

    if (!SessionStorage.getItem()) {
        history.push("/")
        console.clear()
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

const MyPageUserEmailContainer = styled.p`
    font-weight: bold;
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

const MyPageUnregisterContainer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 1rem;
`

const MyPageUnregisterInput = styled.div`
    width: 100%;
`

const MyPageUnregisterButton = styled.div`
    width: 100%;
`

export default MyPageContainer
