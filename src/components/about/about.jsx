import React from 'react';
import styles from './about.module.css';

const About = () => {
    return(
        <section className = {styles.about}>
            <div className = {styles.main}>
                <div className = {styles.aboutimg}>
                    <img className={styles.aboutimg} src="img/4-index.jpg" alt='photo1' />
                </div>
                <div className = {styles.abouttext}>
                    <h1>About us</h1>
                    <h5>Developer<sapn> & Designer</sapn></h5>         
                <p>I am front-end web developer. I can provide clean code and pixel perpect design. i also make the website more & more interactive with web animations. I can provide clean code and pixel perpect design.</p>
                <button className = {styles.button}>let's Talk</button>
                </div>
            </div>
        </section>
    );
}

export default About;