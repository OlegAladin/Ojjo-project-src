import React from 'react';
import s from './MainCatalogButton.module.scss';

const MainCatalogButton = (props) => {
    return (
        <div className={s.buttonBlock}>
            <button onClick={() => { props.onSelect(props.id) }} className={`${s.button} ${props.isSelected ? s.active : ''}`}>{props.children}</button>
            <div className={`${s.buttonDecoration} ${props.isSelected ? s.activeDecoration : ''}`}></div>
        </div>
    )
}

export default MainCatalogButton