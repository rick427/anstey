import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import ScrollToTop from './utils/scrollToTop';
import store from './redux/store';
import PrivateRoute from './components/privateRoute';

import HomePage from './pages/home';
import ProductsPage from './pages/products';
import ProductDetails from './pages/productsDetails';
import CartPage from './pages/cart';
import SettingsPage from './pages/settings';
import ErrorPage from './pages/error';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import CheckOutPage from './pages/checkout';
import AppDashboard from './components/appDashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop/>
        
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/products" component={ProductsPage}/>
          <Route path="/product/:id" component={ProductDetails}/>
          <Route path="/cart" component={CartPage}/>
          <Route path="/settings" component={SettingsPage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/checkout" component={CheckOutPage}/>
          <PrivateRoute path="/main" component={AppDashboard}/>
          <Route component={ErrorPage}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
