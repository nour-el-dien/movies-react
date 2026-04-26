import React, { Component } from 'react'
import Child from '../Child/Child'

export default class Parent extends Component {
    state = { 

         Products : [
            {id:1123 , code:'samsung', count:5, price:25000, category:"mobile", onSale:false},
            {id:209685 , code:'apple', count:5, price:235000, category:"mobile", onSale:true},
            {id:64634663 , code:'toshiba', count:5, price:250100, category:"mobile", onSale:false},
            {id:24 , code:'nokia', count:5, price:2500, category:"mobile", onSale:true},
            {id:5888 , code:'hts', count:5, price:2500, category:"mobile", onSale:false},
            {id:64567 , code:'hola', count:5, price:2500, category:"mobile", onSale:true},
            {id:71234567 , code:'nosicokia', count:5, price:2500, category:"mobile", onSale:true},
            {id:876543 , code:'touch', count:5, price:2500, category:"mobile", onSale:true},
         ] 
            }
      
      updateProduct = (productIndex ,step) =>
      {
      console.log(productIndex);

      let Products = [...this.state.Products];
      Products[productIndex].count += step;

      this.setState({Products});
     
    }   
    
    
      deleteProduct = (productId) =>
        {
        console.log("delete  ..", productId, this);
        let myProducts = [...this.state.Products];
        myProducts = myProducts.filter((product) => product.id !== productId); // Example: delete product with id 1
        this.setState({Products: myProducts});
      }

  render() {
    return   <>
    
      <div className='container'>
        <div className='bg-dark p-4'>
          <div className="row gy-3">
            {this.state.Products.map( (x ,index) => <Child 
            
            update={this.updateProduct} 
            delete ={this.deleteProduct} 
            key={x.id} Products={x} 
            productIndex = {index}
            />)}
          </div>

        </div>
      </div>
    </>
  }
}
