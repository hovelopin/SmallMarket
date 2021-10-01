import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Login from './components/login/login';
import Register from './components/login/register'
import Cart from './components/cart/cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Cart} />
        {/* <Route exact path='/' component={Main} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
