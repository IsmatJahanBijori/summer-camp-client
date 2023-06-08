import React, { useState } from 'react';
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
    const [isDark, setDark] = useState(false)
    const handleDark = () => {
        setDark(true)
    }
    return (

        <div>
            <Slider />
            <PopularClasses />
            <PopularInstructors />
            <div className="mx-24">
                <ExtraSection />
            </div>
        </div>
    );
};

export default Home;