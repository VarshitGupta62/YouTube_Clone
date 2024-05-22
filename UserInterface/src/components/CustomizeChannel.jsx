import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function CustomizeChannel({userdata}) {

  const history = useNavigate();

  // const [file , setFile] = useState("");
  const [name , setName] = useState((userdata.name).toUpperCase());
  const [email , setEmail] = useState(userdata.email);
  const [password , setPassword] = useState(userdata.password);

  const handleFormSubmit = async (e) =>{
    e.preventDefault();
    try {

      const res = await axios.put( `/api/v1/account/update/${userdata._id}` , {
        name : name,
        email : email,
        password : password
      }) 

      console.log(res.data);
      alert("Account Updated Successfully");
      history("/your_channel");

      
    } catch (error) {

      console.log("Update Account error",error);
      
    }
  }

  const handleCancel = () =>{
    history("/");
  }


  return (
    <div className="lg:mt-8 bg-white grid grid-cols-1 px-8 pt-6 xl:grid-cols-3 xl:gap-4  ">
     <div className="mb-4 col-span-full xl:mb-2"> 
     {/* ---------content------- */}
     <div className='mb-4 font-sm text-lg'>Customize Channel</div>

     <hr className='mb-4' />
     
    <form  onSubmit={handleFormSubmit} class="max-w-3xl "> 
    <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-900 ">Name</label>
    <p id="helper-text-explanation" className="mb-3 text-sm text-gray-500  ">Choose a channel name that represents you and your content. Changes made to your name and picture are visible only on YouTube and not other Google services. You can change your name twice in 14 days. </p>
    <input type="name" id="name" value={name} aria-describedby="helper-text-explanation" onChange={ (e) =>  setName(e.target.value) }  className=" mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Varshit Gupta" required/>

    <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-900 ">Email</label>
    <p id="helper-text-explanation" className="mb-3 text-sm text-gray-500  ">Choose a channel name that represents you and your content. Changes made to your name and picture are visible only on YouTube and not other Google services. You can change your name twice in 14 days. </p>
    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}aria-describedby="helper-text-explanation" className=" mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Varshit Gupta" required/>


    {/* <label htmlFor="avatar" className="block mb-1 text-sm font-medium text-gray-900 ">Avatar</label>
    <p id="helper-text-explanation" className="mb-3 text-sm text-gray-500  ">Choose a channel name that represents you and your content. Changes made to your name and picture are visible only on YouTube and not other Google services. You can change your name twice in 14 days. </p>
    <input type="file" id="avatar" value={file} aria-describedby="helper-text-explanation" onChange={ (e) => setFile(e.target.value) } className="mb-3 bg-gray-50 border   border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="image.jpg" required/> */}

    <label htmlFor="password" class="block mb-1 text-sm font-medium text-gray-900 ">Password</label>
    <p id="helper-text-explanation" class="mb-3 text-sm text-gray-500  ">Choose a channel name that represents you and your content. Changes made to your name and picture are visible only on YouTube and not other Google services. You can change your name twice in 14 days. </p>
    <input type="text" id="password" value={password}  onChange={(e) => setPassword(e.target.value)}  aria-describedby="helper-text-explanation" className="mb-4 bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="@15#gilA#" required/>
    <button onClick={handleCancel} type="button" class="text-white bg-gray-700 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2  ">
    Cancel
    </button>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ">
      Edit
    </button>

     
    </form>

    {/* ---------------button-------------- */}
    
    
    {/* ---------------button-------------- */}

     {/* ---------content------- */}

     </div>
     </div>
  )
}

export default CustomizeChannel