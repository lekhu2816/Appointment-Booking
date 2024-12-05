import express from "express";
import upload from "../utils/multer.js";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  resendOTP,
  signup,
  verify,
  userInfo,
  signin,
  logout,
  updateUserProfile,
} from "../controller/userController.js";





const userRouter = express.Router();
userRouter.post("/signup", signup);
userRouter.post("/verify", verify);
userRouter.put("/resend-otp", resendOTP);
userRouter.post("/signin", signin);
userRouter.get("/info", authMiddleware, userInfo);
userRouter.post("/logout", logout);
userRouter.put("/update-profile",authMiddleware,upload.single('profile'), updateUserProfile);

export default userRouter;
