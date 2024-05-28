import React from 'react';
import video from "../assets/JARVIS START UP.mp4"
import image from "../assets/profile-picture-5.jpg"

function Video() {
  return (
    <div className="lg:mt-8 bg-white grid grid-cols-1 px-8 pt-6 xl:grid-cols-3 xl:gap-4">
      <div className="mb-4 col-span-full xl:mb-2">
        {/*-------------------content---------------------*/}
        {/* <div>Video</div> */}
        <section className="pb-5 mt-3">
          <div className="container mx-auto">
            <div className="row">
              <div className="col-lg-9 col-xl-9">
                <section>
                  <div className="row">
                    <div className="col">
                      <div className="relative video-wrap">  
                        <video className="lg:h-96" controls>
                          <source src={video} type="video/mp4"/>
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="mt-4">
                  <h1 className="mb-3 text-xl">JARVIS - Marvel's Iron Man 3 Second Screen Experience - Trailer</h1>
                  <hr />
                  <div class="pb-3 mt-2">
                      <div class="media flex flex-row items-center justify-center sm:justify-start">
                        <img
                          class="w-12 h-12 rounded-full"
                          src={image}
                          alt="User"
                        />
                        <div class="ml-2 mb-1">
                          <ul class="flex flex-row items-center space-x-2 text-sm font-medium text-gray-500">
                            <li className=' '>
                              <a class="inline-flex px-4 py-3" href="#">
                                Varshit Gupta
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                class="inline-flex px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-6 h-6"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                                  />
                                </svg>11
                              </a>
                            </li>
                            <li className=''>
                              <a
                                href="#"
                                class="inline-flex px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke-width="1.5"
                                  stroke="currentColor"
                                  class="w-6 h-6"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                                  />
                                </svg>
                                <span className='mr-8' >11</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>


                  <hr />
                  <div className="mt-4 mb-4 flex items-center">
                    <span className="flex items-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                      </svg>
                      January 25, 2020
                    </span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      2811 Views
                    </span>
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum accusamus ab cumque? Doloremque tempora adipisci reprehenderit quo quam, non voluptas obcaecati laudantium fugit commodi at aliquam iste eos officiis ab.</p>
                  
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
