import { Router } from "express";
import { publishAVideo } from "../controllers/video.controller.js";

const router = Router();

router.route("/publish").post( publishAVideo )



export default router