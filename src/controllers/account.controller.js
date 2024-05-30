import { newUser } from "../models/account.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const generateAccessAndRefereshTokens = async(userId) => {

    try {

        const user = await user.findbyId(userId)
        const accessToken = user.generateAccessToken
        const refresehToken = user.generateRefreshToken

        user.refresehToken = refresehToken
        await user.save({validateBeforeSave: false})

        return {accessToken , refresehToken}

    } catch (error) {
        throw new ApiError(500 , "Something went worng while generating referesh and access token")
    }

}


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

    const avatar="https://res.cloudinary.com/drr9bsrar/image/upload/v1716498256/egt2sufg3qzyn1ofws9t.jpg"
    
    const user = await newUser.create({
        name ,
        email , 
        password,
        avatar
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

    const { accessToken , refresehToken } =  await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await User.userfind(user._id).
    select("-password -refreshToken")

    const options = {
        httpOnly : true,
        secure: true
    }


    return res
    .status(200)
    .cookie("accessToken" , accessToken , options)
    .cookie("refreshToken" , refresehToken , options)
    .json(
        new ApiResponse(
            200, 
            // userfind,
            {
                user: loggedInUser , accessToken , refresehToken
            },
            "User logged In Successfully"
        )  
    )
})
// {------------------------ login user---------------------------}


// {**********-------------------logout user-------------------**********}

const logoutUser = asyncHandler(async( req , res) => {

    newUser.findByIdAndDelete(
        req.user._id,
        {
            $set: {
                refresehToken: undefined
            }
        },
        {
            new: true
        }
    )

    
    const options = {
        httpOnly : true,
        secure: true
    }

    return res 
    .status(200)
    .clearCookie("accessToken" , options)
    .clearCookie("refreshToken" , options)
    .json(new ApiResponse(200 , {} , "User Logged Out"))

})



// {**********-------------------logout user-------------------**********}
// {**********-------------------Update user-------------------**********}
  const updateAccount = asyncHandler(async(req , res) => {

    const {name , email , password} = req.body
    console.log(name);

    if (! name|| !email || !password) {
        throw new ApiError(400, "All fields are required")
    }

    // console.log(req.files);
    let avatarLocalPath;
    let avatarName;
    if (req.file) {
        avatarLocalPath = req.file ? req.file.path : null; // Path to the uploaded file
        avatarName  = await uploadOnCloudinary(avatarLocalPath)
    }


    const user = await newUser.findByIdAndUpdate(
        req.params.id,
        {
            $set: {
                name: name,
                email: email,
                password: password,
                avatar: avatarName.url // Save the avatar path to the database
            }
        },
        { new: true }
    );

    return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully"))

  })


// {-----------------------------Update user-----------------------------}



// {----------------------------Delete user-------------------------------}

const deleteAccount = asyncHandler( async (req , res) => {

    const user = await newUser.findByIdAndDelete(req.params.id)

    if (!user) {
        throw new ApiError(404, "User not found")
    }

    res.status(200).json({
        success: true,
        message: "Account deleted successfully"
    });
        
})



// {----------------------------Delete user-------------------------------}


export {
    registerUser,
    login,
    updateAccount,
    deleteAccount,
    logoutUser
}