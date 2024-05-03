import * as Sentry from "@sentry/node";
import { ResponseObject } from "../../interface/commonInterfaces";
import { RestaurantModel } from "../../models/restaurant";
import { API_RESPONSE_MSG } from "../../utils/constants";

export class RestaurantServices {
  static response: ResponseObject;

  static addRestaurant(obj: { name: string }) {
    return {
      name: "New restaurant",
    };
  }

  static async getRestaurant(data?: { id?: string }) {
    try {
      const { id } = data;
      const result = id
        ? await RestaurantModel.findById(id)
        : await RestaurantModel.find();
      if (result) {
        this.response = {
          data: Array.isArray(result) ? result : [result], // Ensure result is an array
          message: API_RESPONSE_MSG.restaurants_fetch_success,
          success: true,
        };
      } else {
        this.response = {
          data: [],
          message: API_RESPONSE_MSG.no_restaurant_found,
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
