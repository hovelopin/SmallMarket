import PaymentDetail from "@components/UI/blocks/payment/paymentDetail"
import PaymentInfo from "@components/UI/blocks/payment/paymentInfo"
import { useEffect, useState } from "react"
import styled from "styled-components"

const PaymentContainer = ({ location }) => {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        setCartItems(location.state)
    })
    return (
        <PaymentWapper>
            <PaymentInfo cartItems={cartItems}></PaymentInfo>
            <PaymentDetail></PaymentDetail>
        </PaymentWapper>
    )
}

const PaymentWapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    margin-left: 5%;
`
export default PaymentContainer
