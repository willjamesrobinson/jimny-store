import React, { useState } from 'react'
import css from './Products.module.css'
import Plane from '../../assets/plane.png'
import { ProductsData } from "../../data/products";

const Products = () => {

  const [MenuProducts, setMenuProducts] = useState(ProductsData)
  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Our Featured Products</h1>

      <div className={css.products}>
        <ul className={css.menu}>
          <li>All</li>
          <li>Accessories</li>
          <li>Outdoors</li>
          <li>Recovery</li>
        </ul>


        <div className={css.list}>
            {MenuProducts.map((product, i) => (
              <div className={css.product}>
                <div className="left-s">
                  <div className="name">
                    <span>{product.name}</span>
                    <span>{product.detail}</span>
                  </div>
                  <span>${product.price}</span>
                  <div>Show now</div>
                </div>
                <img src={product.img} alt="" className="img-p" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Products
