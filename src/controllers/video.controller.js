import { Video } from "../models/video.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

// ********------------------video upload-------------------********

const publishAVideo = asyncHandler(async (req, res) => {

    // console.log('Request Body:', req.body);
    // console.log('Request Files:', req.files);
    
    const { title, description } = req.body;
    const thumbnailFile = req.files?.thumbnail?.[0];
    const videoFile = req.files?.videoFile?.[0];
    
    if (!title || !description || !thumbnailFile || !videoFile) {
        throw new ApiError(400, "All fields are required, including thumbnail and video files");
    }
    
    const thumbnailFilePath = await uploadOnCloudinary(thumbnailFile.path);
    const videoFilePath = await uploadOnCloudinary(videoFile.path);
    
    if ( !thumbnailFilePath || !videoFilePath) {
        
        throw new ApiError(400 , "file upload problem")
        
    }
    
    
    const video = await Video.create({
        title,
        description,
        thumbnail: thumbnailFilePath.url,
        videoFile: videoFilePath.url,
        owner: req.user._id // Set the owner field to the ID of the logged-in user
    });
    
    return res.status(201).json(new ApiResponse(201, video, "Video published successfully"));
});

// ********------------------video upload-------------------********


// ********------------------all video find-------------------********

const getAllVideos = asyncHandler(async(req , res) => {

    const videos = await Video.find(); // Fetch all videos from the Video collection
    
    return res.status(200).json(new ApiResponse(200, videos, "Videos fetched successfully"));

})


// ********------------------all video find-------------------********

// ********------------------all User video find-------------------********

const getAllUserVideos = asyncHandler(async(req , res) =>{

    const { owner } = req.params; // Extract the owner ID from the request parameters

    if (!owner) {
        throw new ApiError(400, "Owner ID is required");
    }

    const userVideos = await Video.find({ owner }); // Fetch all videos that match the owner's ID

    if (!userVideos.length) {
        return res.status(404).json(new ApiResponse(404, null, "No videos found for this user"));
    }

    return res.status(200).json(new ApiResponse(200, userVideos, "User videos fetched successfully"));


})

// ********------------------all User video find-------------------********

// ********------------------delete video by id-------------------********

const deleteVideoById = asyncHandler(async(req , res) =>{

    const { id } = req.params; // Extract the video ID from the request parameters
    const userId = req.user._id; // Get the ID of the logged-in user

    const video = await Video.findById(id);

    if (!video) {
        throw new ApiError(404, "Video not found");
    }

    // Check if the logged-in user is the owner of the video
    if (video.owner.toString() !== userId.toString()) {
        throw new ApiError(403, "You are not authorized to delete this video");
    }

    await Video.findByIdAndDelete(id); // Delete the video from the database

    return res.status(200).json(new ApiResponse(200, null, "Video deleted successfully"));



})



// ********------------------delete video by id-------------------********

export {
     publishAVideo,
     getAllVideos,
     getAllUserVideos,
     deleteVideoById
     };
