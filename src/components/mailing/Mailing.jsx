import React from 'react';
import MyButton from '../UI/MyButton';
import s from './mailing.module.scss';

const Mailing = () => {
    return (
        <div className={s.mailing}>
            <div className='wrapper'>
                <h3>Полезные советы и персональный предложения</h3>
                <h2>Эксклюзивная рассылка</h2>
                <div className={s.mailingBlock}>
                    <ul>
                        <li>Личный менеджер</li>
                        <li>Доставка и оформление</li>
                        <li>Индивидуальный дизайн</li>
                    </ul>
                    <div className={s.mailingFormBorder}>
                        <div className={s.mailingForm}>
                            <input type="email" placeholder='ВАШ E-MAIL' />
                            <MyButton className={s.sendBtn}>ОТПРАВИТЬ</MyButton>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Mailing