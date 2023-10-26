import bcrypt from "bcryptjs";

var salt = bcrypt.genSaltSync(10);

export const hash = (password: string) => {
  return bcrypt.hashSync(password, salt);
};

export const checkPassword = (password: string, hashPassword: string) => {
  return bcrypt.compareSync(password, hashPassword);
};
