import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import ProductList from './Components/Product/ProductList/ProductList';
import PageHeader from './Components/Page/PageHeader';
import ProductDetails from './Components/Product/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <PageHeader />
        </div>
        <Switch>
          <Route exact path='/' component={ProductList}/>
          <Route path='/product/id=:id' component={ProductDetails}/>
          <Route path='/cart' component={Cart} />
        </Switch>
      </div>

    );
  }
}

export default App;
