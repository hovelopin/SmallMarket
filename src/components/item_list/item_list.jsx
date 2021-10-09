// npm i react-js-pagination
//https://cotak.tistory.com/112#%F-%-F%A-%-B%--%EA%B-%B-%EB%A-%A- 해당자료 확인후 js변경 추천

import React, {useState} from "react";
import styles from './item_list.module.css';
import './paging.css';
import Item from "../item/item";
import Pagination from "react-js-pagination";


  const ItemList = () => { 
    const [page, setPage] = useState(1); 
    const handlePageChange = (page) => { setPage(page); };


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
          <img src="/img/goTop.jpg" alt="sample01" />
        </div>

        <div className={styles.shopContent}>
          <div className={styles.orderSort}>
            <button>추천순</button>
            <button>신상품순</button>
            <button>낮은 가격순</button>
            <button>높은 가격순</button>
          </div>
          <div className={styles.clear}>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </div>
          <div className={styles.clear}></div>
        </div>

        <ul className={styles.Pagination}>
          <Pagination
            activePage={page}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}
          />
        </ul>
      </>
    );
}
export default ItemList;