import mongoose from "mongoose";

const { Schema } = mongoose;

mongoose.set("strictQuery", false);
const userSchema = new Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  wallet_addr: {
    type: String,
  },
  credit: {
    type: Number,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);
