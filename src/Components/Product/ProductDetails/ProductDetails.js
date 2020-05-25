import React, { Component } from "react";
import productAction from "../../../actions/productAction";
import Card from "react-bootstrap/Card";
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import addItemToCart from "../../../actions/cartAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./ProductDetails.css";
import { withRouter } from "react-router-dom";
import { toastr } from "react-redux-toastr";

let { fetchProductById } = productAction();

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVariant: {},
    };
  }

  handleAddToCartClick = (id, product) => {
    console.log("product to add id", id);
    console.log("product to be added", product);
    this.props.addItemToCart(id, product);
    toastr.info('Product Added To Cart', `${product.name} added to cart`)
  };

  handleClickGoBack = () => {
    this.props.history.go(-1)
  }
  componentDidMount() {
    "";
    this.props.fetchProductById(this.props.match.params.id);
  }

  render() {
    if (this.props.product && this.props.product.length > 0) {
      return (
        <div className="ProductDetails">
          <span className="go-back">
            <Button variant="outline-primary"
              onClick={this.handleClickGoBack}
            >
              <FontAwesomeIcon icon={faArrowLeft} size="sm" />{"  "}
              Go Back
            </Button>
          </span>
          <div className="details-container">
            <Row className="justify-content-md-center">
              <Col md lg="2"></Col>
              <Image
                src={this.props.product[0].variant[0].colors[0].img}
                rounded
              />
              <Col>
                <Card
                  border={"primary"}
                  style={{ width: "25rem", padding: "4px" }}
                >
                  <Card.Header>
                    <span>
                      {this.props.product[0].name} (
                      {this.props.product[0].variant[0].colors[0].color},
                      {this.props.product[0].variant[0].ram} RAM,{" "}
                      {this.props.product[0].variant[0].storage} Storage)
                    </span>
                  </Card.Header>
                  <Card.Body>
                    <span>{this.props.product[0].name}</span>
                    <br></br>
                    MRP:{" "}
                    <span className="mrp">
                      ₹ {this.props.product[0].variant[0].price}
                    </span>
                    <br></br>
                    Storage:{" "}
                    <span className="storage">
                      {this.props.product[0].storage}
                    </span>
                    <br></br>
                    RAM:{" "}
                    <span className="ram">
                      {this.props.product[0].ram}
                    </span>
                  </Card.Body>
                  <Card.Footer>
                    <div>
                      <Button
                        variant="primary"
                        onClick={() =>
                          this.handleAddToCartClick(
                            this.props.product[0].id,
                            this.props.product[0]
                          )
                        }
                      >
                        Add To Cart
                      </Button>{" "}
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      );
    } else {
      return <div className="Products">No Phones Found</div>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.productsReducer.payload,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductById: (id) => dispatch(fetchProductById(id)),
    addItemToCart: (id, product) => dispatch(addItemToCart(null, id, product)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDetails));
