import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const isAdmin = true
    const isInstructor = true
    const isStudent = true
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col p-20">
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="sidebar menu p-4 w-80 font-semibold text-lg h-full bg-[#e2d8e8] text-base-content">
                    {/* Sidebar content here */}
                    {
                        isAdmin &&
                        <React.Fragment>
                            <li><NavLink to='manageClasses' className='hover:text-blue-500'>Manage Classes</NavLink></li>
                            <li><NavLink to='manageUsers' className='hover:text-blue-500'>Manage Users</NavLink></li>
                        </React.Fragment>
                    }
                    {
                        isInstructor &&
                        <React.Fragment>
                            <li><NavLink to='addClass' className='hover:text-blue-500'>Add A Class</NavLink></li>
                            <li><NavLink to='myClasses' className='hover:text-blue-500'>My Classes</NavLink></li>
                        </React.Fragment>
                    }
                    {
                        isStudent &&
                        <React.Fragment>
                            <li><NavLink to='mySelectedClasses' className='hover:text-blue-500'>My Selected Classes</NavLink></li>
                            <li><NavLink to='myEnrolledClasses' className='hover:text-blue-500'>My Enrolled Classes</NavLink></li>
                        </React.Fragment>
                    }
                    <hr className='border-black my-5' />
                    <li><NavLink to="/" className='hover:text-blue-500'>Homepage</NavLink></li>
                    <li><NavLink to="/instructors" className='hover:text-blue-500'>Instructors</NavLink></li>
                    <li><NavLink to="/classes" className='hover:text-blue-500'>Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;