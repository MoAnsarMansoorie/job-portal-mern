import express from "express"
import { loginController, logoutController, registerController, updateProfileController } from "../controllers/user.controller.js"
import isAuthenticated from "../middlewares/isAuthenticated.js"
import { singleUpload } from "../middlewares/multer.js"

const router = express.Router()

router.route("/signup").post(singleUpload, registerController)
router.route("/login").post(loginController)
router.route("/logout").get(logoutController)
router.route("/profile/update").post(isAuthenticated, singleUpload, updateProfileController)

export default router