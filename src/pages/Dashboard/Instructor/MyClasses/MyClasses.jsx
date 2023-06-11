import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';

const MyClasses = () => {
    const [myClasses, setMyClasses] = useState([])
    const { user } = useContext(AuthContext)
    useEffect(() => {
        fetch(`https://summer-camp-server-alpha.vercel.app/classes/${user?.email}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMyClasses(data)
            })
    }, [])
    return (
        <div>
            <h1>{myClasses.length}</h1>
        </div>
    );
};

export default MyClasses;