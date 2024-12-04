import express from 'express'
import authMiddleware from '../middleware/authMiddleware.js';
import { resendOTP, signup, verify,userInfo, signin } from '../controller/userController.js';
const userRouter=express.Router();

userRouter.post('/signup',signup);
userRouter.post('/verify',verify);
userRouter.put('/resend-otp',resendOTP);
userRouter.post('/signin',signin);
userRouter.get('/info',authMiddleware,userInfo);


export default userRouter;