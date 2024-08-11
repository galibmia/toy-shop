import React, { useContext } from 'react';
import { Button, Label, TextInput } from "flowbite-react";
import "./Login.css"
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {

    const { signInWithGoogle, setError, setUser } = useContext(AuthContext);
    // Navigate the route
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    console.log(from)

    // Sign In with Email and Password
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInWithPassword(email, password)
            .then(res => {
                const loggedUser = res.user;
                setUser(loggedUser);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message)
            })

    }

    const handleLoginWithGoogle = () => {
        signInWithGoogle()
            .then(res => {
                const loggedUser = res.user;
                setUser(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(err => setError(err.message))
    }
    return (
        <div className='mt-32 w-[90%] mx-auto custom-bg'>
            <h1 className='mt-24 text-center text-4xl font-bold'>Login</h1>
            <form onSubmit={handleLogin} className="mt-4 flex max-w-md mx-auto flex-col gap-4">
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

                <Button className='bg-orange-500 btn-custom' type="submit">Login</Button>
            </form>
            <div className='max-w-md mx-auto mt-4'>
                <span>New Here? <Link to={'/register'} className='text-blue-700'>Create an account</Link></span>
                <hr className='border mt-2' />
                <span className='block text-center mt-1 mb-1'>Or</span>
                <hr className='border' />
                <button onClick={handleLoginWithGoogle} className='border border-red-600 px-8 py-4 w-full rounded-lg hover:bg-red-600 hover:text-white mt-4'>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;