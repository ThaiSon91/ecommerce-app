import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/auth.middlewares.js";
import { createProductController } from "../controllers/product.controller.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

export default router;
