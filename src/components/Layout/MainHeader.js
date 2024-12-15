import React from 'react'
import classes from "./MainHeader.module.css"
import CartButton from "../Cart/CartButton"
import { Link } from 'react-router-dom'
function MainHeader(props) {
     return (
          <header className={classes.header}>
               <nav>
                    <h1>
                         <Link to='/'>
                              Redux Cart
                         </Link>
                    </h1>
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