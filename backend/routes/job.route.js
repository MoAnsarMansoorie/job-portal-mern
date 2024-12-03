import express from "express"
import { adminJobController, getAllJobsController, getJobByIdController, jobRegisterController } from "../controllers/job.controller"
import isAuthenticated from "../middlewares/isAuthenticated"

const router = express.Router()

router.route("/postjob").post(isAuthenticated, jobRegisterController)
router.route("/getalljobs").get(isAuthenticated, getAllJobsController)
router.route("/getaminjobs").get(isAuthenticated, adminJobController)
router.route("/getjob/:id").get(isAuthenticated, getJobByIdController)

export default router