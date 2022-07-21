import React from "react"
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material"
import Icon from "../../icon/icon"

function Appbar() {
    const items = [
        {
            name: "SHOP",
            icon: <Icon name="bag" />,
            path: "/items",
        },
        {
            name: "CONTACT",
            icon: <Icon name="contact" />,
            path: "/contact",
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
        {
            name: "Q & A",
            icon: <Icon name="qna" />,
            path: "/board",
        },
        {
            name: "ABOUT",
            icon: <Icon name="about" />,
            path: "/about",
        },
    ]

    return (
        <Box sx={boxStyle}>
            <AppBar component="nav">
                <Toolbar>
                    <Box sx={menuStyle}>
                        {items.map((item) => (
                            <Box sx={navStyle}>
                                <Button key={item.name} sx={buttonStyle}>
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
        </Box>
    )
}

const boxStyle = {
    display: "flex",
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

export default Appbar
