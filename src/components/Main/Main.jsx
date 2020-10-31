import React from 'react';
import { Route } from 'react-router-dom';
import ContentSingleProduct from './ContentSingleProduct/ContemtSingleProduct';
import ProductCard from './ProductCard/ProductCard';
import style from './main.module.css';

const Main = ( { products } ) => {
    return (
        <main className={ style.main }>
            <Route exact path='/'>
                <div className="container">
                    <div className={ style.products }>
                        { products.map( item => {
                            return <ProductCard item={ item } key={ item.id }/>;
                        } ) }
                    </div>
                </div>
            </Route>

            { products.map( item => {
                const url = new URL( item.permalink );
                return (
                    <Route path={ url.pathname } key={ item.id }>
                        <div className="container">
                            <ContentSingleProduct item={ item }/>
                        </div>
                    </Route>
                );
            } ) }
        </main>
    );
};

export default Main;