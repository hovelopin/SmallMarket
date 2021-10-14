import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import DaumPostcode from 'react-daum-postcode';
import styles from './pay.module.css';
import { useSelector } from 'react-redux';
import CartItem from '../cart/cart_item';

const postcodeStyle = {
  width: 500,
};

const Pay = (effect, deps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const nameChangeHandler = (e) => { 
    setName(e.target.value);
  }
  const phoneChangeHandler = (e) => { 
    setPhone(e.target.value);
  }
  const emailChangeHandler = (e) => { 
    setEmail(e.target.value);
  }

  const check = () => {
    if(name === '' || phone === '' || email === '' ||
      fullAddress === '' || zoneCode === '' || isDaumPost === false) {
      alert('Please enter your information...');
      return false;
    }

    return true;
  }

  const history = useHistory();
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  const totalPrice = () => { 
    return cartItems.reduce((price, item) => (item.price * item.quantity) + price, 0);
  }

  // 아임포트 API
  useEffect(() => {
    const jquery = document.createElement('script');
    jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
    const iamport = document.createElement('script');
    iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.7.js';

    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const onClickPayment = () => {
    if(check()) {
      const { IMP } = window;
      IMP.init('imp36622352');

      //결제
      const data = {
        pg: 'html5_inicis', // 필수
        pay_method: 'card', // 수단 (필수)
        name: 'smallmarket', //주문명 (필수)
        amount: totalPrice(), // 금액(필수)
      };

      IMP.request_pay(data, callback);
    }
  };

  const callback = (response) => {
    const { success, error_msg } = response;

    if (success) {
      alert('Success!!!');
      history.push('/main');
    } else {
      alert(`Failed... : ${error_msg}`);
    }
  };

  //다음 API
  const [fullAddress, setFullAddress] = useState();
  const [zoneCode, setZoneCode] = useState();
  const [isDaumPost, setIsDaumPost] = useState(false);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let zoneCode = data.zonecode;
    let extraAddress = '';

    setFullAddress(fullAddress);
    setZoneCode(zoneCode);

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
  };

  const handleOpenPost = () => {
    setIsDaumPost(true);
  };

  return (
    <div className={styles.pay_wrap}>
      <div className={styles.pay_title}>
        <h2>Payment</h2>
      </div>
      <div className={styles.pay_order_wrap}>
        <div className={styles.pay_order}>
          <h2 className={styles.pay_order_title}>Order product</h2>
          <div className={styles.total}>
            <h2>Total Price : {totalPrice()}</h2>
          </div>
        </div>
        <div className={styles.pay_order_container}>
          {cartItems.map(item => 
              (<CartItem 
                id={item.id}
                item={item} 
                isPay={true}
              />)
            )
          }
      </div>

        <div className={styles.purchaser_order}>
          <h2 className={styles.pay_order_title}>User information</h2>
        </div>
        <div className={styles.pay_info_wrap}>
          <div className={styles.info_container}>
            <span className={styles.info_name}>Name</span>
            <input
              className={styles.info_input}
              placeholder="Enter your name."
              onChange={nameChangeHandler}
            />
          </div>
          <div className={styles.info_container}>
            <span className={styles.info_name}>Phone</span>
            <input
              className={styles.info_input}
              placeholder="Enter your phone number...(00011112222)"
              onChange={phoneChangeHandler}
            />
          </div>
          <div className={styles.info_container}>
            <span className={styles.info_name}>Email</span>
            <input
              className={styles.info_input}
              placeholder="ex) smallmarket@google.com"
              onChange={emailChangeHandler}
            />
          </div>
        </div>

        <div className={styles.delivery_wrap}>
          <h2 className={styles.pay_order_title}>Address</h2>
        </div>
        <div className={styles.delivery_info_wrap}>
          <div>
            <div className={styles.delivery_zone_code}>
              {zoneCode}
              <div className={styles.btn_delivery_register_wrap}>
                <button
                  type="button"
                  className={styles.btn_delivery_register}
                  onClick={handleOpenPost}
                >
                  Zip code
                </button>
              </div>
            </div>
            <div className={styles.delivery_full_address}>
              {fullAddress}
              <input
                className={styles.delivery_other_address}
                type="text"
              ></input>
              {isDaumPost ? (
                <DaumPostcode
                  onComplete={handleComplete}
                  style={postcodeStyle}
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className={styles.payment_wrap}>
          <button
            type="button"
            className={styles.btn_payment}
            onClick={onClickPayment}
          >
            결제 하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pay;
