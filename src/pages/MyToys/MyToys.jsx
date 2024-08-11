import React, { useContext, useEffect, useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const MyToys = () => {
    useTitle('My Toys');
    const [toys, setToys] = useState([]);
    const {loading, setLoading} = useContext(AuthContext);

    useEffect(() => {
        // Fetch the toys data from the API
        const fetchToys = async () => {
            try {
                const response = await fetch('https://toy-shop-server-nu.vercel.app/toys'); // Replace with your API endpoint
                const data = await response.json();
                setToys(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching toys:', error);
                setLoading(false);
            }
        };

        fetchToys();
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-shop-server-nu.vercel.app/toys/${id}`, {
                    method: 'DELETE',
                });
                setToys(toys.filter(toy => toy._id !== id));
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                
            }
        });
    };

    if (loading) {
        return (
            <div className='mt-28 w-28 mx-auto'>
                <div className="loading w-28">Loading toys...</div>
            </div>
        );
    }

    return (
        <div className='mt-32'>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold text-center mb-8">My Toys</h1>
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border">Name</th>
                            <th className="py-2 px-4 border">Category</th>
                            <th className="py-2 px-4 border">Price</th>
                            <th className="py-2 px-4 border">Quantity</th>
                            <th className="py-2 px-4 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {toys.map(toy => (
                            <tr key={toy._id}>
                                <td className="py-2 px-4 border">{toy.toyName}</td>
                                <td className="py-2 px-4 border">{toy.category}</td>
                                <td className="py-2 px-4 border">${toy.price}</td>
                                <td className="py-2 px-4 border">{toy.quantity}</td>
                                <td className="py-2 px-4 border">
                                    <button className="text-blue-500 hover:text-blue-700 mx-2">
                                        <Link to={`/updateToy/${toy._id}`}><FaEdit /></Link>
                                    </button>
                                    <button onClick={() => handleDelete(toy._id)} className="text-red-500 hover:text-red-700 mx-2">
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;
