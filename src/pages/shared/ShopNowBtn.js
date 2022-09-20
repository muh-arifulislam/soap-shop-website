import React from 'react';
import btn from '../../images/btn-bg-rough.svg';
const ShopNowBtn = () => {
    return (
        <p className='mb-[20px]'>
            <a href="#" className='pt-[16px] pb-[22px] px-[28px] text-white inline-block' style={{ background: `url(${btn})` }}>Shop Now</a>
        </p>
    );
};

export default ShopNowBtn;