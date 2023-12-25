import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./controllers/TourControllers.js";
import userRoute from "./controllers/UserControllers.js";

// const tourRoute = require('./controllers/TourControllers');

dotenv.config(); // Make sure this line is at the top of your index.js file

const app = express();
const port = process.env.PORT || 8000;


//Database connection

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } 
  catch (error) {
    console.log(error)
    process.exit(1)
  }
}
//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/tour', tourRoute )
app.use('/api/user', userRoute )
app.listen(port, () => {

    connectDB()
    console.log("server listing on port", port);
});
