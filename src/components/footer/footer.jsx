import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <>
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
    <p className={styles.copyright}>@2021 SmallMarket | by HoJin , JunHo </p>
    </>
  )
}

export default Footer;