import React from 'react'
import { NavLink } from 'react-router-dom'

import Cart from '../features/cart'

export default function CartPage(props) {
  return <div>
    <h2>My Cart</h2>
    <Cart />

    <div>
      <NavLink to='/checkout'>Check out now</NavLink>
    </div>
  </div>
}