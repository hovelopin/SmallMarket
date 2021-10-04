import React from 'react';
import { Link } from 'react-router-dom';
import styles from './cart_item.module.css';

const CartItem = (props) => {
  return (
    <section className={styles.item}>
      <img className={styles.image} src="/img/just.jpg" alt="item"/>

      <Link to="/" className={styles.content}><p>Name</p></Link>
      <p className={styles.price}>$10</p>

      <select className={styles.select}>
        <option>1</option>
      </select>

      <button className={styles.delete}><i className="fas fa-trash"></i></button>
      {/* <i className="fa fa-shopping-bag"></i> */}
    </section>
  );
}

export default CartItem;