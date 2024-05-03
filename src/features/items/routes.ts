import { Router } from "express";
import { getItemsByIdController, getItemsController } from "./controller";


const ItemsRoutes = Router();

ItemsRoutes.get(
  "/get-items",
  getItemsController
);

ItemsRoutes.get(
  "/get-items/:id",
  getItemsByIdController
);

export default ItemsRoutes;
