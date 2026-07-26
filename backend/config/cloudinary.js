// import { v2 as cloudinary } from 'cloudinary';
// import fs from 'fs'


// const uploadOnCloudinary = async (filePath) => {
//     cloudinary.config({ 
//         cloud_name: process.env.CLOUDINARY_NAME, 
//         api_key: process.env.CLOUDINARY_API_KEY , 
//         api_secret: process.env.CLOUDINARY_API_SECRET 
//     });
//     try {
//         if(!filePath){
//         return null
//     }
//     const uploadResult = await cloudinary.uploader.upload
//     (filePath)
//     fs.unlinkSync(filePath)
//     return uploadResult.secure_url

    
        
//     } catch (error) {
//         // fs.unlinkSync(filePath)
//         console.log(error)
//          throw error;
//     }
    
// }
// export default uploadOnCloudinary
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

const uploadOnCloudinary = async (filePath) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    console.log("Uploading:", filePath);

    const uploadResult = await cloudinary.uploader.upload(filePath);

    console.log("Uploaded:", uploadResult.secure_url);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log("Deleted local file");
    }

    return uploadResult.secure_url;

  } catch (error) {
    console.log("Cloudinary Error:", error);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    throw error;
  }
};

export default uploadOnCloudinary;