import React from 'react';
import { Link } from 'react-router-dom';
import style from './navMenu.module.css';

const NavMenu = ( { menu } ) => {
    return (
        <nav className={ style.nav }>
            <ul className={ style.list }>
                { menu.map( item => {
                    return (
                        <li className={ style.item } key={ item.ID }>
                            <Link className={ style.link } to={ new URL( item.url ).pathname }>{ item.title }</Link>
                        </li>
                    );
                } ) }
            </ul>
        </nav>
    );
};

export default NavMenu;