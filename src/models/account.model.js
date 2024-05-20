import mongoose, {Schema} from "mongoose";


const userSignUp = new Schema(
    {
        name:{
            type:String,
            requiered:true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true

        },
        email:{
            type:String,
            requiered:true,
            unique: true,
            lowercase: true,
            trim: true 

        },
        password:{
            type:String,
            requiered:true
        },
        refreshToken:{
            type:String
        }
    },
    {
        timestamps:true
    }
)


export const newUser = mongoose.model("newUser" , userSignUp)