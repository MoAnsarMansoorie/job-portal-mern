import { Application } from "../models/application.model.js"
import {Job} from "../models/job.model.js"

export const applyJobController = async (req, res) => {
    try {
        const userId = req.id
        const jobId = req.params.id

        if(!jobId) {
            return res.status(400).json({
                success: false,
                message: "JobId is required"
            })
        }

        // check if the user has already applied for job
        const existingUser = await Application.findOne({job: jobId, applicant: userId})
        if(existingUser){
            return res.status(400).json({
                success: false,
                message: "you have already applied for job"
            })
        }

        // check if the job exists
        const job = await Job.findById(jobId)
        if(!job) {
            return res.status(400).json({
                success: false,
                message: "Job is not exists"
            })
        }

        // create a new applicant
        let newApplicant = await Application.create({
            job: jobId,
            applicant: userId
        })

        job.applications.push(newApplicant._id)
        await job.save()
        return res.status(201).json({
            success: true,
            message: "Job applied successfully",
            newApplicant
        })
        
    } catch (error) {
        console.log("Error in job apply", error)
        return res.status(400).json({
            success: false,
            message: "Error in job apply",
            error
        })
    }
}

export const getAppliedJobController = async (req, res) => {
    try {
        const userId = req.id
        const application = await Application.find({applicant: userId}).sort({createdAt: -1}).populate({
            path: "job",
            options: {sort: {createdAt: -1}},
            populate: {
                path: "companyId",
                options: {sort: {createdAt: -1}},
            }
        })
        if(!application){
            return res.status(400).json({
                success: false,
                message: "You have not applied any job"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Job applied",
            application
        })
        
    } catch (error) {
        console.log("Error in getting jobs", error)
        return res.status(400).json({
            success: false,
            message: "Error in getting jobs",
            error
        })
    }
}

// admin dekhega kitna user ne apply kiya hai
export const getApplicantsController = async (req,res) => {
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:'applications',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant'
            }
        });
        if(!job){
            return res.status(404).json({
                message:'Job not found.',
                success:false
            })
        };
        return res.status(200).json({
            job, 
            succees:true
        });
    } catch (error) {
        console.log(error);
    }
}

export const updateStatusController = async (req,res) => {
    try {
        const {status} = req.body;
        const applicationId = req.params.id;
        if(!status){
            return res.status(400).json({
                message:'status is required',
                success:false
            })
        };

        // find the application by applicantion id
        const application = await Application.findOne({_id:applicationId});
        if(!application){
            return res.status(404).json({
                message:"Application not found.",
                success:false
            })
        };

        // update the status
        application.status = status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message:"Status updated successfully.",
            success:true
        });

    } catch (error) {
        console.log(error);
    }
}