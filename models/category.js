// models/category.js
import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// สร้าง model "Category" โดยให้เชื่อมต่อกับ collection "category" จาก schema
const Category = mongoose.model("Category", categorySchema, "category");

export default Category;
