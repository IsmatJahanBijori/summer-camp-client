import React, { useEffect, useState } from 'react';

const PopularInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('instructors.json')
            .then(res => res.json())
            .then(data => {
                console.log(data.name)
                setInstructors(data)
            })
    }, [])
    return (
        <div>
        {
            instructors.map(instructor => 
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={instructor.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{instructor.name}</h2>
                        <p>{instructor.email}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            )
        }</div>
    );
};

export default PopularInstructors;