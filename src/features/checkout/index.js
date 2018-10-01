import React from 'react'
import { connect } from  'react-redux'

import Cart from '../cart'
import CheckoutForm from './form'

function submitOrder(values) {
  console.log(values)
}

function Checkout(props) {
  // action="https://student-example-api.herokuapp.com/"
  
  return <div>
    <div style={{ border: "1px solid black" }}>
      <Cart />
    </div>

    <CheckoutForm onSubmit={submitOrder} />
    
  </div>
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Checkout)