import React from 'react';
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
import './UpdateToy.css'
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';


const UpdateToy = () => {
    useTitle('Update Toy');
    const toyDetails = useLoaderData();

    const navigate = useNavigate('');
    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.name.value;
        const price = form.price.value;
        const details = form.details.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const updatedToy = {
            toyName,
            price,
            details,
            category,
            quantity,
            sellerName,
            sellerEmail,
            rating,
            image
        }

        fetch( `https://toy-shop-server-nu.vercel.app/toys/${toyDetails._id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                Swal.fire({
                    title: "Good job!",
                    text: "Toy updated successfully",
                    icon: "success"
                  });
                form.reset();
                navigate('/');
            }
        })
    }


    return (
        <div className='mt-40 w-3/4 mx-auto'>
            <h1 className='text-4xl text-center'>Update Toy</h1>
            <form onSubmit={handleUpdateToy} className="flex flex-col gap-4 mt-8">
                <div className='flex gap-5 my-3'>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Toy Name" /><span className='text-red-700'>*</span>
                        </div>
                        <TextInput id="name" type="text" placeholder="Toy Name" name='name' defaultValue={toyDetails.toyName} required shadow />
                    </div>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="price" value="Toy Price" /><span className='text-red-700'>*</span>
                        </div>
                        <TextInput id="price" type="number" placeholder="Toy Price" name='price' defaultValue={toyDetails.price} required shadow />
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="details" value="Details" /><span className='text-red-700'>*</span>
                    </div>
                    <Textarea className='resize-none' id="details" type="text" name='details' defaultValue={toyDetails.details} required shadow />
                </div>
                <div className='flex gap-5 my-3'>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="category" value="Select Category" /><span className='text-red-700'>*</span>
                        </div>
                        <Select id="category" name='category' defaultValue={toyDetails.category} required>
                            <option value={'woodenDoll'}>Wooden Doll</option>
                            <option value={'mixedDoll'}>Mixed Doll</option>
                            <option value={'dollHouse'}>Doll House</option>
                            <option value={'clothDoll'}>Cloth Doll</option>
                        </Select>
                    </div>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="quantity" value="Toy Quantity" /><span className='text-red-700'>*</span>
                        </div>
                        <TextInput id="quantity" type="number" placeholder="Toy Quantity" name='quantity' defaultValue={toyDetails.quantity} required shadow />
                    </div>
                </div>
                <div className='flex gap-5 my-5'>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="sellerName" value="Seller Name" /><span className='text-red-700'>*</span>
                        </div>
                        <TextInput id="sellerName" type="text" placeholder="Seller Name" name='sellerName' defaultValue={toyDetails.sellerName} required shadow />
                    </div>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="sellerEmail" value="Seller Email" /><span className='text-red-700'>*</span>
                        </div>
                        <TextInput id="sellerEmail" type="email" placeholder="Seller Email" name='sellerEmail' defaultValue={toyDetails.sellerEmail} required shadow />
                    </div>
                </div>
                <div className='flex gap-5 my-3'>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="rating" value="Rating" /><span className='text-red-700'>*</span>
                        </div>
                        <TextInput id="rating" type="number" placeholder="Rating" name='rating' defaultValue={toyDetails.rating} required shadow />
                    </div>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="image" value="Toy Picture URL" /><span className='text-red-700'>*</span>
                        </div>
                        <TextInput id="image" type="text" placeholder="Toy Picture URL" name='image' defaultValue={toyDetails.image} required shadow />
                    </div>
                </div>
                <Button className='btn-custom' type="submit"><span className='text-xl font-bold'>Update Toy</span></Button>
            </form>
        </div>
    );
};

export default UpdateToy;