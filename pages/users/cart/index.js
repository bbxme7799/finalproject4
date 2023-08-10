import React, { useState } from "react";
import CartProduct from "../../../components/cart/CartProduct";
import SubTotal from "../../../components/cart/SubTotal";
import CheckoutButton from "../../../components/cart/CheckoutButton";
import Layout from "@/components/layout/layout";
import axios from "axios";

export const getServerSideProps = async (context) => {
  const me = await axios
    .get("http://localhost:8000/api/users/me", {
      headers: { cookie: context.req.headers.cookie },
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch(() => null);

  console.log("user/me info => ", me);
  if (!me) {
    return {
      redirect: {
        destination: "/users/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {
      me,
    },
  };
};

const CartPage = ({ me }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Sample data for demonstration purposes
  const products = [
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
  ];

  return (
    <>
      <Layout me={me}></Layout>
      <div className="ml-[255px] mt-[65px]">
        <div className="bg-white my-2">
          <div className="flex mx-2 py-2">
            <h1 className="font-bold text-lg">Cart :</h1>
            <p className="text-lg pl-2">ตะกร้าสินค้า</p>
          </div>
        </div>
      </div>
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-xl">
          <div className="flex items-center justify-between md:flex-row">
            <h1 className="text-base md:text-xl lg:text-2xl font-bold text-gray-900">
              Shopping Cart
            </h1>
            {/* <span className="mt-2 md:mt-0 px-2 py-1 text-xs md:text-sm font-bold tracking-widest uppercase bg-gray-400 rounded-full rounded-r-none text-gray-50">
              4 Items
            </span> */}
          </div>

          <div className="max-w-3xl mx-auto mt-8 md:mt-12">
            <div className="overflow-hidden bg-white shadow rounded-xl">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <ul className="divide-y divide-gray-200 -my-4 md:-my-7">
                    {products.map((product) => (
                      <CartProduct key={product.service} product={product} />
                    ))}
                  </ul>
                </div>

                <hr className="border-gray-200 my-4 md:my-7" />

                <SubTotal total={699} />

                <div className="mt-6 text-center">
                  <CheckoutButton />
                  {/* <p className="mt-4 md:mt-6 text-xs md:text-sm font-normal text-gray-500">
                    All the taxes will be calculated while checkout
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
