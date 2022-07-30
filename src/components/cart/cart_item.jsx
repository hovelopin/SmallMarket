import Icon from "../../icon/icon"
import { Box, Typography, Button } from "@mui/material"

const CartItem = ({ item, onRemoveButtonClickEvent, isPay }) => {
    const onRemoveButtonClickEventHandler = (uuid) => () => {
        onRemoveButtonClickEvent(uuid)
    }

    return (
        <Box sx={boxStyle}>
            <img style={imgStyle} src={`./img/${item.img}`} alt={item.name} />
            <Typography sx={fontStyle}>{item.name}</Typography>
            <Typography sx={fontStyle}>${item.price}</Typography>
            <Typography sx={fontStyle}>{item.quantity}</Typography>

            {!isPay && (
                <Button onClick={onRemoveButtonClickEventHandler(item.uuid)}>
                    <Icon name="trash" />
                </Button>
            )}
        </Box>
    )
}

const boxStyle = {
    width: "150%",
    display: "grid",
    mt: "2rem",
    mb: "2rem",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "1rem",
    placeItems: "center",
}

const imgStyle = {
    width: "120px",
}

const fontStyle = {
    cursor: "pointer",
}

export default CartItem
