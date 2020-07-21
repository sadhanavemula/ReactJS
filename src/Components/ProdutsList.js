import React from 'react';
import Product from './Product';

class ProductList extends React.Component {

  render() {
    const data  = this.props;
    return (
      <Product id = {data.id}  name={data.name} quantity={data.quantity} price={data.price} ></Product>          
         );
  }
}
export default ProductList;
