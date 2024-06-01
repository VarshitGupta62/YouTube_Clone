import React, { useState, useEffect } from 'react';
import axios from 'axios';
import image from "../assets/profile-picture-5.jpg";
import { useParams } from 'react-router-dom';

function Video() {
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // Fetch video data from your API
    axios.get(`/api/v1/videos/videoData/${id}`)
      .then(response => {
        setVideoData(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!videoData) {
    return <div>No video data found.</div>;
  }

  return (
    <div className="lg:mt-8 bg-white grid grid-cols-1 px-8 pt-6 xl:grid-cols-3 xl:gap-4">
      <div className="mb-4 col-span-full xl:mb-2">
        {/*-------------------content---------------------*/}
        <section className="pb-5 mt-3">
          <div className="container mx-auto">
            <div className="row">
              <div className="col-lg-9 col-xl-9">
                <section>
                  <div className="row">
                    <div className="col">
                      <div className="relative video-wrap">  
                        <video className="lg:h-96 " controls>
                          <source src={videoData.videoFile} type="video/mp4"/>
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="mt-4">
                  <h1 className="mb-3 text-xl">{videoData.title}</h1>
                  <hr />
                  <div className="pb-3 mt-2">
                      <div className="media flex flex-row items-center justify-center sm:justify-start">
                        <img
                          className="w-12 h-12 rounded-full"
                          src={image}
                          alt="User"
                        />
                        <div className="ml-2 mb-1">
                          <ul className="flex flex-row items-center space-x-2 text-sm font-medium text-gray-500">
                            <li className="">
                              <a className="inline-flex px-4 py-3" href="#">
                                Varshit Gupta
                              </a>
                            </li>
                            {/* Add other user-related information here */}
                          </ul>
                        </div>
                      </div>
                    </div>


                  <hr />
                  <div className="mt-4 mb-4 flex items-center">
                    <span className="flex items-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                        {/* Add calendar icon */}
                      </svg>
                      January 25, 2020
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                        {/* Add views icon */}
                      </svg>
                      {videoData.views} Views
                    </span>
                  </div>
                  <p>{videoData.description}</p>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*-------------------content---------------------*/}
      </div>
    </div>
  );
}

export default Video;
