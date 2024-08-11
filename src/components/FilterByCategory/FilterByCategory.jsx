import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Card } from 'flowbite-react';
import './FilterByCategory.css';  // Import custom styles
import { Link } from 'react-router-dom';

const FilterByCategory = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/toys'); // Replace with your API endpoint
                const data = await response.json();
                setProducts(data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filterProducts = (category) => {
        return products.filter(product => product.category === category);
    };

    if (isLoading) {
        return <div className="loading">Loading products...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <Tabs selectedTabClassName="tab-button--selected">
                <TabList className="flex justify-center space-x-4">
                    <Tab className="tab-button">Wooden Doll</Tab>
                    <Tab className="tab-button">Mixed Doll</Tab>
                    <Tab className="tab-button">Doll House</Tab>
                    <Tab className="tab-button">Cloth Doll</Tab>
                </TabList>

                <TabPanel>
                    <div className="product-grid">
                        {filterProducts('woodenDoll').map(product => (
                            <Card className="max-w-sm product-card" key={product.id}>
                                <img src={product.image} alt={product.toyName} className="product-image" />
                                <h5 className="text-2xl font-bold text-gray-900 dark:text-white">{product.toyName}</h5>
                                <div className="flex justify-between mt-2">
                                    <p className="text-gray-700 dark:text-gray-400">Price: ${product.price}</p>
                                    <p className="text-gray-700 dark:text-gray-400">Available Quantity: {product.quantity} pcs</p>
                                </div>
                                <Link to={`/toys/${product._id}`} className='btn'>See Details</Link>
                            </Card>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="product-grid">
                        {filterProducts('mixedDoll').map(product => (
                            <Card className="max-w-sm product-card" key={product.id}>
                                <img src={product.image} alt={product.toyName} className="product-image" />
                                <h5 className="text-2xl font-bold text-gray-900 dark:text-white">{product.toyName}</h5>
                                <div className="flex justify-between mt-2">
                                    <p className="text-gray-700 dark:text-gray-400">Price: ${product.price}</p>
                                    <p className="text-gray-700 dark:text-gray-400">Available Quantity: {product.quantity} pcs</p>
                                </div>
                                <Link to={`/toys/${product._id}`} className='btn'>See Details</Link>
                            </Card>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="product-grid">
                        {filterProducts('dollHouse').map(product => (
                            <Card className="max-w-sm product-card" key={product.id}>
                                <img src={product.image} alt={product.toyName} className="product-image" />
                                <h5 className="text-2xl font-bold text-gray-900 dark:text-white">{product.toyName}</h5>
                                <div className="flex justify-between mt-2">
                                    <p className="text-gray-700 dark:text-gray-400">Price: ${product.price}</p>
                                    <p className="text-gray-700 dark:text-gray-400">Available Quantity: {product.quantity} pcs</p>
                                </div>
                                <Link to={`/toys/${product._id}`} className='btn'>See Details</Link>
                            </Card>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="product-grid">
                        {filterProducts('clothDoll').map(product => (
                            <Card className="max-w-sm product-card" key={product.id}>
                                <img src={product.image} alt={product.toyName} className="product-image" />
                                <h5 className="text-2xl font-bold text-gray-900 dark:text-white text-center">{product.toyName}</h5>
                                <div className="flex justify-between mt-2">
                                    <p className="text-gray-700 dark:text-gray-400">Price: ${product.price}</p>
                                    <p className="text-gray-700 dark:text-gray-400">Available Quantity: {product.quantity} pcs</p>
                                </div>
                                <Link to={`/toys/${product._id}`} className='btn'>See Details</Link>
                            </Card>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default FilterByCategory;
