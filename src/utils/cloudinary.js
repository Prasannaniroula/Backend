import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()


    // Configuration
cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME , 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
    });

const uploadOnCloudinary =async(localFilePath)=>{
    try {
        if(!localFilePath) return null;
        //upload the file on the cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto",
        })
        // console.log("file has been uploaded on cloudinary", response.url);
        // return response;
        fs.unlinkSync(localFilePath)
        // console.log(response);
        return response;
        
    } catch (error) {

      fs.unlinkSync(localFilePath)
      return null;
    }
}

export {uploadOnCloudinary};
