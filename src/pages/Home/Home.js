import React from 'react'; 
import Product from '../shared/Product';
import Ingedients from './Ingedients';
const Home = () => {
    return (
        <div>
            <Ingedients></Ingedients>
            <div className='flex lg:flex-row flex-col lg:gap-[40px] gap-[60px] mx-[80px] lg:mt-[100px] mx-[30px]'>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        </div>
    );
};

export default Home;