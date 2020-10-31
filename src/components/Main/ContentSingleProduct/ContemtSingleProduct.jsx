import React from 'react';
import { Link } from 'react-router-dom';
import style from './contentSingleProduct.module.css';

const ContentSingleProduct = props => {
    const { item } = props;
    return (
        <div className="single-product">
            <Link className={ style.link } to="/">Back</Link>
            <div className={ style.content }>
                <div className="single-product__image-wrapper">
                    <img className="single-product__image" src={ item.images[ 0 ].src }
                         alt={ item.images[ 0 ].alt }/>
                </div>
                <div className="single-product__info">
                    <h1 className="single-product__title">{ item.name }</h1>
                    <div className="single-product__price" dangerouslySetInnerHTML={ { __html: item.price_html } }/>
                    <div className="single-product__descr" dangerouslySetInnerHTML={ { __html: item.description } }/>
                    <button className="add-to-cart">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ContentSingleProduct;