import express from "express";
import cors from "cors";
import 'dotenv/config';
import connectDB from "./config/mongodb.js";
import multer from "multer";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// import dotenv from "dotenv";


// App Config

const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();
// dotenv.config({ path: "./backend/.env" });

// Middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(multer().none());

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order', orderRouter)

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});