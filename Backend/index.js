import express from "express";
import mongoose from "mongoose"
import { userRouter } from "./routes/user.router.js";
import cors from 'cors'
const app=express();

app.use(cors())
app.use(express.json())
app.use("/users",userRouter)

app.listen(9879,async()=>{
    await mongoose.connect("mongodb+srv://lokeshsharma7779:biKav0aC1QLSwQ4F@cluster0.ir5h7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Database connected");
    console.log("server started at http://localhost:9000")
  })

//   biKav0aC1QLSwQ4F