import React from 'react';
import style from './productCard.module.css';
import { Link } from 'react-router-dom';
import Label from '../Label/Label';

const ProductCard = props => {
    const { item } = props;

    return (
        <div className={ `${ style.card } ${ style.card }--${ item.slug }` }>
            <Link className={ style.link } to={ new URL( item.permalink ).pathname }>
                { item.on_sale && <Label regularPrice={ item.regular_price } salePrice={ item.sale_price }/> }
                <div className="product-card__image-wrapper">
                    <img className={ style.image } src={ item.images[ 0 ].src }
                         alt={ item.images[ 0 ].alt }/>
                </div>
                <h3 className="product-card__title">{ item.name }</h3>
                <div className="product-card__price" dangerouslySetInnerHTML={ { __html: item.price_html } }/>
            </Link>
        </div>
    );
};
export default ProductCard;