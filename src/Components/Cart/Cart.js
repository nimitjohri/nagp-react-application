import React, { Component } from "react"
import { connect } from "react-redux"
import { subtractQuantity, addQuantity, removeItem } from '../../actions/cartAction';
import { Link } from "react-bootstrap-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

class Cart extends Component {

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }

    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
        this.forceUpdate()
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
        this.forceUpdate()
    }
    render() {
        if (this.props.items) {
            let addedItems = this.props.items.length >0 ?
            (
                this.props.items.map(item => {
                    return (
                        <li className="collection-item avatar" key={item.id}>
                        <div className="item-img"> 
                            <img src={item.variant[0].colors[0].img} alt={item.variant[0].colors[0].img} className=""/>
                        </div>
                    
                        <div className="item-desc">
                            <span className="title">{item.name}</span>
                            <p><b>Storage: </b> {item.storage}</p>
                            <p><b>Price: {item.price}$</b></p> 
                            <p>
                                <b>Quantity: {item.quantity}</b> 
                            </p>
                            <div className="add-remove">
                            <span>
                            <FontAwesomeIcon icon={faPlusCircle} size="1x" onClick={()=>{this.handleAddQuantity(item.id)}} />
                            </span>
                            <span>
                            <FontAwesomeIcon icon={faMinusCircle} size="1x" onClick={()=>{this.handleSubtractQuantity(item.id)}} /> 
                            </span>
                           </div>
                            <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                        </div>
                        
                   </li>    
                    )
                })
            ):
            (
                <p>Nothing.</p>
            )
            return(
                <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>  
            </div>
            )
    
        } else {
            return (
                <div> Nothing to see here </div>
            )
        }
    
    }

}

const mapStateToProps = (state)=>{
    return{
        items: state.cartReducer.itemsAdded
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Cart);
