import { Router } from "express";
import { getMainCategoriesByIdController, getMainCategoriesController } from "./controller";

const MainCategoriesRoutes = Router();

MainCategoriesRoutes.get(
  "/get-main_category",
  getMainCategoriesController
);

MainCategoriesRoutes.get(
  "/get-main_category/:id",
  getMainCategoriesByIdController
);

export default MainCategoriesRoutes;
