import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Order from '../Order/Order';
import Customer from '../Customer/Customer';
import Checkout from '../Checkout/Checkout';
import Admin from '../Admin/Admin.jsx'
import Header from '../Header/Header.jsx'
function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <Router>
        <Route exact path="/">
          <Order />
        </Route>

        <Route exact path="/customer-info">
          <Customer />
        </Route>
        
        <Route exact path='/Checkout'>
          <Checkout />
        </Route>

        <Route exact path='/admin'>
          <Admin />
        </Route>

      </Router>
    </div>
  );
}

export default App;
