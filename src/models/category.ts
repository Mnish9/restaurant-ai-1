import { Schema, model, Types } from "mongoose";

export interface ICategory {
  name: string;
  description?: string;
  mainCategoryId: Types.ObjectId;
}

export const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, maxlength: 255 },
    description: { type: String },
    mainCategoryId: { type: Schema.Types.ObjectId, ref: "MainCategory" },
  },
  { timestamps: { createdAt: "created_ts", updatedAt: "updated_ts" } }
);

export const CategoryModel = model<ICategory>("Category", categorySchema);
