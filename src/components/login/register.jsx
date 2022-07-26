import React, { useState, useCallback } from "react"
import { useDispatch } from "react-redux"
import { Container, Box, Input, Button, Typography } from "@mui/material"
import { registerRequest } from "../../redux/action/authAction"

function Register() {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [checkPasswrod, setCheckPassword] = useState("")

    const dispatch = useDispatch()

    // TODO: user validation 추가
    const onUserNameChangeEventHandler = useCallback((event) => {
        setUserName(event.target.value)
    }, [])

    const onEmailChangeEventHandler = useCallback((event) => {
        setEmail(event.target.value)
    }, [])

    const onPasswordChangeEventHandler = useCallback((event) => {
        setPassword(event.target.value)
    }, [])

    const onCheckPasswordChangeEventHandler = useCallback((event) => {
        setCheckPassword(event.target.value)
    }, [])

    const onSubmiButtonClickEventtHandler = (event) => {
        event.preventDefault()
        if (password === checkPasswrod) {
            dispatch(registerRequest(username, password, email))
        } else {
            return
        }
    }

    return (
        <Container>
            <Box sx={boxStyle}>
                <img
                    style={imgStyle}
                    src="/img/reg_smallmarket.png"
                    alt="reg_intro"
                />
            </Box>
            <Box sx={contentBoxStyle}>
                <Typography variant="h4" align="center">
                    REGISTER
                </Typography>
                <Input
                    sx={inputStyle}
                    placeholder="Enter ID"
                    onChange={onUserNameChangeEventHandler}
                    required
                />
                <Input
                    type="email"
                    sx={inputStyle}
                    placeholder="smallmarket@gmail.com"
                    onChange={onEmailChangeEventHandler}
                    required
                />
                <Input
                    type="password"
                    sx={inputStyle}
                    placeholder="Enter password"
                    onChange={onPasswordChangeEventHandler}
                    required
                />
                <Input
                    type="password"
                    sx={inputStyle}
                    placeholder="Confirm password"
                    onChange={onCheckPasswordChangeEventHandler}
                    required
                />
                <Button onClick={onSubmiButtonClickEventtHandler}>
                    Ready to Shopping
                </Button>
            </Box>
        </Container>
    )
}

const boxStyle = {
    mt: 15,
    textAlign: "center",
}

const imgStyle = {
    width: "240px",
}

const contentBoxStyle = {
    width: "70%",
    background: "white",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
    margin: "0 auto",
    mt: 1,
}

const inputStyle = {
    width: "90%",
    display: "block",
    m: 2,
}

export default Register
