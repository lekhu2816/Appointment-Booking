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
     default:""
  },
  address:{
     type:Object,
     default:{
        line1:"",
        line2:""
     }
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
    default:'0000000000'
  },
  isVerified:{
    type:Boolean,
    default:false
  },
  verificationToken:String,
  verificationTokenExpiresAt:Date
});

export const userModel = mongoose.model("user", userSchema);
