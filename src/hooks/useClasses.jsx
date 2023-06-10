import React, { useEffect, useState } from 'react';

const useClasses = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setClasses(data)
            })
    }, [])
    return [classes]
};

export default useClasses;