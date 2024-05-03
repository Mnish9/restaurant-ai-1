import { NextFunction, Response, Request } from "express";
import * as jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
import { API_RESPONSE_MSG } from "../utils/constants";
import * as Sentry from "@sentry/node";
import { getSecretKeys } from "../config/awsConfig";

export const auth = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const keys = await getSecretKeys();
  let token =
    <string>request.headers.auth || <string>request.headers.authorization;
  // Try to validate the token and get data
  try {
    token = token.replace(/^Bearer\s+/, "");

    const verify = jwt.verify(token, keys.jwtSecret) as JwtPayload;

    if (verify) {
      request.token = token;
      request.userId = verify._id;
      request.accountType = verify.accountType;
      next();
    }
  } catch (error) {
    Sentry.captureException(error);
    response.status(401).send({
      message: API_RESPONSE_MSG.session_expired_login_again,
      success: false,
      error: "token-expired",
    });
  }
};

export default auth;
