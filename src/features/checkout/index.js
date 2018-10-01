import React from 'react'
import { connect } from  'react-redux'

function Checkout(props) {
  return <form action="https://student-example-api.herokuapp.com/">
    <input type={} />
  </form>

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)