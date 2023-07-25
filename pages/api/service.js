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
    // const category =
    //   "Website Traffic - เพิ่มทราฟฟิคเข้าเว็บ Session < ~60 วินาที #🅸🅿🆅🆂";

    // ตรวจสอบว่ามีการส่ง category มาหรือไม่
    if (category) {
      // ดึงข้อมูลรายการหมวดหมู่ของบริการที่ตรงกับ category ที่ระบุ
      const services = await Service.find({ category });
      return res.status(200).json({ services });
    } else {
      // ถ้าไม่ระบุ category จะดึงข้อมูลรายการบริการทั้งหมด
      const services = await Service.find({});
      return res.status(200).json({ services });
    }
  } catch (error) {
    return res.status(500).json({ error: "Could not fetch services" });
  }
}
