import mongoose from "mongoose";
import express from "express";
import fs from "fs";
import dotenv from "dotenv";
import tours from "./tours.js";
import Tour from "./models/Tour.js";
// import User from "./models/User.js";

dotenv.config(); // Make sure this line is at the top of your index.js file

const DB = process.env.MONGO_URI;

mongoose.connect(DB).then(() => {
    console.log("Database Connected");
}).catch((err) => console.log(err));

// const tours = JSON.parse(fs.readFileSync(`./tours.json`, 'utf-8'));
// const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));
// const reviews = JSON.parse(fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8'));

const importData = async() => {
    try{
        await Tour.create(tours);
        // await User.create(users , {validateBeforeSave: false});
        // await Review.create(reviews);
        console.log("Data Loaded Successfully!");
    }catch(err){
        console.log(err);
    }; 
    process.exit();
};

const deleteData = async() => {
    try{
        await Tour.deleteMany();
        // await User.deleteMany();
        // await Review.deleteMany();
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
