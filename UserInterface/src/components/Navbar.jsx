
import React  from 'react';
import logo from '../assets/YouTube_Logo_2017.svg.png';


function Navbar({openChange}){
  const toggleSidebar = () => {
    console.log("this is false");
     openChange()
  };
  return (
     <>
    <nav className="fixed z-30 w-full bg-white border-b border-gray-200   ">

    <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start">
        {/* Button to toggle sidebar */}
    <button
        onClick={toggleSidebar}
        className="fixed top-1 lg:top-2 left-3 z-40 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md hover:bg-gray-100 group "
      >
        
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

      
      </button>

      <a  className="flex ml-14 md:mr-24">
          <img src={logo} className={` mr-2.5  h-6 `} alt="Youtube Logo" /> 
          {/* <span className={`self-center text-xl font-semibold sm:text-2xl whitespace-nowrap  `}>Z-Tube</span> */}
      </ a> 
        
        <form action="#" method="" style={{marginLeft:300}} className=" hidden lg:block  lg:pl-3.5">
          <label for="topbar-search" className="sr-only">Search</label>
          <div className="relative mt-1 lg:w-96">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" style={{height:34}} name="email" id="topbar-search" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500  focus:border-primary-500 block w-full pl-10 p-2.5 " placeholder="Search"/>
          </div>
        </form>
        

      </div>
    </div>
    </div>
    </nav>
     </>
  )
}

export default Navbar