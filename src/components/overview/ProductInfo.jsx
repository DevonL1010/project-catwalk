import React from 'react';
import styles from './overview.module.css'
import StyleSelector from './StyleSelector.jsx'
import AddToCart from './addToCart/AddToCart.jsx'
import Stars from '../Stars.jsx'

const ProductInfo = (props) => {


  return(
    <div className={styles.infoComponent}>

      <div className={styles.starReview}>
        <Stars rating={props.product.meta.average}/>
        <a href='#reviewsWidget'>Read all reviews</a>
      </div>

      <div className={styles.category}>
        <p>{props.product.info.category}</p>
      </div>

      <div className={styles.title}>
        <p>{props.product.info.name}</p>
      </div>

      <div className={styles.price}>
        <p>PRICE</p>
      </div>

      <div className={styles.styles}>
        <StyleSelector styles={props.product.styles.results}/>
      </div>

      <div className={styles.addToCart} >
        <AddToCart skus={props.styles[props.styleIndex].skus}/>
      </div>

    </div>
  )
};

export default ProductInfo;
