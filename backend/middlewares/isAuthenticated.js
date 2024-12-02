import jwt from "jsonwebtoken"

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookie.token
        if(token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorised token"
            })
        }

        const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY)
        if(!decode){
            return res.status(400).json({
                success: false,
                message: "invalid token"
            })
        }

        req.id= userId
        next()
        
    } catch (error) {
        console.log("Error in middleware", error)
        return res.status(400).json({
            success: false,
            message: "Error in middleware",
            error
        })
    }
}

export default isAuthenticated