import React from 'react'

import Card from '../../Card'
import styles from './product-card.module.scss'

const ProductCard = ({ name, img_url, price, description}) => {
    return (
        <Card>
        <h2>{name}</h2>
        <img className={styles.image} src={img_url} alt="product view" />
        <h4>{description}</h4>
        <h3>${price/100}</h3>
        </Card>
        )
    } 

export default ProductCard