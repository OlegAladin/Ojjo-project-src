import React from 'react';
import s from './footer.module.scss';
import visa from './../../images/visa.png';
import mastercard from './../../images/mastercard.png';
import youtube from './../../images/youtube.svg';
import vk from './../../images/vk.svg';
import facebook from './../../images/facebook.svg';
import telegram from './../../images/telegram.svg';
import etsy from './../../images/etsy.svg';

const Footer = () => {
    return (
        <div className='wrapper'>
            <div className={s.footer}>
                <div className={s.footerBlocks}>
                    <div className={s.footerBlock}>
                        <span>ПОЛЕЗНЫЕ ССЫЛКИ</span>
                        <ul>
                            <li>Доставка</li>
                            <li>Оплата</li>
                            <li>Акции</li>
                            <li>Политика конфиденциальности</li>
                        </ul>
                    </div>
                    <div className={s.footerBlock}>
                        <span>ОПЛАТА</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                        <div className={s.cards}>
                            <img className={s.bankSystem} src={visa} alt="visa" />
                            <img className={s.bankSystem} src={mastercard} alt="mastercard" />
                        </div>
                    </div>
                    <div className={s.footerBlock}>
                        <span>КОНТАКТЫ</span>
                        <ul>
                            <li className={s.telephoneNumber}><a href="tel: 88122345655">8 (812) 234-56-55</a></li>
                            <li className={s.telephoneNumber}><a href="tel: 88122345655">8 (812) 234-56-55</a></li>
                            <li className={s.mail}><a href="mailto: ojjo@ojjo.ru">ojjo@ojjo.ru</a></li>
                        </ul>
                    </div>
                    <div className={s.footerBlock}>
                        <span>СОЦИАЛЬНЫЕ СЕТИ</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                        <div className={s.social}>
                            <img className={s.youtube} src={youtube} alt="youtube" />
                            <img className={s.vk} src={vk} alt="vk" />
                            <img className={s.facebook} src={facebook} alt="facebook" />
                            <img className={s.telegram} src={telegram} alt="telegram" />
                            <img className={s.etsy} src={etsy} alt="etsy" />
                        </div>
                    </div>
                </div>
                <ul className={s.footerBottom}>
                    <li>(c) 2020 OJJO jewelry</li>
                    <li className={s.footerBottomA}>Договор публичной офферты</li>
                    <li className={s.footerBottomA}>Контрагентам</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer