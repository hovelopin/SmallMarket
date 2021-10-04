import React from "react";
import styles from './item_list.module.css';
import Item from "../item/item";

function ItemList  ()  {
    return (
      <>
        <div className={styles.shopTop}>
          <div className={styles.shopBox}>
            SmallMarket's 상품
            <div>
              <input
                className={styles.shopSearchBox}
                placeholder="검색어를 입력해주세요."
              ></input>
            </div>
          </div>
        </div>

        <div className={styles.moveTop}>
          <a href="#"><img src="/img/goTop.jpg"></img></a>
        </div>

        <div className={styles.shopContent}>
          <div className={styles.orderSort}>
            <button>추천순</button>
            <button>신상품순</button>
            <button>낮은 가격순</button>
            <button>높은 가격순</button>
          </div>
          <div className={styles.clear}></div>
          
          <div className={styles.shopItemList}>
            <Item></Item>
            <Item></Item>
          </div>
        </div>
      </>
    );

}
export default ItemList;