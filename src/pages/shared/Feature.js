import React from 'react';
import ShopNowBtn from './ShopNowBtn';
import featureBg from '../../images/content-box-bg-pink.svg';
const Feature = () => {
    return (
        <div className='pt-[30px] px-[20px]' style={{background: `url(${featureBg})`}}>
            <h4 className='text-[34px]'>Free Delivery</h4>
            <p className='text-xl'>When you spend over £30, you can now enjoy free shipping on our soaps!</p>
            <ShopNowBtn></ShopNowBtn>
        </div>
    );
};

export default Feature;