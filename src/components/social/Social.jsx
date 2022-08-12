import React from 'react';
import s from './social.module.scss';
import video1 from './../../images/social-video-1.png';
import video2 from './../../images/social-video-2.png';
import pic1 from './../../images/social-pic-1.png';
import pic2 from './../../images/social-pic-2.png';
import pic3 from './../../images/social-pic-3.png';
import pic4 from './../../images/social-pic-4.png';
import playBtn from './../../images/play-button.png'

const Social = () => {
    return (
        <div className='wrapper'>
            <div className={s.social}>
                <h3>#ojjo_jewerly</h3>
                <h2>Мы в социальных сетях</h2>
                <div className={s.socialBlocks}>
                    <div className={s.socialVideo}>
                        <img className={s.poster} src={video1} alt="video-1" />
                        <img className={s.playBtn} src={playBtn} alt="playBtn" />
                    </div>
                    <div className={s.socialBlock}>
                        <img src={pic1} alt="pic-1" />
                    </div>
                    <div className={s.socialBlock}>
                        <img src={pic2} alt="pic-2" />
                    </div>
                    <div className={s.socialBlock}>
                        <img src={pic3} alt="pic-3" />
                    </div>
                    <div className={s.socialBlock}>
                        <img src={pic4} alt="pic-4" />
                    </div>
                    <div className={s.socialVideo}>
                        <img className={s.poster} src={video2} alt="video-2" />
                        <img className={s.playBtn} src={playBtn} alt="playBtn" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Social