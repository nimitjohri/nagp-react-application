import React, { PureComponent } from "react";
import Product from "../Product";
import { connect } from "react-redux";
import "./ProductList.css";
import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import Row from "react-bootstrap/Row";
import CardDeck from "react-bootstrap/CardDeck";
import productAction from "../../../actions/productAction";
import Pagination from "react-bootstrap/Pagination";
import Col from "react-bootstrap/Col";

let { fetchProducts } = productAction();

class Productist extends PureComponent {
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
    if (
      this.props.location.state &&
      this.props.location.state.searchProducts &&
      this.props.location.state.searchProducts.length > 0 &&
      this.props.location.state.showSearchResults
    ) {
      let searchProducts = this.props.location.state.searchProducts;
      const indexOfLastProduct =
        this.state.currentPage * this.state.productsPerPage;
      const indexOfFirstProduct =
        indexOfLastProduct - this.state.productsPerPage;
      const currentProducts = searchProducts.slice(
        indexOfFirstProduct,
        indexOfLastProduct
      );
      let items = [];
      let count = 1;
      for (
        let number = 1;
        number <= searchProducts.length;
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
            <CardColumns>
              {/* <CardDeck style={{display: 'flex', flexDirection: 'row'}}> */}
              {renderProducts}
              {/* </CardDeck> */}
            </CardColumns>
          </Container>

          <Pagination onClick={this.handlePageChange}>{items}</Pagination>
        </div>
      );
    } else if (
      this.props.location.state &&
      this.props.location.state.searchProducts &&
      this.props.location.state.searchProducts.length === 0 &&
      this.props.location.state.showSearchResults
    ) {
      return <div className="Products">No search result Found</div>;
    } else if (this.props.products && this.props.products.length > 0) {
      const indexOfLastProduct =
        this.state.currentPage * this.state.productsPerPage;
      const indexOfFirstProduct =
        indexOfLastProduct - this.state.productsPerPage;
      const currentProducts = this.props.products.slice(
        indexOfFirstProduct,
        indexOfLastProduct
      );
      let items = [];
      let count = 1;
      for (
        let number = 1;
        number <= this.props.products.length;
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
    }
  }
}

function mapStateToProps(state) {
  return {
    products: state.productsReducer.payload,
    redirect: false,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Productist);
