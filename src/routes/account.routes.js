import { Router } from "express";
import { registerUser } from "../controllers/account.controller.js";

const router = Router()

router.route("/signup").post( registerUser)

export default router