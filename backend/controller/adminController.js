import { doctorModel } from "../models/doctorModel.js";
import uploadToCloudnary from "../utils/cloudnary.js";
import {hashPassword} from '../utils/hashPassword.js'
import fs from 'fs'
// ---------------------------add doctor ------------------------//

const addDoctor = async (req, res) => {
  try {
    const file = req.file;
    const { doctorData } = req.body;
    if (!file) {
      return res.status(401).json({
        success: false,
        message: "Profile picture is required",
      });
    }
    const {
    name,
    email,
    password,
    experience,
    fees,
    about,
    speciality,
    degree,
    address,
    slotAvailable
    } = JSON.parse(doctorData);
     

    if(!name||!email||!password||!experience||!fees||!about||!speciality||!degree||!address||!slotAvailable){
      return res.status(401).json({
        success:false,
        message:"All fields are required"
      })
    }
    
    const doctorPresent=await doctorModel.findOne({email:email});
    if(doctorPresent){
      return res.status(401).json({
        success:false,
        message:"Doctor already exist"
      })
    }

    const {path}=file;
    const imageUrl=await uploadToCloudnary(path);
    fs.unlink(path, (error) => {
      if (!error) {
        console.log("Successfully deleted");
      }
    });
    const hashedPassword=await hashPassword(password);
    Object.keys(slotAvailable).forEach((key) => {
      slotAvailable[key] = slotAvailable[key].split(",").map((slot) => slot.trim());
    });
    
    

    const doctor=new doctorModel({
      name:name,
      email:email,
      password:hashedPassword,
      image:imageUrl,
      experience:experience,
      fees:fees,
      about:about,
      speciality:speciality,
      degree:degree,
      address:address,
      available:true,
      date:Date.now(),
      slotAvailable:slotAvailable

    })
    const newDoctor= await doctor.save();
    res.status(200).json({
      success: true,
      message: "Doctor added successfully",
    });
  } catch (error) {
   console.log(error)
    res.status(500).json({
      success: false,
      message: "Error while adding doctor",
    });
  }
};


//------------------------get Doctor----------------------------//

const getDoctors = async(req, res) => {
  try {
    const doctors=await doctorModel.find({});
    res.status(200).json({
      success:true,
      doctors
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while getting doctor",
    });
  }
};
export { addDoctor, getDoctors };
