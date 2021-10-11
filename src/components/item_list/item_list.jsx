// npm i react-js-pagination
//https://cotak.tistory.com/112#%F-%-F%A-%-B%--%EA%B-%B-%EB%A-%A- 해당자료 확인후 js변경 추천

import React, {useState} from "react";
import styles from './item_list.module.css';
import './paging.css';
import Pagination from "react-js-pagination";
import ContainerList from './item_container'

const ItemList = () => {
  const [page, setPage] = useState(1); 
  const handlePageChange = (page) => { setPage(page); };

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
      
        <ContainerList/>

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