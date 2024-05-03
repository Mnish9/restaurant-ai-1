import { Schema, model, Types } from "mongoose";

export interface IMainCategory {
  name: string;
  restaurantId: Types.ObjectId;
}

export const mainCategorySchema = new Schema<IMainCategory>(
  {
    name: { type: String, required: true, maxlength: 255 },
    restaurantId: { type: Schema.Types.ObjectId, ref: "Restaurant" },
  },
  { timestamps: { createdAt: "created_ts", updatedAt: "updated_ts" } }
);

export const MainCategoryModel = model<IMainCategory>(
  "MainCategory",
  mainCategorySchema
);
