import React from 'react';
import style from './label.module.css';

const Label = props => {
    const regPrice = parseInt( props.regularPrice );
    const salePrice = parseInt( props.salePrice );
    const diff = regPrice - salePrice;
    const percent = ( diff * 100 / regPrice ).toFixed();

    return (
        <div className={style.label}>-{ percent }%</div>
    );
};

export default Label;
