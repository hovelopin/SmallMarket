import React from 'react'; 
import register from './Register';
// import { Link } from 'react-router-dom';

function Login(){
  return(
    <div className="loginWrap">
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