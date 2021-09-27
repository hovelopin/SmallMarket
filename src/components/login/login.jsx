import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux';
import { loginRequest } from '../../redux/action/authAction';
import styles from './login.module.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const userNameChangeHandler = (event) => {
    setUsername(event.target.value);
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(loginRequest(username, password));
  }

  return(
    <form className={styles.loginWrap} onSubmit={onSubmitHandler}>
      <div className={styles.loginIndex}>
        <h2> 스몰마켓 </h2>
        <h3> 로그인 </h3>
        <input 
          className={styles.idInput} 
          placeholder="아이디"
          onChange={userNameChangeHandler}
        >
        </input>
        <input 
          className={styles.pwInput} 
          placeholder="비밀번호"
          onChange={passwordChangeHandler}
          >
        </input>
        <button className={styles.btLogin}>로그인</button>
        <footer className={styles.btReg}>
        <h3>회원가입</h3>
        </footer>
      </div>
    </form>
  );
}

export default Login;