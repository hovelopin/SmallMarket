import React, { useState } from "react"
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
    Menu,
    MenuItem,
} from "@mui/material"
import Icon from "../../icon/icon"

function Appbar() {
    const [itemAnchorEl, setItemAnchorEl] = useState(null)

    const isOpen = Boolean(itemAnchorEl)

    // onClick 함수가 있을 경우에만 동작하도록 한다.
    const items = [
        {
            name: "SHOP",
            icon: <Icon name="bag" />,
            onClick: (e) => {
                setItemAnchorEl(e.currentTarget)
            },
        },
        {
            name: "CART",
            icon: <Icon name="cart" />,
            path: "/cart",
        },
        {
            name: "LOGIN",
            icon: <Icon name="signin" />,
            path: "/login",
        },
        {
            name: "REGISTER",
            icon: <Icon name="signup" />,
            path: "/register",
        },
    ]

    const category = [
        { name: "Vegetable" },
        { name: "Meat" },
        { name: "Drink" },
        { name: "Normal" },
    ]

    const onMenuButtonClickEventHandler = (menuName) => () => {
        // const path = "/items"
        // TODO: menuName에 따른 라우팅
        // app.jsx에서 params로 분류
        // 카테고리 이름에 따라서 item_list에서 fetch를 할 것
        switch (menuName) {
            case "Vegetable":
                break
            case "Meat":
                break
            case "Drink":
                break
            case "Normal":
                break
            default:
                return
        }
    }

    const onMenuCloseButtonClickEventHandler = () => {
        setItemAnchorEl(null)
    }

    return (
        <React.Fragment>
            <AppBar component="nav">
                <Toolbar sx={boxStyle}>
                    <Box sx={menuStyle}>
                        {items.map((item) => (
                            <Box key={item.name} sx={navStyle}>
                                <Button sx={buttonStyle} onClick={item.onClick}>
                                    <Typography sx={menuTextStyle}>
                                        {item.name}
                                    </Typography>
                                    <Typography>{item.icon}</Typography>
                                </Button>
                            </Box>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={itemAnchorEl}
                open={isOpen}
                onClose={onMenuCloseButtonClickEventHandler}
            >
                {category.map((c) => (
                    <MenuItem
                        key={c.name}
                        onClick={onMenuButtonClickEventHandler(c.name)}
                    >
                        {c.name}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    )
}

const boxStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 1,
}

const menuStyle = {
    display: {
        xs: "none",
        sm: "block",
    },
}

const navStyle = {
    display: "inline",
    mr: 2,
}

const buttonStyle = {
    color: "#fff",
}

const menuTextStyle = {
    mr: 1,
}

export default React.memo(Appbar)
