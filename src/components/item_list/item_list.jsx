// npm i react-js-pagination
//https://cotak.tistory.com/112#%F-%-F%A-%-B%--%EA%B-%B-%EB%A-%A- 해당자료 확인후 js변경 추천

import React, {useEffect, useState} from "react";
import styles from './item_list.module.css';
import './paging.css';
import Item from "../item/item";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from 'react-redux';
import { getItems as itemList } from '../../redux/action/itemAction';

const ItemList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1); 
  const handlePageChange = (page) => { setPage(page); };
  const getItems = useSelector(state => state.getItems);
  const { items, error } = getItems;

  useEffect(() => {
    dispatch(itemList());
  }, [dispatch]);

  return (
    <section className={styles.container}>
      <div className={styles.shopTop}>
        <div className={styles.shopBox}>
          <h1>ITEMS</h1>
          <div className={styles.search}>
            <input
              className={styles.shopSearchBox}
              placeholder="검색어를 입력해주세요."
            />
          </div>
        </div>
      </div>

      <div className={styles.moveTop}>
        <img src="/img/goTop.jpg" alt="sample01" />
      </div>

      <div className={styles.items}>
        {/* <div className={styles.orderSort}>
          <button>추천순</button>
          <button>신상품순</button>
          <button>낮은 가격순</button>
          <button>높은 가격순</button>
        </div> */}
        <div className={styles.item}>
          {error ? <h1>{error}</h1> 
            : ( 
              items.map((item) => <Item 
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                id={item.id}
                img={item.img} 
            />)
          )}
        </div>
      </div>

      <ul className={styles.Pagination}>
        <Pagination
          activePage={page}
          itemsCountPerPage={30}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          prevPageText={"‹"}
          nextPageText={"›"}
          onChange={handlePageChange}
        />
      </ul>
    </section>
  );
}
export default ItemList;