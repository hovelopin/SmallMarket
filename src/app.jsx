import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Register from './components/login/register'
import Cart from './components/cart/cart';
import Shop from './components/item_list/item_list';
import Item from './components/item/item';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/item' component={Item} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
