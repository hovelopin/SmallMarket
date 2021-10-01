import React from 'react';
import styles from './cart.module.css';

const Cart = () => {
  return (
    <section className={styles.cart}>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1>Shopping Cart</h1>
        </div>
        <div className={styles.info}>
          <h1>Information</h1>
        </div>
      </div>
    </section>
  );
}

export default Cart;