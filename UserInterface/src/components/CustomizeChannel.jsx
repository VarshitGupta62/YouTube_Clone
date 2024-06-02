import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function CustomizeChannel() {
  const data = useSelector((state) => state.auth.user);
  const history = useNavigate();

  const [userdata, setUserData] = useState(null);
  const [loader, setLoader] = useState(false);

  const [file, setFile] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (data._id) {
      const fetchUser = async () => {
        try {
          setLoader(true);
          const response = await axios.get(`/api/v1/account/userData/${data._id}`);
          const userData = response.data.data;
          setUserData(userData);
          setName(userData.name);
          setEmail(userData.email);
          setPassword(userData.password);
          setLoader(false);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      fetchUser();
    }
  }, [data._id]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    if (file) {
      formData.append('avatar', file);
    }

    try {
      setLoader(true);
      const res = await axios.put(`/api/v1/account/update/${userdata._id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setLoader(false);
      alert("Account Updated Successfully");
      history("/your_channel");
    } catch (error) {
      console.log("Update Account error", error);
      alert("Something went wrong?");
    }
  };

  const handleCancel = () => {
    history("/your_channel");
  };

  return (
    loader ?  
    <div className="text-center my-72">
      <div className="p-4 text-center">
        <div role="status">
          <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
    :
    <>
      <div className="lg:mt-8 bg-white grid grid-cols-1 px-8 pt-6 xl:grid-cols-3 xl:gap-4">
        <div className="mb-4 col-span-full xl:mb-2">
          {userdata ? (
            <>
              <form onSubmit={handleFormSubmit} encType="multipart/form-data" className="max-w-3xl">
                <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-900">Name</label>
                <p id="helper-text-explanation" className="mb-3 text-sm text-gray-500">Choose a channel name that represents you and your content. Changes made to your name and picture are visible only on YouTube and not other Google services. You can change your name twice in 14 days.</p>
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Varshit Gupta" required />

                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900">Email</label>
                <p id="helper-text-explanation" className="mb-3 text-sm text-gray-500">Ensure email security by using strong, unique passwords and enabling two-factor authentication to safeguard against unauthorized access and data breaches.</p>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="varshit@example.com" required />

                <label htmlFor="avatar" className="block mb-1 text-sm font-medium text-gray-900">Avatar</label>
                <p id="helper-text-explanation" className="mb-3 text-sm text-gray-500">It’s recommended to use a picture that’s at least 98 x 98 pixels and 4MB or less. Use a PNG or GIF (no animations) file. Make sure your picture follows the YouTube Community Guidelines.</p>
                <input type="file" name="avatar" id="avatar" onChange={handleFileChange} className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />

                <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900">Password</label>
                <p id="helper-text-explanation" className="mb-3 text-sm text-gray-500">Ensure email security by using strong, unique passwords and enabling two-factor authentication to safeguard against unauthorized access and data breaches.</p>
                <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="********" required />

                <button onClick={handleCancel} type="button" className="text-white bg-gray-700 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center me-2">
                  Cancel
                </button>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center">
                  Edit
                </button>
              </form>
            </>
          ) : (
            <div>Loading user data...</div>
          )}
        </div>
      </div>
    </>
  );
}

export default CustomizeChannel;
