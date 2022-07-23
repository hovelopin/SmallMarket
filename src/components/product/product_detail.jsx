import React, { useState, useEffect, useCallback } from "react"
import styles from "./product_detail.module.css"
import SMAlertPopup from "../popup/smAlertPopup"
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
    const { item, loading, error } = itemDetails

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
        <div className={styles.productWrap}>
            {loading ? (
                <h2>Loading</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <React.Fragment>
                    <div className={styles.productContainer}>
                        <div className={styles.productImg}>
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className={styles.productInfo}>
                            <span className={styles.titleMain}>
                                {item.name}
                            </span>
                            <span className={styles.titleSub}>{item.name}</span>
                            <span className={styles.priceSub}>
                                Price : {item.price}
                            </span>
                        </div>
                    </div>
                    <div className={styles.productQuantity}>
                        <div className={styles.quantityInfo}>
                            <h3>Quantity</h3>
                            <button
                                className={styles.button}
                                onClick={onDecreaseButtonClickEventHandler}
                            >
                                -
                            </button>
                            {quantity < 1 ? 1 : quantity}
                            <button
                                className={styles.button}
                                onClick={onIncreaseButtonClickEventHandler}
                            >
                                +
                            </button>
                        </div>
                        <span className={styles.totalMain}>
                            Total Price ${quantity * item.price}
                        </span>
                        <button
                            className={styles.info_basket}
                            onClick={onCartButtonClickEventHandler}
                        >
                            Add to cart
                        </button>
                    </div>
                </React.Fragment>
            )}
            <SMAlertPopup
                isOpen={isOpenAlert}
                onCloseButtonClickEvent={onCloseButtonClickEventHanlder}
                msg="Already exist in your cart !"
            />
        </div>
    )
}

export default ProductDetail
