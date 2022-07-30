import React, { useState, useEffect, useCallback } from "react"
import { useHistory } from "react-router-dom"
import CartItem from "../cart/cart_item"
import { useSelector } from "react-redux"
import { Container, Box, Typography, TextField, Button } from "@mui/material"
import DaumPostcode from "react-daum-postcode"
import SMAlertPopup from "../popup/smAlertPopup"

const Pay = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [fullAddress, setFullAddress] = useState()
    const [zoneCode, setZoneCode] = useState()
    const [isDaumPost, setIsDaumPost] = useState(false)
    const [isAlertOpen, setIsAlertOpen] = useState(false)

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    const history = useHistory()

    // 아임포트 API
    useEffect(() => {
        const jquery = document.createElement("script")
        jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js"
        const iamport = document.createElement("script")
        iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js"
        document.head.appendChild(jquery)
        document.head.appendChild(iamport)
        return () => {
            document.head.removeChild(jquery)
            document.head.removeChild(iamport)
        }
    }, [])

    const onNameChangeEventHandler = useCallback((e) => {
        setName(e.target.value)
    }, [])

    const onPhoneChangeEventHandler = useCallback((e) => {
        setPhone(e.target.value)
    }, [])

    const onEmailChangeEventHandler = useCallback((e) => {
        setEmail(e.target.value)
    }, [])

    const onOpenPostClickEventHandler = () => {
        setIsDaumPost(true)
    }

    const onAlertCloseButtonClickEventHandler = useCallback((checked) => {
        setIsAlertOpen(checked)
    }, [])

    const onPaymentClickEventHandler = () => {
        const checkPaymentValidation = () => {
            const checkArr = [
                name,
                phone,
                email,
                fullAddress,
                zoneCode,
                isDaumPost,
            ]
            if (checkArr.every((v) => v !== "")) return false
            return true
        }
        if (checkPaymentValidation()) {
            const { IMP } = window
            IMP.init("imp36622352")
            const data = {
                pg: "html5_inicis",
                pay_method: "card",
                name: "smallmarket",
                amount: cartItems.reduce(
                    (price, item) => item.price * item.quantity + price,
                    0
                ),
            }
            IMP.request_pay(data, (response) => {
                const { success } = response
                if (success) {
                    history.push("/main")
                } else {
                    setIsAlertOpen(true)
                    return
                }
            })
        }
    }

    const onHandleCompleteButtonClickEventHandler = (data) => {
        let fullAddress = data.address
        let zoneCode = data.zonecode
        let extraAddress = ""
        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== ""
                        ? `, ${data.buildingName}`
                        : data.buildingName
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : ""
        }
        setFullAddress(fullAddress)
        setZoneCode(zoneCode)
    }

    return (
        <Container sx={containerStyle}>
            <Box sx={titleStyle}>
                <Typography variant="h2" align="center">
                    PAYMENT
                </Typography>
            </Box>
            <Box>
                <Typography variant="h4" sx={orderStyle}>
                    Order product
                </Typography>
                <Box sx={totalBoxStyle}>
                    <Typography variant="h5">
                        Total Price:{" "}
                        {cartItems.reduce(
                            (price, item) => item.price * item.quantity + price,
                            0
                        )}
                    </Typography>
                </Box>
            </Box>
            <Box sx={orderBoxStyle}>
                {cartItems.map((item) => (
                    <CartItem id={item.id} item={item} isPay={true} />
                ))}
            </Box>
            <Box>
                <Typography variant="h4" sx={orderStyle}>
                    User information
                </Typography>
            </Box>
            <Box>
                <TextField label="Name" onChange={onNameChangeEventHandler} />
                <TextField
                    label="Phone number...(00011112222)"
                    onChange={onPhoneChangeEventHandler}
                />
                <TextField label="Email" onChange={onEmailChangeEventHandler} />
            </Box>
            <Box>
                <Typography variant="h4" sx={orderStyle}>
                    Address
                </Typography>
            </Box>
            <Box>
                <Box>
                    <TextField
                        label="Zone code"
                        value={zoneCode}
                        disabled={true}
                    />
                </Box>
                <TextField
                    label="Full address"
                    value={fullAddress}
                    disabled={true}
                />
                <TextField label="Extra Address" />
                <Button onClick={onOpenPostClickEventHandler}>Zipcode</Button>
                {isDaumPost ? (
                    <DaumPostcode
                        onComplete={onHandleCompleteButtonClickEventHandler}
                        style={{ width: 500 }}
                    />
                ) : null}
            </Box>
            <Box sx={buttonBoxStyle}>
                <Button sx={buttonStyle} onClick={onPaymentClickEventHandler}>
                    Check
                </Button>
            </Box>
            <SMAlertPopup
                isOpen={isAlertOpen}
                onCloseButtonClickEvent={onAlertCloseButtonClickEventHandler}
                msg="Please enter your information..."
            />
        </Container>
    )
}

const containerStyle = {
    width: "100%",
    margin: "0 auto",
}

const titleStyle = {
    mt: 8,
}

const orderStyle = {
    borderBottom: 1,
}

const totalBoxStyle = {
    mt: 1,
}

const orderBoxStyle = {
    borderBottom: 1,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
}

const buttonBoxStyle = {
    textAlign: "center",
}

const buttonStyle = {
    width: "240",
}

export default Pay
