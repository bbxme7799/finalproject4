import dbConnect from "../../utils/db";
import Category from "../../models/category"; // Assuming you have a model for the "category" collection

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    await dbConnect(); // Connect to the database
    const categories = await Category.find(); // Fetch all documents from the "category" collection
    // console.log(
    //   "🚀 ~ file: category.js:12 ~ handler ~ categories:",
    //   categories
    // );
    return res.status(200).json(categories); // Return the data as a response
  } catch (error) {
    return res.status(500).json({ message: "Database connection error" });
  }
}
