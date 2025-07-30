import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js" 
import {uploadOnCloudinary} from "../utils/cloudinary.js"

const registerUser = asyncHandler(async(req,res)=>{
    const { fullname,email,username, password }=req.body
    console.log("email:",email)
    if(
        [fullname,emaol,username,password].some((field)=>field?.trim()=== "")
    ){
        throw new ApiError(400,"All fields are required");
    }

   const existedUser = User.findOne({
        $or:[{username},{email}]
    })
    console.log(existedUser)

    if(existedUser){
        throw new ApiError(409,"User with email or username already exists")
    }
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar file is required")
    }
    await uploadOnCloudinary(avatarLocalPath)
})

export {registerUser};
