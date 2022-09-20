import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import image from '../../images/Amazon_logo.png';
const EcommercePartner = () => {
    let width = window.screen.width;
    return (
        <div className="text-center mt-[100px] lg:mx-[100px] mx-[20px]">
            <h4 className="text-[34px] mb-[20px]">
                Where to find us
            </h4>
            <Swiper
                slidesPerView={width > 570 ? 5 : 2}
                spaceBetween={30}
                slidesPerGroup={2}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="" style={{ width: '200px' }} src={image} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="" style={{ width: '200px' }} src={image} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="" style={{ width: '200px' }} src={image} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="" style={{ width: '200px' }} src={image} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="" style={{ width: '200px' }} src={image} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="" style={{ width: '200px' }} src={image} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default EcommercePartner;