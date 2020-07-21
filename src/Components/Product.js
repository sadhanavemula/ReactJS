import React from 'react';

class Product extends React.Component {

  render() {
    const data  = this.props;
    return (
      <tr >
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.quantity}</td>        
      <td>{data.price}</td>
    </tr>
    );
  }
}

export default Product;
