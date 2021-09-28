import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux';
import { registerRequest } from '../../redux/action/authAction';
import styles from './register.module.css';

function Register () {
  const dispatch = useDispatch();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [checkPasswrod, setCheckPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  }

  const checkPasswordChangeHandler = (event) => {
    setCheckPassword(event.target.value);
  }

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(checkPasswrod === password) {
      dispatch(registerRequest(username, password, email, name));
    } else {
      alert("Not correspond your paossword");
    }
  }

  return(
    <form 
      className={styles.loginWrap} 
      onSubmit={onSubmitHandler}>
      <div className="loginIndex">
        <h2> 스몰마켓 </h2>
        <h3> 회원가입 </h3>
        <ul className="regContainer">
          <li className="regId"> 아이디 </li>
            <input 
              className="inputRegId" 
              placeholder="아이디를 입력해주세요."
              onChange={userNameChangeHandler}
            >
            </input>
        </ul>
        <ul className="regContainer2">
          <li className="regPw"> 비밀번호 </li>
            <input 
              className="inputRegPw" 
              placeholder="비밀번호를 입력해주세요."
              onChange={passwordChangeHandler}
            >
            </input>
        </ul>
        <ul className="regContainer3">
          <li className="regPwCheck"> 비밀번호확인 </li>
            <input 
              className="inputPwCheck" 
              placeholder="비밀번호를 한번 더 입력해주세요."
              onChange={checkPasswordChangeHandler}
            >
            </input>
        </ul>
        <ul className="regContainer4">
          <li className="regEmail"> 이메일 </li>
            <input 
              className="inputEmail" 
              placeholder="예) sungkonghoe@skhu.ac.kr" 
              onChange={emailChangeHandler}
            >
            </input>
        </ul>
        <ul className="regContainer5">
          <li className="regNickName"> 닉네임 </li>
            <input 
              className="inputNickName" 
              placeholder="닉네임을 입력해주세요."
              onChange={nameChangeHandler}
            >
            </input>
        </ul>
        <button className="btRegComplete"> 가입하기</button>
      </div>
    </form>
  );
}

export default Register;