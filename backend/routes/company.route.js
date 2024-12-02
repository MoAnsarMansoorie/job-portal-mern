import express from "express"
import { getComanyByIdController, getCompanyController, registerCompanyController, updateCompanyController } from "../controllers/company.controller.js"
import isAuthenticated from "../middlewares/isAuthenticated.js"

const router = express.Router()

router.route("/registerCompany").post(isAuthenticated, registerCompanyController)
router.route("/getCompany").get(isAuthenticated, getCompanyController)
router.route("/getCompany/:id").get(isAuthenticated, getComanyByIdController)
router.route("/updateCompany/:id").put(updateCompanyController)

export default router