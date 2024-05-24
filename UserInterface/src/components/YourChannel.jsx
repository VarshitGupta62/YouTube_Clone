import { useState } from "react";
import React  from 'react'
import { Link , Outlet } from "react-router-dom";

function YourChannel({userdata}) {

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  
  // console.log(formatDate);

  

  console.log(userdata);
  return (
    <>
    <div className="lg:mt-8 bg-white grid grid-cols-1 px-8 pt-6 xl:grid-cols-3 xl:gap-4  ">
     <div className="mb-4 col-span-full xl:mb-2"> 
       {/*-------------------content---------------------  */}
        {/* <div className='mb-4' >YourChannel</div> */}
        {/* <hr /> */}
        <div class="mt-4 flex items-center gap-5">
            <img class="w-28 h-28 rounded-full" src={userdata.avatar} alt="not found"/>
            <div class="font-bold dark:text-black">
                <div className='text-lg' >{(userdata.name || "Admin").toUpperCase()}</div>
                <div class="text-sm mb-3 text-gray-500  ">Joined in {formatDate(userdata.createdAt)}</div>
                <Link to={"/customize_channel"}>
                <button type="button" className=" text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-2.5 py-2.5 me-2 ">Customize channel</button>
                </Link>
            </div>
        </div>
        {/* --------------------------------tab-------------------------------- */}
        

        <div className="border-b border-gray-200">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500">
            <li className="me-2">
              <Link
                to={"dasboard"}
                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
                // aria-current="page"
              >
                <svg
                  className="w-4 h-4 me-2 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                 All Videos
              </Link>
            </li>
            <li className="me-2">
              <Link
                to={"upload_video"}
                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300"
              >
                <svg
                  className="w-4 h-4 me-2 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 11.424V1a1 1 0 1 0-2 0v10.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.228 3.228 0 0 0 0-6.152ZM19.25 14.5A3.243 3.243 0 0 0 17 11.424V1a1 1 0 0 0-2 0v10.424a3.227 3.227 0 0 0 0 6.152V19a1 1 0 1 0 2 0v-1.424a3.243 3.243 0 0 0 2.25-3.076Zm-6-9A3.243 3.243 0 0 0 11 2.424V1a1 1 0 0 0-2 0v1.424a3.228 3.228 0 0 0 0 6.152V19a1 1 0 1 0 2 0V8.576A3.243 3.243 0 0 0 13.25 5.5Z" />
                </svg>
                Upload Video
              </Link>
            </li>
          </ul>
        </div>

        {/* --------------------------------tab-------------------------------- */}
        {/* <hr className='mt-4' /> */}

        <Outlet/>


        
      
       {/*-------------------content---------------------  */}
    </div>
    </div>
    </>
  )
}

export default YourChannel