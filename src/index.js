import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from "express"
const app = express()

dotenv.config({
    path: './env'
})

connectDB()

.then(()=>{
    app.listen(process.env.PORT  || 8000, ()=>{
        console.log(`Server is running on port ${process.env.PORT}`);

    })
})
.catch((err)=> {
    console.log("MONGO DB connection failed")
})










// .then(()=>{
//     app.listen(process.env.PORT || 8000,() =>{
//         console.log(`server is running at port: ${process.env.PORT}`)
//     } )
// })
// .catch((err)=>{
//     console.log("MONGO  DB connecction failed !!! ", err)
// })


















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