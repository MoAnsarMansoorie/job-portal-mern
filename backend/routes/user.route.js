import express from "express"
import { loginController, registerController, updateProfileController } from "../controllers/user.controller.js"
import isAuthenticated from "../middlewares/isAuthenticated.js"

const router = express.Router()

router.route("/signup").post(registerController)
router.route("/login").post(loginController)
router.route("/profile/update").post(isAuthenticated ,updateProfileController)

export default router