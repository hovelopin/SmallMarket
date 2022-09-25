import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import useForm from "@/hooks/useForm"
import styled from "styled-components"
import Text from "@components/UI/atoms/text/text"
import PaymentDetail from "@components/UI/blocks/payment/paymentDetail"
import PaymentInfo from "@components/UI/blocks/payment/paymentInfo"
import AuthService from "@/service/authService"
import Theme from "@util/style/theme"

const PaymentContainer = () => {
    const [userState, setUserState] = useState(null)

    const [userInfoFormValue, handleFormValueChange] = useForm({
        phoneNumber: "",
        address: "",
        detailAddress: "",
        zoneCode: "",
        order: "",
    })

    const locaiotn = useLocation()

    const cartItems = locaiotn.state
    const totalPrice = cartItems.reduce(
        (acc, cur) => acc + parseInt(cur.price) * cur.quantity,
        0
    )

    useEffect(async () => {
        const res = await AuthService.firebaseCurrentUserInfoRequest()
        setUserState(res)
    }, [])

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
                    userState={userState}
                    totalPrice={totalPrice}
                    userInfoFormValue={userInfoFormValue}
                    onChangeFormValueEvent={handleFormValueChange}
                />
            </PaymentWapper>
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

export default PaymentContainer
