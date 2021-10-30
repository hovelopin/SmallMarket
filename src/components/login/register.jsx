import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { registerRequest } from "../../redux/action/authAction";
import styles from "./register.module.css";
import { Link } from "react-router-dom";

function Register() {
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkPasswrod, setCheckPassword] = useState("");
  const history = useHistory();
  // const [registerFlag, setRegisterFlag] = useState(false);
  // const [checkFlag, setCheckFlag] = useState(false);

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const checkPasswordChangeHandler = (event) => {
    setCheckPassword(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  // const checkInformation = async () => {
  //   if(username.length < 4) {
  //     alert('Username should be at least 4 characters...');
  //     setRegisterFlag(false);
  //   } else if(password.length < 8) {
  //     alert('Password should be at least 8 characters...');
  //     setRegisterFlag(false);
  //   } else if(password !== checkPasswrod) {
  //     alert('Please check your password...');
  //     setRegisterFlag(false);
  //   } else if(name.length === 0) {
  //     alert('Name is missing...');
  //     setRegisterFlag(false);
  //   } else {
  //     setRegisterFlag(true);
  //   }

  //   return await registerFlag;
  // }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (password === checkPasswrod) {
      dispatch(registerRequest(username, password, email, name));
      if (window.confirm("Success Register! Do you want to Shop?")) {
        history.push("/login");
      } else {
        history.push("/");
      }
    } else {
      alert("Please check your password...");
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Link to="/main">
        <div>
          <img
            className={styles.intro}
            src="/img/reg_smallmarket.png"
            alt="reg_intro"
          />
        </div>
      </Link>
      <div className={styles.wapper}>
        <div className={styles.content}>
          <div>
            <h3>ID</h3>
            <span className={styles.box_id}>
              <input
                className={styles.int}
                placeholder="Enter ID"
                onChange={userNameChangeHandler}
                required
              ></input>
            </span>
          </div>
          <div>
            <h3>PASSWORD</h3>
            <span className={styles.box_id}>
              <input
                type="password"
                minLength="8"
                className={styles.int}
                placeholder="Enter password"
                onChange={passwordChangeHandler}
                required
              ></input>
            </span>
          </div>
          <div>
            <h3>CONFIRM PASSWORD</h3>
            <span className={styles.box_id}>
              <input
                type="password"
                className={styles.int}
                placeholder="Confirm password"
                onChange={checkPasswordChangeHandler}
                required
              ></input>
            </span>
          </div>
          <div>
            <h3>E-MAIL</h3>
            <span className={styles.box_id}>
              <input
                className={styles.int}
                type="email"
                placeholder="ex) sungkonghoe@skhu.ac.kr"
                onChange={emailChangeHandler}
                required
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
                required
              ></input>
            </span>
          </div>
          <div className={styles.btn}>
            <button className={styles.btnJoin} type="submit">
              <span>Ready to Jump</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Register;
