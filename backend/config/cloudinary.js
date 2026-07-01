import { v2 as cloudinary } from 'cloudinary';

(async function uploadCloudinary() {

    // Configuration
    cloudinary.config({ 
        cloud_name: 'vmryj3cr', 
        api_key: process.env.cloudinaryAPI_key, 
        api_secret: process.env.cloudinaryAPI_secret
    });
    
   
     const uploadResult = await cloudinary.uploader
       .upload(
           /*Connect to avatar*/ '', {
               public_id: 'pid',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('pid', {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('pid', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    
})();