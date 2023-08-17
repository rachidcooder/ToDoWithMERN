import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import route from "./routes/route.js"
import connectDB from "./config/db.js"
 
 dotenv.config()
 const app=express();
 const PORT=process.env.PORT||5000
 app.use(cors());
 app.use(express.json());

  app.use("/api/todo",route)

connectDB();
    
 app.listen(PORT,()=>{
  console.log("app listening to  port ",PORT);
 })