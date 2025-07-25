import connectDB from "./db/index.js";




connectDB()

// import dotenv from 'dotenv';
// dotenv.config();

// import express from "express";
// const app = express();



// (async()=>{
// try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     console.log("✅DB connected successfully")

//     app.listen(process.env.PORT,()=>{
//       console.log(`App is working on: http://localhost:${process.env.PORT}`)
//     })
    
// } catch (error) {
//     console.log("Mongo db Error:",error)
//     process.exit(1);
    
// }


// })()