// 2nd approach to connnet with database
import mongoose from "mongoose";
import {DB_NAME} from "../contants.js";




const connectDB = async()=>{
    try{
      const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n MongoDB connectted !! DB HOST: ${connectionInstance.host}`)
    } catch(error){
        console.log("MongoDB connection ERROR", error);
        process.exit(1)
    }
}
export default connectDB