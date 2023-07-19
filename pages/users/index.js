import React, { useState } from "react";

export default function orderPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // ดำเนินการอื่น ๆ เมื่อส่งแบบฟอร์ม
    console.log("ส่งแบบฟอร์ม");
  };

  return (
    <div className="ml-[255px] mt-[65px] h-auto">
      <div className="bg-white my-[2px] ">
        <div className="flex mx-2 py-2 ">
          <h1 className="font-bold text-lg"> New order :</h1>
          <p className="text-lg pl-2"> คำสั่งซื้อใหม่</p>
        </div>
      </div>

      <div className="mx-[50px] my-6  shadow-md">
        <div className="bg-yellow-300 h-auto rounded-lg px-8 py-8">
          <h1>ประกาศสำคัญ</h1>
          <h1>ข้อกำหนดในการให้บริการใหม่ปี 2023</h1>
        </div>
      </div>

      <div className="mx-[50px] my-6 shadow-md ">
        <div className="bg-white h-auto rounded-lg px-8 py-8">
          <div className="flex relative">
            <div className="w-full flex flex-wrap gap-4 content-start">
              <div className="bg-gray-400 flex-grow-0 overflow-hidden lg:flex-[calc((96.5%-12px)/5)] md:flex-[calc((96.5%-12px)/4)] sm:flex-[calc((96.5%-12px)/2)] rounded-md">
                <div className="flex items-center">
                  <img
                    src="google.png"
                    width={50}
                    height={50}
                    className="mx-3 my-3 "
                  />
                  <h2 className="mx-4"> Google </h2>
                </div>
              </div>
              <div className="bg-gray-400 flex-grow-0 overflow-hidden lg:flex-[calc((96.5%-12px)/5)] md:flex-[calc((96.5%-12px)/4)] sm:flex-[calc((96.5%-12px)/2)] rounded-md">
                <div className="flex items-center">
                  <img
                    src="google.png"
                    width={50}
                    height={50}
                    className="mx-3 my-3 "
                  />
                  <h2 className="mx-4"> Google </h2>
                </div>
              </div>
              <div className="bg-gray-400 flex-grow-0 overflow-hidden lg:flex-[calc((96.5%-12px)/5)] md:flex-[calc((96.5%-12px)/4)] sm:flex-[calc((96.5%-12px)/2)] rounded-md">
                <div className="flex items-center">
                  <img
                    src="google.png"
                    width={50}
                    height={50}
                    className="mx-3 my-3 "
                  />
                  <h2 className="mx-4"> Google </h2>
                </div>
              </div>
              <div className="bg-gray-400 flex-grow-0 overflow-hidden lg:flex-[calc((96.5%-12px)/5)] md:flex-[calc((96.5%-12px)/4)] sm:flex-[calc((96.5%-12px)/2)] rounded-md">
                <div className="flex items-center">
                  <img
                    src="google.png"
                    width={50}
                    height={50}
                    className="mx-3 my-3 "
                  />
                  <h2 className="mx-4"> Google </h2>
                </div>
              </div>
              <div className="bg-gray-400 flex-grow-0 overflow-hidden lg:flex-[calc((96.5%-12px)/5)] md:flex-[calc((96.5%-12px)/4)] sm:flex-[calc((96.5%-12px)/2)] rounded-md">
                <div className="flex items-center">
                  <img
                    src="google.png"
                    width={50}
                    height={50}
                    className="mx-3 my-3 "
                  />
                  <h2 className="mx-4"> Google </h2>
                </div>
              </div>
              <div className="bg-gray-400 flex-grow-0 overflow-hidden lg:flex-[calc((96.5%-12px)/5)] md:flex-[calc((96.5%-12px)/4)] sm:flex-[calc((96.5%-12px)/2)] rounded-md">
                <div className="flex items-center">
                  <img
                    src="google.png"
                    width={50}
                    height={50}
                    className="mx-3 my-3 "
                  />
                  <h2 className="mx-4"> Google </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-[50px] my-6 shadow-md ">
        <div className="bg-white h-auto rounded-lg px-8 py-8">
          <div>
            <div className="mb-3">
              <h2>หมวดหมู่</h2>
            </div>
            <div className="border-gray-300 border-[2px] bg-white rounded-md">
              <div className="flex items-center">
                <img
                  src="google.png"
                  width={30}
                  height={30}
                  className="mx-3 my-3 "
                />
                <h2>Telegram Member</h2>
              </div>
            </div>
          </div>
          <div>
            <div className="my-3">
              <h2>บริการ</h2>
            </div>
            <div className="border-gray-300 border-[2px] bg-white rounded-md">
              <div className="flex items-center">
                <h2 className="mx-3 my-3">Telegram Member</h2>
              </div>
            </div>
            <h2 className="text-sm text-gray-500 my-[2px]">10 คำสั่งซื้อ</h2>
          </div>
          <div>
            <div className="my-3">
              <h2>รายละเอียด</h2>
            </div>
            <div className="border-gray-300 border-[2px] bg-white rounded-md">
              <div className="flex items-center">
                <p className="mx-3 my-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="my-3">
              <h2>ลิงก์</h2>
            </div>
            <div className="border-gray-300 border-[2px] bg-white rounded-md">
              <div className="flex items-center">
                <input type="text" className="w-full py-2 text-base px-2" />
              </div>
            </div>
          </div>
          <div>
            <div className="my-3">
              <h2>ปริมาณ</h2>
            </div>
            <div className="border-gray-300 border-[2px] bg-white rounded-md">
              <div className="flex items-center">
                <input type="text" className="w-full py-2 text-base px-2" />
              </div>
            </div>
            <div className="flex items-center">
              <h2 className="text-sm text-red-500 my-[2px]">ขั้นต่ำ 100 </h2>
              <p className="px-2 text-sm">สูงสุด 100 - ทวีคูณละ 100</p>
            </div>
          </div>
          <div>
            <div className="my-3">
              <h2>ค่าใช้จ่าย</h2>
            </div>
            <div className="border-gray-300 border-[2px] bg-white rounded-md">
              <div className="flex items-center">
                <input type="text" className="w-full py-2 text-base" />
              </div>
            </div>
          </div>
          <div className="bg-sky-500 w-[120px] text-center my-5 py-3 px-3 rounded-lg text-white ml-auto">
            <button>ยืนยันคำสั่งซื้อ</button>
          </div>
        </div>
      </div>
    </div>
  );
}
