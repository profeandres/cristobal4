import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";
mongoose.set('strictQuery', false)
export const connectDB = async() =>{
    try {
        const db= await mongoose.connect(MONGODB_URI)
        console.log(`db is connect to: ${db.connection.name}`)
    } catch (error) {
        console.log(error);
    }
}