import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { Button, Label, TextInput } from "flowbite-react";
import Swal from 'sweetalert2';

const Register = () => {

    const { error, setError, createUser, setUser, signInWithGoogle, loading, setLoading, updateUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignUp = (event) => {
        setError('')
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            Swal.fire({
                title: "Error!!",
                text: "Password not match!!",
                icon: "error"
            });

            setError('Password not match!!');
            return;
        }
        else if (password.length < 6) {
            Swal.fire({
                title: "Error!!",
                text: "Password must be greater than 6",
                icon: "error"
            });
            return;
        }

        // Create user 
        createUser(email, password)
            .then(res => {
                updateUser(name, photoURL)
                    .then()
                    .catch((err) => {
                        const message = err.message;
                        Swal.fire({
                            title: "Error!!",
                            text: message,
                            icon: "error"
                        });
                    })
                Swal.fire({
                    title: "Good job!",
                    text: "Sign Up successfully",
                    icon: "success"
                });
                navigate('/')
            })
            .catch(err => {
                const message = err.message;
                Swal.fire({
                    title: "Error!!",
                    text: message,
                    icon: "error"
                });
            })

        // Reset the form
        form.reset();
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(res => {
                const loggedUser = res.user;
                setUser(loggedUser);
                navigate("/");
            })
            .catch(err => setError(err.message))
    }


    return (
        <div className='mt-32 w-[90%] mx-auto custom-bg'>
            <h1 className='mt-10 text-center text-4xl font-bold'>Sign Up</h1>
            <form onSubmit={handleSignUp} className="mt-4 flex max-w-md mx-auto flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Your Name" /><span className='text-red-700'>*</span>
                    </div>
                    <TextInput id="name" type="text" placeholder="Your Name" name='name' required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" /><span className='text-red-700'>*</span>
                    </div>
                    <TextInput id="email1" type="email" placeholder="Your Email" name='email' required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="photo" value="Profile Picture" /><span className='text-red-700'>*</span>
                    </div>
                    <TextInput id="photo" type="text" placeholder="Photo URL" name='photoURL' required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" /><span className='text-red-700'>*</span>
                    </div>
                    <TextInput id="password1" type="password" placeholder='Your password' name='password' required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="confirmPassword" value="Confirm password" /><span className='text-red-700'>*</span>
                    </div>
                    <TextInput id="confirmPassword" type="password" placeholder='Confirm password' name='confirmPassword' required />
                </div>
                <Button className='bg-orange-500 btn-custom' type="submit">Sign Up</Button>
            </form>
            <div className='max-w-md mx-auto mt-4'>
                <span>Already have an account? <Link to={'/login'} className='text-blue-700'>Login</Link> now</span>
                <hr className='border mt-2' />
                <span className='block text-center mt-1 mb-1'>Or</span>
                <hr className='border' />
                <button onClick={handleSignInWithGoogle} className='border border-red-600 bg-red-600 px-8 py-4 w-full rounded-lg hover:bg-transparent text-white hover:text-gray-950 mt-4'>Sign Up With Google</button>
            </div>
        </div>
    );
};

export default Register;