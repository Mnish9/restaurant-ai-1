import { Router } from "express";
import { addRestaurantController, getRestaurantByIdController, getRestaurantController } from "./controller";
const restaurantRoutes = Router();

restaurantRoutes.post("/add-restaurant", addRestaurantController);

restaurantRoutes.get("/get-restaurants", getRestaurantController);

restaurantRoutes.get("/get-restaurants/:id", getRestaurantByIdController);



export default restaurantRoutes;
