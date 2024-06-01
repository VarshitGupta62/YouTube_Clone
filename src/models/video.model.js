import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const  videoSchema = new Schema(
    {
        videoFile:{
            type: String,
            required: true
        },
        thumbnail:{
            type: String,
            required: true
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
            ref: "newUser",
            required: true
        }

    },
    {
        timestamps: true
    }

)

// Method to increment views
videoSchema.methods.incrementViews = async function () {
    this.views++;
    await this.save();
  };

videoSchema.plugin(mongooseAggregatePaginate)


export const Video = mongoose.model("Video" , videoSchema)