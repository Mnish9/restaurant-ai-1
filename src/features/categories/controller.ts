import * as Sentry from "@sentry/node";
import { Request, Response } from "express";

import { API_RESPONSE_MSG } from "../../utils/constants";
import { CategoryServices } from "./service";


export const getCategoriesController = async (
  req: Request,
  res: Response
) => {
  try {
    const response = await CategoryServices.getCategories();

    return res.status(200).json(response);
  } catch (error) {
    Sentry.captureException(error);
    return {
      success: false,
      message: API_RESPONSE_MSG.failed,
    };
  }
};

export const getCategoriesByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const query = {
      ...req.query,
    };
    const response = await CategoryServices.getCategories(query);

    return res.status(200).json(response);
  } catch (error) {
    Sentry.captureException(error);
    return {
      success: false,
      message: API_RESPONSE_MSG.failed,
    };
  }
};
