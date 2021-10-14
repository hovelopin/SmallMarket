import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../redux/action/authAction';
import styles from './login.module.css';
import { RiLockPasswordFill, RiUser3Line } from 'react-icons/ri';
import { Link, useHistory } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.user);
  const { login } = user;
  useEffect(() => {
    dispatch(loginRequest(username, password));
  }, [dispatch, username, password]);

  const userNameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const registerHandler = () => {
    history.push('/register');
  }


  const onSubmitForm = (event) => {
    dispatch(loginRequest(username, password));
    event.preventDefault();
    if(login) {
      if(window.confirm('Login Success! Do you want to go shop?')) {
        window.location.replace('/main')
      } else {
        history.push('/main');
      }
    } else {
      alert('Login failed...');
    }
  }

  return (
    <>
      <Link to="/main">
        <div className={styles.login_logo}>
          <img
            className={styles.logo_text}
            src="/img/reg_smallmarket.png"
            alt="logoText"
          ></img>
        </div>
      </Link>
      <form className={styles.loginWrap} onSubmit={onSubmitForm}>
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
          <button className={styles.btLogin}>Login</button>
          <button className={styles.btReg} onClick={registerHandler}>Register</button>
        </div>
      </form>
    </>
  );
}

export default Login;
