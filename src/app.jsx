import React from 'react';
import styles from './app.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Register from './components/login/register';
import Cart from './components/cart/cart';
import Shop from './components/item_list/item_list';
import Item from './components/item/item';
import ItemList from './components/item_list/item_list';
import ProductDetail from './components/product/product_detail';
import MainCover from './main_cover/main_cover';

function App() {
  return (
    <div className={styles.app}>
      {/* <MainCover /> */}
      <Router>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <>
            <Navbar />
            <Route exact path="/" component={Main} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/item" component={Item} />
            <Route exact path="/itemlist" component={ItemList} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/product" component={ProductDetail} />
            <Footer />
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
