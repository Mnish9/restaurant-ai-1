import * as Sentry from "@sentry/node";
import { ResponseObject } from "../../interface/commonInterfaces";
import { API_RESPONSE_MSG } from "../../utils/constants";
import { ItemModel } from "../../models/item";

export class ItemsServices {
  static response: ResponseObject;

  static async getItems(data?: { id?: string }) {
    try {
      const { id } = data;
      const result = id ? await ItemModel.findById(id) : await ItemModel.find();
      if (result) {
        this.response = {
          data: Array.isArray(result) ? result : [result], // Ensure result is an array
          message: API_RESPONSE_MSG.items_fetch_success,
          success: true,
        };
      } else {
        this.response = {
          data: [],
          message: API_RESPONSE_MSG.no_items_found,
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
