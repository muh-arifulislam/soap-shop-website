import React from 'react';
import image from '../../images/Org-Home-1.jpg';
import btn from '../../images/btn-bg-rough.svg';
const Product = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={image} alt="" />
            <p className='text-xl font-bold mb-[20px]'>Organic Rose Geranium Soap Bar</p>
            <p className='text-xl font-bold mb-[20px]'>£3.99</p>
            <p className=''>
                <a href="#" className='pt-[16px] pb-[22px] px-[28px] text-white inline-block' style={{background: `url(${btn})`}}>Shop Now</a>
            </p>
        </div>
    );
};

export default Product;