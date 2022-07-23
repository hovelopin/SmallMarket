import Icon from "../../icon/icon"
import { Box, Typography, Button } from "@mui/material"

const CartItem = ({ item, onRemoveButtonClickEvent, isPay }) => {
    const onRemoveButtonClickEventHandler = (uuid) => () => {
        onRemoveButtonClickEvent(uuid)
    }

    return (
        <Box sx={boxStyle}>
            <img src={item.img} alt={item.name} />

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
    width: "100%",
    padding: "1rem",
    display: "grid",
    mt: "2rem",
    mb: "2rem",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    gap: "0.3rem",
    placeItems: "center",
    border: "2px",
}

const fontStyle = {
    cursor: "pointer",
}

export default CartItem
