import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  image:{
     type:String,
     default:"https://res.cloudinary.com/dlkex5mge/image/upload/v1733346592/userLogo_eij5cc.png"
  },
  address:{
     type:String,
     default:""
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other",""],
    default:""
  },
  dob: {
    type: String,
    default: "Not Selected",
  },
  phoneNo:{
    type:Number,
    default:0
  },
  isVerified:{
    type:Boolean,
    default:false
  },
  verificationToken:String,
  verificationTokenExpiresAt:Date
});

export const userModel = mongoose.model("user", userSchema);
