import { newUser } from "../models/account.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const registerUser =  asyncHandler( async (req , res) =>{
     

    const { name , email, password } = req.body
    console.log(name);

    const checkUser = await newUser.findOne(
        {
            $or: [{name} , {email}]
        }
    )

    if(checkUser){
        // return res.status(400).json({message: "User already exists" , data: null})
        throw new ApiError(409, "User with email or username already exists")
    }
     

    const user = await newUser.create({
         name ,
         email , 
         password
    })
    // console.log(user);

    return res.status(201).json(new ApiResponse(200 , user ,"User created successfully"))

}) 

export {
    registerUser
}