import { Router } from "express";
import { getCategoriesByIdController, getCategoriesController } from "./controller";

const CategoriesRoutes = Router();

CategoriesRoutes.get(
  "/get-category",
  getCategoriesController
);

CategoriesRoutes.get(
  "/get-category/:id",
  getCategoriesByIdController
);

export default CategoriesRoutes;
