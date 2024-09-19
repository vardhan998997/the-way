import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import degreeRouter from "./routes/degree.route.js"

dotenv.config()
const app=express()
app.use(express.json())
app.use(bodyParser.json())
const MongoUrl=process.env.STRING
app.get("/",(req,res)=>{
    res.send("Home page")
})
//routes
app.use("/api/v1/degree",degreeRouter)
mongoose.connect(MongoUrl)
.then(()=>{
    app.listen(4000,()=>{
        console.log("Databse Connected")
    })
})
.catch((error)=>console.log(error))