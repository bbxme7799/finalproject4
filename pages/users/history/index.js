import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import PageMetadata from "@/components/PageMetadata";
import axios from "axios";
import Layout from "@/components/layout/layout";
import OrderStatusButtons from "../../../components/history/OrderStatusButtons";
import OrderDetailsModal from "../../../components/user/orderhistory/OrderHistoryModal"; // เพิ่ม import
import StatusBadge from "@/components/user/orderhistory/StatusBadge";

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

  // Check if the user is banned
  if (me.is_banned) {
    return {
      redirect: {
        destination: "/suspended",
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

function index({ me }) {
  const [orderData, setOrderData] = useState([]);
  const [orderDataDetails, setOrderDataDetails] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const [query, setQuery] = useState("");
  const [btn, setBtn] = useState("");

  // โค้ดอื่น ๆ ที่เหมือนเดิม
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/orders", {
          withCredentials: true,
        });
        setOrderData(response.data.data);

        const orderPromises = await response.data.data.map((order) =>
          axios.get(`http://localhost:8000/api/orders/${order.id}`, {
            withCredentials: true,
          })
        );

        const responses = await Promise.all(orderPromises);
        const orderDetails = responses.map((response) => response.data);
        setOrderDataDetails(orderDetails);

        setLoading(false); // ตั้งค่าให้โหลดเสร็จแล้ว
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchData();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "โปรดรอ..":
        return "#008CBA";
      case "ดำเนินการ":
        return "#F4D03F";
      case "เสร็จสิ้น":
        return "#4CAF50";
      case "คืนบางส่วน":
        return "#E67E22";
      case "ประมาลผล":
        return "#E67E22";
      case "ยกเลิก":
        return "#f44336";
      default:
        return "black";
    }
  };

  const handleButtonClick = (value) => {
    setBtn(value);
  };

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
    setCurrentPage(id);
    handleButtonClick(""); // Clear the active button state when changing page
  };

  const handleViewDetailsClick = (order) => {
    const selectedOrderWithId = {
      ...order,
      order_id: order.order_id,
    };
    setSelectedOrder(selectedOrderWithId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = orderData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(orderData.length / recordsPerPage);
  const number = [...Array(npage + 1).keys()].slice(1);

  return (
    <>
      <Layout me={me}></Layout>
      <PageMetadata title="Order History" />
      <div className="ml-[255px] mt-[65px] h-auto">
        <div className="bg-white my-[2px] ">
          <div className="flex mx-2 py-2 ">
            <h1 className="font-bold text-lg"> Order :</h1>
            <p className="text-lg pl-2"> ประวัติออเดอร์</p>
          </div>
        </div>
        <div className="mx-[150px] my-6 shadow-md h-full">
          <div className="bg-white h-auto rounded-lg px-8 py-8">
            <div className="relative">
              <div className="border-b-2 border-gray-200">
                <OrderStatusButtons
                  activeStatus={btn}
                  handleButtonClick={handleButtonClick}
                />
              </div>
              <div className="flex justify-end my-3">
                <input
                  type="text"
                  placeholder="Seach..."
                  className=" border-2 rounded-md px-3 py-2 "
                  onChange={(e) => setquery(e.target.value)}
                />
              </div>
              <div className="w-full my-5 mx-5 px-5 py-5">
                <div className="relative overflow-x-auto">
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    <table className="w-full text-sm text-left text-gray-500 ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            id
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Order Id
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Service_name
                          </th>
                          <th scope="col" className="px-6 py-3">
                            quantity
                          </th>
                          <th scope="col" className="px-6 py-3">
                            price
                          </th>
                          <th scope="col" className="px-6 py-3">
                            status
                          </th>
                          <th scope="col" className="relative py-3.5 px-4">
                            <span className="sr-only">Actions</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderDataDetails.map((orderGroup, groupIndex) =>
                          orderGroup.data.map((order, orderIndex) => (
                            <tr key={order.id} className="bg-white border-b">
                              {orderIndex === 0 ? (
                                <>
                                  <td className="px-2 py-2 text-sm">
                                    {order.id}
                                  </td>
                                  <td
                                    className="px-2 py-2 text-sm"
                                    rowSpan={orderGroup.data.length}
                                  >
                                    {order.order_id}
                                  </td>
                                  <td
                                    className="px-2 py-2 truncate text-sm"
                                    rowSpan={orderGroup.data.length}
                                  >
                                    {order.service_name}
                                  </td>
                                  <td className="px-2 py-2 text-sm">
                                    {order.quantity}
                                  </td>
                                  <td className="px-2 py-2 text-sm">
                                    {order.price}
                                  </td>
                                </>
                              ) : null}
                              {orderIndex === 0 ? (
                                <td
                                  className="px-2 py-2 text-sm truncate"
                                  rowSpan={orderGroup.data.length}
                                >
                                  <StatusBadge status={order.status} />
                                </td>
                              ) : null}
                              {orderIndex === 0 ? (
                                <td
                                  className="px-2 py-2 text-sm"
                                  rowSpan={orderGroup.data.length}
                                >
                                  <button
                                    onClick={() =>
                                      handleViewDetailsClick(order)
                                    }
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                                  >
                                    View Details
                                  </button>
                                </td>
                              ) : null}
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  )}
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
                      onClick={(e) => setrecordsPerPage(e.target.value)}
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                    </select>
                    <label htmlFor="dropdownMenu" className="pl-4 flex">
                      แถว{" "}
                      <p className="ml-3 opacity-70">
                        จากทั้งหมด {orderDataDetails.length} ข้อมูล
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
      <OrderDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedOrder={selectedOrder}
        orderDataDetails={orderDataDetails}
      />
    </>
  );
}

export default index;
