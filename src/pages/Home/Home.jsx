import React from 'react';
import bannerImg from "../../assets/images/wooden-toys-home-img-1-new.jpg";
import categoryImg1 from "../../assets/images/wooden-toys-home-img-2-new.jpg";
import categoryImg2 from "../../assets/images/wooden-toys-home-img-3.jpg";
import categoryImg3 from "../../assets/images/wooden-toys-home-img-4.jpg";
import discountImg from "../../assets/images/wooden-toys-home-img-5.jpg";
import { Link, useLoaderData } from 'react-router-dom';
import { HiMiniShoppingBag } from "react-icons/hi2";
import useTitle from '../../hooks/useTitle';
import Toy from '../../components/Toy/Toy';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Home.css';
import WhatPeopleSay from '../../components/WhatPeopleSay/WhatPeopleSay';

const Home = () => {

    useTitle('Home');
    const toys = useLoaderData();

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


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
            <div className='mt-20 w-[75%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
                <div className=''>
                    <img src={categoryImg1} alt="" />
                    <div className='-mt-24 text-center'>
                        <h4 className='text-xl font-semibold mb-3'>Shop For Boys</h4>
                        <Link className='underline hover:no-underline'>Shop Now</Link>
                    </div>
                </div>
                <div className='mt-5 md:mt-0'>
                    <img src={categoryImg2} alt="" />
                    <div className='-mt-24 text-center'>
                        <h4 className='text-xl font-semibold mb-3'>Shop For Neutrals</h4>
                        <Link className='underline hover:no-underline'>Shop Now</Link>
                    </div>
                </div>
                <div className='mt-5 md:mt-0'>
                    <img src={categoryImg3} alt="" />
                    <div className='-mt-24 text-center'>
                        <h4 className='text-xl font-semibold mb-3'>Shop For Girls</h4>
                        <Link className='underline hover:no-underline'>Shop Now</Link>
                    </div>
                </div>
            </div>

            {/* Toy and Craft Section */}
            <div className='mt-24 w-9/12 mx-auto'>
                <h1 className='uppercase text-center text-gray-500'>diy & crafts</h1>
                <h1 className='text-center mt-3 text-2xl mb-5'>Last Chance To Buy</h1>
                <Carousel
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="transform 1000ms ease-in-out"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {
                        toys.map(toy => <Toy key={toy._id} toy={toy} />)
                    }
                </Carousel>
            </div>

            {/* Discount Section */}
            <div className='mt-24 md:flex'>
                <div className='md:w-1/2 bg-[#FFFAF1] py-10'>
                    <div className='text-center mt-20 md:mt-80'>
                        <h4 className=' font-bold text-4xl'>Wooden Set
                            <br /> Up To 20% Off</h4>
                        <p className='text-lg mt-6 w-[60%] mx-auto'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremqu.</p>
                        <Link to={'/toys'}><span className='btn border-red-300 bg-red-300 mt-8 hover:bg-transparent hover:border-red-400 px-8 py-4'><HiMiniShoppingBag /> SHOP NOW</span></Link>
                    </div>
                </div>
                <div className='md:w-1/2 bg-[#C9E4F9]'>
                    <img className='max-h-screen' src={discountImg} alt="" />
                </div>
            </div>

            {/* What people say section */}
                <WhatPeopleSay></WhatPeopleSay>
        </div>
    );
};

export default Home;