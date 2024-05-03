import { Schema, model, Types } from "mongoose";

export interface IItem {
  name: string;
  categoryId: Types.ObjectId;
  description?: string;
  modifiers?: string;
  price: number;
  status: boolean;
}

export const itemSchema = new Schema<IItem>(
  {
    name: { type: String, required: true, maxlength: 255 },
    categoryId: { type: Schema.Types.ObjectId, ref: "Category" },
    description: { type: String },
    modifiers: { type: String },
    price: { type: Number },
    status: { type: Boolean, default: true },
  },
  { timestamps: { createdAt: "created_ts", updatedAt: "updated_ts" } }
);

export const ItemModel = model<IItem>("Item", itemSchema);
