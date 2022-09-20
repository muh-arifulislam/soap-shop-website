import React from 'react';
import Feature from '../shared/Feature';
const Description = () => {
    return (
        <section className='lg:mx-[80px] text-center mt-[100px]'>
            <div className=''>
                <h1 className='text-[2.2rem] mb-[20px]'>Simple ingredients you understand…</h1>
                <h4 className='text-[24px] mb-[20px]'>Vegan, cruelty-free and hand-crafted in the UK, our soaps are made using the finest natural ingredients, all ethically sourced.</h4>
                <p className='text-xl mb-[20px]'>
                    Our luxurious range of natural handmade soaps are made using the finest, pure ingredients, including only pure essential oils to create our uplifting, nurturing scents. Our natural soaps and all-natural skincare products gently work in harmony with your skin making them perfect for all skin types and ages.  Our Little Beast range caters for the furry friends in your life! We are proud to produce beautiful soaps crafted with love and sustainability in mind. Browse our soap shop and find the perfect little soap for you.
                </p>
            </div>
            <div className='mt-[40px] flex lg:flex-row lg:gap-[40px]'>
                <Feature></Feature>
                <Feature></Feature>
                <Feature></Feature>
            </div>
        </section>
    );
};

export default Description;