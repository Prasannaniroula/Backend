import mongoose ,{Schema} from "mongoose";
import  jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true,
    },
    avatar:{
        type:String, // couldinary url
        required:true,

    },
    coverImage:{
        type:String, //cloudinary url
    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,"Password is required"],
        lowercase:true,
        trim:true,

    },
    refreshToken:{
        type:String,
    }

},
{timestamps:true}
)
userSchema.pre("save",async function(next) {
    this.password = bcrypt.hash(this.password,10)
})
export const User = mongoose.model("User",)