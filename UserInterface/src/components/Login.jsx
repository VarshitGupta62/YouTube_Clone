import React, { useState } from 'react';
import logo from "../assets/download (1).png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/slice/authSlice.js';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            await dispatch(login(formData)).unwrap();
            setError('');
            alert("login successful");
            // navigate('/your_channel');
            navigate('/');
        } catch (err) {
            alert("Something went worng !")
            // setError(err.message || 'An error occurred.');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 bg-slate-100 ">
            <Link to="/" className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10">
                <img src={logo} className="mr-4 h-11" alt="FlowBite Logo" />
            </Link>
            <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow">
                <h2 className="text-2xl font-bold text-gray-900">
                    Login to Your Account
                </h2>
                <form onSubmit={handleFormSubmit} className="mt-8 space-y-6">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="name@company.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            id="password"
                            placeholder="••••••••"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-black focus:ring-4 focus:ring-primary-300 sm:w-auto">
                        Login
                    </button>
                    {error && <div className="text-red-500 text-sm">{error}</div>}
                    <div className="text-sm font-medium text-gray-500">
                        Not registered? <Link to="/signup" className="text-blue-700 hover:underline">Create account</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;




 // try {

        //     const res = await axios.post('/api/v1/account/login' , {
        //         email : email ,
        //         password : password
        //     })

        //     // console.log('Full response:', res);
        //     // console.log('Response data:', res.data.data.user._id);

        //     console.log('login successful:', res.data.data.user);
            
        //     setUser(res.data.data.user);
        //     alert("login successful");
        //     history('/your_channel');

             
            
        // } catch (error) {

        //     console.log('Signup error : ', error);
        //     alert(" Login failed !");
            
        // }