import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <h2 className="text-4xl font-bold besley-bold">Toy Hub</h2> 
                        <p className="mt-2">&copy; 2024 Toy Hub. All rights reserved.</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                        <p>Email: info@yourwebsite.com</p>
                        <p>Phone: +1 234 567 890</p>
                        <p>Address: 123 Your Street, Your City, Your Country</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <Link to="" className="text-gray-400 hover:text-white">
                                <FaFacebookF size={24} />
                            </Link>
                            <Link to="" className="text-gray-400 hover:text-white">
                                <FaTwitter size={24} />
                            </Link>
                            <Link to="" className="text-gray-400 hover:text-white">
                                <FaInstagram size={24} />
                            </Link>
                            <Link to="" className="text-gray-400 hover:text-white">
                                <FaLinkedinIn size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;