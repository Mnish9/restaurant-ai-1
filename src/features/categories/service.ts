import * as Sentry from "@sentry/node";
import { ResponseObject } from "../../interface/commonInterfaces";
import { RestaurantModel } from "../../models/restaurant";
import { API_RESPONSE_MSG } from "../../utils/constants";
import { MainCategoryModel } from "../../models/main_category";
import { CategoryModel } from "../../models/category";

export class CategoryServices {
  static response: ResponseObject;

  static async getCategories(data?: { id?: string }) {
    try {
      const { id } = data;
      const result = id
        ? await CategoryModel.findById(id)
        : await CategoryModel.find();
      if (result) {
        this.response = {
          data: Array.isArray(result) ? result : [result], // Ensure result is an array
          message: API_RESPONSE_MSG.category_fetch_success,
          success: true,
        };
      } else {
        this.response = {
          data: [],
          message: API_RESPONSE_MSG.no_category_found,
          success: false,
        };
      }
    } catch (error) {
      Sentry.captureException(error);
      this.response = {
        success: false,
        message: error.message,
      };
    }
    return this.response;
  }
}
