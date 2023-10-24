import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";

import { RegisterReqBody } from "~/models/requests/auth.request";
import authService from "~/services/auth.service";

export const registerController = async (
  req: Request<ParamsDictionary, any, RegisterReqBody>,
  res: Response
) => {
  const result = await authService.register(req.body);

  return res.status(200).json({
    message: "Register success",
    data: result,
  });
};
