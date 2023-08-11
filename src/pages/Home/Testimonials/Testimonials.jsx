import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Rating } from '@smastrom/react-rating';

const Testimonials = () => {

    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json').then(res => res.json()).then(data => setReviews(data))
    }, [])
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {
                reviews.map(reviewing =>
                    <SwiperSlide >
                        <div className='flex flex-col items-center my-32'>
                            <Rating style={{ maxWidth: 180 }} className='text-center text-yellow-200' value={reviewing.rating} readOnly
                            />
                            <p className='text-xl'>{reviewing.review}</p>
                            <p className='text-3xl text-yellow-700'>{reviewing.name}</p>
                        </div>
                    </SwiperSlide>)
            }
        </Swiper>
    );
};

export default Testimonials;