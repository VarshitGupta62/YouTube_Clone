import  {Link} from 'react-router-dom'
import React from 'react'
import logo from '../assets/asset-6.jpg'
import logo2 from '../assets/image-1@2x.jpg'
import image from "../assets/F0ZWYHTI8ZQZ55Q.webp"

function AllVideo() {
  return (
    <div className="lg:mt-8 bg-white grid grid-cols-1 px-8 pt-6 xl:grid-cols-3 xl:gap-4  ">
    <div className="mb-4 col-span-full xl:mb-2">
        
       {/*----------- content ------------- */}
       <section >
       <div className="container">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {/* ------------video------------ */}
               <div>
                   <div className="relative">
                   <Link to={"/watch"}>
                     <img src={image} alt="Image Not Found" className="w-full h-auto"/>
                   </Link>
                   </div>
                   <div className="mt-2 md:mt-0">
                       <div>
                           <h3 className="text-lg font-bold"><Link to={"/watch"}>JARVIS - Marvel's Iron Man 3 Second Screen Experience - Trailer</Link></h3>
                       </div>
                       <div className="mt-2">
                           <ul>
                               <li className="text-sm"> 00mins : 16sec</li>
                           </ul>
                       </div>
                   </div>
               </div>
           {/* --------------------------------- */}
           <div>
                   <div className="relative">
                   <Link to={"/"}>
                     <img src={logo} alt="Image Not Found" className="w-full h-auto"/>
                   </Link>                    </div>
                   <div className="gen-info-contain mt-2 md:mt-0">
                       <div className="gen-movie-info">
                           <h3 className="text-lg font-bold"><Link to="single-movie.html">The warrior life</Link></h3>
                       </div>
                       <div className="mt-2">
                           <ul>
                               <li className="text-sm">2hr 00mins</li>
                           </ul>
                       </div>
                   </div>
               </div>
                
       </div>
   </div>
</section>


       {/*----------- content ------------- */}
   </div>
</div>
  )
}

export default AllVideo