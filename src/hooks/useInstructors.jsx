import React, { useEffect, useState } from 'react';

const useInstructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/instructors', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.name)
                setInstructors(data)
            })
    }, [])

    return [instructors]
};

export default useInstructors;