import React, { Component } from "react";
import Product from "../Product";
import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import {fetchProducts} from '../../../actions/productAction';
import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      productsPerPage: 4,
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(event) {
    this.setState({ currentPage: Number(event.target.text) });
  }

  componentDidMount() {
    // making all API calls and store in the redux-store
    this.props.fetchProducts();
  }

  render() {
      let productsToDisplay;
      (this.props.searchProducts && this.props.searchProducts.length > 0) ? (
        productsToDisplay = this.props.searchProducts
      ): (
          productsToDisplay = this.props.products
      )
    if (productsToDisplay.length > 0) {
        const indexOfLastProduct =
          this.state.currentPage * this.state.productsPerPage;
        const indexOfFirstProduct =
          indexOfLastProduct - this.state.productsPerPage;
        const currentProducts = productsToDisplay.slice(
          indexOfFirstProduct,
          indexOfLastProduct
        );
        let items = [];
        let count = 1;
        for (
          let number = 1;
          number <= productsToDisplay.length;
          count++, number = number + this.state.productsPerPage
        ) {
          items.push(
            <Pagination.Item
              key={count}
              active={count === this.state.currentPage}
            >
              {count}
            </Pagination.Item>
          );
        }
        const renderProducts = currentProducts.map((product, index) => {
          return <Product key={index} product={product} />;
        });
        return (
          <div className="Products">
            <Container fluid style={{ padding: "8px", alignContent: "center" }}>
            <Row className="justify-content-center">
              {renderProducts}
              </Row>
            </Container>
  
            <Pagination onClick={this.handlePageChange}
            
            >{items}</Pagination>
          </div>
        );
      } else {
        return <div className="Products">No search result Found</div>;
      }  }
}

function mapStateToProps(state) {
    return {
      products: state.productsReducer.payload,
      searchProducts: state.productsReducer.searchProducts,
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchProducts: () => {
        dispatch(fetchProducts());
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
  