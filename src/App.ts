import { APIGatewayProxyEvent, Context } from "aws-lambda";
import awsServerlessExpress from "aws-serverless-express";
import cors from "cors";
import express, { Application } from "express";
import swaggerJSDoc from "swagger-jsdoc";
import { swaggerDefinition } from "./swagger/swagger";

import connectToDb from "./db/connection";
import * as Sentry from "@sentry/node";
import envConfig from "./config/envConfig";
import restaurantRoutes from "./features/restaurant/routes";
import MainCategoriesRoutes from "./features/main-categories/routes";
import CategoriesRoutes from "./features/categories/routes";
import ItemsRoutes from "./features/items/routes";

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
app.use("/api/v1/restaurant", restaurantRoutes);
app.use("/api/v1/main_category", MainCategoriesRoutes);
app.use("/api/v1/category", CategoriesRoutes);
app.use("/api/v1/items", ItemsRoutes);

const swaggerSpec = swaggerJSDoc(swaggerDefinition);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(Config.port, () => {
  console.log(`Server is running on ${Config.port} ✅✅✅✅✅✅✅✅`);
});

const server = awsServerlessExpress.createServer(app);

module.exports.handler = (event: APIGatewayProxyEvent, context: Context) =>
  awsServerlessExpress.proxy(server, event, context);
