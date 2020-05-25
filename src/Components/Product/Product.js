import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link, withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Product.css";
import addItemToCart from "../../actions/cartAction";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

class Product extends Component {
  handleAddToCartClick = (id, product) => {
    console.log("product to add id", id);
    console.log("product to be added", product);
    this.props.addItemToCart(id, product);
    toastr.info("Product Added To Cart", `${product.name} added to cart`);
  };

  render() {
    return (
      <div className="Product">
        <Card border={"primary"} key={this.props.id}>
          <Card.Header>
            <Link to={{ pathname: `/product/id=${this.props.product.id}` }}>
              <span>
                {this.props.product.name} (
                {this.props.product.variant[0].colors[0].color},{" "}
                {this.props.product.variant[0].ram} RAM,{" "}
                {this.props.product.variant[0].storage} Storage)
              </span>
            </Link>
          </Card.Header>
          <Card.Img
            variant="top"
            src={this.props.product.variant[0].colors[0].img}
          />
          <Card.Body>
            <span>{this.props.product.name}</span>
            <br></br>
            MRP:{" "}
            <span className="mrp">₹ {this.props.product.variant[0].price}</span>
          </Card.Body>
          <Card.Footer>
            <div>
              <Button
                variant="primary"
                onClick={() =>
                  this.handleAddToCartClick(
                    this.props.product.id,
                    this.props.product
                  )
                }
              >
                Add To Cart
              </Button>{" "}
              <Link to={{ pathname: `/product/id=${this.props.product.id}` }}>
                <Button variant="info">View Details </Button>{" "}
              </Link>
            </div>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (id, product) => dispatch(addItemToCart(null, id, product)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Product));
