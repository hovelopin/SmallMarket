import styles from './main.module.css';

function Main() {
  return(
    /* 상단에 navbar */
    <div className={styles.indexWrap}>
      <ul className={styles.indexContainer}>
        <li className={styles.indexItems}>
          <img className={styles.indexItems_01} src="img/pix01.jpeg" ></img>
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

      <ul className={styles.footerContainer}>
        <li className={styles.footerItems}>
          <p className={styles.ftItems_title}>The Cooperative</p>
          <p className={styles.ftItems_sub}>The Cooperative</p>
          <p className={styles.ftItems_sub}>The Cooperative</p>
          <p className={styles.ftItems_sub}>The Cooperative</p>
        </li>
        <li className={styles.footerItems}>
          <p className={styles.ftItems_title}>Connect</p>
          <p className={styles.ftItems_sub}>Connect</p>
          <p className={styles.ftItems_sub}>Connect</p>
          <p className={styles.ftItems_sub}>Connect</p>
        </li>
        <li className={styles.footerItems}>
          <p className={styles.ftItems_title}>Visit</p>
          <p className={styles.ftItems_sub}>Visit</p>
          <p className={styles.ftItems_sub}>Visit</p>
          <p className={styles.ftItems_sub}>Visit</p>
        </li>
      </ul>
      <p className={styles.copyright}>@2021 SmallMarket | by hojin , junho </p>
    </div>
  );
}

export default Main;