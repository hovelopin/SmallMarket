import React from "react"
import { Box, AppBar, Toolbar, Typography, Button } from "@mui/material"
import Icon from "../../icon/icon"
import ErrorUtil from "../../util/errorUtil"

function Appbar() {
    // onClickEventHandler를 공통화 한다
    const items = [
        {
            name: "SHOP",
            icon: <Icon name="bag" />,
            path: "/items",
            onClick: ErrorUtil.notImplemented(),
        },
        {
            name: "CONTACT",
            icon: <Icon name="contact" />,
            path: "/contact",
            onClick: ErrorUtil.notImplemented(),
        },
        {
            name: "CART",
            icon: <Icon name="cart" />,
            path: "/cart",
            onClick: ErrorUtil.notImplemented(),
        },
        {
            name: "LOGIN",
            icon: <Icon name="signin" />,
            path: "/login",
            onClick: ErrorUtil.notImplemented(),
        },
        {
            name: "REGISTER",
            icon: <Icon name="signup" />,
            path: "/register",
            onClick: ErrorUtil.notImplemented(),
        },
        {
            name: "Q & A",
            icon: <Icon name="qna" />,
            path: "/board",
            onClick: ErrorUtil.notImplemented(),
        },
        {
            name: "ABOUT",
            icon: <Icon name="about" />,
            path: "/about",
            onClick: ErrorUtil.notImplemented(),
        },
    ]

    return (
        <Box sx={boxStyle}>
            <AppBar component="nav">
                <Toolbar>
                    <Box sx={menuStyle}>
                        {items.map((item) => (
                            <Box sx={navStyle}>
                                <Button
                                    key={item.name}
                                    sx={buttonStyle}
                                    onClick={item.onClick}
                                >
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

export default React.memo(Appbar)
