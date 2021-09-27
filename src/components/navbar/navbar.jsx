import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = ({ props }) => {
  const cartCount = 1; // TODO: using redux for cart count
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar_list}>
        <li>
          <Link to="/shop">
            <span className={styles.title}>SHOP</span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <span className={styles.title}>ABOUT</span>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <span className={styles.title}>
              <i className="fas fa-shopping-cart"></i>
              CART {cartCount}
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className={styles.title}>HOME</span>
          </Link>
        </li>
        <li>
          <Link to="/items">
            <span className={styles.title}>
              <i className="fas fa-shopping-bag"></i>
              NEW ITEM
            </span>
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
      </ul>
    </nav>
  );
}

export default Navbar;