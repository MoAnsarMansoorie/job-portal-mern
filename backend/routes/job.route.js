import express from "express"
import { adminJobController, getAllJobsController, getJobByIdController, jobRegisterController } from "../controllers/job.controller.js"
import isAuthenticated from "../middlewares/isAuthenticated.js"

const router = express.Router()

router.route("/postjob").post(isAuthenticated, jobRegisterController)
router.route("/getalljobs").get(isAuthenticated, getAllJobsController)
router.route("/getadminjobs").get(isAuthenticated, adminJobController)
router.route("/getjob/:id").get(isAuthenticated, getJobByIdController)

export default router