// const colors = require("colors");
// const express = require("express");

//type la module
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRouters from "./routers/auth.router.js";
import categoryRouters from "./routers/category.router.js";
import cors from "cors";
import productRouters from "./routers/product.router.js";

//comfig env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routers
app.use("/api/v1/auth", authRouters);
app.use("/api/v1/category", categoryRouters);
app.use("/api/v1/product", productRouters);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white
  );
});
