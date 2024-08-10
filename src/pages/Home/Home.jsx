import React from 'react';
import bannerImg from "../../assets/images/wooden-toys-home-img-1-new.jpg"
import categoryImg1 from "../../assets/images/wooden-toys-home-img-2-new.jpg"
import categoryImg2 from "../../assets/images/wooden-toys-home-img-3.jpg"
import categoryImg3 from "../../assets/images/wooden-toys-home-img-4.jpg"
import { Link } from 'react-router-dom';
import { HiMiniShoppingBag } from "react-icons/hi2";


const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className='md:flex'>
                <div className='md:w-1/2 bg-[#1E2037] py-10'>
                    <div className='text-center text-white mt-20 md:mt-80'>
                        <h4 className=' font-bold text-7xl'>Summer Sale</h4>
                        <p className='text-5xl mx-16 mt-6'>Up To 60% Off</p>
                        <p className='text-lg mt-6 w-[60%] mx-auto'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqu.</p>
                        <Link><span className='btn bg-white mt-8 hover:bg-[#C9E4F9] border-none px-8 py-4'><HiMiniShoppingBag /> SHOP NOW</span></Link>
                    </div>
                </div>
                <div className='md:w-1/2 bg-[#C9E4F9]'>
                    <img className='max-h-screen' src={bannerImg} alt="" />
                </div>
            </div>

            {/* Shop By Section */}
            <div className='mt-20 w-[75%] mx-auto grid grid-cols-3 gap-6'>
                <div className=''>
                    <img src={categoryImg1} alt="" />
                    <div className='-mt-24 text-center'>
                        <h4 className='text-xl font-semibold mb-3'>Shop For Boys</h4>
                        <Link className='underline hover:no-underline'>Shop Now</Link>
                    </div>
                </div>
                <div className=''>
                    <img src={categoryImg2} alt="" />
                    <div className='-mt-24 text-center'>
                        <h4 className='text-xl font-semibold mb-3'>Shop For Neutrals</h4>
                        <Link className='underline hover:no-underline'>Shop Now</Link>
                    </div>
                </div>
                <div className=''>
                    <img src={categoryImg3} alt="" />
                    <div className='-mt-24 text-center'>
                        <h4 className='text-xl font-semibold mb-3'>Shop For Girls</h4>
                        <Link className='underline hover:no-underline'>Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;