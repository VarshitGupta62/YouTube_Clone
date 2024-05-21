import { newUser } from "../models/account.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

// {******------------------------ register user---------------------------******}

const registerUser =  asyncHandler( async (req , res) =>{

    const { name , email, password } = req.body
    // console.log(name);
    // console.log(req.headers);

    if (!name || !email || !password) {
        throw new ApiError(400, "All fields are required");
    }

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
// {------------------------ register user---------------------------}

// {*****------------------------ login user---------------------------******}

const login  = asyncHandler(async (req , res) => {
    
    const {email , password } = req.body
    // console.log(email);

    if ( !email || !password) {
        throw new ApiError(400, "All fields are required");
    }

    const userfind = await newUser.findOne({ email })

    if ( !userfind ) {

        throw new ApiError(404 , "User does not exist")
        
    }

    const isPasswordValid = await userfind.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(400 , "Invalid password")
    }


    return res
    .status(200)
    .json(
        new ApiResponse(
            200, 
            userfind,
            "User logged In Successfully"
        )
    )
})
// {------------------------ login user---------------------------}

// {**********-------------------Update user-------------------**********}
  const updateAccount = asyncHandler(async(req , res) => {

    const {name , email , password} = req.body

    if (! name|| !email || !password) {
        throw new ApiError(400, "All fields are required")
    }

    // const avatarLocalPath = req.file?.path

    // if (!avatarLocalPath) {
    //     throw new ApiError(400, "Avatar file is missing")
    // }
    // const userid = '664c3ade2c624bffac004f16'

    const user = await newUser.findByIdAndUpdate(
         // Use authenticated user's ID
         req.params.id,
        {
          $set: {
            name: name,
            email: email,
            password: password
          }
        },
        { new: true }
      );

    return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully"))


    

  })


// {-----------------------------Update user-----------------------------}

export {
    registerUser,
    login,
    updateAccount
}