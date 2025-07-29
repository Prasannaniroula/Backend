import connectDB from "./db/index.js";
import {app} from './app.js';
import dotenv from 'dotenv';
dotenv.config({
  path:'./env',
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at port:${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log("Error connecting database !!!!",error);
  });





















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
