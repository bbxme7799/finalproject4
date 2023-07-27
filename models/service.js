import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.set("strictQuery", false);
const serviceSchema = new Schema({
  service: {
    type: Number,
  },
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  rate: {
    type: Number,
  },
  min: {
    type: Number,
  },
  max: {
    type: Number,
  },
  step: {
    type: Number,
  },
  dripfeed: {
    type: Boolean,
  },
  average_delivery: {
    type: String,
  },
  refill: {
    type: Boolean,
  },
  type: {
    type: String,
  },
});

export default mongoose.models.Service ||
  mongoose.model("Service", serviceSchema);
