import Icon from "../../icon/icon"
import styles from "./cart_item.module.css"

const CartItem = ({ item, onRemoveButtonClickEvent, isPay }) => {
    const onRemoveButtonClickEventHandler = (uuid) => () => {
        onRemoveButtonClickEvent(uuid)
    }

    return (
        <section className={styles.item}>
            <img className={styles.image} src={item.img} alt={item.name} />

            <p className={styles.content}>{item.name}</p>
            <p className={styles.price}>${item.price}</p>
            <p className={styles.quantity}>{item.quantity}</p>

            {!isPay && (
                <button
                    className={styles.delete}
                    onClick={onRemoveButtonClickEventHandler(item.uuid)}
                >
                    <Icon name="trash" />
                </button>
            )}
        </section>
    )
}

export default CartItem
