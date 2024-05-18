import React from 'react'

function CustomizeChannel() {
  return (
    <div className="lg:mt-8 bg-white grid grid-cols-1 px-8 pt-6 xl:grid-cols-3 xl:gap-4  ">
     <div className="mb-4 col-span-full xl:mb-2"> 
     {/* ---------content------- */}
     <div className='mb-4 font-sm text-lg'>Customize Channel</div>

     <hr className='mb-4' />
     
    <form class="max-w-xl "> 
    <label for="email" class="block mb-1 text-sm font-medium text-gray-900 ">Your Name</label>
    <p id="helper-text-explanation" class="mb-3 text-sm text-gray-500  ">Choose a channel name that represents you and your content. Changes made to your name and picture are visible only on YouTube and not other Google services. You can change your name twice in 14 days. </p>
    <input type="email" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com"/>
    </form>

     {/* ---------content------- */}

     </div>
     </div>
  )
}

export default CustomizeChannel