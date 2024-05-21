import { Router } from "express";
// import { upload } from "../middlewares/multer.middleware.js";
import { registerUser } from "../controllers/account.controller.js";
import { login } from "../controllers/account.controller.js";

const router = Router()

// upload.none(),
router.route("/signup").post(registerUser)
router.route("/login").post(login)


export default router