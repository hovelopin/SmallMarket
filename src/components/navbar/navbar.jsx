import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getTotalCartItemCount = () => {
    return cartItems.reduce(
      (quantity, item) => quantity + Number(item.quantity),
      0
    );
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
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
              <i className="fas fa-shopping-cart"></i> CART{' '}
              {getTotalCartItemCount()}
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
              <i className="fas fa-shopping-bag"></i> NEW
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
};

export default Navbar;
