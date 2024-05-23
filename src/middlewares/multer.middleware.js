import multer from "multer";

// Define storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp"); // Specify the destination directory for uploaded files
  },
  filename: function (req, file, cb) {
    // Generate a unique filename for uploaded files
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = file.originalname.split('.').pop(); // Extract file extension
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extension); // Construct filename
  }
});

// Initialize Multer with the storage configuration
export const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } // Optional: Limit file size to 10MB
});
