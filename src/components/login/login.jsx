import { useState, useCallback } from "react"
import { useDispatch } from "react-redux"
import { Container, Box, Input, Button, Typography } from "@mui/material"
import { loginRequest } from "../../redux/action/authAction"
import { useHistory } from "react-router-dom"
import SMAlertPopup from "../popup/smAlertPopup"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isAlertPopupOpen, setIsAlertPopupOpen] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()

    const userNameChangeHandler = useCallback((event) => {
        setUsername(event.target.value)
    }, [])

    const passwordChangeHandler = useCallback((event) => {
        setPassword(event.target.value)
    }, [])

    const onRegisterButtonClickHandler = () => {
        history.push("/register")
    }

    const onLoginButtonClickEventHandler = (event) => {
        event.preventDefault()
        const user = dispatch(loginRequest(username, password))
        if (user !== null) {
            history.push("/")
        } else {
            setIsAlertPopupOpen(true)
            return
        }
    }

    const onCloseButtonClickEventHandler = (checked) => {
        setIsAlertPopupOpen(checked)
    }

    return (
        <Container>
            <Box sx={boxStyle}>
                <img
                    style={imgStyle}
                    src="/img/reg_smallmarket.png"
                    alt="logoText"
                ></img>
            </Box>
            <Box sx={formStyle}>
                <Box sx={loginStyle}>
                    <Typography sx={textStyle} variant="h4" align="center">
                        Login
                    </Typography>
                    <Input
                        type="text"
                        sx={inputStyle}
                        placeholder="Enter your name...."
                        onChange={userNameChangeHandler}
                    ></Input>
                    <Input
                        type="password"
                        sx={inputStyle}
                        placeholder="Enter your password..."
                        onChange={passwordChangeHandler}
                    ></Input>
                    <Button
                        sx={buttonStyle}
                        onClick={onLoginButtonClickEventHandler}
                    >
                        Login
                    </Button>
                    <Button
                        sx={buttonStyle}
                        onClick={onRegisterButtonClickHandler}
                    >
                        Register
                    </Button>
                </Box>
            </Box>
            <SMAlertPopup
                isOpen={isAlertPopupOpen}
                onCloseButtonClickEvent={onCloseButtonClickEventHandler}
                msg="Please check your input !"
            />
        </Container>
    )
}

const boxStyle = {
    width: "100%",
    position: "relative",
    textAlign: "center",
    mt: 15,
}

const imgStyle = {
    width: "240px",
}

const formStyle = {
    width: "100%",
    height: "500px",
    position: "relative",
}

const textStyle = {
    m: 2,
}

const loginStyle = {
    width: "450px",
    position: "absolute",
    top: "40%",
    left: "50%",
    background: "white",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2)",
    padding: "20px 20px 20px 20px",
    transform: "translate(-50%, -50%)",
}

const inputStyle = {
    display: "block",
    height: 50,
    width: "100%",
}

const buttonStyle = {
    width: "50%",
    height: 50,
}

export default Login
