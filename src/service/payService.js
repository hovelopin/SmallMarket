import axios from "axios"

const PayService = {}

PayService.type = "PayServiceType"

PayService.paymentRequest = async function (params) {
    return axios.post("/v1/payment/ready", null, {
        params,
        headers: {
            Authorization: `KakaoAK ${process.env.REACT_APP_KAKAOPAY_KEY}`,
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
    })
}

Object.freeze(PayService)
export default PayService
