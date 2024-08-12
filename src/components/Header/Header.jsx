import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineToys, MdToys, MdHome, MdAdd } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import './Header.css';
import { AuthContext } from '../../provider/AuthProvider';
import { Avatar } from 'flowbite-react';

const Header = () => {
    const { user, logOut, setUser } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
        setUser(null);
    };

    return (
        <div className='w-full md:w-11/12 md:left-[4.1%] fixed top-5 header'>
            <div className="navbar bg-base-200 rounded-3xl md:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/toys'}>All Toys</Link></li>
                            <li><Link to={'/myToys'}>My Toys</Link></li>
                            <li><Link to={'/addToy'}>Add A Toy</Link></li>
                            <li><Link to={'/blogs'}>Blogs</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="besley-bold text-4xl ml-2 lg:ml-0">ToyHub</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl">
                        <li className='hover:text-orange-600'><Link to={'/'}><MdHome />Home</Link></li>
                        <li className='hover:text-orange-600'><Link to={'/toys'}><MdOutlineToys />All Toys</Link></li>
                        <li className='hover:text-orange-600'><Link to={'/myToys'}><MdToys />My Toys</Link></li>
                        <li className='hover:text-orange-600'><Link to={'/addToy'}><MdAdd />Add A Toy</Link></li>
                        <li className='hover:text-orange-600'><Link to={'/blogs'}><FaBloggerB />Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end lg:pr-2 relative flex items-center">
                    {
                        user ? (
                            <div className="flex items-center">
                                <div className="relative group">
                                    <Avatar
                                        alt="User settings"
                                        img={user.photoURL}
                                        rounded
                                        className="cursor-pointer"
                                    />
                                    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {user.displayName}
                                    </div>
                                </div>
                                <button
                                    className="btn btn-ghost hover:text-orange-600 ml-4"
                                    onClick={handleLogOut}
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link to={'/login'} className='btn btn-ghost hover:text-orange-600'>Login</Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
