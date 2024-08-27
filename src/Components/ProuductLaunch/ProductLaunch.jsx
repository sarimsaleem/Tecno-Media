import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.jpeg";
import p3 from "../assets/p3.jpeg";
import p4 from "../assets/p4.jpeg";
import p5 from "../assets/p5.jpeg";
import p6 from "../assets/p6.jpeg";
import "./product.css";

const ProductLaunch = () => {
    return (
        <div className='product' id='product'>
            <div className='container'>
                <div className="text-containers">
                    <h1 className='mainh1'>Product Launching</h1>
                </div>
                <h2 className='text-heading'>
                    Hisense Product Launching in PC Hotel Lahore <br />Islamabad and Karachi
                </h2>
                <Swiper
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 5000, // change images every 5 seconds
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="image-container">
                            <img src={p1} alt="Product Launch 1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-container">
                            <img src={p2} alt="Product Launch 2" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-container">
                            <img src={p3} alt="Product Launch 3" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-container">
                            <img src={p4} alt="Product Launch 4" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-container">
                            <img src={p5} alt="Product Launch 5" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-container">
                            <img src={p6} alt="Product Launch 6" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='container'>
                <Swiper
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 5000, // change images every 5 seconds
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="image-container">
                            <img src={p4} alt="Product Launch 4" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-container">
                            <img src={p5} alt="Product Launch 5" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-container">
                            <img src={p6} alt="Product Launch 6" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-container">
                            <img src={p1} alt="Product Launch 1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-container">
                            <img src={p2} alt="Product Launch 2" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="image-container">
                            <img src={p3} alt="Product Launch 3" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ProductLaunch;
