import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductsOnSearch } from "../../actions/productAction";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect, withRouter } from "react-router-dom";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.handleOnSearchButtonClick = this.handleOnSearchButtonClick.bind(this);
  }

  handleOnInputChange = (event) => {
    const query = event.target.value;
    this.setState({ query, loading: true, message: "" });
  };

  handleOnSearchButtonClick() {
    if (this.state.query !== "") {
      this.props.fetchProductsOnSearch(this.state.query);
      this.setState({ showSearchResults: true });
      this.props.history.push("/");
    } else if (this.state.query === "") {
      console.log("empty");
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="sm-2">
        <Form inline>
          <FormControl
            className="mr-sm-2"
            placeholder="Search..."
            aria-label="search"
            aria-describedby="basic-addon1"
            onChange={this.handleOnInputChange}
          />
          <Button
            id="searchButton"
            variant="outline-info"
            onClick={this.handleOnSearchButtonClick}
          >
            Search
          </Button>
        </Form>
        {this.props.searchProducts.length > 0 ? (
          <Redirect
            to={{
              pathname: "/",
              state: {
                searchProducts: this.props.searchProducts,
              },
            }}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchProducts: state.productsReducer.searchProducts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductsOnSearch: (query) => dispatch(fetchProductsOnSearch(query)),
  };
};
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchBar)
);
