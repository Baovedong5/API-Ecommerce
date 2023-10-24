import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
  avatar: string;
  address: string;
  refresh_token: string;
  history: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: String,
    email: String,
    password: String,
    phone: String,
    role: String,
    avatar: String,
    address: String,
    refresh_token: String,
    history: String,
    createdAt: Date,
    updatedAt: Date,
  },
  { timestamps: true }
);

const User = model("user", UserSchema);

export default User;
