import React, {  Component, useEffect } from 'react';
import productAction from '../../../actions/productAction'
import { connect } from 'react-redux';

let { fetchProducts, fetchProductById } = productAction()


class ProductDetails extends Component {

    constructor(props) {
        console.log('in constyructor')
        super(props);
    }

    componentWillMount(){
        console.log('will mount')
    }

    // shouldComponentUpdate() {
    //     return true;
    // }
    componentDidMount() {
        this.props.fetchProductById(this.props.match.params.id)
    }
    render() {
        console.log('here')
        // console.log('--- product ----', this.props.product)
        // this.props.fetchProductById(this.props.match.params.id)
        return (
            <div>
            <p> I m here </p>
            <p> Id of phone is {this.props.match.params.id} </p>
            </div>    
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.productsReducer.payload
    }
}


const mapDispatchToProps = dispatch => {
    return {
        fetchProductById: (id) => dispatch(fetchProductById(id))    
    };
  
  };


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

// export default ProductDetails;