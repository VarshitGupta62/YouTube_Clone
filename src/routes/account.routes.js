import { Router } from "express";
import { deleteAccount, registerUser ,  login , updateAccount } from "../controllers/account.controller.js";
import { upload } from "../middlewares/multer.middleware.js"

const router = Router()

router.route("/signup").post(registerUser)
router.route("/login").post(login)
router.route("/delete/:id").delete(deleteAccount)
router.route("/update/:id").put(upload.single("avatar") , updateAccount );


export default router