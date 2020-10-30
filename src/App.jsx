import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import ContentSingleProduct from './components/ContentSingleProduct/ContemtSingleProduct';
import ProductCard from './components/ProductCard/ProductCard';

class App extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        console.log( 'sending request' );
        return fetch( 'https://my-react-shop.loc/wp-json/wc/v2/products?consumer_key=ck_e0813c7c600712e4d8bf5b3dd710a6d4025b704c&consumer_secret=cs_264c5c98e15639ecb77f116296498f4d1e9cda2d' )
            //     'consumer_key': 'ck_e0813c7c600712e4d8bf5b3dd710a6d4025b704c',
            //     'consumer_secret': 'cs_264c5c98e15639ecb77f116296498f4d1e9cda2d'
            .then( response => response.json() )
            .then( respJson => {
                this.setState( {
                    data: respJson,
                } );
                console.dir( this.state.data );
                // this.state.data.forEach( item => {
                //     console.log(item.on_sale);
                // })
            } )
            .catch( error => {
                console.error( error );
            } );
    }


    render() {
        return (
                <div className="App">
                    <Route exact path='/'>
                        <main className="main">
                            <div className="products">
                                { this.state.data.map( item => {
                                    return <ProductCard item={ item } key={ item.id }/>;
                                } ) }
                            </div>
                        </main>
                    </Route>

                    { this.state.data.map( item => {
                        const url = new URL(item.permalink);
                        return (
                            <Route path={url.pathname} key={ item.id }>
                                <ContentSingleProduct item={ item } />
                            </Route>
                        )
                    } ) }
                </div>
        );
    }
}

export default App;
