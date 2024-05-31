import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CustomizeChannel({ userdata }) {
  const history = useNavigate();

  const [file, setFile] = useState('');
  const [name, setName] = useState(userdata.name.toUpperCase());
  const [email, setEmail] = useState(userdata.email);
  const [password, setPassword] = useState(userdata.password);

  // console.log(userdata);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // console.log(name);
    // console.log(email);
    // console.log(password);
    // console.log(file);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    if (file) {
      formData.append('avatar', file);
    }

    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    
    try {
      const res = await axios.put(`/api/v1/account/update/${userdata._id}`, formData ,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      );
      console.log(res.data);
      alert("Account Updated Successfully");
      history("/your_channel");
    } catch (error) {
      console.log("Update Account error", error);
      alert("Something went wrong?");
    }
  };

  const handleCancel = () => {
    history("/");
  };

  return (
    <div className="lg:mt-8 bg-white grid grid-cols-1 px-8 pt-6 xl:grid-cols-3 xl:gap-4">
      <div className="mb-4 col-span-full xl:mb-2">
        {/* <div className='mb-4 font-sm text-lg'>Customize Channel</div> */}
        {/* <hr className='mb-4' /> */}
        <form onSubmit={handleFormSubmit} encType="multipart/form-data" className="max-w-3xl">
          <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-900">Name</label>
          <p id="helper-text-explanation" className="mb-3 text-sm text-gray-500">Choose a channel name that represents you and your content. Changes made to your name and picture are visible only on YouTube and not other Google services. You can change your name twice in 14 days. </p>
          <input type="text" name='name' id="name" value={name} onChange={(e) => setName(e.target.value)} className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Varshit Gupta" required />

          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900">Email</label>
          <p id="helper-text-explanation" className="mb-3 text-sm text-gray-500">Ensure email security by using strong, unique passwords and enabling two-factor authentication to safeguard against unauthorized access and data breaches.</p>
          <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="varshit@example.com" required />

          <label htmlFor="avatar" className="block mb-1 text-sm font-medium text-gray-900">Avatar</label>
          <p id="helper-text-explanation" className="mb-3 text-sm text-gray-500">It’s recommended to use a picture that’s at least 98 x 98 pixels and 4MB or less. Use a PNG or GIF (no animations) file. Make sure your picture follows the YouTube Community Guidelines. </p>
          <input type="file" name='avatar' id="avatar"  onChange={handleFileChange} className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />

          <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-900">Password</label>
          <p id="helper-text-explanation" className="mb-3 text-sm text-gray-500">Ensure email security by using strong, unique passwords and enabling two-factor authentication to safeguard against unauthorized access and data breaches.</p>
          <input type="password" name='password' id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="********" required />
          
          <button onClick={handleCancel} type="button" className="text-white bg-gray-700 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center me-2">
            Cancel
          </button>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center">
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomizeChannel;
