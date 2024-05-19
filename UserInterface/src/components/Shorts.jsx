import React from 'react';

function Shorts() {
  return (
    <div className="lg:mt-8 bg-white grid grid-cols-1 px-8 pt-6 xl:grid-cols-3 xl:gap-4">
      <div className="mb-4 col-span-full xl:mb-2">
        {/*-------------------content---------------------*/}
        <div className='mb-8'>Shorts</div>
        <div className="bg-yellow-50 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4" role="alert">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="flex-shrink-0 size-4 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
            <path d="M12 9v4"></path>
            <path d="M12 17h.01"></path>
          </svg>
        </div>
        <div className="ms-4">
          <h3 className="text-sm font-semibold">
            Cannot connect to the database
          </h3>
          <div className="mt-1 text-sm text-yellow-700">
            We are unable to save any progress at this time.
          </div>
        </div>
      </div>
    </div>
        {/*-------------------content---------------------*/}
      </div>
    </div>
  );
}

export default Shorts;
