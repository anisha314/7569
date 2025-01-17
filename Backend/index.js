import express from "express";
import mongoose from "mongoose"
import { userRouter } from "./routes/user.router.js";
const app=express();

app.use(cors())
app.use(express.json())
app.use("/users",userRouter)

app.listen(9000,async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017");
    console.log("Database connected");
    console.log("server started at http://localhost:9000")
  })