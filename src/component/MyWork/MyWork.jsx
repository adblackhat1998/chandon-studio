import React from 'react';
import './MyWork.css';
import MyWorkDescription from '../MyWorkDescription/MyWorkDescription';
import WorkDetails from '../WorkDetails/WorkDetails';
import MyIntro from '../MyIntro/MyIntro';

const MyWork = () => {
    return (
        <div className='work'>
            <MyWorkDescription />
            <WorkDetails />
            <MyIntro />
        </div>
    );
};

export default MyWork;