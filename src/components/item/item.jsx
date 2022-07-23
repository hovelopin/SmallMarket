import React from "react"
import { useHistory } from "react-router-dom"
import styles from "./item.module.css"

const Item = ({ uuid, name, price, quantity, img }) => {
    const history = useHistory()

    const buttonClickHandler = () => {
        history.push(`/items/detail/${uuid}`)
    }

    return (
        <section className={styles.itemBox}>
            <img className={styles.imgSet} src={img} alt={name} />
            <div className={styles.itemInfo}>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.itemPrice}>Price : {price}</p>
                <p className={styles.itemQuantity}>Quantity : {quantity}</p>
                <p className={styles.description}>Description : {name}</p>
                <button className={styles.button} onClick={buttonClickHandler}>
                    Detail
                </button>
            </div>
        </section>
    )
}
export default Item
