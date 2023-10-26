import express from "express";

import { registerController } from "~/controllers/auth.controller";
import { registerValidator } from "~/middlewares/auth.middleware";
import catchAsync from "~/utils/catchAsync";

const authRouter = express.Router();

/**
 * Description: Register a new user
 * Path: /register
 * Method: POST
 * Request: name, email, phone, password, confirm_password
 */
authRouter.post("/register", registerValidator, catchAsync(registerController));

export default authRouter;
