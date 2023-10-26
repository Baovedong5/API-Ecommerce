import "dotenv/config";
import ms from "ms";

import { RegisterReqBody } from "~/models/requests/auth.request";
import User from "~/models/schemas/user.schema";
import { hash } from "~/utils/bcrypt";
import { signToken } from "~/utils/jwt";

class AuthService {
  private signAccessToken = ({
    _id,
    name,
    email,
    role,
  }: {
    _id: string;
    name: string;
    email: string;
    role: string;
  }) => {
    return signToken({
      payload: {
        _id,
        name,
        email,
        role,
      },
      privateKey: process.env.JWT_SECRET_ACCESS_TOKEN as string,
      options: {
        expiresIn: ms(process.env.ACCESS_TOKEN_EXPIRE as string),
      },
    });
  };

  private signRefeshToken = ({
    _id,
    name,
    email,
    role,
  }: {
    _id: string;
    name: string;
    email: string;
    role: string;
  }) => {
    return signToken({
      payload: {
        _id,
        name,
        email,
        role,
      },
      privateKey: process.env.JWT_SECRET_REFRESH_TOKEN as string,
      options: {
        expiresIn: ms(process.env.REFRESH_TOKEN_EXPIRE as string),
      },
    });
  };

  async register(payload: RegisterReqBody) {
    const newUser = await User.create({
      ...payload,
      password: hash(payload.password),
      role: "USER",
    });
    return {
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    };
  }

  async checkEmailExist(email: string) {
    const isEmail = await User.findOne({
      email,
    });

    return Boolean(isEmail);
  }
}

const authService = new AuthService();

export default authService;
