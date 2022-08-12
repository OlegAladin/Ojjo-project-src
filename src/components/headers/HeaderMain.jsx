import React from 'react';
import s from './headerMain.module.scss';
import logo from './../../images/logo.svg';
import search from './../../images/search.svg';
import account from './../../images/account.svg';
import cart from './../../images/cart.svg';
import burger from './../../images/burger.svg';

const HeaderMain = (props) => {
    const onOpen = () => {
        props.setMenuOpen(true);
        props.setMenuClose(false);
    }
    return (
        <div className={s.header}>
            <div className='wrapper'>
                <div className={s.headerBlock}>
                    <ul className={s.headerLeft}>
                        <li>Контрагентам</li>
                        <li>Дизайнерам</li>
                        <li>Вакансии</li>
                    </ul>
                    <div className={s.logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={s.headerRight}>
                        <div className={s.search}>
                            <div className={s.searchLogo}>
                                <img src={search} alt="search" />
                            </div>
                            <span>Поиск</span>
                        </div>
                        <span className={s.login}>Вход/Регистрация</span>
                        <div className={s.account}>
                            <img src={account} alt="account" />
                        </div>
                        <div className={s.cart}>
                            <img src={cart} alt="cart" />
                        </div>
                    </div>
                    <div className={s.burger}>
                        <img onClick={onOpen} src={burger} alt="menu" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMain