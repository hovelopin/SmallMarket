import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from "./product_detail.module.css"
import { getItemDetails } from "../../redux/action/itemAction"
import { addCart } from "../../redux/action/cartAction"

function ProductDetail({ match, history }) {
    const [quantity, setQuantitiy] = useState(1)
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

    const onIncrease = () => {
        setQuantitiy((preQuantity) =>
            preQuantity < item.quantity ? preQuantity + 1 : preQuantity
        )
    }

    const onDecrease = () => {
        setQuantitiy((preQuantity) =>
            preQuantity === 1 ? preQuantity : preQuantity - 1
        )
    }

    const cartHandler = () => {
        if (cartItems.find((cartItem) => cartItem.id === item.id)) {
            history.push("/items")
            alert("Already exist in your cart ! ")
        } else {
            dispatch(addCart(item.id, quantity))
            history.push("/cart")
        }
    }

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
                                onClick={onDecrease}
                            >
                                -
                            </button>
                            {quantity < 1 ? 1 : quantity}
                            <button
                                className={styles.button}
                                onClick={onIncrease}
                            >
                                +
                            </button>
                        </div>
                        <span className={styles.totalMain}>
                            Total Price ${quantity * item.price}
                        </span>
                        <button
                            className={styles.info_basket}
                            onClick={cartHandler}
                        >
                            Add to cart
                        </button>
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}

export default ProductDetail
