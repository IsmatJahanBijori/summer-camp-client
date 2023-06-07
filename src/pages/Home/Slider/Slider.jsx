import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/pz5WZPs/img1.jpg" alt="img1" border="0"></a>
//<a href="https://ibb.co/RYR8M0V"><img src="https://i.ibb.co/jbntxM1/img2.jpg" alt="img2" border="0"></a>
//<a href="https://ibb.co/pRkJqLf"><img src="https://i.ibb.co/BrYqkCy/img3.jpg" alt="img3" border="0"></a><br /><a target='_blank' href='https://500pxdownload.com/'>instagram photo download high quality</a><br />
// <a href="https://ibb.co/cxWrD2M"><img src="https://i.ibb.co/d7N5Gk1/img4.png" alt="img4" border="0"></a><br /><a target='_blank' href='https://500pxdownload.com/'>save instagram pictures chrome extension</a><br />
//<a href="https://ibb.co/ftrCS2H"><img src="https://i.ibb.co/tcYbh4D/img5.jpg" alt="img5" border="0"></a><br /><a target='_blank' href='https://500pxdownload.com/'>instagram picture grabber</a><br />
//<a href="https://imgbb.com/"><img src="https://i.ibb.co/DGRYS95/img6.jpg" alt="img6" border="0"></a>
const Slider = () => {
    return (
        <div>
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
                    <img src="https://i.ibb.co/tcYbh4D/img5.jpg" className='w-[900px] mx-auto my-20' />
                    <div className='absolute -mt-64 ml-[600px]'>
                        <div className="w-[760px] h-[140px]">
                            <h2 className='text-5xl'>Welcome to our Language Camp!</h2>
                            <p className='text-xl'>Immerse yourself in a multicultural learning experience.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/BrYqkCy/img3.jpg" className='w-[900px] mx-auto my-20' />
                    <div className='absolute -mt-64 ml-[600px]'>
                        <div className="w-[760px] h-[140px]">
                            <h2 className='text-5xl'>Exciting Cultural Activities</h2>
                            <p className='text-xl'>Experience the rich traditions and customs of different cultures.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/tcYbh4D/img5.jpg" className='w-[900px] mx-auto my-20' />
                    <div className='absolute -mt-64 ml-[600px]'>
                        <div className="w-[760px] h-[140px]">
                            <h2 className='text-5xl'>Learn from Native Speakers</h2>
                            <p className='text-xl'>Our qualified instructors provide authentic language instruction.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/BrYqkCy/img3.jpg" className='w-[900px] mx-auto my-20' />
                    <div className='absolute -mt-64 ml-[600px]'>
                        <div className="w-[760px] h-[140px]">
                            <h2 className='text-5xl'>Exciting Cultural Activities</h2>
                            <p className='text-xl'>Experience the rich traditions and customs of different cultures.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
};

export default Slider;