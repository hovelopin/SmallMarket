import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';

const Navbar = ({ click }) => {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li>
          <Link to="/items">
            <span className={styles.title}><i className="fas fa-shopping-bag"></i> SHOP</span>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span className={styles.title}>CONTACT</span>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <span className={styles.title}>
              <i className="fas fa-shopping-cart"></i> CART {cartItems.length}
            </span>
          </Link>
        </li>
        <li className={styles.imgContainer}>
          <Link to='/main'>
            <img className={styles.logo} src='/img/logo.png' alt="logo" />
          </Link>
        </li>
        <li>
          <Link to="/login">
            <span className={styles.title}>LOGIN</span>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <span className={styles.title}>REGISTER</span>
          </Link>
        </li>
        <li>
          <Link to="/board">
            <span className={styles.title}>Q & A</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default React.memo(Navbar);
