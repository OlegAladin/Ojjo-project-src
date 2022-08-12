import React from 'react'
import HeaderMain from '../headers/HeaderMain'
import MyButton from '../UI/MyButton';
import s from './main.module.scss';
import cocofine from './../../images/cocofine.png'


const Main = (props) => {
    return (
        <div className={s.main}>
            <HeaderMain menuOpen={props.menuOpen} setMenuOpen={props.setMenuOpen} menuClose={props.menuClose} setMenuClose={props.setMenuClose} />
            <div className={s.mainText}>
                <h1>Долго, дорого, богато!</h1>
            </div>
            <div className={s.mainButton}>
                <MyButton className={s.button}>Каталог изделий</MyButton>
            </div>
            <div className={s.mainBottom}>
                <div className={`wrapper ${s.mainBottomBlocks}`}>
                    <div className={s.mainBottomBlock}>
                        <img src={cocofine} alt="cocofine" />
                    </div>
                    <div className={s.mainBottomBlock}>
                        <img src={cocofine} alt="cocofine" />
                    </div>
                    <div className={s.mainBottomBlock}>
                        <img src={cocofine} alt="cocofine" />
                    </div>
                    <div className={s.mainBottomBlock}>
                        <img src={cocofine} alt="cocofine" />
                    </div>
                    <div className={s.mainBottomBlock}>
                        <img src={cocofine} alt="cocofine" />
                    </div>
                    <div className={s.mainBottomBlock}>
                        <img src={cocofine} alt="cocofine" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Main