import React from 'react';
import styles from './cart_item.module.css';

const CartItem = ({ item, quantityChangeHandler, removeHandler, isPay }) => {
  const base = '/img/items/';
  return (
    <section className={styles.item}>
      <img className={styles.image} src={base + `${item.img}`} alt="item"/>

      <p className={styles.content}>{item.name}</p>
      <p className={styles.price}>${item.price}</p>
      <p className={styles.quantity}>{item.quantity}</p>

      {!isPay && 
        <button 
          className={styles.delete} 
          onClick={() => removeHandler(item.id)}
        ><i className="fas fa-trash"></i></button>
      }
    </section>
  );
}

export default CartItem;