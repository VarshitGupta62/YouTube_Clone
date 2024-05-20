import mongoose, {Schema} from "mongoose";


const userSignUp = new Schema(
    {
        name:{
            type:String,
            requiered:true

        },
        email:{
            type:String,
            requiered:true

        },
        password:{
            type:String,
            requiered:true
        }

    }
)


export const newUser = mongoose.model("newUser" , userSignUp)