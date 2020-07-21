  import React from 'react';
  import ProdutsList from './ProdutsList';

  class AllProductsPage extends React.Component {
      constructor() {
        super();
        this.state = {
      titile: 'Products List',
      products: [
      {
          id: "1",
          name: "Moto G5",
          quantity: "2",
          price: 13000
        },
        {
          id: "2",
          name: "Racold Geyser",
          quantity: "3",
          price: 6000
        },
        {
          id: "3",
          name: "Dell Inspiron",
          quantity: "4",
          price: 5000
        } 
      ]
      }
      }
      render() {
          const data = this.state.products;
          return (
      <div>
          <h1>{this.state.titile}</h1>
        <div>
          <table border="1" >
            <thead>
              <tr>
                  <th>ID</th>
                  <th>Produt Name</th>
                  <th>Quantity</th>        
                  <th>Price</th>
              </tr>
            </thead>
          <tbody>
             {data.map((product, index) => (
             <ProdutsList id = {product.id} name={product.name} quantity={product.quantity} price={product.price}> </ProdutsList>
              ))}
          </tbody>
          </table>  
         </div>
      </div>    
          );
    }
  }

  export default AllProductsPage;
