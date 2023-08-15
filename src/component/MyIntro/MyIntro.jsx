import React from 'react';
import './MyIntro.css';
import secondBanner from '../../../public/images/homebanner/F2-1.jpg';

const MyIntro = () => {
    return (
        <div className='container'>
            <div class="card-group d-flex align-items-center responsive-class">
                <div style={{ backgroundColor: 'black' }} class="card  border border-0 ">

                    <div class="card-body p-5">
                        <p style={{ color: '#FFE379' }}>SINCE 2004</p>
                        <h3 className='white-color mt-4'>
                            HELLO, IM ALEX <br /> VIDEEN

                        </h3>
                        <p style={{ color: '#878787' }} class="card-text mt-4">Duis ac finibus enim, sit amet vulputate quam. Ut ac ante vel dolor pulvinar bibendum. Curabitur molestie, nisl quis porta laoreet.

                        </p>
                        <p style={{ color: '#f4f4f4', fontSize: '19.2px', fontWeight: '500', fontStyle: 'italic' }} class="card-text mt-4">“Cras auctor sapien nunc, et imperdiet lorem aliquam vel. Vestibulum eu enim mi. Nam ut orci eget arcu rutrum molestie. Maecenas augue ligula, blandit et lorem”

                        </p>
                        <h4 style={{ color: '#F4F4F4', fontSize: '22px', fontFamily: 'Oswald, sans-serif', fontWeight: '600' }} className='mt-5'>Alex Videen
                        </h4>
                        <p style={{ color: '#FFE379' }}>Editor & Videography</p>
                    </div>
                </div>
                <div style={{ backgroundColor: 'black' }} class="card">
                    <div class="card-body">
                        <img className='img-fluid' src={secondBanner} alt="" />
                    </div>


                </div>

            </div>
        </div>
    );
};

export default MyIntro;