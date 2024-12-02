import { User } from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const registerController = async (req, res) => {
    try {
        const {fullname, email, password, phoneNumber, role} = req.body
        if(!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                success: false,
                message: "User already exists with this email",
                user
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        user = await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role
        })

        return res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        })
        
    } catch (error) {
        console.log("Error in register", error)
        return res.status(400).json({
            success: false,
            message: "Error in register",
            error
        })
    }
}

export const loginController = async (req, res) => {
    try {
        const {email, password, role} = req.body
        if(!email || !password || !role){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
 
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User is not exists. Please register"
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if(!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "Incorrect password or email"
            })
        }

        if(role !== user.role){
            return res.status(400).json({
                success: false,
                message: "Account does not exists with current role"
            })
        }

        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {expiresIn: "1d"})

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).cookie("token", token, {maxAge: 1*24*60*60*1000, httpOnly: true, sameSite:"strict"}).json({
            success: true,
            message: `1User logged in successfully. Welcome back ${user.fullname}`,
            user
        })
        
    } catch (error) {
        console.log("Error in login", error)
        return res.status(400).json({
            success: false,
            message: "Error in login",
            error
        })
    }
}

export const logoutController = async (req, res) => {
    try {
        return res.status(200).cookie("token", "", {maxAge:0}).json({
            success: true,
            message: "Logout successfully"
        })
        
    } catch (error) {
        console.log("Error in logout controller", error)
        return res.status(400).json({
            success: false,
            message: "Logout error",
            error
        })
    }
}

export const updateProfileController = async (req, res) => {
    try {
        const {fullname, email, phoneNumber, bio, skills} = req.body
        const file = req.file
        
        // cloudiny will come here

        let skillsArray;
        if(skills){
            skillsArray = skills.split(",")
        }
        const userId= req.id // middleware authentication
        let user = await User.findById(userId)

        if (!user) {
            return res.status(400).json({
                message: "User not found.",
                success: false
            })
        }
        // updating data
        if(fullname) user.fullname = fullname
        if(email) user.email = email
        if(phoneNumber)  user.phoneNumber = phoneNumber
        if(bio) user.profile.bio = bio
        if(skills) user.profile.skills = skillsArray

        // resume part will come later

        await user.save()

        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }

        return res.status(200).json({
            success:true,
            message:"Profile updated successfully.",
            user
        })
        
    } catch (error) {
        console.log("Error in Update profile controller", error)
        return res.status(400).json({
            success: false,
            message: "Update profile error",
            error
        })
    }
}