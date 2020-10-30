import React from 'react';
import './productCard.css';
import Label from '../Label/Label';

const ProductCard = props => {
    const { item } = props;

    return (
        <div className={ `product-card product-card--${ item.slug }` }>
            <a className="product-card__link" href={ item.permalink }>
                { item.on_sale && <Label regularPrice={ item.regular_price } salePrice={ item.sale_price }/> }
                <div className="product-card__image-wrapper">
                    <img className="product-card__image" src={ item.images[ 0 ].src }
                         alt={ item.images[ 0 ].alt }/>
                </div>
                <h3 className="product-card__title">{ item.name }</h3>
                <div className="product-card__price" dangerouslySetInnerHTML={ { __html: item.price_html } }/>
            </a>
        </div>
    );
};
export default ProductCard;