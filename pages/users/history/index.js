import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Users = [
  {
    id: 1,
    service: "Instagram Likes Free Trial",
    src: "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
    cost: "100",
    start: "410",
    count: "10",
    status: "เสร็จสิ้น",
    more: "Show",
  },
  {
    id: 2,
    service: "Instagram Likes Free Trial",
    src: "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
    cost: "100",
    start: "410",
    count: "10",
    status: "ยกเลิก",
    more: "Show",
  },
  {
    id: 3,
    service: "Instagram Likes Free Trial",
    src: "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
    cost: "100",
    start: "410",
    count: "10",
    status: "ยกเลิก",
    more: "Show",
  },
  {
    id: 4,
    service: "Instagram Likes Free Trial",
    src: "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
    cost: "100",
    start: "410",
    count: "10",
    status: "เสร็จสิ้น",
    more: "Show",
  },
  {
    id: 5,
    service: "Instagram Likes Free Trial",
    src: "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
    cost: "100",
    start: "410",
    count: "10",
    status: "ยกเลิก",
    more: "Show",
  },
  {
    id: 6,
    service: "Instagram Likes Free Trial",
    src: "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
    cost: "100",
    start: "410",
    count: "10",
    status: "คืนบางส่วน",
    more: "Show",
  },
  {
    id: 7,
    service: "Instagram Likes Free Trial",
    src: "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
    cost: "100",
    start: "410",
    count: "10",
    status: "เสร็จสิ้น",
    more: "Show",
  },
  {
    id: 8,
    service: "Instagram Likes Free Trial",
    src: "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
    cost: "100",
    start: "410",
    count: "10",
    status: "คืนบางส่วน",
    more: "Show",
  },
  {
    id: 9,
    service: "Instagram Likes Free Trial",
    src: "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
    cost: "100",
    start: "410",
    count: "10",
    status: "เสร็จสิ้น",
    more: "Show",
  },
  {
    id: 10,
    service: "Instagram Likes Free Trial",
    src: "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
    cost: "100",
    start: "410",
    count: "10",
    status: "เสร็จสิ้น",
    more: "Show",
  },
  {
    id: 11,
    service: "Instagram Likes Free Trial",
    src: "https://www.figma.com/file/t1sCg8bQ5ZJnrGQX57bgKi/Untitled",
    cost: "100",
    start: "410",
    count: "10",
    status: "เสร็จสิ้น",
    more: "Show",
  },
];

function index() {
  const [query, setQuery] = useState("");
  const [btn, setBtn] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  function getStatusColor(status) {
    switch (status) {
      case "โปรดรอ..":
        return "#008CBA";
      case "ดำเนินการ":
        return "#F4D03F";
      case "เสร็จสิ้น":
        return "#4CAF50";
      case "คืนบางส่วน":
      case "ประมวลผล":
        return "#E67E22";
      case "ยกเลิก":
        return "#f44336";
      default:
        return "black";
    }
  }

  // Function to go to the next page
  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }

  // Function to go to the previous page
  function prePage() {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  // Function to change the current page
  function changeCPage(id) {
    setCurrentPage(id);
  }

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  //ค้นหาเฉพาะ status
  // const filteredUsers = Users.filter(
  //   (user) =>
  //     user.status.toLowerCase().includes(query.toLowerCase()) ||
  //     user.status.toLowerCase().includes(btn.toLowerCase())
  // );
  const filteredUsers = Users.filter((user) =>
    Object.values(user).some((value) => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(query.toLowerCase());
      }
      return false;
    })
  );

  console.log("🚀 ~ file: index.js:181 ~ index ~ Users:", Users);

  const records = filteredUsers.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredUsers.length / recordsPerPage);
  const number = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="ml-[255px] mt-[65px] h-auto">
      <div className="bg-white my-[2px] ">
        <div className="flex mx-2 py-2 ">
          <h1 className="font-bold text-lg"> Order :</h1>
          <p className="text-lg pl-2"> ประวัติออเดอร์</p>
        </div>
      </div>
      <div className="mx-[50px] my-6 shadow-md h-full">
        <div className="bg-white h-auto rounded-lg px-8 py-8 ">
          <div className="relative">
            <div className="border-b-2 border-gray-200">
              <ul className={styles.section}>
                <li
                  className="sectionli mx-1 my-3 bg-gray-50 text-gray-500 px-5 py-2 rounded-lg  active"
                  onClick={(e) => setBtn(e.target.value)}
                  value=""
                >
                  <button onClick={(e) => setBtn(e.target.value)} value="">
                    All
                  </button>
                </li>
                <li
                  className="sectionli mx-1 my-3 bg-gray-50 text-gray-500 px-5 py-2 rounded-lg "
                  onClick={(e) => setBtn(e.target.value)}
                  value="โปรดรอ.."
                >
                  <button
                    onClick={(e) => setBtn(e.target.value)}
                    value="โปรดรอ.."
                  >
                    โปรดรอ..
                  </button>
                </li>
                <li
                  className="sectionli mx-1 my-3 bg-gray-50 text-gray-500 px-5 py-2 rounded-lg  "
                  onClick={(e) => setBtn(e.target.value)}
                  value="ดำเนินการ"
                >
                  <button
                    onClick={(e) => setBtn(e.target.value)}
                    value="ดำเนินการ"
                  >
                    ดำเนินการ
                  </button>
                </li>
                <li
                  className="sectionli mx-1 my-3 bg-gray-50 text-gray-500 px-5 py-2 rounded-lg "
                  onClick={(e) => setBtn(e.target.value)}
                  value="เสร็จสิ้น"
                >
                  <button
                    onClick={(e) => setBtn(e.target.value)}
                    value="เสร็จสิ้น"
                  >
                    เสร็จสิ้น
                  </button>
                </li>
                <li
                  className="sectionli mx-1 my-3 bg-gray-50 text-gray-500 px-5 py-2 rounded-lg "
                  onClick={(e) => setBtn(e.target.value)}
                  value="คืนบางส่วน"
                >
                  <button
                    onClick={(e) => setBtn(e.target.value)}
                    value="คืนบางส่วน"
                  >
                    คืนบางส่วน
                  </button>
                </li>
                <li
                  className="sectionli mx-1 my-3 bg-gray-50 text-gray-500 px-5 py-2 rounded-lg "
                  onClick={(e) => setBtn(e.target.value)}
                  value="ประมาลผล"
                >
                  <button
                    onClick={(e) => setBtn(e.target.value)}
                    value="ประมาลผล"
                  >
                    ประมาลผล
                  </button>
                </li>
                <li
                  className="sectionli mx-1 my-3 bg-gray-50 text-gray-500 px-5 py-2 rounded-lg "
                  onClick={(e) => setBtn(e.target.value)}
                  value="ยกเลิก"
                >
                  <button
                    onClick={(e) => setBtn(e.target.value)}
                    value="ยกเลิก"
                  >
                    ยกเลิก
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex justify-end my-3">
              <input
                type="text"
                placeholder="Seach..."
                className=" border-2 rounded-md px-3 py-2 "
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="w-full my-5 mx-5 px-5 py-5">
              <div className=" md:overflow-x-scroll">
                <table className="w-full mx-auto">
                  <tbody>
                    <tr className="border-b-2">
                      <th className="text-left p-4  ">ID</th>
                      <th className="text-left   ">บริการ</th>
                      <th className="text-left  ">ลิงก์</th>
                      <th className="text-center  ">ค่าใช้จ่าย</th>
                      <th className="text-center  ">เริ่ม</th>
                      <th className="text-center ">ปริมาณ</th>
                      <th className="text-center ">Status</th>
                      <th className="text-center ">เพิ่มเติม</th>
                    </tr>
                    {filteredUsers.slice(firstIndex, lastIndex).map((item) => (
                      <tr key={item.id} className="border-b-2">
                        <td className="text-left ">
                          <p className="mx-2 my-3">{item.id}</p>
                        </td>
                        <td className="text-left ">
                          <p className="my-3 ">{item.service}</p>
                        </td>
                        <td className="text-left ">
                          <p className="my-3 ">{item.src}</p>
                        </td>
                        <td className="text-center ">
                          <p className="my-3">{item.cost}</p>
                        </td>
                        <td className="text-center ">
                          <p className="my-3">{item.start}</p>
                        </td>
                        <td className="text-center ">
                          <p className="my-3">{item.count}</p>
                        </td>
                        <td className="text-center">
                          <p
                            className="my-3 w-24 mx-auto rounded-md py-1 text-white "
                            style={{
                              backgroundColor: getStatusColor(item.status),
                            }}
                          >
                            {item.status}
                          </p>
                        </td>
                        <td className="text-center ">
                          <p className="my-3">{item.more}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between mx-3 my-5 ">
                <div className="my-auto flex items-center">
                  <label htmlFor="dropdownMenu" className="pr-4">
                    แสดง
                  </label>
                  <select
                    id="dropdownMenu"
                    name="dropdownMenu"
                    className="mt-[0.2rem]  border-2 rounded-md py-2 px-3"
                    onClick={(e) => setRecordsPerPage(e.target.value)}
                  >
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </select>
                  <label htmlFor="dropdownMenu" className="pl-4 flex">
                    แถว{" "}
                    <p className="ml-3 opacity-70">
                      จากทั้งหมด {Users.length} ข้อมูล
                    </p>
                  </label>
                </div>

                <nav>
                  <ul className="flex justify-end mx-1 my-5">
                    <li className="page-item mx-1 border-2 rounded-l-xl px-2 py-1">
                      <a href="#" className="page-link" onClick={prePage}>
                        ก่อนหน้า
                      </a>
                    </li>
                    {number.map((n, i) => (
                      <li
                        className={`page-item mx-1 px-3 text-center items-center rounded-md ${
                          currentPage === n ? "active" : ""
                        }`}
                        key={i}
                      >
                        <a
                          href="#"
                          className="page-link flex justify-items-center mt-1"
                          onClick={() => changeCPage(n)}
                        >
                          {n}
                        </a>
                      </li>
                    ))}
                    <li className="page-item mx-1 border-2 rounded-r-xl px-2 py-1">
                      <a href="#" className="page-link" onClick={nextPage}>
                        ถัดไป
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Style button color

  //   function getStatusColor(status) {
  //     switch (status) {
  //       case "โปรดรอ..":
  //         return "#008CBA";
  //       case "ดำเนินการ":
  //         return "#F4D03F";
  //       case "เสร็จสิ้น":
  //         return "#4CAF50";
  //       case "คืนบางส่วน":
  //         return "#E67E22";
  //       case "ประมวลผล":
  //         return "#E67E22";
  //       case "ยกเลิก":
  //         return "#f44336";
  //       default:
  //         return "black";
  //     }
  //   }

  //   function nextPage() {
  //     if (currentPage !== lastIndex) {
  //       setcurrentPage(currentPage + 1);
  //     }
  //   }
  //   function prePage() {
  //     if (currentPage !== firstIndex) {
  //       setcurrentPage(currentPage - 1);
  //     }
  //   }
  //   function changeCPage(id) {}
}

export default index;
