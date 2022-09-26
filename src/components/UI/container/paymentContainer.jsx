import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import useForm from "@/hooks/useForm"
import useModal from "@/hooks/useModal"
import styled from "styled-components"
import Text from "@components/UI/atoms/text/text"
import PaymentDetail from "@components/UI/blocks/payment/paymentDetail"
import PaymentInfo from "@components/UI/blocks/payment/paymentInfo"
import Modal from "@components/UI/blocks/modal/modal"
import AuthService from "@/service/authService"
import PayService from "@/service/payService"
import Theme from "@util/style/theme"
import Validation from "@util/validation/validation"

const PaymentContainer = () => {
    const [userState, setUserState] = useState(null)
    const [isPostOpen, setIsPostOpen] = useState(false)
    const [address, setAddress] = useState("")
    const [zoneCode, setZoneCode] = useState("")

    const [userInfoFormValue, handleFormValueChange] = useForm({
        phoneNumber: "",
        detailAddress: "",
    })
    const [isOpen, handleOpenButtonClick, handleCloseButtonClick] =
        useModal(false)

    const locaiotn = useLocation()

    const cartItems = locaiotn.state
    const totalPrice = cartItems.reduce(
        (acc, cur) => acc + parseInt(cur.price) * cur.quantity,
        0
    )

    const errorMsg = {
        phoneNumber: "",
        address: "",
    }
    const { phoneNumber, detailAddress } = userInfoFormValue
    const isValidPhoneNumber = Validation.validatePhoneNumber(phoneNumber)
    errorMsg.phoneNumber = isValidPhoneNumber
        ? ""
        : "Please check your phone number"
    errorMsg.address = [address, detailAddress, zoneCode].every((a) => a)
        ? ""
        : "Please check your address"
    const isValidAll = Validation.validateAll([
        isValidPhoneNumber,
        address,
        detailAddress,
        zoneCode,
    ])

    useEffect(async () => {
        const res = await AuthService.firebaseCurrentUserInfoRequest()
        setUserState(res)
    }, [])

    const handlePostButtonClick = () => {
        console.log(isPostOpen)
        setIsPostOpen(true)
    }

    const handlePostComplete = (data) => {
        const { address, zonecode } = data
        setAddress(address)
        setZoneCode(zonecode)
        setIsPostOpen(false)
    }

    const handlePaymentSubmit = async (e) => {
        e.preventDefault()
        if (!isValidAll) {
            handleOpenButtonClick(true)
            return
        }
        const itemName = cartItems.reduce(
            (acc, cur) => acc + cur.name + ", ",
            ""
        )
        try {
            const requestParams = {
                cid: "TC0ONETIME",
                partner_order_id: "SMarket",
                partner_user_id: userState.uuid,
                item_name: itemName.substr(0, itemName.length - 2),
                quantity: cartItems.length,
                total_amount: totalPrice,
                vat_amount: 0,
                tax_free_amount: 0,
                approval_url: `${process.env.REACT_APP_SMV2}`,
                fail_url: `${process.env.REACT_APP_SMV2}`,
                cancel_url: `${process.env.REACT_APP_SMV2}`,
            }
            const res = await PayService.paymentRequest(
                "/v1/payment/ready",
                requestParams
            )
            const { next_redirect_pc_url, created_at } = res.data
            window.open(next_redirect_pc_url)
            await PayService.firebaseAddPaymentRequest(
                cartItems,
                userState.uuid,
                created_at
            )
        } catch (e) {
            if (e) {
                handleOpenButtonClick(true)
                return
            }
        }
    }

    return (
        <React.Fragment>
            <HeaderContainer>
                <Text type="large" context="Thank you ! " />
                <Text type="large" context={userState?.username} />
                <HeaderTextContainer>
                    Please enter your information for payment
                </HeaderTextContainer>
            </HeaderContainer>
            <PaymentWapper>
                <PaymentInfo userState={userState} cartItems={cartItems} />
                <PaymentDetail
                    totalPrice={totalPrice}
                    isPostOpen={isPostOpen}
                    address={address}
                    zoneCode={zoneCode}
                    errorMsg={errorMsg}
                    userInfoFormValue={userInfoFormValue}
                    onChangeFormValueEvent={handleFormValueChange}
                    onClickPostButtonEvent={handlePostButtonClick}
                    onPostCompleteEvent={handlePostComplete}
                    onPaymentSubmitEvent={handlePaymentSubmit}
                />
            </PaymentWapper>
            <Modal isOpen={isOpen} onClickEvent={handleCloseButtonClick}>
                <StyledImgContainer
                    src={`${process.env.PUBLIC_URL}/img/logo.png`}
                />
                <Text context="Please check your information" />
            </Modal>
        </React.Fragment>
    )
}

const HeaderContainer = styled.div`
    background-color: ${Theme.colors.darkBlack};
    color: ${Theme.colors.white};
    text-align: left;
    padding: 3rem;
`

const HeaderTextContainer = styled.p`
    color: ${Theme.colors.white};
    font-size: 1.3rem;
`

const PaymentWapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

const StyledImgContainer = styled.img`
    display: block;
    width: 70%;
    margin: 0 auto;
    padding-bottom: 2rem;
`

export default PaymentContainer
