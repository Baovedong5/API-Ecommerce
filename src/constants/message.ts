export const USERMESSAGE = {
  NAME_IS_REQUIRED: "Name is required",
  NAME_MUST_BE_A_STRING: "Name must be a string",
  NAME_LENGTH_MUST_BE_FROM_1_TO_100: "Name length must be from 1 to 100",

  EMAIL_IS_REQUIRED: "Email is required",
  EMAIL_IS_INVALID: "Email is invalid",
  EMAIL_ALREADY_EXIST: "Email already exist",

  PHONE_IS_REQUIRED: "Phone is required",
  PHONE_LENGTH_MUST_BE_FROM_10_TO_11: "Phone length must be from 10 to 11",

  PASSWORD_IS_REQUIRED: "Password is required",
  PASSWORD_MUST_BE_A_STRING: "Password must be a string",
  PASSWORD_MUST_BE_A_STRONG:
    "Password is less than 6 characters, 1 lowercase, 1 uppercase, 1 number and 1 symbols",
  PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50: "Password length must be from 6 to 50",

  CONFIRM_PASSWORD_IS_REQUIRED: "Confirm password is required",
  CONFIRM_PASSWORD_MUST_BE_A_STRING: "Confirm password must be a string",
  CONFIRM_PASSWORD_MUST_BE_A_STRONG:
    "Confirm password is less than 6 characters, 1 lowercase, 1 uppercase, 1 number and 1 symbols",
  CONFIRM_PASSWORD_LENGTH_MUST_BE_FROM_6_TO_50:
    "Confrim password length must be from 5 to 50",
  CONFIRM_PASSWORD_DOES_NOT_MATCH_PASSWORD:
    "Confirm password does not match password",
} as const;
