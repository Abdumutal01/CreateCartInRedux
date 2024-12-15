import React from 'react'
import classes from "./ProductItem.module.css"
import Card from "../UI/Card"
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cart-slice'
function ProductItem(props) {
     const { title, price, description, id } = props
     const dispatch = useDispatch()

     const addToCartHandler = (id,title, price,description) => {
          dispatch(cartActions.addItemToCart({
               id,
               title,
               price,
               description
          }))
     }
     return (
          <li className={classes.item}>
               <Card>
                    <header>
                         <h3>{title}</h3>
                         <div className={classes.price}>${price.toFixed(2)}</div>
                    </header>
                    <p>{description}</p>
                    <div className={classes.actions}>
                         <button
                              onClick={()=> addToCartHandler(id, title, price, description)}
                         >
                              Add To Cart
                         </button>
                    </div>
               </Card>
          </li>
     )
}

export default ProductItem
