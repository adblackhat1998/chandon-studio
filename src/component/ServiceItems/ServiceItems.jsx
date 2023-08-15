import React from 'react';
import './ServicesItems.css';
import { FaBeer, FaBuilding, FaMobile, FaReact } from 'react-icons/fa';
import { GiLargeDress } from "react-icons/gi";

const ServiceItems = () => {
    return (
        <div>
            <div className=" service-row ">
                <div className="service-col">
                    <div>
                        <FaBuilding className='services-icon'></FaBuilding>
                    </div>
                    <div>
                        <h2 className='text-white fw-bold'>Company Profile</h2>
                        <p className='text-white fw-light'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. <br />  Voluptatem, deserunt?</p>
                    </div>
                </div>
                <div className="service-col">
                    <div>
                        <FaReact className='services-icon'></FaReact>
                    </div>
                    <div>
                        <h2 className='text-white fw-bold'>Wedding Session
                        </h2>
                        <p className='text-white'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. <br />  Voluptatem, deserunt?</p>
                    </div>
                </div>
                <div className="service-col">
                    <div>
                        < GiLargeDress className='services-icon'></GiLargeDress>
                    </div>
                    <div>
                        <h2 className='text-white fw-bold' >Branding Mode
                        </h2>
                        <p className='text-white fw-light'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. <br />  Voluptatem, deserunt?</p>
                    </div>
                </div>
                <div className="service-col">
                    <div>
                        <FaMobile className='services-icon'></FaMobile>
                    </div>
                    <div>
                        <h2 className='text-white fw-bold'>Content Creator</h2>
                        <p className='text-white fw-light'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. <br />  Voluptatem, deserunt?</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServiceItems;