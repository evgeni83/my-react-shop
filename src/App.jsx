import React from 'react';
import style from './app.module.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            products: [],
            menu: []
        };
    }

    getProducts() {
        fetch( 'https://my-react-shop.loc/wp-json/wc/v2/products?consumer_key=ck_e0813c7c600712e4d8bf5b3dd710a6d4025b704c&consumer_secret=cs_264c5c98e15639ecb77f116296498f4d1e9cda2d' )
            //     'consumer_key': 'ck_e0813c7c600712e4d8bf5b3dd710a6d4025b704c',
            //     'consumer_secret': 'cs_264c5c98e15639ecb77f116296498f4d1e9cda2d'
            .then( response => response.json() )
            .then( respJson => {
                this.setState( {
                    products: respJson,
                } );
                console.dir( this.state.products );
            } )
            .catch( error => {
                console.error( error );
            } );
    }

    getMenuItems() {
        fetch( 'https://my-react-shop.loc/wp-json/wp/v2/menu' )
            .then( response => response.json() )
            .then( respJson => {
                this.setState( {
                    menu: respJson,
                } );
                console.dir( this.state.menu );
            } )
            .catch( error => {
                console.error( error );
            } );
    }

    componentDidMount() {
        this.getProducts();
        this.getMenuItems();
    }


    render() {
        return (
            <div className={style.app}>
                <Header menu={ this.state.menu }/>
                <Main products={ this.state.products }/>

            </div>
        );
    }
}

export default App;
