import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';
import './Product.css'

class Product extends Component {
    render() {
        return (
            <div className="Product">
            <Card 
                border={'primary'}
                key={this.props.id}
                style={{ width: '25rem', padding: '4px'  }}
            >
                <Card.Header>
                    <Link to={{ pathname:`/product/id=${this.props.product.id}` }}>
                        <span>{this.props.product.name} ({this.props.product.variant[0].colors[0].color}, {this.props.product.variant[0].ram} RAM, {this.props.product.variant[0].storage} Storage)</span>
                    </Link>
                </Card.Header>
                <Card.Body>
                    <span>{this.props.product.name}</span><br></br>
    
                    MRP:  <span className="mrp">₹ {this.props.product.variant[0].price}</span>
                </Card.Body>
            </Card>
        </div>
        );    
    }
}    


export default Product;