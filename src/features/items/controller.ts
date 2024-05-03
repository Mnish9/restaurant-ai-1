import * as Sentry from "@sentry/node";
import { Request, Response } from "express";

import { API_RESPONSE_MSG } from "../../utils/constants";
import { ItemsServices } from "./service";


export const getItemsController = async (req: Request, res: Response) => {
  try {
    const response = await ItemsServices.getItems();

    return res.status(200).json(response);
  } catch (error) {
    Sentry.captureException(error);
    return {
      success: false,
      message: API_RESPONSE_MSG.failed,
    };
  }
};

export const getItemsByIdController = async (req: Request, res: Response) => {
  try {
    const query = {
      ...req.query,
    }
    const response = await ItemsServices.getItems(query);

    return res.status(200).json(response);
  } catch (error) {
    Sentry.captureException(error);
    return {
      success: false,
      message: API_RESPONSE_MSG.failed,
    };
  }
};
