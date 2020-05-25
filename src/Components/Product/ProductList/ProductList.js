import React, { Component } from "react";
import Product from "../Product";
import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import {fetchProducts} from '../../../actions/productAction';
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import { faArrowDown, faArrowUp, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ProductList.css"

class ProductList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      productsPerPage: 4,
      showFilterResults: false
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.productsToDisplay = []

  }

  sortByPriceLowToHigh = () => {
      this.productsToDisplay.sort((a, b) => (a.price - b.price))
      this.setState({showFilterResults: !this.state.showFilterResults})
  } 

  sortByPriceHighToLow = () => {
    this.productsToDisplay.sort((a, b) => (b.price - a.price))
    this.setState({showFilterResults: !this.state.showFilterResults})
  }

  removeFilter = () => {
    window.location.reload()
  }

  handlePageChange(event) {
    this.setState({ currentPage: Number(event.target.text) });
  }

  componentDidMount() {
    // making all API calls and store in the redux-store
    this.props.fetchProducts();
  }

  render() {
    (this.props.searchProducts && this.props.showSearchProducts && !this.state.showFilterResults) ? (
        this.productsToDisplay = this.props.searchProducts
      ): (
          this.productsToDisplay = this.props.products
      )
    if (this.productsToDisplay.length > 0) {
        const indexOfLastProduct =
          this.state.currentPage * this.state.productsPerPage;
        const indexOfFirstProduct =
          indexOfLastProduct - this.state.productsPerPage;
        const currentProducts = this.productsToDisplay.slice(
          indexOfFirstProduct,
          indexOfLastProduct
        );
        let items = [];
        let count = 1;
        for (
          let number = 1;
          number <= this.productsToDisplay.length;
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
            <ButtonGroup aria-label="Basic example">
            <Button variant="outline-primary" onClick={() => this.removeFilter()} > 
               <FontAwesomeIcon icon={faTimes} />
               RemoveFilter</Button>

              <Button variant="outline-primary" onClick={() => this.sortByPriceLowToHigh()} > 
               <FontAwesomeIcon icon={faArrowUp} />
               Low To High</Button>

               <Button variant="outline-primary" onClick={() => this.sortByPriceHighToLow()} > 
               <FontAwesomeIcon icon={faArrowDown} />
               High To Low</Button>

            </ButtonGroup>
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
      showSearchProducts: state.productsReducer.showSearchProducts,
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      fetchProducts: () => {
        dispatch(fetchProducts());
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
  