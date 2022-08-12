import React from 'react';
import s from './../mainCatalog.module.scss';
import catalog1 from './../../../images/catalog-1.png';
import catalog2 from './../../../images/catalog-2.png';
import catalog3 from './../../../images/catalog-3.png';
import catalog4 from './../../../images/catalog-4.png';
import catalog5 from './../../../images/catalog-5.png';
import catalog6 from './../../../images/catalog-6.png';

const MainCatalogBlock = (props) => {
    return (
        <div className={s.catalog}>
            <div className={s.catalogBlock}>
                <img src={catalog1} alt="catalog-1" />
                <span>Кольца</span>
            </div>
            <div className={s.catalogBlock}>
                <img src={catalog2} alt="catalog-2" />
                <span>Серьги</span>
            </div>
            <div className={s.catalogBlock}>
                <img src={catalog3} alt="catalog-3" />
                <span>Подвески</span>
            </div>
            <div className={s.catalogBlock}>
                <img src={catalog4} alt="catalog-4" />
                <span>Запонки</span>
            </div>
            <div className={s.catalogBlock}>
                <img src={catalog5} alt="catalog-5" />
                <span>Браслеты</span>
            </div>
            <div className={s.catalogBlock}>
                <img src={catalog6} alt="catalog-6" />
                <span>Часы</span>
            </div>
        </div>
    )
}

export default MainCatalogBlock