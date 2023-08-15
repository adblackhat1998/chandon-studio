import React from 'react';
import './TestiMonials.css';
import ClientComment from '../ClientComment/ClientComment';
const TestiMonials = () => {
    return (
        <div className='testimonialBg'>
            <div className='container'>
                <p style={{ color: '#FFE379' }} className='text-center p-4'>TESTIMONIALS
                </p>
                <h3 className='white-color text-center'>
                    WHAT CLIENT SAYS
                </h3>
                <p style={{ color: '#878787' }} className='text-center mt-4'>
                    Duis ac finibus enim, sit amet vulputate quam. Ut ac ante vel dolor <br />
                    pulvinar bibendum. Curabitur molestie, nisl quis porta laoreet, est ex        <br />  pellentesque orci.
                </p>
            </div>
            <ClientComment />
        </div>
    );
};

export default TestiMonials;