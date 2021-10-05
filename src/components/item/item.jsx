import React from "react";
import styles from './item.module.css';

const Item = () => {
  return (
    <ul className={styles.itemBox}>
      <li>
        <img src="/img/just.jpg" alt='sample01' />
      </li>
      <li className={styles.itemTitle}>
        해당위치는 제목을 작성합니다. 링크를 걸어 디테일로갑니다.
      </li>
      <li className={styles.itemPrice}>
        <span>20% </span>여기는 가격을 씁니다.
      </li>
      <li className={styles.itemExplanation}>
        여기에 아이템의 설명을 적습니다. 겁나게 맛있는 우리햇쌀을 드셔보세요
        등등
      </li>
    </ul>
  );
}
export default Item;