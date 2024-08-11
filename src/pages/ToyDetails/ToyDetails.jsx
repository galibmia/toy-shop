import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const toy = useLoaderData();
    console.log(toy);
    return (
        <div className='mt-24'>
            <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-4xl mt-10">
                <div className="flex flex-col md:flex-row items-center">
                    <img src={toy.image} alt={toy.toyName} className="w-full md:w-1/2 rounded-lg mb-6 md:mb-0 md:mr-6" />
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">{toy.toyName}</h1>
                        <p className="text-gray-700 mb-4">{toy.details}</p>
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-gray-700 font-semibold">Available Quantity: {toy.quantity} pcs</p>
                            <p className="text-gray-700 font-semibold">Price: ${toy.price}</p>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <p className="text-gray-700 font-semibold">Seller: {toy.sellerName}</p>
                            <p className="text-gray-700 font-semibold">Email: {toy.sellerEmail}</p>
                        </div>
                        <div className="flex items-center">
                            <p className="text-gray-700 font-semibold">Rating: {toy.rating} / 5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;