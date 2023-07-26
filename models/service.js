import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.set("strictQuery", false);
const serviceSchema = new Schema({
  service: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: { type: Schema.Types.ObjectId, ref: "category", required: true },
  description: {
    type: String,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
  step: {
    type: Number,
    required: true,
  },
  dripfeed: {
    type: Boolean,
    required: true,
  },
  average_delivery: {
    type: String,
    required: false,
  },
  refill: {
    type: Boolean,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

export default mongoose.models.services ||
  mongoose.model("services", serviceSchema);
