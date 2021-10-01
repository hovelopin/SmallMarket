import styles from './main.module.css';

function Main() {
  return(
    /* 상단에 navbar */
    <div className={styles.indexWrap}>
      <ul className={styles.indexContainer}>
        <li className={styles.indexItems}>
          <img className={styles.indexItems_01} src="img/pix01.jpeg"></img>
          <h3>The MarketPlace</h3>
          <h5>Buy directly from artisans all across Morocco</h5>
        </li>
        <li className={styles.indexItems}>
          <img className={styles.indexItems_01} src="img/pix01.jpeg"></img>
          <h3>The MarketPlace</h3>
          <h5>Buy directly from artisans all across Morocco</h5>
        </li>
        <li className={styles.indexItems}>
          <img className={styles.indexItems_01} src="img/pix01.jpeg"></img>
          <h3>The MarketPlace</h3>
          <h5>Buy directly from artisans all across Morocco</h5>
        </li>
      </ul>
      <hr className={styles.indexHr}></hr>
      
      <h1 className={styles.indexH1}>MD's Pick</h1>
      <ul className={styles.mdContainer}>
        <li className={styles.mdItems}>
          <img className={styles.mdItems_01} src="img/pix01.jpeg"></img>
          <h3>The MarketPlace</h3>
          <h5>Buy directly from artisans all across Morocco</h5>
        </li>
        <li className={styles.mdItems}>
          <img className={styles.mdItems_01} src="img/pix01.jpeg"></img>
          <h3>The MarketPlace</h3>
          <h5>Buy directly from artisans all across Morocco</h5>
        </li>
      </ul>
      <img src="img/pix01.jpeg" width="100%" height="400px"></img>
    </div>
  );
}

export default Main;