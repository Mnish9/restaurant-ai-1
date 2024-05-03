import envConfig from "../config/envConfig";

const ENV = envConfig();

export const swaggerDefinition = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NextLPC Api Documentation",
      version: "1.0.0",
      description:
        "This is a REST API application made with Express. It retrieves data from Database.",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: "http://localhost:3001/api/v1/",
        description: "local server",
      },
      {
        url: "https://8tyw7ub0tk.execute-api.us-east-1.amazonaws.com/development/api/v1/",
        description: "Development server",
      },
    ],
  },
  apis: ENV.env === "local" ? ["src/**/*.ts"] : ["**/*.ts", "src/**/*.js"],
};
