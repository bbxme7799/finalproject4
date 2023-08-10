import { User } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import PageMetadata from "@/components/PageMetadata";
import axios from "axios";
import Layout from "@/components/layout/layout";

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

const Users = [
  {
    id: 1,
    service: "Scan QRCODE | ใช้ได้ 2 ครั้ง/วัน ถ้าไม่ยืนยันตัวตน",
    topup: "500.00",
    cost: "500.00",
    status: "เสร็จสิ้น",
    date: "2020-07-22",
  },
  {
    id: 2,
    service: "Scan QRCODE | ใช้ได้ 2 ครั้ง/วัน ถ้าไม่ยืนยันตัวตน",
    topup: "500.00",
    cost: "500.00",
    status: "เสร็จสิ้น",
    date: "2020-07-22",
  },
  {
    id: 3,
    service: "Scan QRCODE | ใช้ได้ 2 ครั้ง/วัน ถ้าไม่ยืนยันตัวตน",
    topup: "500.00",
    cost: "500.00",
    status: "เสร็จสิ้น",
    date: "2020-07-22",
  },
  {
    id: 4,
    service: "Scan QRCODE | ใช้ได้ 2 ครั้ง/วัน ถ้าไม่ยืนยันตัวตน",
    topup: "500.00",
    cost: "500.00",
    status: "เสร็จสิ้น",
    date: "2020-07-22",
  },
  {
    id: 5,
    service: "Scan QRCODE | ใช้ได้ 2 ครั้ง/วัน ถ้าไม่ยืนยันตัวตน",
    topup: "500.00",
    cost: "500.00",
    status: "เสร็จสิ้น",
    date: "2020-07-22",
  },
  {
    id: 6,
    service: "Scan QRCODE | ใช้ได้ 2 ครั้ง/วัน ถ้าไม่ยืนยันตัวตน",
    topup: "500.00",
    cost: "500.00",
    status: "เสร็จสิ้น",
    date: "2020-07-22",
  },
  {
    id: 7,
    service: "Scan QRCODE | ใช้ได้ 2 ครั้ง/วัน ถ้าไม่ยืนยันตัวตน",
    topup: "500.00",
    cost: "500.00",
    status: "เสร็จสิ้น",
    date: "2020-07-22",
  },
  {
    id: 8,
    service: "Scan QRCODE | ใช้ได้ 2 ครั้ง/วัน ถ้าไม่ยืนยันตัวตน",
    topup: "500.00",
    cost: "500.00",
    status: "เสร็จสิ้น",
    date: "2020-07-22",
  },
  {
    id: 9,
    service: "Scan QRCODE | ใช้ได้ 2 ครั้ง/วัน ถ้าไม่ยืนยันตัวตน",
    topup: "500.00",
    cost: "500.00",
    status: "เสร็จสิ้น",
    date: "2020-07-22",
  },
  {
    id: 10,
    service: "Scan QRCODE | ใช้ได้ 2 ครั้ง/วัน ถ้าไม่ยืนยันตัวตน",
    topup: "500.00",
    cost: "500.00",
    status: "เสร็จสิ้น",
    date: "2020-07-22",
  },
  {
    id: 11,
    service: "Scan QRCODE | ใช้ได้ 2 ครั้ง/วัน ถ้าไม่ยืนยันตัวตน",
    topup: "500.00",
    cost: "500.00",
    status: "เสร็จสิ้น",
    date: "2020-07-22",
  },
];

function index({ me }) {
  const [query, setQuery] = useState("");
  const [btn, setBtn] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);

  const router = useRouter();

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const filteredRecords = Users.filter((user) =>
    user.service
      .toLowerCase()
      .includes(query.toLowerCase() || btn.toLowerCase())
  );

  const records = filteredRecords.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredRecords.length / recordsPerPage);
  const number = [...Array(npage + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prePage = () => {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCPage = (id) => {
    // Implement the logic to change the current page
  };

  // console.log(Users.filter(user => user.first_name.toLocaleLowerCase.includes("Em")))
  return (
    <>
      <PageMetadata title="Credit history" />
      <Layout me={me}></Layout>
      <div className="ml-[255px] mt-[65px] h-auto">
        <div className="bg-white my-[2px] ">
          <div className="flex mx-2 py-2 ">
            <h1 className="font-bold text-lg"> Orders :</h1>
            <p className="text-lg pl-2"> ประวัติฝากเครดิต</p>
          </div>
        </div>
        <div className="mx-[50px] my-6 shadow-md h-full">
          <div className="bg-white h-auto rounded-lg px-8 py-8 ">
            <div className="relative">
              <div className="flex justify-end my-3">
                <input
                  type="text"
                  id="searchInput"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="border-2 rounded-md px-3 py-2 "
                />
              </div>

              <div className="w-full my-5 mx-5 px-5 py-5">
                <div className=" ">
                  <table className="w-full mx-auto">
                    <tbody>
                      <tr className="border-b-2">
                        <th className="text-left p-4  ">ID</th>
                        <th className="text-left   ">ช่องทางเงินฝาก</th>
                        <th className="text-left  ">จำนวน</th>
                        <th className="text-center  ">จำนวนที่ได้รับ</th>
                        <th className="text-center  ">Status</th>
                        <th className="text-center ">วันที่สร้าง</th>
                      </tr>
                      {filteredRecords.map((item) => (
                        <tr key={item.id} className="border-b-2">
                          <td className="text-left ">
                            <p className="mx-2 my-3">{item.id}</p>
                          </td>
                          <td className="text-left ">
                            <p className="my-3 ">{item.service}</p>
                          </td>
                          <td className="text-left ">
                            <p className="my-3 ">{item.topup}</p>
                          </td>
                          <td className="text-center ">
                            <p className="my-3">{item.cost}</p>
                          </td>
                          <td className="text-center ">
                            <p className="my-3">{item.status}</p>
                          </td>
                          <td className="text-center ">
                            <p className="my-3">{item.date}</p>
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
    </>
  );

  // // Style button color

  // function nextPage() {
  //   if (currentPage !== lastIndex) {
  //     setcurrentPage(currentPage + 1);
  //   }
  // }
  // function prePage() {
  //   if (currentPage !== firstIndex) {
  //     setcurrentPage(currentPage - 1);
  //   }
  // }
  // function changeCPage(id) {}
}

export default index;
