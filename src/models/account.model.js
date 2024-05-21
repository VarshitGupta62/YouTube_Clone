import mongoose, {Schema} from "mongoose";


const userSignUp = new Schema(
    {
        name:{
            type:String,
            requiered:true,
            unique: true,
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
        avatar:{
            type:String
        }
    },
    {
        timestamps:true
    }
)


// Method to compare the entered password with the stored password
userSignUp.methods.isPasswordCorrect = async function (password) {
    // In a real application, you should hash the input password and compare it to the stored hashed password
    return this.password === password;
};


export const newUser = mongoose.model("newUser" , userSignUp)