import express from "express"
import { applyJobController, getApplicants, getApplicantsController, getAppliedJobController, updateStatus, updateStatusController } from "../controllers/application.controller.js"
import isAuthenticated from "../middlewares/isAuthenticated.js"

const router = express.Router()

router.route("/apply/:id").get(isAuthenticated, applyJobController)
router.route("/getjobs").get(isAuthenticated, getAppliedJobController)
router.route("/:id/applicants").get(isAuthenticated, getApplicantsController);
router.route("/status/:id/update").post(isAuthenticated, updateStatusController);

export default router