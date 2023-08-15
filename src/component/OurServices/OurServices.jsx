import React from 'react';
import './OurServices.css';
import ServiceItems from '../ServiceItems/ServiceItems';

const OurServices = () => {
    return (
        <div className=' p-5 services-container'>
            <div>
                <ServiceItems />
            </div>
            <div>
                <p style={{ color: '#FFE379' }}>OUR SERVICES
                </p>
                <h2 className='text-white fw-bold'>WE CREATE AMAZING <br /> VIDEO</h2>
                <p className='text-white fw-light'>Maecenas eros dui, tempus sit amet quam ac, ultrices vehicula elit. <br /> Sed euismod vel tortor et luctus. In viverra finibus velit et ullamcorper. <br /> Vivamus eleifend velit ac lobortis fringilla. Fusce fermentum in ligula non convallis.
                </p>
                <button className='service-btn'>VIEW SERVICES</button>
            </div>
        </div>
    );
};

export default OurServices;