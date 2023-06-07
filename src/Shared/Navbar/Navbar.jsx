import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-[#ebf1ec]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <img src="https://i.ibb.co/9sfSDND/logo.png" alt="Lingua Campha" />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Homepage</Link></li>
                        <li><Link to="">Instructors</Link></li>
                        <li><Link to="">Classes</Link></li>
                        <li><Link to="">Dashboard</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        {/*
                            user ?<li><Link to="">Dashboard</Link></li>:<li><Link to="">Login</Link></li>
    */}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Lingua Campha</Link>
            </div>
            <div className="navbar-end">
                {/*
                    user ?
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><Link to="">Logout</Link></li>
                    </ul>
                </div>:
                ""
                    */}
                    <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li><Link to="">Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;