import React from 'react';
import './HomeBannerInfo.css'
import infoPic from '../../../public/images/homebanner/F1-1.png'
const HomeBannerInfo = () => {
    return (
        <div className=' banner-media d-flex justify-content-evenly align-items-center p-3'>
            <div>
                <div className='info-pic-bg'>
                    <img src={infoPic} alt="" />
                </div>
            </div>
            <div className='ms-5'>
                <p className='custom-color fs-4 fw-light'>WELCOME&nbsp; TO&nbsp; VIDEEN&nbsp; STUDIO
                </p>
                <h1 className='home-description banner-description' >
                    LET'S <span className='custom-color'>MAKE</span>
                    YOUR<br />
                    VIDEO  LOOKS  <br />
                    MORE
                    <span className='custom-color'>COOL</span>

                </h1>
                <p className='text-white'>
                    💡 Creative Collaboration: We value your input and ideas. Our collaborative approach <br />
                    means you'll have an active role in shaping the final product.
                    <br />
                    <br />
                    ⏱️ Fast Turnaround: Time is crucial, and we respect yours. Expect a quick turnaround <br /> without compromising on quality.
                </p>
                <button className='get-stared-btn'>GET STARTED</button>
            </div>
        </div>
    );
};

export default HomeBannerInfo;