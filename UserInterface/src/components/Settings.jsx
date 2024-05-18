import React from 'react'
import { Link } from 'react-router-dom'
import img from "../assets/gde-najti-ssylku-na-svoj-kanal-youtube.jpg"

function Settings() {
  return (
    <div className="lg:mt-8 bg-white grid grid-cols-1 px-8 pt-6 xl:grid-cols-3 xl:gap-4  ">
     <div className="mb-4 col-span-full xl:mb-2"> 
       {/*-------------------content---------------------  */}
        <div className='text-lg mb-8 '>Settings</div>
        
        <div class="mb-16 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  max-w-6xl ">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900  ">Set up YouTube exactly how you want it</h5>
            </div>
            <img class="ms-auto object-cover rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={img} alt=""/>
        </div>
        {/* ----------table---------- */}
        
        <div class="relative overflow-x-auto  sm:rounded-lg">
            <table class="w-1/2 text-sm text-left rtl:text-right text-gray-500 ">
                <tbody>
                    <tr class="bg-white   ">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  ">
                        Edit channel
                        </th>
                        <td class="px-6 py-4">
                            <Link to={"/customize_channel"} class="font-medium text-blue-600  hover:underline">Edit</Link>
                        </td>
                    </tr>
                    <tr class="bg-white   ">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Delete channel
                        </th>
                        <td class="px-6 py-4">
                            <Link to={"/"} class="font-medium text-blue-600   hover:underline">Delete</Link>
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