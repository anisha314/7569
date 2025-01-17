import {Router} from "express";
import { register,login } from "../controllers/user.controller.js";

const userRouter=Router();

userRouter.post("/signup",register);
userRouter.post("/login",login)


export {userRouter}