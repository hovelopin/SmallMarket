import React from "react";
import { useHistory } from 'react-router-dom';
import styles from './item.module.css';

const Item = ({ id, name, price, quantity, img }) => {
  const history = useHistory();
  const base = '/img/items/';
  const imgRoute = base + `${img}`;
  const TOKEN = 'token';
  const buttonClickHandler = () => {
    if(localStorage.getItem(TOKEN)) {
      history.push(`/items/detail/${id}`);
    } else {
      alert('You need to login...');
    }
  }

  return (
      <section className={styles.itemBox}>
        <img className={styles.imgSet} src={imgRoute} alt={name} />
        <div className={styles.itemInfo}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.itemPrice}>Price : {price}</p>
          <p className={styles.itemQuantity}>Quantity : {quantity}</p>
          <p className={styles.description}>Description : {name}</p>
          <button 
            className={styles.button}
            onClick={buttonClickHandler}
          >Detail</button>
        </div>
      </section>    
  );
}
export default Item;