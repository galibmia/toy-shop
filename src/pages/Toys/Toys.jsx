import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Toys = () => {
    useTitle('All Toys')
    const toys = useLoaderData();
    const [categories, setCategories] = useState(['all']);

    useEffect(() => {
        // Extract unique categories from toys and set them in state
        const uniqueCategories = [...new Set(toys.map(toy => toy.category))];
        setCategories(['all', ...uniqueCategories]);
    }, [toys]);

    const filterToys = (category) => {
        return category === 'all' ? toys : toys.filter(toy => toy.category === category);
    };

    return (
        <div className='mt-28'>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center mb-6">All Toys</h1>
                <Tabs selectedTabClassName="tab-button--selected">
                    <TabList className="flex justify-center space-x-4">
                        {categories.map(category => (
                            <Tab key={category} className="tab-button">
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Tab>
                        ))}
                    </TabList>

                    {categories.map(category => (
                        <TabPanel key={category}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {filterToys(category).map(toy => (
                                    <div className="bg-white shadow-md rounded-lg p-4 mt-8" key={toy._id}>
                                        <img src={toy.image} alt={toy.toyName} className="w-full h-48 object-cover rounded-md" />
                                        <h5 className="text-2xl font-bold text-gray-900 mt-4">{toy.toyName}</h5>
                                        <div className="flex justify-between mt-2">
                                            <p className="text-gray-700">Price: ${toy.price}</p>
                                            <p className="text-gray-700">Quantity: {toy.quantity} pcs</p>
                                        </div>
                                        <Link to={`/toys/${toy._id}`} className="btn w-full text-center py-2 rounded-md mt-4">See Details</Link>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default Toys;
