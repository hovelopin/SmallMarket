import React, { useState, useCallback } from "react"
import { useDispatch } from "react-redux"
import { loginRequest } from "../../redux/action/authAction"
import styles from "./login.module.css"
import { RiLockPasswordFill, RiUser3Line } from "react-icons/ri"
import { Link, useHistory } from "react-router-dom"

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()

    const userNameChangeHandler = useCallback((event) => {
        setUsername(event.target.value)
    }, [])

    const passwordChangeHandler = useCallback((event) => {
        setPassword(event.target.value)
    }, [])

    const registerHandler = () => {
        history.push("/register")
    }

    const onLoginButtonClickEventHandler = (event) => {
        event.preventDefault()
        dispatch(loginRequest(username, password))
            .then((data) => {
                if (data.token) {
                    if (
                        window.confirm(
                            "Login Success ! Do you want to go our web sites ?"
                        )
                    ) {
                        window.location.replace("/")
                    } else {
                        history.push("/main")
                    }
                }
            })
            .catch(() => alert("Login failed..."))
    }

    return (
        <React.Fragment>
            <Link to="/main">
                <div className={styles.login_logo}>
                    <img
                        className={styles.logo_text}
                        src="/img/reg_smallmarket.png"
                        alt="logoText"
                    ></img>
                </div>
            </Link>
            <form className={styles.loginWrap}>
                <div className={styles.loginIndex}>
                    <h3> Login </h3>
                    <input
                        type="text"
                        className={styles.idInput}
                        placeholder="Enter your name...."
                        onChange={userNameChangeHandler}
                    ></input>
                    <i className={styles.id_icons}>
                        <RiUser3Line />
                    </i>
                    <input
                        type="password"
                        className={styles.pwInput}
                        placeholder="Enter your password..."
                        onChange={passwordChangeHandler}
                    ></input>
                    <i className={styles.pw_icons}>
                        <RiLockPasswordFill />
                    </i>
                    <button
                        className={styles.btLogin}
                        onClick={onLoginButtonClickEventHandler}
                    >
                        Login
                    </button>
                    <button className={styles.btReg} onClick={registerHandler}>
                        Register
                    </button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Login
