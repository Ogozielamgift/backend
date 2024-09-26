import mongoose from "mongoose";
const { Schema } = mongoose;

const BlogSchema = new Schema(
  {
    title: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Blog", BlogSchema);
