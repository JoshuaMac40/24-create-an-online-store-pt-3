import React from 'react'

import Order from '../features/order'

export default function OrdersPage(props) {
  console.log()
  return <div>
    <h2>My order</h2>

    <Order id={props.match.params.id} />

  </div>
}