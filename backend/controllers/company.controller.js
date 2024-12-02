import { Company } from "../models/company.model.js"

export const registerCompanyController = async (req, res) => {
    try {
        const {companyName} = req.body
        if(!companyName) {
            return res.status(400).json({
                success: false,
                message: "Company name is required"
            })
        }

        let company = await Company.findOne({companyName})
        if(company) {
            return res.status(400).json({
                success: false,
                message: "You cant register same company name"
            })
        }

        company = await Company.create({
            companyName,
            userId: req.id
        })

        return res.status(201).json({
            success: true,
            message: "Company registered successfully",
            company
        })
        
    } catch (error) {
        console.log("Error in company register", error)
        return res.status(400).json({
            success: false,
            message: "Error in company register",
            error
        })
    }
}

export const getCompanyController = async (req, res) => {
    try {
        const userId = req.id // logged in user id
        const companies = await Company.find({userId})

        if(!companies){
            return res.status(400).json({
                success: false,
                message: "Companies not found"
            })
        }
        return res.status(200).json({
            companies,
            success:true
        })
        
    } catch (error) {
        console.log("Error in company getting", error)
        return res.status(400).json({
            success: false,
            message: "Error in company getting",
            error
        })
    }
}

// get company by id
export const getComanyByIdController = async (req, res) => {
    try {
        const companyById = req.params.id
        const company = await Company.findById(companyById)
        if(!company) {
            return res.status(400).json({
                success: false,
                message: "Not found company by id"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Compnay found successfully",
            company
        })
        
    } catch (error) {
        console.log("Error in company getting by id", error)
        return res.status(400).json({
            success: false,
            message: "Error in company getting by id",
            error
        })
    }
}

export const updateCompanyController = async (req, res) => {
    try {
        const {companyName, description, website, location} = req.body
        const file = req.file
        // cloudinary will come here

        const updateData = {companyName, description, website, location}
        const company = await Company.findByIdAndUpdate(req.params.id, updateData, { new: true })

        if (!company) {
            return res.status(404).json({
                message: "Company not found.",
                success: false
            })
        }
        return res.status(200).json({
            message:"Company information updated.",
            success:true
        })
        
    } catch (error) {
        console.log("Error in updating company", error)
        return res.status(400).json({
            success: false,
            message: "Error in updating company",
            error
        })
    }
}