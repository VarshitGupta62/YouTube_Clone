import { Video } from "../models/video.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const publishAVideo = asyncHandler( async (req , res) => {

    const { title, description} = req.body
    // console.log(title);
    // console.log(description);

    if ( !title || !description) {

        throw new ApiError(400 , "All field are required");
        
    }

    const video = await Video.create({
        title,
        description,
    })


    return res.status(201).json(new ApiResponse(200 , video , "Video published successfully",))


})

export {
    publishAVideo
}