import React from 'react';
import style from './label.module.css';

const Label = ( { regularPrice, salePrice } ) => {
    const diff = regularPrice - salePrice;
    const percent = ( diff * 100 / regularPrice ).toFixed();

    return (
        <div className={ style.label }>-{ percent }%</div>
    );
};

export default Label;
