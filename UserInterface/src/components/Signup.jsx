import React, { useState } from 'react';
import logo from "../assets/download (1).png";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const history = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/v1/account/signup', {
                name: name,
                email: email,
                password: password
            });
            console.log('Signup successful:', response.data);
            setSuccessMessage('Signup successful!'); // Set success message
            // Optionally, you can reset the form fields after successful signup
            alert("Signup successful!")
            setName('');
            setEmail('');
            setPassword('');
            history("/login")
        } catch (error) {
            console.error('Signup error:', error.response.data);
            setError(error.response.data.message || 'An error occurred.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 bg-slate-100 ">
            <a href="/" className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 ">
                <img src={logo} className="mr-4 h-11" alt="FlowBite Logo" />
            </a>
            {/* Card */}
            <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow ">
                <h2 className="text-2xl font-bold text-gray-900 ">
                    Create a Google Account
                </h2>
                <form onSubmit={handleFormSubmit} className="mt-8 space-y-6" action="#">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900  ">Your Name</label>
                        <input type="name" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Varshit Gupta" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900  ">Your email</label>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@company.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900  ">Your password</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  " required />
                    </div>
                    <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-black focus:ring-4 focus:ring-primary-300 sm:w-auto  ">Create account</button>
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                    {successMessage && <div className="text-green-500 text-sm">{successMessage}</div>} {/* Display success message */}
                    <div className="text-sm font-medium text-gray-500 ">
                        Already have an account? <Link to={"/login"} className="text-blue-700 hover:underline ">Login here</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
