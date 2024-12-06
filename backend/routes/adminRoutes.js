import express from 'express'
import upload from '../utils/multer.js';
import { addDoctor } from '../controller/adminController.js';
const adminRouter=express.Router();

adminRouter.post('/add-doctor',upload.single('image'),addDoctor)
adminRouter.get('doctors')

export default adminRouter