import React, { useState, useEffect, useCallback } from "react"
import SMAlertPopup from "../popup/smAlertPopup"
import { Box, Typography, Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { getItemDetails } from "../../redux/action/itemAction"
import { addCart } from "../../redux/action/cartAction"

function ProductDetail({ match, history }) {
    const [quantity, setQuantitiy] = useState(1)
    const [isOpenAlert, setIsOpenAlert] = useState(false)

    const dispatch = useDispatch()
    const itemDetails = useSelector((state) => state.getItemDetails)
    const cart = useSelector((state) => state.cart)

    const { cartItems } = cart
    const { item } = itemDetails

    useEffect(() => {
        if (item && match.params.id !== item.id) {
            dispatch(getItemDetails(match.params.id))
        }
    }, [])

    const onIncreaseButtonClickEventHandler = () => {
        setQuantitiy((preQuantity) =>
            preQuantity < item.quantity ? preQuantity + 1 : preQuantity
        )
    }

    const onDecreaseButtonClickEventHandler = () => {
        setQuantitiy((preQuantity) =>
            preQuantity === 1 ? preQuantity : preQuantity - 1
        )
    }

    const onCartButtonClickEventHandler = () => {
        if (cartItems.find((cartItem) => cartItem.uuid === item.uuid)) {
            setIsOpenAlert(true)
            return
        } else {
            dispatch(addCart(item, quantity))
            history.push("/cart")
        }
    }

    const onCloseButtonClickEventHanlder = useCallback((checked) => {
        setIsOpenAlert(checked)
    }, [])

    return (
        <Box sx={containerStyle}>
            <Box sx={boxWrap}>
                <img
                    style={imgStyle}
                    src={`../../img/${item.img}`}
                    alt={item.name}
                />
            </Box>
            <Box sx={productInfo}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">Stock: {item.quantity}</Typography>
                <Typography variant="h5">Price: ${item.price}</Typography>
            </Box>
            <Box>
                <Box sx={qBoxStyle}>
                    <Typography variant="h4">Quantity</Typography>
                    <Button onClick={onDecreaseButtonClickEventHandler}>
                        Decrease
                    </Button>
                    <Typography variant="h6" align="center">
                        {quantity < 1 ? 1 : quantity}
                    </Typography>
                    <Button onClick={onIncreaseButtonClickEventHandler}>
                        Add
                    </Button>
                </Box>
                <Typography variant="span">
                    Total Price ${quantity * item.price}
                </Typography>
                <Box>
                    <Button onClick={onCartButtonClickEventHandler}>
                        Add to cart
                    </Button>
                </Box>
            </Box>
            <SMAlertPopup
                isOpen={isOpenAlert}
                onCloseButtonClickEvent={onCloseButtonClickEventHanlder}
                msg="Already exist in your cart !"
            />
        </Box>
    )
}

const containerStyle = {
    width: "100%",
    display: "flex",
    mt: 10,
}

const boxWrap = {
    flex: "0.5",
}

const imgStyle = {
    width: "17%",
}

const productInfo = {
    margin: 1,
    flex: "0.45",
    height: "fit-content",
}

const qBoxStyle = {
    height: "fit-content",
}

export default ProductDetail
