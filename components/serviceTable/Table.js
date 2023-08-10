import React from "react";
import SearchInput from "./SearchInput";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";
import { useState } from "react";

const productData = [
  {
    service: 17993,
    category: "YouTube Views - 𝐍𝐚𝐭𝐢𝐯𝐞 𝐀𝐝𝐰𝐨𝐫𝐝𝐬⚡️Real Advertisement ✅📅",
    name: "Youtube Native Ads Views | 100% Real Advertisement | Start: 0-24H | Speed: 5M/D | ขั้นต่ำ: 10K",
    description:
      '♻️ ระยะเวลารับประกัน: 30 วัน 80% ปริมาณ &gt; 10K\r\n\r\n🔗 ตัวอย่างลิงก์: https://www.youtube.com/watch?v=xxxxxxxxx , https://youtu.be/xxxxxxxxx\r\n⌛ เริ่มทำงาน: 0 - 24 ชั่วโมง\r\n⚡️ ความเร็ว: ~5M / 24 ชั่วโมง (ความเร็วผันผวนตามปริมาณคำสั่งซื้อในระบบ ~100K+ / วัน)\r\n💎 คุณภาพ: 100% Real Views Through Real Advertisement.\r\n💦 อัตราลดลง: No Drop - Low\r\n✅ วิดีโอจะถูกโฆษณาบนไซต์แพลตฟอร์มโซเชียล นิตยสาร ไซต์ข่าว และไซต์ที่มีการเข้าชมสูง\r\n✅ โฆษณา Native นี้เหมือนกับโฆษณา Discovery ของ YouTube\r\n&nbsp;\r\n🔒 หมายเหตุ:\r\n\r\n📌 ตรวจสอบรูปแบบลิงค์อย่างละเอียดก่อนทำการสั่งซื้อ\r\n📌 ตรวจสอบให้แน่ใจว่าลิงก์หรือบัญชีของคุณเป็นแบบสาธารณะ ไม่เป็นส่วนตัว\r\n📌 เวลาในการเริ่มต้นและความเร็วเปลี่ยนแปลงได้ตลอดเวลา เมื่อมีคำสั่งซื้อหนาแน่นหรือมีการอัปเดตจากโซเชียลมีเดีย\r\n⚠️ เราไม่สามารถยกเลิกคำสั่งซื้อของคุณได้เมื่อส่งคำสั่งซื้อแล้ว\r\n⚠️ อย่าใส่หลายคำสั่งซื้อสำหรับลิงค์เดียวกัน ก่อนที่จะเสร็จสิ้น\r\n⚠️ ถ้าบริการมีรับประกัน เราไม่สามารถเติมคำสั่งซื้อของคุณได้หากการลดลงต่ำกว่าจำนวนเริ่มต้น\r\n⚠️ หากลิงค์ถูกเปลี่ยนแปลงไป คำสั่งซื้อจะเปลี่ยนเป็นสถานะ "เสร็จสิ้น" โดยอัตโนมัติและจะไม่มีการรับประกัน\r\n',
    min: 10000,
    max: 500000000,
    step: 10000,
    rate: "106.80309",
    type: "Default",
    average_delivery: "",
    dripfeed: true,
    refill: false,
    url: "https://www.youtube.com/watch?v=xxxxxxxxx",
  },
  {
    service: 173993,
    category: "YouTube Views - 𝐍𝐚𝐭𝐢𝐯𝐞 𝐀𝐝𝐰𝐨𝐫𝐝𝐬⚡️Real Advertisement ✅📅",
    name: "Youtube Native Ads Views | 100% Real Advertisement | Start: 0-24H | Speed: 5M/D | ขั้นต่ำ: 10K",
    description:
      '♻️ ระยะเวลารับประกัน: 30 วัน 80% ปริมาณ &gt; 10K\r\n\r\n🔗 ตัวอย่างลิงก์: https://www.youtube.com/watch?v=xxxxxxxxx , https://youtu.be/xxxxxxxxx\r\n⌛ เริ่มทำงาน: 0 - 24 ชั่วโมง\r\n⚡️ ความเร็ว: ~5M / 24 ชั่วโมง (ความเร็วผันผวนตามปริมาณคำสั่งซื้อในระบบ ~100K+ / วัน)\r\n💎 คุณภาพ: 100% Real Views Through Real Advertisement.\r\n💦 อัตราลดลง: No Drop - Low\r\n✅ วิดีโอจะถูกโฆษณาบนไซต์แพลตฟอร์มโซเชียล นิตยสาร ไซต์ข่าว และไซต์ที่มีการเข้าชมสูง\r\n✅ โฆษณา Native นี้เหมือนกับโฆษณา Discovery ของ YouTube\r\n&nbsp;\r\n🔒 หมายเหตุ:\r\n\r\n📌 ตรวจสอบรูปแบบลิงค์อย่างละเอียดก่อนทำการสั่งซื้อ\r\n📌 ตรวจสอบให้แน่ใจว่าลิงก์หรือบัญชีของคุณเป็นแบบสาธารณะ ไม่เป็นส่วนตัว\r\n📌 เวลาในการเริ่มต้นและความเร็วเปลี่ยนแปลงได้ตลอดเวลา เมื่อมีคำสั่งซื้อหนาแน่นหรือมีการอัปเดตจากโซเชียลมีเดีย\r\n⚠️ เราไม่สามารถยกเลิกคำสั่งซื้อของคุณได้เมื่อส่งคำสั่งซื้อแล้ว\r\n⚠️ อย่าใส่หลายคำสั่งซื้อสำหรับลิงค์เดียวกัน ก่อนที่จะเสร็จสิ้น\r\n⚠️ ถ้าบริการมีรับประกัน เราไม่สามารถเติมคำสั่งซื้อของคุณได้หากการลดลงต่ำกว่าจำนวนเริ่มต้น\r\n⚠️ หากลิงค์ถูกเปลี่ยนแปลงไป คำสั่งซื้อจะเปลี่ยนเป็นสถานะ "เสร็จสิ้น" โดยอัตโนมัติและจะไม่มีการรับประกัน\r\n',
    min: 10000,
    max: 500000000,
    step: 10000,
    rate: "106.80309",
    type: "Default",
    average_delivery: "",
    dripfeed: true,
    refill: false,
    url: "https://www.youtube.com/watch?v=xxxxxxxxx",
  },
];

const Table = () => {
  const [products, setProducts] = useState(productData);
  return (
    <div className="overflow-x-auto sm:rounded-lg mt-2 sm:mt-0">
      <table className="w-full text-sm text-left text-gray-500 sm:w-full">
        <TableHeader />
        <TableRows products={products} />
      </table>
    </div>
  );
};

export default Table;
