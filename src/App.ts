import { APIGatewayProxyEvent, Context } from "aws-lambda";
import awsServerlessExpress from "aws-serverless-express";
import cors from "cors";
import express, { Application } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import { swaggerDefinition } from "./swagger/swagger";

import connectToDb from "./db/connection";
// import adminRoutes from "./features/admin/routes";
// import authRoutes from "./features/auth/routes";
// import categoryRoutes from "./features/categories/routes";
import * as Sentry from "@sentry/node";
import envConfig from "./config/envConfig";

const swaggerUi = require("swagger-ui-express");

const app: Application = express();
const Config = envConfig();

Sentry.init({
  dsn: Config.sentryDsn,
  // ...
});
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDb();

// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/admin", adminRoutes);
// app.use("/api/v1/category", categoryRoutes);

const swaggerSpec = swaggerJSDoc(swaggerDefinition);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(Config.port, () => {
  console.log(`Server is running on ${Config.port} ✅✅✅✅✅✅✅✅`);
});

const server = awsServerlessExpress.createServer(app);

module.exports.handler = (event: APIGatewayProxyEvent, context: Context) =>
  awsServerlessExpress.proxy(server, event, context);
