import multer from "multer";
import fs from "fs";
import path from "node:path";

const storage  = multer.diskStorage({
    destination: function(req,file,cb){
        const uploadpath = path.join("public","temp");
        fs.mkdirSync(uploadpath,{recursive:true});
        cb(null,uploadpath)
    },
    filename: function(req,file,cb){
        cb(null,file.originalname )

    }
})

export const upload = multer({ 
    storage,
 })
