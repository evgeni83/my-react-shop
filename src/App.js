import React from 'react';
import './App.css';
import ProductCard from './components/product-card';

class App extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        return fetch( 'https://my-react-shop.loc/wp-json/wc/v2/products?consumer_key=ck_e0813c7c600712e4d8bf5b3dd710a6d4025b704c&consumer_secret=cs_264c5c98e15639ecb77f116296498f4d1e9cda2d' )
            //     'consumer_key': 'ck_e0813c7c600712e4d8bf5b3dd710a6d4025b704c',
            //     'consumer_secret': 'cs_264c5c98e15639ecb77f116296498f4d1e9cda2d'
            .then( response => response.json() )
            .then( respJson => {
                this.setState( {
                    data: respJson,
                } );
                console.dir( this.state.data );
            } )
            .catch( error => {
                console.error( error );
            } );
    }


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="products">
                        { this.state.data.map( item => {
                            return <ProductCard item={item} key={item.id} />;
                        } ) }
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
