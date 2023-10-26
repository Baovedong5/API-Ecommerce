import { HTTPSTATUS } from "~/constants/httpStatus";
import { USERMESSAGE } from "~/constants/message";

type ErrorsType = Record<
  string,
  {
    msg: string;
    [key: string]: any;
  }
>;

export class ErrorWithStatus {
  message: string;
  status: number;

  constructor({ message, status }: { message: string; status: number }) {
    this.message = message;
    this.status = status;
  }
}

export class EntityError extends ErrorWithStatus {
  errors: ErrorsType;
  constructor({
    message = USERMESSAGE.VALIDATION_ERROR,
    errors,
  }: {
    message?: string;
    errors: ErrorsType;
  }) {
    super({ message, status: HTTPSTATUS.UNPROCESSABLE_ENTITY });
    this.errors = errors;
  }
}
