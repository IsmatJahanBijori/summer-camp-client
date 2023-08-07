import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import "./Fun.css"
const Fun = () => {

    const [Data, setData] = useState([])
    useEffect(() => {
        fetch("funData.json").then(res => res.json()).then(data => setData(data))
    }, []);
    return (
        <div style={{ position: 'relative', height: '600px', width: "100%" }} className='mb-[900px] md:my-20'>
            <div className=''>
            <svg
            // xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            className='hidden md:block absolute'
        >
            <path
                fill="#8CABFF"
                fillOpacity="1"
                d="M0,192L60,202.7C120,213,240,235,360,208C480,181,600,107,720,74.7C840,43,960,53,1080,53.3C1200,53,1320,43,1380,37.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
        </svg>
        </div>

            <div className='grid grid-cols-1 md:grid-cols-3 ml-32'>
            {
                Data.map(dt =>
                    <div className="card w-[300px] bg-base-100 shadow-xl image-full mb-5" style={{
                        position: 'relative',
                        transform: 'rotate(-10deg)',
                        transformOrigin: 'top right'
                    }}>
                        <figure><img src={dt.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{dt.title}</h2>
                            <p>{dt.subtitle}</p>
                            <p>{dt.description}</p>

                        </div>
                    </div>
                )
            }
            
            </div>
        </div>
    );
};

export default Fun;

//d="M0,192L60,202.7C120,213,240,235,360,208C480,181,600,107,720,74.7C840,43,960,53,1080,53.3C1200,53,1320,43,1380,37.3L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"