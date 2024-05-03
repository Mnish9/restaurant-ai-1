import * as Sentry from "@sentry/node";
import { Request, Response } from "express";

import { API_RESPONSE_MSG } from "../../utils/constants";
import { MainCategoryServices } from "./service";

export const getMainCategoriesController = async (
  req: Request,
  res: Response
) => {
  try {
    const response = await MainCategoryServices.getMainCategories();

    return res.status(200).json(response);
  } catch (error) {
    Sentry.captureException(error);
    return {
      success: false,
      message: API_RESPONSE_MSG.failed,
    };
  }
};

export const getMainCategoriesByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const query = {
      ...req.query,
    };
    const response = await MainCategoryServices.getMainCategories(query);

    return res.status(200).json(response);
  } catch (error) {
    Sentry.captureException(error);
    return {
      success: false,
      message: API_RESPONSE_MSG.failed,
    };
  }
};
