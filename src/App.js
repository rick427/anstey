import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import ScrollToTop from './utils/scrollToTop';
import RegisterCart from './utils/registerCart';
import store from './redux/store';
import PrivateRoute from './components/privateRoute';
import RestrictedRoute from './components/restrictedRoute';

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
  // dispatch register cart here

  return (
    <Provider store={store}>
      <Router>

        <ScrollToTop/>

        <RegisterCart/>

        <Switch>
          <Route exact path="/" component={HomePage}/>
          <PrivateRoute path="/products" component={ProductsPage}/>
          <PrivateRoute path="/product/:id" component={ProductDetails}/>

          <Route path="/cart" component={CartPage}/>
          <Route path="/settings" component={SettingsPage}/>

          <RestrictedRoute path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          
          <PrivateRoute path="/checkout" component={CheckOutPage}/>
          <PrivateRoute path="/main" component={AppDashboard}/>
          <Route component={ErrorPage}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
