import { userModel } from "../models/userModel.js";
import uploadToCloudnary from "../utils/cloudnary.js";
import { generateToken } from "../utils/generateToken.js";
import { hashPassword } from "../utils/hashPassword.js";
import { sendOTPEmail, sendWelcomeMail } from "../utils/sendMail.js";
import bcrypt from "bcrypt";
import fs from "fs";
// -------------------------------user Registration--------------------------//

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(401).json({
        success: false,
        message: "All fields required",
      });
    }
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      console.log("hello");
      return res.status(401).json({
        success: false,
        message: "User already exist",
      });
    }
    const hashedPassword = await hashPassword(password);
    const verificationToken = Math.floor(100000 + Math.random() * 900000);
    const verificationTokenExpiresAt = Date.now() + 15 * 60 * 1000;
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
      verificationToken: verificationToken,
      verificationTokenExpiresAt: verificationTokenExpiresAt,
    });
    const user = await newUser.save();
    sendOTPEmail(verificationToken, email);
    res.status(200).json({
      success: true,
      message: "OTP is send to your registered email",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error Occured while Registering",
    });
  }
};

// -------------------------------------user verification-------------------------//

const verify = async (req, res) => {
  const { otp, email } = req.body;
  try {
    if (!otp || !email) {
      return res.status(400).json({
        success: flase,
        message: "All fields are required",
      });
    }
    let user = await userModel.findOne({ email });

    if (Date.now() > user.verificationTokenExpiresAt) {
      return res.status(401).json({
        success: false,
        message: "OTP Expired",
      });
    }

    if (otp != user.verificationToken) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    await userModel.findOneAndUpdate({ email }, { isVerified: true });
    const token = generateToken(user._id);
    sendWelcomeMail(email, user.name);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      success: true,
      message: "Account Created Successfully",
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Error While verifying user",
    });
  }
};

//----------------------------- resend otp--------------------------------//

const resendOTP = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email required",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User doesn't exist",
      });
    }
    const verificationToken = Math.floor(100000 + Math.random() * 900000);
    const verificationTokenExpiresAt = Date.now() + 15 * 60 * 1000;
    await userModel.findOneAndUpdate(
      { email },
      {
        verificationToken: verificationToken,
        verificationTokenExpiresAt: verificationTokenExpiresAt,
      }
    );
    sendOTPEmail(verificationToken, email);
    res.status(200).json({
      success: true,
      message: "OTP is send to your registered email",
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Error occured while sending otp",
    });
  }
};

// ----------------------------------signin---------------------------------//

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User doesn't exist",
      });
    }

    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Password",
      });
    }

    const token = generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      success: true,
      message: "User login successfully",
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Error occured while signin",
    });
  }
};

//-----------------------------get user info-----------------------------//

const userInfo = async (req, res) => {
  try {
    const { id } = req.user;
    const user = await userModel.findById(id);
    const userInfo = {
      id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      address: user.address,
      gender: user.gender,
      dob: user.dob,
      phoneNo: user.phoneNo,
    };
    res.status(200).json({
      success: true,
      userInfo,
      message: "User info send successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while sending userInfo",
    });
  }
};

//-----------------------------userlogout------------------------------//

const logout = async (req, res) => {
  try {
    res.clearCookie("token",{
      httpOnly: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,}
    );
    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while logging out",
    });
  }
};

// ----------------------------update user profile------------------------//

const updateUserProfile = async (req, res) => {
  try {
    const file = req.file;
    const {id}=req.user;
    console.log(id)
    const {userData}=req.body;
   
    const userInfo=JSON.parse(userData);
    let url;
    if (file) {
      const { path } = file;
       url = await uploadToCloudnary(path);
      fs.unlink(path, (error) => {
        if (!error) {
          console.log("Successfully deleted");
        }
      });
    }
    if(file){
      userInfo.image=url
    }
   
    const user=await userModel.findByIdAndUpdate(id,userInfo,{ new: true }   );
    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while logging out",
    });
  }
};

export {
  signup,
  verify,
  resendOTP,
  signin,
  userInfo,
  logout,
  updateUserProfile,
};
