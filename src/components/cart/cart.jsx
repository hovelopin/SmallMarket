import { useCallback } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { removeCart } from "../../redux/action/cartAction"
import { Box, Typography, Button } from "@mui/material"
import Icon from "../../icon/icon"
import CartItem from "./cart_item"

const Cart = () => {
    const history = useHistory()

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)

    const { cartItems } = cart

    const onPayButtonClickEventHandler = () => {
        history.push("/pay")
    }

    const onRemoveButtonClickEventHandler = useCallback((uuid) => {
        dispatch(removeCart(uuid))
    }, [])

    const onHomeButtonClickEventHandler = () => {
        history.push("/shop")
    }

    const getTotalItemCount = () => {
        return cartItems.reduce(
            (quantity, item) => Number(item.quantity) + quantity,
            0
        )
    }

    const getTotalItemPrice = () => {
        return cartItems.reduce(
            (price, item) => item.price * item.quantity + price,
            0
        )
    }

    return (
        <Box sx={boxStyle}>
            <Box sx={itemBoxStyle}>
                <Typography variant="h1">SHOPPING CART</Typography>
                {cartItems.length === 0 ? (
                    <Box sx={emptyBoxStyle}>
                        <Icon name="bag" /> CART IS EMPTY !
                        <Button onClick={onHomeButtonClickEventHandler}>
                            Go Home
                        </Button>
                    </Box>
                ) : (
                    cartItems.map((item) => (
                        <CartItem
                            key={item.uuid}
                            uuid={item.uuid}
                            item={item}
                            onRemoveButtonClickEvent={
                                onRemoveButtonClickEventHandler
                            }
                        />
                    ))
                )}
            </Box>
            <Box sx={infoBoxStyle}>
                <Typography variant="h1">INFORMATION</Typography>
                <Box sx={detailBoxStyle}>
                    <Typography sx={contentTextStyle}>
                        Count : {getTotalItemCount()}
                    </Typography>
                    <Typography sx={contentTextStyle}>
                        Price : {getTotalItemPrice()}
                    </Typography>
                </Box>
                <Box>
                    <Button onClick={onPayButtonClickEventHandler}>
                        Checkout
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

const boxStyle = {
    width: "100%",
    display: "flex",
}

const itemBoxStyle = {
    flex: 0.7,
    padding: "1rem",
    mt: 5,
    mr: "0.8rem",
    ml: "0.8rem",
}

const emptyBoxStyle = {
    ml: 2,
}

const infoBoxStyle = {
    height: "fit-content",
    flex: 0.23,
    padding: 1,
    border: "2px",
    borderRadius: "2rem",
    mt: 5,
}

const detailBoxStyle = {
    borderTop: 2,
    borderBottom: 2,
    padding: 1,
    mt: 1,
}

const contentTextStyle = {
    padding: 1,
}

export default Cart
