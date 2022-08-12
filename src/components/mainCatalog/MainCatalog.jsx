import React from 'react';
import s from './mainCatalog.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectButton } from '../../redux/mainCatalogButtonReducer';
import MainCatalogButton from '../UI/MainCatalogButton';
import MainCatalogBlock from './MainCatalogBlock/MainCatalogBlock';

const MainCatalog = (props) => {

    const dispatch = useDispatch();
    const mainCatalogButton = useSelector(state => state.mainCatalogButton.buttons);
    const onSelect = (id) => {
        dispatch(selectButton(id));
    };

    return (
        <div className='wrapper'>
            <div className={s.mainCatalog}>
                <h3>К мероприятиям</h3>
                <h2>Настоящая красота здесь!</h2>
                <div className={s.buttonsBlock}>
                    {
                        mainCatalogButton.map(local => <MainCatalogButton
                            key={local.id}
                            onSelect={onSelect}
                            id={local.id}
                            isSelected={local.isSelected}>{local.name}</MainCatalogButton>)
                    }
                </div>
                <MainCatalogBlock />
            </div>
        </div>
    )
}

export default MainCatalog