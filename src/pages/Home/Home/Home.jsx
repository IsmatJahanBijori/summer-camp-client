import React, { useEffect, useState } from 'react';
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import ExtraSection from '../ExtraSection/ExtraSection';
import Fun from '../Fun/Fun';

const Home = () => {
    return (
        <div>
            <Slider />
            <PopularClasses />
            <PopularInstructors />
            <div className="mx-24">
                <ExtraSection />
            </div>
            <Fun/>
        </div>

    );
};

export default Home;
