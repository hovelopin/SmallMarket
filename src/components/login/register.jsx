import React from 'react'; 
import styles from './register.module.css';

function Register () {
  return(
    <div className="loginWrap">
      <div className="loginIndex">
        <h2> 스몰마켓 </h2>
        <h3> 회원가입 </h3>
        
        <ul className="regContainer">
          <li className="regId"> 아이디 </li>
            <input className="inputRegId" placeholder="아이디를 입력해주세요."></input>
        </ul>

        <ul className="regContainer2">
        <li className="regPw"> 비밀번호 </li>
            <input className="inputRegPw" placeholder="비밀번호를 입력해주세요."></input>
        </ul>

        <ul className="regContainer3">
        <li className="regPwCheck"> 비밀번호확인 </li>
            <input className="inputPwCheck" placeholder="비밀번호를 한번 더 입력해주세요."></input>
        </ul>

        <ul className="regContainer4">
        <li className="regEmail"> 이메일 </li>
            <input className="inputEmail" placeholder="예) sungkonghoe@skhu.ac.kr"></input>
        </ul>

        <ul className="regContainer5">
        <li className="regNickName"> 닉네임 </li>
            <input className="inputNickName" placeholder="닉네임을 입력해주세요."></input>
        </ul>

        <button className="btRegComplete"> 가입 하기 </button>
      </div>
    </div>
  );
}

export default Register;