import React, { useEffect, useState } from 'react';

const ManageClasses = () => {
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
    return (
        <div>
            <h2 className='text-4xl my-3 text-center'>Manage Users</h2>
            <hr className='mb-5' />
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Name</th>
                            <th>Class Image</th>
                            <th>Instructor name</th>
                            <th>Instructor email</th>
                            <th>Available seats</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            classes.map((clasS, index) =>
                                <tr key={clasS._id}>
                                    <th>{index + 1}</th>
                                    <td>{clasS.className}</td>
                                    <td>{clasS.image}</td>
                                    <td>{clasS.instName}</td>
                                    <td>{clasS.instEmail}</td>
                                    <td className='text-right'>{clasS.seats}</td>
                                    <td className='text-right'>{clasS.price}</td>
                                    <td><button className='btn btn-active btn-ghost my-3'>Approve</button></td>
                                    <td><button className='btn btn-active btn-ghost my-3'>Deny</button></td>
                                    <td><button className='btn btn-active btn-ghost my-3'>Feedback</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default ManageClasses;