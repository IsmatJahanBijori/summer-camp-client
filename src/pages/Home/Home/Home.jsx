import React, { useEffect, useState } from 'react';
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
{/**const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]); */}
{/*<div className={`Home ${theme}`}>
    <button onClick={toggleTheme}>Toggle Theme</button>
        </div>*/}
