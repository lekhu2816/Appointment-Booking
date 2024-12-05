import { v2 as cloudinary } from 'cloudinary';
const uploadToCloudnary=async(imagePath)=>{
cloudinary.config({
    cloud_name: process.env.CLOUDNIARY_CLOUD_NAME, 
    api_key: process.env.CLOUDNIARY_API_KEY, 
    api_secret: process.env.CLOUDNIARY_API_SECRET
})
const response= await cloudinary.uploader.upload(imagePath);
return response.secure_url
}

export default uploadToCloudnary