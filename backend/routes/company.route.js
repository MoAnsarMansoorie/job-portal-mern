import express from "express"
import { getComanyByIdController, getCompanyController, registerCompanyController, updateCompanyController } from "../controllers/company.controller.js"

const router = express.Router()

router.route("/registerCompany", registerCompanyController)
router.route("/getCompany", getCompanyController)
router.route("/getCompany/:id", getComanyByIdController)
router.route("/updateCompany/:id", updateCompanyController)

export default router