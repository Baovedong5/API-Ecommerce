import { checkSchema } from "express-validator";

import { USERMESSAGE } from "~/constants/message";
import User from "~/models/schemas/user.schema";
import authService from "~/services/auth.service";
import { validate } from "~/utils/validation";

export const registerValidator = validate(
  checkSchema(
    {
      name: {
        notEmpty: {
          errorMessage: USERMESSAGE.NAME_IS_REQUIRED,
        },
        isString: {
          errorMessage: USERMESSAGE.NAME_MUST_BE_A_STRING,
        },
        isLength: {
          options: {
            min: 1,
            max: 100,
          },
          errorMessage: USERMESSAGE.NAME_LENGTH_MUST_BE_FROM_1_TO_100,
        },
        trim: true,
      },

      email: {
        notEmpty: {
          errorMessage: USERMESSAGE.EMAIL_IS_REQUIRED,
        },
        isEmail: {
          errorMessage: USERMESSAGE.EMAIL_IS_INVALID,
        },
        custom: {
          options: async (value, { req }) => {
            const isExist = await authService.checkEmailExist(value);
            if (isExist) {
              throw new Error(USERMESSAGE.EMAIL_ALREADY_EXIST);
            }
            return true;
          },
        },
        trim: true,
      },

      phone: {
        notEmpty: {
          errorMessage: USERMESSAGE.PHONE_IS_REQUIRED,
        },
        isLength: {
          options: {
            min: 10,
            max: 11,
          },
          errorMessage: USERMESSAGE.PHONE_LENGTH_MUST_BE_FROM_10_TO_11,
        },
      },

      password: {
        notEmpty: {
          errorMessage: USERMESSAGE.PASSWORD_IS_REQUIRED,
        },
        isString: {
          errorMessage: USERMESSAGE.PASSWORD_MUST_BE_A_STRING,
        },
        isStrongPassword: {
          options: {
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minSymbols: 1,
            minNumbers: 1,
          },
          errorMessage: USERMESSAGE.PASSWORD_MUST_BE_A_STRONG,
        },
        isLength: {
          options: {
            min: 6,
            max: 50,
          },
          errorMessage: USERMESSAGE.PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50,
        },
      },

      confirm_password: {
        notEmpty: { errorMessage: USERMESSAGE.CONFIRM_PASSWORD_IS_REQUIRED },
        isString: {
          errorMessage: USERMESSAGE.CONFIRM_PASSWORD_MUST_BE_A_STRING,
        },
        isStrongPassword: {
          options: {
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minSymbols: 1,
            minNumbers: 1,
          },
          errorMessage: USERMESSAGE.CONFIRM_PASSWORD_MUST_BE_A_STRONG,
        },
        isLength: {
          options: {
            min: 6,
            max: 50,
          },
          errorMessage:
            USERMESSAGE.CONFIRM_PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50,
        },

        custom: {
          options: (value, { req }) => {
            if (value !== req.body.password) {
              throw new Error(
                USERMESSAGE.CONFIRM_PASSWORD_DOES_NOT_MATCH_PASSWORD
              );
            }
            return true;
          },
        },
      },
    },
    ["body"]
  )
);
