import express from 'express'
import upload from '../utils/multer.js';
import { addDoctor, getDoctors } from '../controller/adminController.js';
const adminRouter=express.Router();

adminRouter.post('/add-doctor',upload.single('image'),addDoctor)
adminRouter.get('/doctors',getDoctors)

export default adminRouter