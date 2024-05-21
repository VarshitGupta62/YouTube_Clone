import { Router } from "express";
import { registerUser } from "../controllers/account.controller.js";
// import { upload } from "../middlewares/multer.middleware.js";

const router = Router()

router.route("/signup").post( 
    // upload.none(),
    registerUser)

export default router