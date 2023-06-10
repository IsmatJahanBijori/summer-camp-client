import React, { useEffect, useState } from 'react';
import useClasses from '../../../../hooks/useClasses';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const ManageClasses = () => {
    // const [classes] = useClasses()
    // useEffect(() => {
    //     fetch('http://localhost:5000/classes', {
    //         method: 'GET'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setClasses(data)
    //         })
    // }, [])

    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes')
        return res.json()
    })
    const handleApprove = (clasS) => {
        fetch(`http://localhost:5000/classes/${clasS._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${clasS.className} is approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    // TODO: The deny button is not working
    const handleDeny = (clasS) => {
        // console.log('clicked')
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, denied it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/classes/${clasS._id}`, {
                    method: 'PATCH'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount) {
                            refetch()
                            Swal.fire(
                                'Denied!',
                                'Your class has been denied.',
                                'success'
                            )
                        }
                    })
            }
        })

    }
    const handlePending = (clasS) => {
        console.log('clicked')
    }
    return (
        <div>
            <h2 className='text-4xl my-3 text-center'>Manage Classes</h2>
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
                                    <td>{clasS.status === 'Approve' ? 'Approve' : <button onClick={() => handleApprove(clasS)} className='btn btn-active btn-ghost my-3'>Approve</button>}</td>
                                    <td>{clasS.status === 'Deny' ? 'Deny' : <button onClick={() => handleDeny(clasS)} className='btn btn-active btn-ghost my-3'>Deny</button>}</td>
                                    <td>{clasS.status === 'Pending' ? 'Pending' : <button onClick={() => handlePending(clasS)} className='btn btn-active btn-ghost my-3'>Feedback</button>}</td>
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