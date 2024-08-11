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
        <div className='w-[98%] fixed top-8 ml-[1%] header'>
            <div className="navbar bg-base-200 rounded-3xl">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to={'/'}>Home</Link></li>
                            <li><Link to={'/toys'}>All Toys</Link></li>
                            <li><Link to={'/myToys'}>My Toys</Link></li>
                            <li><Link to={'/addToy'}>Add A Toy</Link></li>
                            <li><Link to={'/blogs'}>Blogs</Link></li>
                        </ul>
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
                </div>
                <Link className="besley-bold text-4xl">ToyHub</Link>
                <div className="navbar-end lg:pe-2 relative group">
                    {
                        user ? (
                            <div className="relative inline-block">
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
                        ) : (
                            <Link className='btn btn-ghost hover:text-orange-600'>Login</Link>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
