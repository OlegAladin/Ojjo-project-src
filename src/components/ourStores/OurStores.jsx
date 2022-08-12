import React from 'react';
import MyButton from '../UI/MyButton';
import s from './ourStores.module.scss';

const OurStores = () => {
    return (
        <div className={s.ourStores}>
            <div className='wrapper'>
                <h3>Не знаете что выбрать?</h3>
                <h2>Посетите наши салоны в Москве</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ut duis tortor vitae pellentesque egestas quam pulvinar.
                    Pellentesque porttitor velit sit pellentesque.
                    Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra.
                    Egestas quis et ut ultrices imperdiet lectus nulla tempus.
                    Pharetra lorem sem purus nisi libero viverra ipsum.
                </p>
                <MyButton className={s.button}>Наши салоны</MyButton>
            </div>
        </div>
    )
}

export default OurStores