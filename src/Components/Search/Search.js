import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { fetchProductsOnSearch } from "../../actions/productAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: [],
      loading: false,
      showSearchResults: false,
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
    } else if (this.state.query === "") {
      this.setState({ showSearchResults: false });
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
            variant="outline-info"
            onClick={this.handleOnSearchButtonClick}
          >
            Search
          </Button>
        </Form>
        {this.props.currentProducts.length > 0 ? (
          <Redirect
            to={{
              pathname: "/",
              state: {
                searchProducts: this.props.currentProducts,
                showSearchResults: this.state.showSearchResults,
              },
            }}
          />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                searchProducts: [],
                showSearchResults: this.state.showSearchResults,
              },
            }}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentProducts: state.productsReducer.searchPayload,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductsOnSearch: (query) => dispatch(fetchProductsOnSearch(query)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

{
  /* <InputGroup className="sm-2">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            className="mr-sm-2"
            placeholder="Search..."
            aria-label="search"
            aria-describedby="basic-addon1"
            onChange={this.handleOnInputChange}
            />
            <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.handleOnSearchButtonClick}>Search</Button>
          </InputGroup.Append>
        </InputGroup> */
}
