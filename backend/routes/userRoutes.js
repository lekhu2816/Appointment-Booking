import express from 'express'
import { resendOTP, signup, verify } from '../controller/userController.js';
const userRouter=express.Router();

userRouter.post('/signup',signup);
userRouter.post('/verify',verify);
userRouter.put('/resend-otp',resendOTP);


export default userRouter;