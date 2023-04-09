import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/auth.middlewares.js";
import {
  createCategoryController,
  updateCategoryController,
  categoryController,
} from "../controllers/category.controller.js";

const router = express.Router();
//routers
//create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//get all category
router.get("/get-category", categoryController);

export default router;
