import { Schema, models, model } from "mongoose";

const subscriptionSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export default models.Subscription || model("Subscription", subscriptionSchema);
