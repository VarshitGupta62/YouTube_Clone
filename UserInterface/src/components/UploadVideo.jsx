import axios from 'axios';
import React, { useState } from 'react';

function UploadVideo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [thumbnail, setThumbnail] = useState(null);
    const [videoFile, setVideoFile] = useState(null);

    const handleToggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const handleThumbnailChange = (e) => {
        setThumbnail(e.target.files[0]);
    };

    const handleVideoFileChange = (e) => {
        setVideoFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('thumbnail', thumbnail);
        formData.append('videoFile', videoFile);

        try {
            const res = await axios.post('/api/v1/videos/publish', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            alert("Successfully uploaded");
            console.log(res.data);
        } catch (error) {
            console.log("Video Upload error: ", error);
            alert(error);
        }
    };

    return (
        <>
            <div className='text-center'>
                <button onClick={handleToggleModal} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 mt-4">Create</button>
            </div>

            {isModalOpen && (
                <div id="crud-modal" className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
                    <div className="relative p-4 w-full max-w-xl max-h-full bg-white rounded-lg shadow">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 className="text-lg font-semibold text-gray-900">
                                Upload New Video
                            </h3>
                            <button
                                type="button"
                                onClick={handleToggleModal}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form onSubmit={handleSubmit} className="p-4 md:p-5">
                            <div className="grid gap-4 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        placeholder="Enter video title"
                                        required
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="thumbnail" className="block mb-2 text-sm font-medium text-gray-900">Thumbnail</label>
                                    <input
                                        type="file"
                                        name="thumbnail"
                                        id="thumbnail"
                                        onChange={handleThumbnailChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="videoFile" className="block mb-2 text-sm font-medium text-gray-900">Video</label>
                                    <input
                                        type="file"
                                        name="videoFile"
                                        id="videoFile"
                                        onChange={handleVideoFileChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                        required
                                    />
                                </div>
                                <div className="col-span-2">
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                                    <textarea
                                        id="description"
                                        rows="4"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Enter video description"
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="text-white inline-flex items-center bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
                                </svg>
                                Add new Video
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default UploadVideo;
