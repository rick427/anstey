import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ScrollToTop from './utils/scrollToTop';

import HomePage from './pages/home';
import ProductsPage from './pages/products';
import ProductDetails from './pages/productsDetails';
import CartPage from './pages/cart';
import SettingsPage from './pages/settings';
import ErrorPage from './pages/error';

function App() {
  return (
    <Router>
      <ScrollToTop/>

      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/products" component={ProductsPage}/>
        <Route exact path="/product/:id" component={ProductDetails}/>
        <Route exact path="/cart" component={CartPage}/>
        <Route exact path="/settings" component={SettingsPage}/>
        <Route component={ErrorPage}/>
      </Switch>
    </Router>
  );
}

export default App;
