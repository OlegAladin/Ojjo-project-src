import React from 'react';
import s from './burgerMenu.module.scss';
import logo from './../../images/logo.svg';
import close from './../../images/close.svg';
import account from './../../images/account.svg';
import cart from './../../images/cart.svg';
import youtube from './../../images/youtube-white.svg';
import vk from './../../images/vk-white.svg';
import facebook from './../../images/facebook-white.svg';
import telegram from './../../images/telegram-white.svg';
import etsy from './../../images/etsy-white.svg';

const BurgerMenu = (props) => {
    const onClose = () => {
        props.setMenuClose(true);
        props.setMenuOpen(false);
    }
    return (
        <div className={`${s.burgerMenu} ${props.menuOpen && s.openMenu} ${props.menuClose && s.closeMenu}`}>
            <div className={s.burgerMenuTop}>
                <img className={s.logo} src={logo} alt="OJJO" />
                <img onClick={onClose} className={s.closeBtn} src={close} alt="close menu" />
            </div>
            <ul>
                <li>Контрагентам</li>
                <li>Дизайнерам</li>
                <li>Вакансии</li>
                <li>Вход/Регистрация</li>
            </ul>
            <div className={s.userBlock}>
                <img className={s.account} src={account} alt="account" />
                <img className={s.cart} src={cart} alt="cart" />
            </div>
            <div className={s.socialBlock}>
                <img className={s.youtube} src={youtube} alt="youtube" />
                <img className={s.vk} src={vk} alt="vk" />
                <img className={s.facebook} src={facebook} alt="facebook" />
                <img className={s.telegram} src={telegram} alt="telegram" />
                <img className={s.etsy} src={etsy} alt="etsy" />
            </div>
        </div>
    )
}

export default BurgerMenu