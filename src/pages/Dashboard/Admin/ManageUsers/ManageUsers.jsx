import { useQuery } from '@tanstack/react-query';
import React from 'react';
import './ManageUsers.css'
import { FaUserCheck, FaUserTag } from "react-icons/fa";
import Swal from 'sweetalert2';


const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    })

    const handleAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `${user.name} is admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })

    }

    const handleInstructor = (user) => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: `${user.name} is instructor now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin Role</th>
                            <th>Instructor Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>

                                    <td>{user.role1 === 'admin' ? 'admin' : <button onClick={() => handleAdmin(user)} className='button1 btn btn-active btn-ghost my-1'><FaUserTag />Make Admin</button>}</td>

                                    <td>{user.role2 === 'instructor' ? 'instructor' : <button onClick={() => handleInstructor(user)} className='button2 btn btn-active btn-ghost my-1'><FaUserCheck />Make Instructor</button>}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;