import React, { useState } from 'react'; 
import { useDispatch } from 'react-redux';
import { registerRequest } from '../../redux/action/authAction';
import styles from './register.module.css';
import { Link } from 'react-router-dom';

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

  return (
    <form>
      <Link to='/'>
      <div>
        <img className={styles.intro}
        src="/img/reg_smallmarket.png" alt="reg_intro" />
      </div>
      </Link>
      <div className={styles.wapper} onSubmit={onSubmitHandler}>
        <div className={styles.content}>
          <div>
            <h3>ID</h3>
            <span className={styles.box_id}>
              <input
                className={styles.int}
                placeholder="Enter ID"
                onChange={userNameChangeHandler}
              ></input>
            </span>
          </div>
          <div>
            <h3>PASSWORD</h3>
            <span className={styles.box_id}>
              <input
                className={styles.int}
                placeholder="Enter password"
                onChange={passwordChangeHandler}
              ></input>
            </span>
          </div>
          <div>
            <h3>CONFIRM PASSWORD</h3>
            <span className={styles.box_id}>
              <input
                className={styles.int}
                placeholder="Confirm password"
                onChange={checkPasswordChangeHandler}
              ></input>
            </span>
          </div>
          <div>
            <h3>E-MAIL</h3>
            <span className={styles.box_id}>
              <input
                className={styles.int}
                placeholder="ex) sungkonghoe@skhu.ac.kr"
                onChange={emailChangeHandler}
              ></input>
            </span>
          </div>
          <div>
            <h3>NICK NAME</h3>
            <span className={styles.box_id}>
              <input
                className={styles.int}
                placeholder="Your name in SmallMarket"
                onChange={nameChangeHandler}
              ></input>
            </span>
          </div>
          <div className={styles.btn}>
            <button className={styles.btnJoin}>
              <span>Ready to Jump</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Register;