import React from 'react';
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
import './AddToys.css'
import Swal from 'sweetalert2';


const AddToys = () => {

    const handleAddToy = (event) => {
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

        const newToy = {
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

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "You clicked the button!",
                    icon: "success"
                  });
                form.reset();
            }
        })
    }


    return (
        <div className='mt-40 w-3/4 mx-auto'>
            <h1 className='text-4xl text-center'>Add A Toy</h1>
            <form onSubmit={handleAddToy} className="flex flex-col gap-4 mt-8">
                <div className='flex gap-5 my-3'>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Toy Name" /><span className='text-red-700'>*</span>
                        </div>
                        <TextInput id="name" type="text" placeholder="Toy Name" name='name' required shadow />
                    </div>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="price" value="Toy Price" /><span className='text-red-700'>*</span>
                        </div>
                        <TextInput id="price" type="number" placeholder="Toy Price" name='price' required shadow />
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="details" value="Details" /><span className='text-red-700'>*</span>
                    </div>
                    <Textarea className='resize-none' id="details" type="text" name='details' required shadow />
                </div>
                <div className='flex gap-5 my-3'>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="category" value="Select Category" /><span className='text-red-700'>*</span>
                        </div>
                        <Select id="category" name='category' required>
                            <option selected disabled>Select a Category</option>
                            <option>Car</option>
                            <option>Doll</option>
                            <option>Boys</option>
                            <option>Girls</option>
                        </Select>
                    </div>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="quantity" value="Toy Quantity" /><span className='text-red-700'>*</span>
                        </div>
                        <TextInput id="quantity" type="number" placeholder="Toy Quantity" name='quantity' required shadow />
                    </div>
                </div>
                <div className='flex gap-5 my-5'>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="sellerName" value="Seller Name" /><span className='text-red-700'>*</span>
                        </div>
                        <TextInput id="sellerName" type="text" placeholder="Seller Name" name='sellerName' required shadow />
                    </div>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="sellerEmail" value="Seller Email" /><span className='text-red-700'>*</span>
                        </div>
                        <TextInput id="sellerEmail" type="email" placeholder="Seller Email" name='sellerEmail' required shadow />
                    </div>
                </div>
                <div className='flex gap-5 my-3'>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="rating" value="Rating" /><span className='text-red-700'>*</span>
                        </div>
                        <TextInput id="rating" type="number" placeholder="Rating" name='rating' required shadow />
                    </div>
                    <div className='w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="image" value="Toy Picture URL" /><span className='text-red-700'>*</span>
                        </div>
                        <TextInput id="image" type="text" placeholder="Toy Picture URL" name='image' required shadow />
                    </div>
                </div>
                <Button className='btn-custom' type="submit"><span className='text-xl font-bold'>Add Toy</span></Button>
            </form>
        </div>
    );
};

export default AddToys;