import React from 'react';
import s from './MyButton.module.scss';

const MyButton = (props) => {
    return (
        <div>
            <button className={`${s.myButton} ${props.className}`}>{props.children}</button>
        </div>
    )
}

export default MyButton