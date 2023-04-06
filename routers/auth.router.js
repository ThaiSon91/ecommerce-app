import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/auth.controller.js";
import { requireSignIn, isAdmin } from "../middlewares/auth.middlewares.js";

//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test routes
//router.get("/test", requireSignIn, isAdmin, testController);
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
