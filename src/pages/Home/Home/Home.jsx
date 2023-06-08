import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Footer from '../../../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Slider from '../Slider/Slider';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import ExtraSection from '../ExtraSection/ExtraSection';

const Home = () => {
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