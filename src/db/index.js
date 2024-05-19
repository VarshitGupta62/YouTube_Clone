// import express from 'express';
import mongoose from "mongoose";
import { DB_NAME } from '../constants.js';
const url = process.env.MONGODB_URI;

const connectDB = async () => {
    try {

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        // console.log("this is a connectionInstance : ",connectionInstance);
        console.log(`\n MongoDB connected !! DB HOST : ${connectionInstance.connection.host} \n`);
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;
