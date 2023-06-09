import { useQuery } from '@tanstack/react-query';
import React from 'react';
import './ManageUsers.css'
const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json()
    },
    )
    return (
        <div>
            <h2 className='text-4xl my-3 text-center'>Manage Users</h2>
            <hr className='mb-5'/>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin Action</th>
                            <th>Instructor Action</th>
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
                                    <td><button className='button1 btn btn-active btn-ghost my-1'>Make Admin</button></td>
                                    <td><button className='button2 btn btn-active btn-ghost my-1'>Make Instructor</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;