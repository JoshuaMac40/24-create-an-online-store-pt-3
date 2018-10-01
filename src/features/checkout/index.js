import React from 'react'
import { connect } from  'react-redux'

import Cart from '../cart'
import CheckoutForm from './form'
import fetchApi from '../../modules/fetch-api'

function submitOrder(values, cart) {
  const { email, name } = values.order
  console.log(cart)
  fetchApi("post", "https://student-example-api.herokuapp.com/v1/orders", {
    order: {
      name: name,
      email: email,
      order_items_attributes: cart.map(item => ({
        product_id: item.id,
        qty: item.quantity,
      }))
    }
  }).then(json => {
    if (json.errors) {
      alert('something went wrong with the order!')
    }
    document.location.href = `/orders/${json.id}`
  })
}

function Checkout(props) {
  const { cart } = props

  return <div>
    <div style={{ border: "1px solid black" }}>
      <Cart />
    </div>

    <CheckoutForm onSubmit={(values) => submitOrder(values, cart)} />
    
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