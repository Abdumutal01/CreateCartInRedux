import React from 'react'
import classes from "./MainHeader.module.css"
import CartButton from "../Cart/CartButton"
function MainHeader(props) {
  return (
    <header className={classes.header}>
          <nav>
          <h1>Redux Cart</h1>
               <ul>
                    <li>
                         <CartButton />
                    </li>
               </ul>
          </nav>
    </header>
  )
}

export default MainHeader