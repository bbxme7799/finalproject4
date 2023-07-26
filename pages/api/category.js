import dbConnect from "../../utils/db";
import Service from "../../models/service";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // ติดต่อกับฐานข้อมูล MongoDB
    await dbConnect();

    // ดึงข้อมูลทั้งหมดจาก Service
    const services = await Service.find({});

    // ตรวจสอบข้อมูลที่ถูกดึงมา และคืบควบคุมให้ตรงกับรูปแบบที่คาดหวัง
    const filteredServices = services.filter((service) => service.category);

    // สร้างตัวแปร set ในการเก็บ category ที่ไม่ซ้ำกัน
    const uniqueCategories = new Set();

    // วน loop เพื่อนำ category จาก filteredServices และบันทึกลงใน uniqueCategories
    filteredServices.forEach((service) => {
      uniqueCategories.add(service.category);
    });

    // แปลง Set เป็น Array
    const uniqueCategoriesArray = Array.from(uniqueCategories);
    console.log(
      "🚀 ~ file: category.js:30 ~ handler ~ uniqueCategoriesArray:",
      uniqueCategoriesArray
    );

    return res.status(200).json({ category: uniqueCategoriesArray });
  } catch (error) {
    return res.status(500).json({ error: "Could not fetch categories" });
  }
}
