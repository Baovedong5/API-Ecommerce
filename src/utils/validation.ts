import { NextFunction, Request, Response } from "express";
import { validationResult, ValidationChain } from "express-validator";
import { RunnableValidationChains } from "express-validator/src/middlewares/schema";
import { EntityError, ErrorWithStatus } from "./error";
import { HTTPSTATUS } from "~/constants/httpStatus";

export const validate = (
  validation: RunnableValidationChains<ValidationChain>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await validation.run(req);

    const errors = validationResult(req);

    //Neu khong co loi thi next
    if (errors.isEmpty()) {
      return next();
    }

    const errorsObject = errors.mapped();

    const entityError = new EntityError({ errors: {} });

    for (const key in errorsObject) {
      const { msg } = errorsObject[key];
      //Trả về lỗi không do validate
      if (
        msg instanceof ErrorWithStatus &&
        msg.status !== HTTPSTATUS.UNPROCESSABLE_ENTITY
      ) {
        return next(msg);
      }

      entityError.errors[key] = errorsObject[key];
    }

    next(entityError);
  };
};
