import mongoose, {Schema} from "mongoose";

const  videoSchema = new Schema(
    {
        video:{
            type: String,
            // required: true
        },
        thumbnaile:{
            type: String,
            // required: true
        },
        title:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        },
        duration:{
            type: Number,
            default: 0,
            // required: true
        }

    },
    {
        timestamps: true
    }

)

export const Video = mongoose.model("Video" , videoSchema)