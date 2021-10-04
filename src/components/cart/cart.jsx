import React from 'react';
import styles from './cart.module.css';
import CartItem from './cart_item';

const Cart = () => {
  return (
    <section className={styles.cart}>
      <div className={styles.item}>
        <h1 className={styles.title}>Shopping Cart</h1>
        {/* cart item ... */}
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>Information</h1>
        <div className={styles.detail}>
          <p className={styles.content}>Count : </p>
          <p className={styles.content}>Dollar : </p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Checkout</button>
        </div>
      </div>
    </section>
  );
}

export default Cart;