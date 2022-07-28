import React from "react"
import { Box, Typography, Button } from "@mui/material"
import { useHistory } from "react-router-dom"

const Item = ({ uuid, name, price, quantity, img }) => {
    const history = useHistory()

    const onDetailButtonClickEventHandler = () => {
        history.push(`/items/detail/${uuid}`)
    }

    return (
        <Box sx={boxStyle}>
            <img style={imgStyle} src={`./img/${img}`} alt={name} />
            <Box>
                <Typography variant="h4" sx={nameStyle}>
                    {name}
                </Typography>
                <Typography sx={desStyle} variant="p">
                    Price : {price}
                </Typography>
                <Typography sx={desStyle} variant="p">
                    Quantity : {quantity}
                </Typography>
                <Typography sx={desStyle} variant="p">
                    Description : {name}
                </Typography>
                <Button
                    sx={buttonStyle}
                    onClick={onDetailButtonClickEventHandler}
                >
                    Detail
                </Button>
            </Box>
        </Box>
    )
}

const boxStyle = {
    width: "350px",
    display: "flex",
    p: "1rem",
    margin: "0 auto",
    flexDirection: "column",
    justifyContent: "space-between",
}

const imgStyle = {
    height: "200px",
    borderRadius: "10%",
}

const nameStyle = {
    mt: 1,
    textTransform: "uppercase",
}

const desStyle = {
    display: "block",
}

const buttonStyle = {
    float: "left",
}

export default Item
