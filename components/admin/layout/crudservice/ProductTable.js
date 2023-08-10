import React, { Fragment, useState } from "react";
import ProductList from "./ProductList";
import ModalOverlay from "./ModalOverlay";
import styles from "./style.module.css";

const ProductTable = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    console.log("openModal");
  };

  const closeModal = () => {
    setShowModal(false);
    console.log("closeModal");
  };

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
    },
    {
      service: 17994,
      category: "YouTube Views - 𝐍𝐚𝐭𝐢𝐯𝐞 𝐀𝐝𝐰𝐨𝐫𝐝𝐬⚡️Real Advertisement ✅📅",
      name: "Youtube Native Ads Views | INDIAN - 100% Real Advertisement | Start: 0-24H | Speed: 100K-1M/D | ขั้นต่ำ: 50K",
      description:
        '♻️ ระยะเวลารับประกัน: 30 วัน 80% ปริมาณ &gt; 50K\r\n\r\n🔗 ตัวอย่างลิงก์: https://www.youtube.com/watch?v=xxxxxxxxx , https://youtu.be/xxxxxxxxx\r\n⌛ เริ่มทำงาน: 0 - 24 ชั่วโมง\r\n⚡️ ความเร็ว: ~100K - 1M / 24 ชั่วโมง (ความเร็วผันผวนตามปริมาณคำสั่งซื้อในระบบ ~100K+ / วัน)\r\n💎 คุณภาพ: 100% Real Views Through Real Advertisement.\r\n🌍 ประเทศ: India\r\n💦 อัตราลดลง: No Drop - Low\r\n✅ วิดีโอจะถูกโฆษณาบนไซต์แพลตฟอร์มโซเชียล นิตยสาร ไซต์ข่าว และไซต์ที่มีการเข้าชมสูง\r\n✅ โฆษณา Native นี้เหมือนกับโฆษณา Discovery ของ YouTube\r\n&nbsp;\r\n🔒 หมายเหตุ:\r\n\r\n📌 ตรวจสอบรูปแบบลิงค์อย่างละเอียดก่อนทำการสั่งซื้อ\r\n📌 ตรวจสอบให้แน่ใจว่าลิงก์หรือบัญชีของคุณเป็นแบบสาธารณะ ไม่เป็นส่วนตัว\r\n📌 เวลาในการเริ่มต้นและความเร็วเปลี่ยนแปลงได้ตลอดเวลา เมื่อมีคำสั่งซื้อหนาแน่นหรือมีการอัปเดตจากโซเชียลมีเดีย\r\n⚠️ เราไม่สามารถยกเลิกคำสั่งซื้อของคุณได้เมื่อส่งคำสั่งซื้อแล้ว\r\n⚠️ อย่าใส่หลายคำสั่งซื้อสำหรับลิงค์เดียวกัน ก่อนที่จะเสร็จสิ้น\r\n⚠️ ถ้าบริการมีรับประกัน เราไม่สามารถเติมคำสั่งซื้อของคุณได้หากการลดลงต่ำกว่าจำนวนเริ่มต้น\r\n⚠️ หากลิงค์ถูกเปลี่ยนแปลงไป คำสั่งซื้อจะเปลี่ยนเป็นสถานะ "เสร็จสิ้น" โดยอัตโนมัติและจะไม่มีการรับประกัน\r\n',
      min: 50000,
      max: 10000000,
      step: 1000,
      rate: "86.66942382000001",
      type: "Default",
      average_delivery: "",
      dripfeed: true,
      refill: false,
    },
    {
      service: 17995,
      category: "YouTube Views - 𝐍𝐚𝐭𝐢𝐯𝐞 𝐀𝐝𝐰𝐨𝐫𝐝𝐬⚡️Real Advertisement ✅📅",
      name: "🚫Native Ads Server#2 👇===============👇 Native Ads Server#2 👇===============👇 Native Ads Server#2",
      description: "",
      min: 1,
      max: 1,
      step: 10,
      rate: "0",
      type: "Default",
      average_delivery: "",
      dripfeed: false,
      refill: false,
    },
    {
      service: 17996,
      category:
        "👍🏻Instagram 𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬【𝐒𝐞𝐫𝐯𝐞𝐫 𝐎𝐰𝐧⭐ 🅸🅿🆅🆂】【เซิพเวอร์ส่วนตัว 🆕 มีปุ่ม Refill】",
      name: "⭐🔥⚡Real Instagram Views (STABLE) | Geo: Worldwide | Start 0-10 Min | Speed ~5K-10K per Hour | Non Drop | Cancel Button: Disabled | 🚫 No Guarantee",
      description: "",
      min: 100,
      max: 3000000,
      step: 1,
      rate: "1.730027241",
      type: "Default",
      average_delivery: "",
      dripfeed: false,
      refill: false,
    },
    {
      service: 17997,
      category:
        "👍🏻Instagram 𝐒𝐞𝐫𝐯𝐢𝐜𝐞𝐬【𝐒𝐞𝐫𝐯𝐞𝐫 𝐎𝐰𝐧⭐ 🅸🅿🆅🆂】【เซิพเวอร์ส่วนตัว 🆕 มีปุ่ม Refill】",
      name: "⭐🔥 Instagram Followers (STABLE)| Geo: Worldwide | Start 0-20 Min | Speed ~15K-20K per Day | Low Drop is possible | Cancel Button: Available | ✅ 30 Days Guarantee",
      description: "",
      min: 10,
      max: 150000,
      step: 1,
      rate: "11.533513941",
      type: "Default",
      average_delivery: "",
      dripfeed: false,
      refill: false,
    },
    // ... Add more products
  ];
  return (
    <Fragment>
      <section className="bg-gray-50 p-10 sm:p-20 antialiased mx-auto">
        <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
          <div className="bg-white shadow-md sm:rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 p-6">
              <div className="w-full md:w-1/2 mx-auto">
                <form className="flex items-center">
                  <label htmlFor="simple-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 "
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 "
                      placeholder="Search"
                      required=""
                    />
                  </div>
                </form>
              </div>
              <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="flex items-center justify-center bg-blue-700 text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 focus:outline-none"
                >
                  Add Services
                </button>
                {showModal && (
                  <ModalOverlay closeModal={() => setShowModal(false)}>
                    {/* ... เนื้อหา Modal Content ... */}
                  </ModalOverlay>
                )}

                <div className="flex items-center space-x-3 w-full md:w-auto">
                  <div
                    id="actionsDropdown"
                    className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
                  >
                    <ul
                      className="py-1 text-sm text-gray-700 "
                      aria-labelledby="actionsDropdownButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-4 hover:bg-gray-100 "
                        >
                          Mass Edit
                        </a>
                      </li>
                    </ul>
                    <div className="py-1">
                      <a
                        href="#"
                        className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 "
                      >
                        Delete all
                      </a>
                    </div>
                  </div>
                  {/* <div
                    id="filterDropdown"
                    className="z-10 hidden w-56 p-3 bg-white rounded-lg shadow "
                  >
                  </div> */}
                </div>
              </div>
            </div>
            <ProductList products={products} />
            <nav
              className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500">
                Showing
                <span className="font-semibold text-gray-900">1-10</span>
                of
                <span className="font-semibold text-gray-900">1000</span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 "
                  >
                    3
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  >
                    ...
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  >
                    100
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      {/* <ProductModal /> */}
    </Fragment>
  );
};

export default ProductTable;