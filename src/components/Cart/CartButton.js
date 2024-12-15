import React from 'react'
import classes from "./CartButton.module.css"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function CartButton() {
  const total = useSelector(state => state.cart.totalQuantity)

  return (
    <Link to='/cart'

      className={classes.button}
    >
      <span>My Cart</span>
      <span className={classes.badge}>
        {total}
      </span>
    </Link>
  )
}

export default CartButton;