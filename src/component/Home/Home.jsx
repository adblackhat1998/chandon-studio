import React from 'react';
import Navbar from '../Navbar/Navbar';
import HomeBanner from '../HomeBanner/HomeBanner';
import MyWork from '../MyWork/MyWork';
import TestiMonials from '../TestiMonials/TestiMonials';
import OurServices from '../OurServices/OurServices';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar />
            <HomeBanner />
            <MyWork />
            <TestiMonials />
            <Services />
        </div>
    );
};

export default Home;