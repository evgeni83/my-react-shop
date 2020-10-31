import React from 'react';
import style from './header.module.css';
import NavMenu from './NavMenu/NavMenu';

const Header = ( { menu } ) => {
    return (
        <header className={ style.header }>
            <div className="container">
                <div className={ style.inner }>
                    <div>LOGO</div>
                    <NavMenu menu={ menu }/>
                    <div>CART</div>
                </div>
            </div>
        </header>
    );
};

export default Header;