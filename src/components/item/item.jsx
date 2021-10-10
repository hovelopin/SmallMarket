import React from "react";
import styles from './item.module.css';

const Item = ({ id, name, price, quantity, img }) => {
  const base = '/img/items/';
  const imgRoute = base + {img};
  return (
      <ul className={styles.itemBox}>
        <li>
          <img className={styles.imgSet} src={imgRoute} alt={name} />
        </li>
        <li className={styles.itemTitle}>
          {name}
        </li>
        <li className={styles.itemPrice}>
          <span>{price}</span>
          <span>{quantity}</span>
        </li>
        <li className={styles.itemExplanation}>
          {name}
        </li>
        <div className={styles.clear}></div>
        {console.log(name)}
      </ul>    
  );
}
export default Item;