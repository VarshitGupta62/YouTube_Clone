import { Router } from "express";
import { deleteAccount, registerUser ,  login , updateAccount , logoutUser , refreshAccessToken , getUserById , GetWatchHistory , addToWatchHistory} from "../controllers/account.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/signup").post(registerUser)
router.route("/login").post(login)
router.route("/logout").post(verifyJWT ,  logoutUser)
router.route("/refreshtoken").post(refreshAccessToken)
router.route("/delete/:id").delete(deleteAccount)
router.route("/update/:id").put(upload.single("avatar") , updateAccount );
router.route("/userData/:id").get(getUserById)
router.route("/history").get(verifyJWT , GetWatchHistory)
router.route("/addToHistory").post(verifyJWT , addToWatchHistory)

export default router