import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    // destructuring ..
    let{code, count, price, category , onSale} = this.props.Products;
    return <> 

          <div className='col-md-3'>
            <div className="bg-white p-3 position-relative">
              <h5>Code : {code}</h5>
              <h5>Count : {count}</h5>
              <h5>Price : {price}</h5>
              <h5>Category : {category}</h5>
              {onSale ?  <div className="text-white bg-danger position-absolute top-0 end-0">On Sale</div> : null }
              <button onClick={() => this.props.delete(this.props.Products.id)} className='btn btn-danger' >Delete</button>
              <button onClick={() => this.props.update(this.props.productIndex, 1)} className='btn btn-info ms-2' >+</button>
              <button onClick={() => this.props.update(this.props.productIndex, -1) } className='btn btn-info ms-2'disabled={count===0} >-</button>
              </div>
            </div>

    </>
  }
}
