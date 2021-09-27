import React from 'react'; 
import styles from './login.module.css';

function Login() {
  return(
    <div className={styles.loginWrap}>
      <div className="loginIndex">
        <h2> 스몰마켓 </h2>
        <h3> 로그인 </h3>
        <input className="idInput" placeholder="아이디"></input>
        <input className="pwInput" placeholder="비밀번호"></input>
        <button className="btLogin">로그인</button>
        <footer className="btReg">
        <h3>회원가입</h3>
        </footer>
      </div>
    </div>
  );
}

export default Login;