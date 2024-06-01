import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// user all videos

function AllVideo() {
  const userdata = useSelector((state) => state.auth.user);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(`/api/v1/videos/allUserVideo/${userdata._id}`);
        setVideos(response.data.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, [userdata._id]);

  const handleDelete = async (videoId) => {
    if (confirm('Are you sure you want to delete this video?')) {
        // console.log(videoId);
      try {
        await axios.delete(`/api/v1/videos/delete/${videoId}`);
        setVideos(videos.filter(video => video._id !== videoId));
        alert(" Video deleted Successfully ! ")
      } catch (error) {
        console.error('Error deleting video:', error);
      }
    }
  };

  return (
    <div className="lg:mt-8 bg-white grid grid-cols-1 px-8 pt-6 xl:grid-cols-3 xl:gap-4">
      <div className="mb-4 col-span-full xl:mb-2">
        <section>
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos.map((video) => (
                <div key={video._id}>
                  <div className="relative">
                    <Link to={`/watch/${video._id}`}>
                      <img src={video.thumbnail} alt={video.title} className="w-64 h-36" />
                    </Link>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <div>
                      <h3 className="text-lg font-bold">
                        <Link to={`/watch/${video._id}`}>{video.title}</Link>
                      </h3>
                    </div>
                    <div className="mt-2">
                      <ul className="flex items-center space-x-2">
                        <li className="text-sm">Duration: {video.duration} mins</li>
                        <button
                          type="button"
                          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center mt-5 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                          onClick={() => handleDelete(video._id)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                        </button>
                      </ul>
                      <ul>
                        <li className="text-sm">Views: {video.views}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AllVideo;
