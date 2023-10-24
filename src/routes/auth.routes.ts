import express from "express";

import { registerController } from "~/controllers/auth.controller";
import { registerValidator } from "~/middlewares/auth.middleware";

const authRouter = express.Router();

/**
 * Description: Register a new user
 * Path: /register
 * Method: POST
 * Request: name, email, phone, password, confirm_password
 */
authRouter.post("/register", registerValidator, registerController);

export default authRouter;
