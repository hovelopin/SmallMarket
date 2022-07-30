import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getItems as itemList } from "../../redux/action/itemAction"
import { Box } from "@mui/material"
import Item from "../item/item"

const ItemList = () => {
    const dispatch = useDispatch()
    const getItems = useSelector((state) => state.getItems)
    const { items } = getItems

    useEffect(() => {
        dispatch(itemList())
    }, [dispatch])

    return (
        <Box sx={containerStyle}>
            <Box sx={boxStyle}>
                {items.map((item) => (
                    <Item
                        key={item.uuid}
                        name={item.name}
                        quantity={item.quantity}
                        price={item.price}
                        uuid={item.uuid}
                        img={item.img}
                    />
                ))}
            </Box>
        </Box>
    )
}

const containerStyle = {
    width: "100%",
    pt: 5,
}

const boxStyle = {
    width: "100%",
    textAlign: "center",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
}

export default ItemList
