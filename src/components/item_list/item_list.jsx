import React, { useEffect } from "react"
import styles from "./item_list.module.css"
import { useDispatch, useSelector } from "react-redux"
import { getItems as itemList } from "../../redux/action/itemAction"
import Item from "../item/item"

const ItemList = () => {
    const dispatch = useDispatch()
    const getItems = useSelector((state) => state.getItems)
    const { items, error } = getItems

    useEffect(() => {
        dispatch(itemList())
    }, [dispatch])

    return (
        <section className={styles.container}>
            <div className={styles.shopTop}>
                <div className={styles.shopBox}>
                    <h1>ITEMS</h1>
                </div>
            </div>
            <div className={styles.item}>
                {error ? (
                    <h1>{error}</h1>
                ) : (
                    items.map((item) => (
                        <Item
                            key={item.uuid}
                            name={item.name}
                            quantity={item.quantity}
                            price={item.price}
                            uuid={item.uuid}
                            img={item.img}
                        />
                    ))
                )}
            </div>
        </section>
    )
}
export default ItemList
