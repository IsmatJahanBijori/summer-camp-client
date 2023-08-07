import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";

const Slider = () => {
    return (
        <div className='my-44 mb-10 md:my-0'>
            <Swiper
                effect={"cube"}
                grabCursor={true}
                cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://i.ibb.co/tcYbh4D/img5.jpg" className='w-[1600px] h-[1200px] mx-auto mb-20' />
                    <div className='absolute -mt-96 ml-[20px] mr-3 md:-mt-64 md:ml-[600px]'>
                        <div className="bg-black bg-opacity-30 w-full p-5 md:w-[760px] md:h-[140px]">
                            <h2 className='text-5xl text-white'>Welcome to our Language Camp!</h2>
                            <p className='text-xl text-white'>Immerse yourself in a multicultural learning experience.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/BrYqkCy/img3.jpg" className='w-[1600px] h-[1200px] mx-auto mb-20' />
                    <div className='absolute -mt-96 ml-[20px] mr-3 md:-mt-64 md:ml-[600px]'>
                        <div className="bg-black bg-opacity-30 w-full p-5 md:w-[760px] md:h-[140px]">
                            <h2 className='text-5xl text-white'>Exciting Cultural Activities</h2>
                            <p className='text-xl text-white'>Experience the rich traditions and customs of different cultures.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/tcYbh4D/img5.jpg" className='w-[1600px] h-[1200px] mx-auto mb-20' />
                    <div className='absolute -mt-96 ml-[20px] mr-3 md:-mt-64 md:ml-[600px]'>
                        <div className="bg-black bg-opacity-30 w-full p-5 md:w-[760px] md:h-[140px]">
                            <h2 className='text-5xl text-white'>Learn from Native Speakers</h2>
                            <p className='text-xl text-white'>Our qualified instructors provide authentic language instruction.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/BrYqkCy/img3.jpg" className='w-[1600px] h-[1200px] mx-auto mb-20' />
                    <div className='absolute -mt-96 ml-[20px] mr-3 md:-mt-64 md:ml-[600px]'>
                        <div className="bg-black bg-opacity-30 w-full p-5 md:w-[760px] md:h-[140px]">
                            <h2 className='text-5xl text-white'>Exciting Cultural Activities</h2>
                            <p className='text-xl text-white'>Experience the rich traditions and customs of different cultures.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
};

export default Slider;