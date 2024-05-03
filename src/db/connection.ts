import mongoose from "mongoose";
import { CONNECTION_ERROR_MSG, CONST_DATA } from "../utils/constants";
import * as Sentry from "@sentry/node";
import { getSecretKeys } from "../config/awsConfig";

const connectToDb = async () => {
  try {
    // const keys = await getSecretKeys();
    const db = "mongodb+srv://bizmanish:J3be3rgMxdAlLo6r@restaurents.jambfy3.mongodb.net/<database>?retryWrites=true&w=majority"
    await mongoose.connect(db);
    mongoose.connection.setMaxListeners(20);
    mongoose.connection.on(CONST_DATA.error, (error: string) => {
      throw new Error(
        `${CONNECTION_ERROR_MSG.unable_to_connect_to_database} ${error}`
      );
    });
  } catch (error) {
    Sentry.captureException(error);

    throw new Error(
      `${CONNECTION_ERROR_MSG.unable_to_connect_to_database} ${error}`
    );
  }
};

export default connectToDb;
