import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/effect-cards";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import useInstructors from '../../../hooks/useInstructors';

const PopularInstructors = () => {
    const [instructors]=useInstructors()
    return (

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
            <p className='text-2xl text-center'>Swipe to the left</p>
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
    );
};

export default PopularInstructors;
{/**<div className='grid grid-cols-1 md:grid-cols-3 gap-5 ml-10 justify-around my-20'>
            {
                instructors.map(instructor =>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="w-24 rounded-full">
                            <img src={instructor.image} />
                        </div>
                        <div className="card-body">
                            <h2 className="card-title">{instructor.name}</h2>
                            <p>{instructor.email}</p>
                        </div>
                    </div>
                )
            }</div> */}