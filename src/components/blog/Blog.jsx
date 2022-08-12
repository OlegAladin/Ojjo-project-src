import React from 'react';
import s from './blog.module.scss';
import blog1 from './../../images/blog-1.png';
import blog2 from './../../images/blog-2.png';
import blog3 from './../../images/blog-3.png';
import MyButton from '../UI/MyButton';

const Blog = () => {
    return (
        <div className='wrapper'>
            <div className={s.blog}>
                <h3>Полезные статьи</h3>
                <h2>Лучшие советы по подбору дорогих подарков</h2>
                <div className={s.blogBlocks}>
                    <div className={s.blogBlock}>
                        <img src={blog1} alt="blog1" />
                        <span>
                            Как выбрать
                            часы для своей
                            будущей жены
                        </span>
                    </div>
                    <div className={s.blogBlock}>
                        <img src={blog2} alt="blog2" />
                        <span>
                            Запонки для мужа:
                            7 ключевых правил
                            покупки аксессуара
                        </span>
                    </div>
                    <div className={s.blogBlock}>
                        <img src={blog3} alt="blog3" />
                        <span>
                            Как выбрать
                            обручальные кольца
                            молодоженам
                        </span>
                    </div>
                </div>
                <MyButton className={s.button}>Читать наш блог</MyButton>
            </div>
        </div >
    )
}

export default Blog