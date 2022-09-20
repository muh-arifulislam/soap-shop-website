import React from 'react';
import image from '../../images/lsc-usp-icons.svg';
import image1 from '../../images/rough-edge-white.svg';
import './Home.css';
const Ingedients = () => {
    return (
        <div className='section-rough'>
            <p className='bg-primary py-[30px]'>
                <img className='lg:max-w-[700px] lg:max-h-[102px] mx-auto' src={image} alt="" />
            </p>
        </div>
    );
};

export default Ingedients;