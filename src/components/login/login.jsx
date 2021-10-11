import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../redux/action/authAction';
import styles from './login.module.css';
import { RiLockPasswordFill, RiUser3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const userNameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(loginRequest(username, password));
  };

  return (
    <>
      <Link to ='/'>
      <div className={styles.login_logo}>
        <img
          className={styles.logo_text}
          src="logo/logoText.png"
          alt="logoText"
        ></img>
      </div>
      </Link>
      <form className={styles.loginWrap} onSubmit={onSubmitHandler}>
        <div className={styles.loginIndex}>
          <h3> 로그인 </h3>
          <input
            type="text"
            className={styles.idInput}
            placeholder="아이디를 입력해주세요."
            onChange={userNameChangeHandler}
          ></input>
          <i className={styles.id_icons}>
            <RiUser3Line />
          </i>
          <input
            className={styles.pwInput}
            placeholder="비밀번호를 입력해주세요."
            onChange={passwordChangeHandler}
          ></input>
          <i className={styles.pw_icons}>
            <RiLockPasswordFill />
          </i>
          <button className={styles.btLogin}>로그인</button>
          <button className={styles.btReg}>회원가입</button>
        </div>
      </form>
    </>
  );
}

export default Login;
