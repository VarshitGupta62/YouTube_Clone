import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Check if the Cloudinary API key is available
// if (!process.env.CLOUDINARY_API_KEY) {
//     throw new Error("Cloudinary API key is missing. Please ensure the CLOUDINARY_API_KEY environment variable is set.");
// }
// import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: 'drr9bsrar', 
  api_key: '642756139658148', 
  api_secret: 'tzD7LV-I8e3O-Z-OX96-m2QZSKY' 
});
// cloudinary.config({ 
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//     api_key: process.env.CLOUDINARY_API_KEY, 
//     api_secret: process.env.CLOUDINARY_API_SECRET 
// });

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            throw new Error("Local file path is required");
        }

        // Upload the file on Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
            media_metadata: true
        });

        // Log the successful upload
        // console.log("File is uploaded on Cloudinary:", response.url);

        //   // Check if the uploaded file is a video
        // if (response.resource_type === 'video') {
        //     // Fetch video details including duration
        //     const videoDetails = await cloudinary.api.resource(response.public_id, {
        //         resource_type: "video"
        //     });

        //     // Log video duration
        //     console.log("Video duration:", videoDetails);
        // } else {
        //     // Log that no details are available for photos
        //     console.log("No details available for photos.");
        // }

        // Optionally, remove the locally saved temporary file
        fs.unlinkSync(localFilePath);

        return response;
    } catch (error) {
        // Log the error
        console.error("Error uploading file:", error.message);

        // Ensure the local file exists before attempting to unlink it
        if (fs.existsSync(localFilePath)) {
            // Remove the locally saved temporary file as the upload operation failed
            fs.unlinkSync(localFilePath);
        }

        // Return an object with an error message
        return { error: error.message };
    }
};

export { uploadOnCloudinary };
