import React, { Component } from 'react';
import Main from './Main.js';
import Header from './Header.js';
import { BrowserRouter, Route } from "react-router-dom";
import Login from './Login.js'
import Details from './Details.js';
import Prices from './Prices.js';
import Store from './Redux/Store'
import Register from'./Register';
import {Provider} from 'react-redux'

export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={Store}>
          
   
       
        <BrowserRouter>
        <Header />
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/prices" component={Prices} />
          <Route exact path="/register" component={Register} />
        </BrowserRouter>
        </Provider>
      </div>
    )
  }
}
