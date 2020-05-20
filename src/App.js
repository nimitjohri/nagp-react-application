import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Productist from './Components/Product/ProductList/ProductList';
import PageHeader from './Components/Page/PageHeader';
import ProductDetails from './Components/Product/ProductDetails/ProductDetails';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <PageHeader />
        </div>
        <Switch>
          <Route exact path='/' component={Productist}/>
          <Route path='/product/id=:id' component={ProductDetails}/>
        </Switch>
      </div>
    );
  }
}

export default App;
