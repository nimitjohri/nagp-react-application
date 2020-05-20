import React, { useState, useEffect, PureComponent } from "react";
import Product from "../Product";
import { connect } from "react-redux";
import "./ProductList.css";
import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import { bindActionCreators } from 'redux';
import productAction from '../../../actions/productAction'

let { fetchProducts } = productAction()


class Productist extends PureComponent {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //   }
  // }

  componentDidMount() {
    // making all API calls and store in the redux-store
    this.props.fetchProducts();
  }

  render() {
    // useEffect(() => {

    // })
    // // console.log("this.props", this.props.loading)
    // console.log('products', this.props.products)
    if (this.props.products && this.props.products.length > 0) {
      return (
        <div className="Products">
          <Container fluid style={{ padding: "8px" }}>
            <CardColumns>
              {this.props.products.map((product) => {
                return (
                  <Product
                    key={product.id}
                    product={product}
                  />
                );
              })}
            </CardColumns>
          </Container>
        </div>
      );
    } else {
      return <div className="Products">No Phones Found</div>;
    }

  }
     
  }

  function mapStateToProps (state) {
    return {
      products: state.productsReducer.payload,
    };
  }

  const mapDispatchToProps = dispatch => {
    return {
      fetchProducts: () => dispatch(fetchProducts())    
    };
  
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Productist);
