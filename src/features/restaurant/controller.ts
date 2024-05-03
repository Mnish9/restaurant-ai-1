import * as Sentry from "@sentry/node";
import { Request, Response } from "express";
import { RestaurantServices } from "./service";
import { API_RESPONSE_MSG } from "../../utils/constants";

export const addRestaurantController = async (req: Request, res: Response) => {
  try {
    const result = await RestaurantServices.addRestaurant({
      name: "restaurant",
    });
    res.send({
      success: true,
      message: "Restaurant added successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.send({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const getRestaurantController = async (req: Request, res: Response) => {
  try {
    const response = await RestaurantServices.getRestaurant();

    return res.status(200).json(response);
  } catch (error) {
    Sentry.captureException(error);
    return {
      success: false,
      message: API_RESPONSE_MSG.failed,
    };
  }
};

export const getRestaurantByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const query = {
      ...req.query,
    };
    const response = await RestaurantServices.getRestaurant(query);

    return res.status(200).json(response);
  } catch (error) {
    Sentry.captureException(error);
    return {
      success: false,
      message: API_RESPONSE_MSG.failed,
    };
  }
};
