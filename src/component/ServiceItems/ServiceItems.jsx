import React from 'react';
import './ServicesItems.css';
import { FaBeer, FaBuilding } from 'react-icons/fa';

const ServiceItems = () => {
    return (
        <div className='container'>
            <div>
                <div className="row ">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <div>
                            <div className="card-body d-flex align-items-center">
                                <div>
                                    <FaBuilding className='services-icon' />
                                </div>
                                <div style={{ marginLeft: '40px' }}>
                                    <h2 className='text-white fw-bold'>Company Profile</h2>
                                    <p className="card-text text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div>
                            <div className="card-body d-flex align-items-center">
                                <div>
                                    <FaBuilding className='services-icon' />
                                </div>
                                <div style={{ marginLeft: '40px' }}>
                                    <h2 className='text-white fw-bold'>Company Profile</h2>
                                    <p className="card-text text-white">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceItems;