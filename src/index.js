import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from "express"
const app = express()

dotenv.config({
    path: './env'
})

connectDB()


















// approaches to connect database 
// 1st approach
/*;(()=>{
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        app.on("error", ()=>{
            console.log("ERR: ", error)
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on ${process.env.PORT}`);
        })
    } catch(err){
        console.error("error:",err)
        throw err
    }
})()
*/