import React from 'react'
import ProductItem from "./ProductItem"
import classes from "./Product.module.css"
function Product(props) {
  const foodArray = [
    {
      id: "p1",
      price: 5,
      title: "Osh",
      description: "Palov"
    },
    {
      id: "p2",
      price: 3,
      title: "Shashlik",
      description: "Kabob"
    },
    {
      id: "p3",
      price: 4,
      title: "Norin",
      description: "Norin"
    },
  ]
  return (
    <div>
          <section className={classes.products}>
               <h2>Buy your favourite products</h2>
               <ul>
                    {foodArray.map((product)=>(
                      <ProductItem key={product.id} {...product} />
                    ))}
               </ul>
          </section>
    </div>
  )
}

export default Product