import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [videos, setVideos] = useState([]);
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // setLoader(true)
        const response = await axios.get('/api/v1/videos/allVideo');
        // setLoader(false)
        setVideos(response.data.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [videos]);
  

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
    <>
      <div className="lg:mt-8 bg-white grid grid-cols-1 px-8 pt-6 xl:grid-cols-3 xl:gap-4">
        <div className="mb-4 col-span-full xl:mb-2">
          {/*----------- content ------------- */}
          <section>
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {videos.map((video) => (
                  <div key={video._id}>
                    <div className="relative">
                      <Link to={`/watch/${video._id}`}>
                        <img src={video.thumbnail} alt={video.title} 
                        // className="w-full h-auto" 
                        className="w-80 h-40" 
                        />
                      </Link>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <div>
                        <h3 className="text-lg font-bold truncate">
                          <Link to={`/watch/${video._id}`}>{video.title}</Link>
                        </h3>
                      </div>
                      <div className="mt-2">
                        {/* <ul>
                          <li className="text-sm">Duration: {video.duration} mins</li>
                        </ul> */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/*----------- content ------------- */}
        </div>
      </div>
    </>
  );
}

export default Home;

// import  {Link} from 'react-router-dom'
// import React from 'react'
// import logo from '../assets/asset-6.jpg'
// import logo2 from '../assets/image-1@2x.jpg'
// import image from "../assets/F0ZWYHTI8ZQZ55Q.webp"

// function Home() {
//   return (
//     <>
//    <div className="lg:mt-8 bg-white grid grid-cols-1 px-8 pt-6 xl:grid-cols-3 xl:gap-4  ">
//      <div className="mb-4 col-span-full xl:mb-2">
         
//         {/*----------- content ------------- */}
//         <section >
//         <div className="container">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {/* ------------video------------ */}
//                 <div>
//                     <div className="relative">
//                     <Link to={"/watch"}>
//                       <img src={image} alt="Image Not Found" className="w-full h-auto"/>
//                     </Link>
//                     </div>
//                     <div className="mt-2 md:mt-0">
//                         <div>
//                             <h3 className="text-lg font-bold"><Link to={"/watch"}>JARVIS - Marvel's Iron Man 3 Second Screen Experience - Trailer</Link></h3>
//                         </div>
//                         <div className="mt-2">
//                             <ul>
//                                 <li className="text-sm"> 00mins : 16sec</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             {/* --------------------------------- */}
//             <div>
//                     <div className="relative">
//                     <Link to={"/"}>
//                       <img src={logo} alt="Image Not Found" className="w-full h-auto"/>
//                     </Link>                    </div>
//                     <div className="gen-info-contain mt-2 md:mt-0">
//                         <div className="gen-movie-info">
//                             <h3 className="text-lg font-bold"><Link to="single-movie.html">The warrior life</Link></h3>
//                         </div>
//                         <div className="mt-2">
//                             <ul>
//                                 <li className="text-sm">2hr 00mins</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 {/*  */}
//                 <div>
//                     <div className="relative">
//                     <Link to={"/"}>
//                       <img src={logo2} alt="Image Not Found" className="w-full h-auto"/>
//                     </Link>                    </div>
//                     <div className="gen-info-contain mt-2 md:mt-0">
//                         <div className="gen-movie-info">
//                             <h3 className="text-lg font-bold"><Link to="single-movie.html">The warrior life</Link></h3>
//                         </div>
//                         <div className="mt-2">
//                             <ul>
//                                 <li className="text-sm">2hr 00mins</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 {/*  */}
//                 <div>
//                     <div className="relative">
//                     <Link to={"/"}>
//                       <img src={logo} alt="Image Not Found" className="w-full h-auto"/>
//                     </Link>                    </div>
//                     <div className="gen-info-contain mt-2 md:mt-0">
//                         <div className="gen-movie-info">
//                             <h3 className="text-lg font-bold"><Link to="single-movie.html">The warrior life</Link></h3>
//                         </div>
//                         <div className="mt-2">
//                             <ul>
//                                 <li className="text-sm">2hr 00mins</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//                 {/*  */}
//                 <div>
//                     <div className="relative">
//                     <Link to={"/"}>
//                       <img src={logo2} alt="Image Not Found" className="w-full h-auto"/>
//                     </Link>                    </div>
//                     <div className="gen-info-contain mt-2 md:mt-0">
//                         <div className="gen-movie-info">
//                             <h3 className="text-lg font-bold"><Link to="single-movie.html">The warrior life</Link></h3>
//                         </div>
//                         <div className="mt-2">
//                             <ul>
//                                 <li className="text-sm">2hr 00mins</li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//         </div>
//     </div>
// </section>


//         {/*----------- content ------------- */}
//     </div>
// </div>
//     </>
//   )
// }

// export default Home