import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { Button, Label, TextInput } from "flowbite-react";

const Register = () => {

    const { error, setError, createUser, setUser, signInWithGoogle, loading, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignUp = (event) => {
        setError('')
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) {
            setError('Password not match!!');
            return;
        }
        else if (password.length < 6) {
            setError('Password must be greater than 6');
            return;
        }

        // Create user 
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                navigate("/");
                setLoading(true)
            })
            .catch(err => {
                setError(err.message);
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
            <h1 className='mt-24 text-center text-4xl font-bold'>Sign Up</h1>
            <form onSubmit={handleSignUp} className="mt-4 flex max-w-md mx-auto flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" placeholder="Your Email" required />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" type="password" placeholder='Your password' required />
                </div>
                <Button className='bg-orange-500 btn-custom' type="submit">Sign Up</Button>
            </form>
            <div className='max-w-md mx-auto mt-4'>
                <span>Already have an account? <Link to={'/login'} className='text-blue-700'>Login</Link></span>
                <hr className='border mt-2' />
                <span className='block text-center mt-1 mb-1'>Or</span>
                <hr className='border' />
                <button onClick={handleSignInWithGoogle} className='border border-red-600 bg-red-600 px-8 py-4 w-full rounded-lg hover:bg-transparent text-white hover:text-gray-950 mt-4'>Sign Up With Google</button>
            </div>
        </div>
    );
};

export default Register;