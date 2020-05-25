import React, { Component } from "react";
import { connect } from "react-redux";
import {
  subtractQuantity,
  addQuantity,
  removeItem,
} from "../../actions/cartAction";
import { Link } from "react-bootstrap-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
class Cart extends Component {
  //to remove the item completely
  handleRemove = (id) => {
    this.props.removeItem(id);
  };

  handleAddQuantity = (id) => {
    this.props.addQuantity(id);
    this.forceUpdate();
  };
  //to substruct from the quantity
  handleSubtractQuantity = (id) => {
    this.props.subtractQuantity(id);
    this.forceUpdate();
  };
  render() {
    if (this.props.items) {
      let addedItems =
        this.props.items.length > 0 ? (
          this.props.items.map((item) => {
            return (
              <div className="cart-item" key={item.id}>
                <div className="item-img">
                  <img
                    src={item.variant[0].colors[0].img}
                    alt={item.variant[0].colors[0].img}
                  />
                </div>

                <div className="item-desc">
                  <span className="title">{item.name}</span>
                  <p>
                    <b>Storage: </b> {item.storage}
                  </p>
                  <p>
                    <b>Price: {item.price}$</b>
                  </p>
                  <div className="add-remove">
                    <span>
                      <FontAwesomeIcon
                        icon={faMinusCircle}
                        size="1x"
                        onClick={() => {
                          this.handleSubtractQuantity(item.id);
                        }}
                      />
                    </span>
                    <span>
                      <b>Quantity: {item.quantity}</b>
                    </span>
                    <span>
                      <FontAwesomeIcon
                        icon={faPlusCircle}
                        size="1x"
                        onClick={() => {
                          this.handleAddQuantity(item.id);
                        }}
                      />
                    </span>
                  </div>
                  <Button
                    variant="outline-danger"
                    onClick={() => {
                      this.handleRemove(item.id);
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            );
          })
        ) : (
          <p>Your Mobile Mart Cart is empty</p>
        );
      let userbill =
        this.props.items.length > 0 ? (
          this.props.items.map((item, index) => {
            return (
              <tbody key={item.id}>
                <tr>
                  <td>{index + 1}</td>
                  <td> {item.name} </td>
                  <td> {item.quantity} </td>
                  <td> {item.price} </td>
                  <td> {item.quantity * item.price} </td>
                </tr>
              </tbody>
            );
          })
        ) : (null);

      return (
        <div className="container">
          <div className="cart">
            <h5>You have ordered:</h5>
            <Row>
            <Col xs={6}>{addedItems}</Col>
            <Col>
            { userbill !== null && 
              <div className="Checkout">
                <h2>Checkout your Orders</h2>
                <Table>
                  <thead>
                    <tr>
                      <th>Sr.No.</th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price Per unit</th>
                      <th> Total price</th>
                    </tr>
                  </thead>
                  {userbill}
                </Table>
                <span>
                  Total Amount to pay:
                <p><b>₹ {this.props.total} </b></p>
                </span>
                <span>
                  To place your Order Please Checout ... 
                  <Button
                    variant="outline-success"
                  >
                    Checkout
                  </Button>
                </span>
              </div>
    }
            </Col>

            </Row>
          </div>
        </div>
      );
    } else {
      return <div> Nothing to see here </div>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.cartReducer.itemsAdded,
    total: state.cartReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => {
      dispatch(removeItem(id));
    },
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: (id) => {
      dispatch(subtractQuantity(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
