import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineToys, MdToys, MdHome, MdAdd } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";



const Header = () => {
    return (
        <div className='w-11/12 fixed top-8 ml-[4.1%]'>
            <div className="navbar bg-base-100 rounded-3xl">
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
                            <li><Link>Home</Link></li>
                            <li><Link>All Toys</Link></li>
                            <li><Link>My Toys</Link></li>
                            <li><Link>Add A Toy</Link></li>
                            <li><Link>Blogs</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-xl">
                            <li className='hover:text-orange-600'><Link><MdHome />Home</Link></li>
                            <li className='hover:text-orange-600'><Link><MdOutlineToys />All Toys</Link></li>
                            <li className='hover:text-orange-600'><Link><MdToys />My Toys</Link></li>
                            <li className='hover:text-orange-600'><Link><MdAdd/>Add A Toy</Link></li>
                            <li className='hover:text-orange-600'><Link><FaBloggerB/>Blogs</Link></li>

                        </ul>
                    </div>
                </div>
                <Link className="besley-bold text-4xl">Lynna</Link>
                <div className="navbar-end lg:pe-2 ">
                    <Link className='mx-5 btn btn-ghost hover:text-orange-600'>Profile</Link>
                    <Link className='btn btn-ghost hover:text-orange-600'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;