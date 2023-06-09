import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.log(error.message) })
    }


    const navLists = (
        <React.Fragment>
            <li><NavLink to="/" className='text-white bg-black'>Homepage</NavLink></li>
            <li><NavLink to="/instructors" className='text-black'>Instructors</NavLink></li>
            <li><NavLink to="/classes" className='text-black'>Classes</NavLink></li>
            {
                user ? <li><NavLink to="/dashboard" className='text-black'>Dashboard</NavLink></li> : <li><NavLink to="/login" className='text-black'>Login</NavLink></li>
            }
            {user ? (
                <React.Fragment>
                    <li>
                        <NavLink onClick={handleLogout} className=" text-white bg-black">
                            Logout
                        </NavLink>
                    </li>
                    <li className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                    </li>
                </React.Fragment>
            ) :
                <li>
                    <NavLink to="/signup" className=" text-black">
                        Register
                    </NavLink>
                </li>
            }
        </React.Fragment>
    );

    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-lg btn-circle">
                        <img src="https://i.ibb.co/9sfSDND/logo.png" className="" alt="" />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black  font-semibold lg:hidden"
                    >
                        {navLists}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Lingua Campha</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu font-semibold menu-horizontal px-1">
                    {navLists}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;

