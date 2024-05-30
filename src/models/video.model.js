import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

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
        },
        views:{
            type:Number,
            default:0
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "newUser"
        }

    },
    {
        timestamps: true
    }

)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video" , videoSchema)