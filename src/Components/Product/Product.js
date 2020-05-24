import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './Product.css'

class Product extends Component {
    render() {
        return (
            <div className="Product">
            <Card 
                border={'primary'}
                key={this.props.id}
            >
                <Card.Header>
                    <Link to={{ pathname:`/product/id=${this.props.product.id}` }}>
                        <span>{this.props.product.name} ({this.props.product.variant[0].colors[0].color}, {this.props.product.variant[0].ram} RAM, {this.props.product.variant[0].storage} Storage)</span>
                    </Link>
                </Card.Header>
                <Card.Img variant="top" src={this.props.product.variant[0].colors[0].img}  />
                <Card.Body>
                    <span>{this.props.product.name}</span><br></br>
    
                    MRP:  <span className="mrp">₹ {this.props.product.variant[0].price}</span>
                </Card.Body>
                <Card.Footer>
                    <div>
                    <Button variant="primary">Add To Cart</Button>{' '}
                    <Link to={{ pathname:`/product/id=${this.props.product.id}` }}>
                    <Button variant="info">View Details </Button>{' '}
                    </Link>
                    </div>
                </Card.Footer>
            </Card>
        </div>
        );    
    }
}    


export default Product;