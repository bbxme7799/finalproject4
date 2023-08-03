import React from "react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import PageMetadata from "@/components/PageMetadata";

export default function CreditPage() {
  const session = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [creditAmount, setCreditAmount] = useState("");

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCreditChange = (event) => {
    setCreditAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // เรียกใช้ฟังก์ชันหรือ API เพื่อบันทึกข้อมูลชื่อและอีเมล
    // ตัวอย่าง: คำสั่งเรียกใช้ API โดยใช้ fetch
    fetch("/api/updateUserInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }), // ส่งข้อมูลชื่อและอีเมลในรูปแบบ JSON ไปยัง API
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data updated successfully:", data);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <>
      <PageMetadata title="Privacy Setting" />
      <div className="ml-[255px] mt-[65px] h-auto">
        <div className="bg-white my-[2px] ">
          <div className="flex mx-2 py-2">
            <h1 className="font-bold text-lg">Privacy settings:</h1>
            <p className="text-lg pl-2">ตั้งค่าข้อมูลส่วนตัว</p>
          </div>
        </div>
        <div className="mx-[200px] my-8 shadow-md h-full">
          <div className="bg-white h-auto rounded-lg px-8 py-8">
            <div className="relative">
              <form onSubmit={handleSubmit} className="my-3">
                <div className="mb-4">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 w-full"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 w-full"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="number"
                    className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 w-full"
                    placeholder="Enter credit amount"
                    value={creditAmount}
                    onChange={handleCreditChange}
                  />
                </div>
                <div className="flex items-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
