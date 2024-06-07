import React, { useState } from 'react';
import logo from "../assets/download (1).png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/slice/authSlice.js';

function Login() {

    const [loader, setLoader] = useState(false)
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
            setLoader(true);
            await dispatch(login(formData)).unwrap();
            setError('');
            setLoader(false);
            // alert("login successful");
            // navigate('/your_channel');
            navigate('/home');
        } catch (err) {
            alert("Please check your email and password !")
            setLoader(false)
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
        loader ?  
    <div className="text-center  my-72 ">
    <div className="p-4 text-center">
    <div role="status">
        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin  fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
    </div>
    </div>
    :
        <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 bg-slate-100 ">
            <Link to="/" className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10">
                <img src={logo} className="mr-4 h-11" alt="Logo" />
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