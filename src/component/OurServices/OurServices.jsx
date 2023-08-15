import React from 'react';
import './OurServices.css';
import ServiceItems from '../ServiceItems/ServiceItems';

const OurServices = () => {
    return (
        <div className='container p-5 services-container'>
            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="">
                        <div className="card-body">
                            <ServiceItems />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="">
                        <div className="card-body">
                            <h5 className="card-title">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurServices;