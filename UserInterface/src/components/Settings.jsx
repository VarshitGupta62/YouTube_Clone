import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img from "../assets/gde-najti-ssylku-na-svoj-kanal-youtube.jpg"
import axios from 'axios'
import { useState } from 'react'
import { useSelector } from 'react-redux';

function Settings() {

    const [loader, setLoader] = useState(false)
    const userdata = useSelector((state) => state.auth.user);

    const history = useNavigate()

    const handleDeleteClick = async () =>{
         
        const  value = confirm("Are you sure ?");

        if (value) {

            
            try {
                setLoader(true)
                const res = await axios.delete(`/api/v1/account/delete/${userdata._id}`)
                setLoader(false)
                alert("Your channel is deleted !");
                history("/signup");
                
            } catch (error) {

                console.log("Channel delete error :",error);
                alert(error);
                
            }
            
        }  
    }
  return (
    loader ?  
    <div  
    className="text-center  my-72 ">
    <div  
    className="p-4 text-center">
    <div role="status">
        <svg aria-hidden="true"  
        className="inline w-8 h-8 text-gray-200 animate-spin  fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span  
        className="sr-only">Loading...</span>
    </div>
    </div>
    </div>
    :
    <div  
    className="lg:mt-8 bg-white grid grid-cols-1 px-8 pt-6 xl:grid-cols-3 xl:gap-4  ">
     <div  
     className="mb-4 col-span-full xl:mb-2"> 
       {/*-------------------content---------------------  */}
        <div  
        className='text-lg mb-8 '>Settings</div>
        
        <div 
        className="mb-16 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  max-w-6xl ">
            <div 
            className="flex flex-col justify-between p-4 leading-normal">
                <h5 
                className="mb-2 text-2xl font-bold tracking-tight text-gray-900  ">Set up YouTube exactly how you want it</h5>
            </div>
            <img 
            className="ms-auto object-cover rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={img} alt=""/>
        </div>
        {/* ----------table---------- */}
        
        <div 
        className="relative overflow-x-auto  sm:rounded-lg">
            <table 
            className="w-1/2 text-sm text-left rtl:text-right text-gray-500 ">
                <tbody>
                    <tr 
                    className="bg-white   ">
                        <th scope="row" 
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  ">
                        Edit channel
                        </th>
                        <td 
                        className="px-6 py-4">
                            <Link to={"/customize_channel"} 
                            className="font-medium text-blue-600  hover:underline">Edit</Link>
                        </td>
                    </tr>
                    <tr 
                    className="bg-white   ">
                        <th scope="row" 
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Delete channel
                        </th>
                        <td 
                        className="px-6 py-4">
                        <button onClick={handleDeleteClick}  
                        className="font-medium text-blue-600 hover:underline">Delete</button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>

       {/*-------------------content---------------------  */}
    </div>
    </div>
  )
}

export default Settings