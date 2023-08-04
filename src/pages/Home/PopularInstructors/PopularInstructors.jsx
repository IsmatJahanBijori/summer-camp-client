import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import useInstructors from '../../../hooks/useInstructors';
import Marquee from 'react-fast-marquee';


const PopularInstructors = () => {
    const [instructors] = useInstructors()
    return (
        <div>
            <span className='text-3xl text-center mx-96 mt-10 mb-0'>Our Top Instructors</span>
            <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ["100%", 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper"
            >
                <Marquee className='text-2xl text-center w-[300px] mx-auto'>Swipe to the left</Marquee>
                {
                    instructors.map(instructor =>
                        <SwiperSlide key={instructor._id}>
                            <div className="card w-96 bg-base-100 shadow-xl mx-auto text-center">
                                <div className="w-32 rounded-full">
                                    <img src={instructor.image} className='p-3' />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title">{instructor.name}</h2>
                                    <p>{instructor.email}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default PopularInstructors;

