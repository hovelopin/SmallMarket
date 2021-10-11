import React from 'react';
import styles from './contact.module.css';

const Contact = () => {
  return (
    <section className={styles.container}>
        <h1 className = {styles.maintitle}>CONTACT</h1>
        <div className={styles.row}>
            <div className={styles.contactCol}>
                <div className={styles.contact1}>
                    <img className={styles.avatar} src="" alt="profile photo" />
                    <div className={styles.info}>
                        <h1 className={styles.name}>name</h1>
                        <p className={styles.company}>company</p>
                        <p className={styles.title}>title</p>
                        <p className={styles.email}>email</p>
                        <p className={styles.message}>message</p>
                    </div>
                </div>
            </div>
            <div className={styles.contactCol}>
                <div className={styles.contact2}>
                    <img className={styles.avatar} src="" alt="profile photo" />
                    <div className={styles.info}>
                        <h1 className={styles.name}>name</h1>
                        <p className={styles.company}>company</p>
                        <p className={styles.title}>title</p>
                        <p className={styles.email}>email</p>
                        <p className={styles.message}>message</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.row}>
            <div className={styles.contactCol}>
                <div className={styles.contact3}>
                    <img className={styles.avatar} src="" alt="profile photo" />
                    <div className={styles.info}>
                        <h1 className={styles.name}>name</h1>
                        <p className={styles.company}>company</p>
                        <p className={styles.title}>title</p>
                        <p className={styles.email}>email</p>
                        <p className={styles.message}>message</p>
                    </div>
                </div>
            </div>
            <div className={styles.contactCol}>
                <div className={styles.contact4}>
                    <img className={styles.avatar} src="" alt="profile photo" />
                    <div className={styles.info}>
                        <h1 className={styles.name}>name</h1>
                        <p className={styles.company}>company</p>
                        <p className={styles.title}>title</p>
                        <p className={styles.email}>email</p>
                        <p className={styles.message}>message</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Contact;