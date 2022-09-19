import PaymentDetail from "@components/UI/blocks/payment/paymentDetail"
import PaymentInfo from "@components/UI/blocks/payment/paymentInfo"
import styled from "styled-components"
const Payment = () => {
    return (
        <PaymentWapper>
            <PaymentInfo></PaymentInfo>
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
export default Payment
