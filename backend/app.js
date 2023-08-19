import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import route from "./routes/route.js"
import connectDB from "./config/db.js"
import path from "path"
 
 dotenv.config();
 const app=express();
 const PORT=process.env.PORT||5000
 app.use(cors());
 app.use(express.json());
connectDB();
 
 app.use("/api/todo",route)

// -----------------deployment--------------------------

// -----------------deployment--------------------------

 app.listen(PORT,()=>{
  console.log("app listening to  port ",PORT);
 })