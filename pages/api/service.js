import dbConnect from "../../utils/db";
import Service from "../../models/service";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // ติดต่อกับฐานข้อมูล MongoDB
    await dbConnect();

    // ดึงค่า query parameter "category" จาก request
    const { category } = req.query;
    console.log("🚀 ~ file: service.js:15 ~ handler ~ category:", category);

    // ตรวจสอบว่ามีการส่ง category มาหรือไม่
    if (category) {
      // ค้นหาคำที่ใกล้เคียงกันด้วย regex
      const regex = new RegExp(category, "i"); // "i" ใน RegExp คือไม่แยกแยะตัวพิมพ์ใหญ่เล็ก
      const services = await Service.find({ category: regex });
      return res.status(200).json({ services });
    } else {
      // ถ้าไม่ระบุ category จะดึงข้อมูลรายการบริการทั้งหมด
      const services = await Service.find({});
      console.log("🚀 ~ file: service.js:26 ~ handler ~ services:", services);
      return res.status(200).json({ services });
    }
  } catch (error) {
    return res.status(500).json({ error: "Could not fetch services" });
  }
}
