import mongoose from "mongoose";
import express from "express";
import fs from "fs";
import dotenv from "dotenv";
import tours from "./tours.js";
import Tour from "./models/Tour.js";

dotenv.config(); // Make sure this line is at the top of your index.js file

const DB = process.env.MONGO_URI;

mongoose.connect(DB).then(() => {
    console.log("Database Connected");
}).catch((err) => console.log(err));

const importData = async() => {
    try{
        await Tour.create(tours);
        console.log("Data Loaded Successfully!");
    }catch(err){
        console.log(err);
    }; 
    process.exit();
};

const deleteData = async() => {
    try{
        await Tour.deleteMany();
        console.log("Data deleted Successfully!");
    }catch(err){
        console.log(err);
    };
    process.exit();
};

if (process.argv[2] === '--import'){
    importData();
} else if (process.argv[2] === '--delete'){
    deleteData();
};
