import { Schema, model } from "mongoose";

type IVerificationCode = {
  otp: string;
  otp_created_ts: number;
};
export interface IUser {
  account_type: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  image: string;
  is_active: boolean;
  verification_code: IVerificationCode | null;
  is_verified: boolean;
  created_ts: number;
  updated_ts: number;
}

export const userSchema = new Schema<IUser>(
  {
    account_type: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
      maxlength: 10,
    },
    first_name: {
      type: String,
      maxlength: 25,
    },
    last_name: {
      type: String,
      maxlength: 25,
    },
    email: {
      unique: true,
      type: String,
      maxlength: 50,
      required: true,
    },
    password: {
      type: String,
      maxlength: 255,
    },
    phone: {
      type: String,
      maxlength: 10,
    },
    image: {
      type: String,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    verification_code: {
      type: Object,
      default: null,
    },
    is_verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: { createdAt: "created_ts", updatedAt: "updated_ts" } }
);

export const UserModel = model<IUser>("users", userSchema);
