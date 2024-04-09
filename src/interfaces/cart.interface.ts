import { Schema } from "mongoose";

export interface ICart {
  id: string;
  user: Schema.Types.ObjectId;
  products: Schema.Types.ObjectId[];
  totalAmount: number;
  isActive: boolean;
}
