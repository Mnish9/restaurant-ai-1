import { Schema, model, Types } from "mongoose";

export interface IRestaurant {
  name: string;
  url?: string;
  isActive: boolean;
  userId: Types.ObjectId;
}

export const restaurantSchema = new Schema<IRestaurant>(
  {
    name: { type: String, required: true, maxlength: 255 },
    url: { type: String, maxlength: 255 },
    isActive: { type: Boolean, default: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: { createdAt: "created_ts", updatedAt: "updated_ts" } }
);

export const RestaurantModel = model<IRestaurant>(
  "restaurants",
  restaurantSchema
);
