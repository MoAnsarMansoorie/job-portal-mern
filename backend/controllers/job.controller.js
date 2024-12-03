import { Job } from "../models/job.model";

// admin will post job
export const jobRegisterController = async (req, res) => {
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
        const userId = req.id;

        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "Somethin is missing.",
                success: false
            })
        };
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        });
        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });
        
    } catch (error) {
        console.log(`Error in job register`, error)
        return res.status(400).json({
            success: true,
            message: "Error in job register"
        })
    }
}

// student
export const getAllJobsController = async (req, res) => {
    try {
        const keyword = req.query.keyword
        const query = {
            $or: [
                {title: {$regex: keyword, $options: "i"}},
                {description: {$regex: keyword, $options: "i"}}
            ]
        }

        const jobs = await Job.find(query)
        if(!jobs) {
            return res.status(400).json({
                success: false,
                message: "Job not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Jobs found successfully",
            jobs
        })
        
    } catch (error) {
        console.log(`Error in get All jobs`, error)
        return res.status(400).json({
            success: true,
            message: "Error in get All jobs"
        })
    }
}

// student
export const getJobByIdController = async (req, res) => {
    try {
        const jobId = req.params.id
        const job = await Job.findById(jobId)
        
        if(!job){
            return res.status(400).json({
                success: false,
                message: "Job not found by id"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Job found by Id successfully",
            job
        })
        
    } catch (error) {
        console.log(`Error in get job by id`, error)
        return res.status(400).json({
            success: true,
            message: "Error in get job by id"
        })
    }
}

// admin
export const adminJobController = async (req, res) => {
    try {
        const adminId = req.id;
        const jobs = await Job.find({ created_by: adminId }).populate({
            path:'company',
            createdAt:-1
        });
        if (!jobs) {
            return res.status(404).json({
                message: "Jobs not found.",
                success: false
            })
        };
        return res.status(200).json({
            jobs,
            success: true
        })
    } catch (error) {
        console.log(error);
    }
}