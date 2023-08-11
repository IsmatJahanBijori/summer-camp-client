import React, { useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import ExtraSection from '../ExtraSection/ExtraSection';
import Fun from '../Fun/Fun';
import TermsAndConditions from '../TermsAndConditions/TermsAndConditions';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Offer from '../Offer/Offer';
import Testimonials from '../Testimonials/Testimonials';

AOS.init({
    duration: 3000
});

const Home = () => {
    return (
        <div>
            <Slider />
            <PopularClasses />
            <PopularInstructors />
            <div className="mx-24">
                <ExtraSection />
            </div>
            <Fun />
            <TermsAndConditions />
            <div className='mx-24'>
            <Offer/>
            </div>
            <div className='mx-48'>
            <Testimonials/>
            </div>
        </div>

    );
};

export default Home;
