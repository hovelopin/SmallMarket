import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <>
      <ul className={styles.footerContainer}>
        <li className={styles.footerItems}>
          <p className={styles.ftItems_title}>Photo</p>
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
          <p className={styles.ftItems_title}>Our Contact</p>
          <p className={styles.ftItems_sub}>https://github.com/SmallMarket-Project/SmallMarket</p>
          <p className={styles.ftItems_sub}>Sungkonghoe University</p>
          <p className={styles.ftItems_sub}>SmallMarket</p>
        </li>
      </ul>
      <p className={styles.copyright}>@2021 SmallMarket | by HoJin , JunHo , JaeHyun </p>
    </>
  );
}

export default Footer;