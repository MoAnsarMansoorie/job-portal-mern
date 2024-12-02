import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import connectDb from "./db/connectDb.js"
dotenv.config({})

const app = express()

// databse connection
connectDb()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true
}
app.use(cors(corsOptions))

// app.get("/test", (req, res) => {
//     return res.status(200).json({
//         success: true,
//         message: "Test is successfull!"
//     })
// })

const PORT= process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})