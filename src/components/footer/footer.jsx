import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerRow}>
        <div className={styles.footerCol}>
          <h5>Contact Team : https://github.com/SmallMarket-Project/SmallMarket</h5>
          <p className={styles.content}>Team : SmallMarket</p>
          <p className={styles.content}>University : Sungonghoe University</p>
          <p className={styles.content}>Tel : ooo-ooo-ooo</p>
        </div>
        <div className={styles.footerCol}>
          <h5>SmallMarket</h5>
          <p className={styles.content}>Team : SmallMarket</p>
          <p className={styles.content}>University : Sungonghoe University</p>
          <p className={styles.content}>Tel : ooo-ooo-ooo</p>
        </div>
        <div className={styles.footerCol}>
          <h5>CopyRight</h5>
          <div className={styles.content}>
            <p>@2021 SmallMarket</p>
            <p>HoJin</p>
            <p>JunHo</p>
            <p>JaeHyun</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;