import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { registerUser } from "../controllers/account.controller.js";
import { login , updateAccount } from "../controllers/account.controller.js";

const router = Router()

router.route("/signup").post(upload.none() , registerUser)
router.route("/login").post(login)
router.route("/update/:id").put(updateAccount)


export default router