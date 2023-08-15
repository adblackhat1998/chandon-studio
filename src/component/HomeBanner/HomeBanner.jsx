import React from 'react';
import './HomeBanner.css';
import Person from '../../../public/images/homebanner/F1-1.png'
import HomeBannerInfo from '../HomeBannerInfo/HomeBannerInfo';

const HomeBanner = () => {
    return (
        <div className='banner-1'>
            <div className='container d-flex align-items-center'>
            </div>
            <div className='home-banner-info'>
                <HomeBannerInfo />
            </div>
        </div>

    );
};

export default HomeBanner;