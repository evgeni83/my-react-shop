import React from 'react';

const ProductCard = props => (
    <div className={`product-card product-card--${props.item.slug}`}>
        <a href={props.item.permalink}>
            <h3 className="product-card__title">{props.item.name}</h3>
            <img src={props.item.images[0].src} alt={props.item.images[0].alt}/>

        </a>

    </div>
)

export default ProductCard;