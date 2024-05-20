import { newUser } from "../models/account.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser =  asyncHandler( async (req , res) =>{
     

    const { name , email, password } = req.body
    console.log(name);
     

    const user = await newUser.create({
         name ,
         email , 
         password
    })
    console.log(user);

    return res.status(201).json({messege: "user add" , user})

}) 

export {
    registerUser
}