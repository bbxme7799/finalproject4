import { useEffect, useState } from "react";
import SidebarAdmin from "../../components/admin/layout/sidebarAdmin";
import NavbarAdmin from "../../components/admin/layout/navbarAdmin";
import PageMetadata from "@/components/PageMetadata";
import UserTable from "@/components/admin/layout/tableuser/UserTable";
import axios from "axios";
import OrderDetailsModal from "@/components/admin/layout/reportsorder/OrderDetailsModal"; // Update the path
import StatusBadge from "@/components/admin/layout/reportsorder/StatusBadge";

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
        destination: "/admin/signin",
        permanent: false,
      },
    };
  } else if (me.role !== 1) {
    // เพิ่มเงื่อนไขตรวจสอบ role ที่ต้องการ
    return {
      redirect: {
        destination: "/users", // หน้าที่ต้องการ redirect ไป
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

export default function UserManagePage() {
  const [orders, setOrders] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // จำนวนรายการต่อหน้า
  const [totalQuantityAllOrders, setTotalQuantityAllOrders] = useState(0);
  const [totalPriceAllOrders, setTotalPriceAllOrders] = useState(0);

  useEffect(() => {
    const totalQuantity = orders.reduce((accumulator, order) => {
      const { totalQuantity } = calculateTotalQuantityAndPrice(order);
      return accumulator + totalQuantity;
    }, 0);

    const totalPrice = orders.reduce((accumulator, order) => {
      const { totalPrice } = calculateTotalQuantityAndPrice(order);
      return accumulator + totalPrice;
    }, 0);

    setTotalQuantityAllOrders(totalQuantity);
    setTotalPriceAllOrders(totalPrice);
  }, [orders]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/orders/getallorder", {
        withCredentials: true,
      })
      .then((response) => {
        const fetchedUsers = response.data.data;
        setOrders(fetchedUsers);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const maxPage = Math.ceil(orders.length / itemsPerPage);
    if (currentPage < maxPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  // console.log(
  //   "🚀 ~ file: reportorder.js:46 ~ UserManagePage ~ orders:",
  //   orders
  // );

  const calculateTotalQuantityAndPrice = (order) => {
    let totalQuantity = 0;
    let totalPrice = 0;

    order.order_items.forEach((item) => {
      if (item.status !== "canceled" && item.status !== "refund") {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
      }
    });

    return { totalQuantity, totalPrice };
  };

  return (
    <>
      <PageMetadata title="User Management" />
      <div className="flex flex-col">
        <NavbarAdmin />
        <div className="flex flex-1">
          <SidebarAdmin />
          <div className="flex flex-col flex-1 overflow-x-hidden">
            <div className="py-6">
              <div className="px-4 mx-auto sm:px-6 md:px-12">
                <h1 className="text-2xl font-semibold ">
                  รายงานออเดอร์ Report orders
                </h1>
                <section class="container px-4 mx-auto sm:px-6 lg:px-8">
                  <div class="overflow-x-auto">
                    <div class="py-2 align-middle">
                      <div class="overflow-hidden border border-gray-200 md:rounded-lg">
                        <div class="max-h-[400px] md:max-h-[600px] lg:max-h-[800px] xl:max-h-[1000px] overflow-y-auto">
                          <table class="min-w-full divide-y divide-gray-200">
                            <thead class="bg-gray-50 ">
                              <tr>
                                <th
                                  scope="col"
                                  class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                >
                                  order_id
                                </th>
                                <th
                                  scope="col"
                                  class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                >
                                  user_id
                                </th>

                                <th
                                  scope="col"
                                  class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                                >
                                  service_name
                                </th>

                                <th
                                  scope="col"
                                  class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                >
                                  status
                                </th>
                                <th
                                  scope="col"
                                  class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                >
                                  quantity
                                </th>
                                <th
                                  scope="col"
                                  class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                >
                                  price
                                </th>
                                <th
                                  scope="col"
                                  class="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                                >
                                  count
                                </th>

                                <th scope="col" class="relative py-3.5 px-4">
                                  <span class="sr-only">Actions</span>
                                </th>
                              </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200  ">
                              {orders.map((order) => (
                                <tr key={order.id}>
                                  <td class="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                                    <div class="inline-flex items-center gap-x-3">
                                      <input
                                        type="checkbox"
                                        class="text-blue-500 border-gray-300 rounded   "
                                      />

                                      <span> {order.id}</span>
                                    </div>
                                  </td>
                                  <td class="px-4 py-4 text-sm font-medium text-gray-700  whitespace-nowrap">
                                    <div class="inline-flex items-center gap-x-3">
                                      <input
                                        type="checkbox"
                                        class="text-blue-500 border-gray-300 rounded   "
                                      />

                                      <span> {order.user_id}</span>
                                    </div>
                                  </td>
                                  <td class="px-4 py-4 text-sm text-gray-500 whitespace-nowrap truncate">
                                    {order.order_items[0].service_name}
                                  </td>
                                  <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <StatusBadge
                                      status={order.order_items[0].status}
                                    />
                                  </td>

                                  <td class="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                    <h2 class="text-sm font-medium text-gray-800 ">
                                      {" "}
                                      {order.order_items[0].quantity}
                                    </h2>
                                  </td>

                                  <td class="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                    {order.order_items[0].price}
                                  </td>
                                  <td class="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                                    <h2 class="text-sm font-medium text-gray-800 ">
                                      {order.order_items.length}
                                    </h2>
                                  </td>
                                  <td class="px-4 py-4 text-sm whitespace-nowrap">
                                    <div class="flex items-center gap-x-6">
                                      {/* <button class="text-gray-500 transition-colors duration-200  hover:text-indigo-500 focus:outline-none">
                                        Archive
                                      </button> */}

                                      <button
                                        class="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                                        onClick={() => openModal(order)}
                                      >
                                        View Details
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                              <tr>
                                <td
                                  colspan="4"
                                  class="px-4 py-4 text-right font-medium text-gray-700"
                                >
                                  Total:
                                </td>
                                <td class="px-4 py-4 text-sm font-medium text-gray-700">
                                  {totalQuantityAllOrders}
                                </td>
                                <td class="px-4 py-4 text-sm font-medium text-gray-700">
                                  {totalPriceAllOrders}
                                </td>
                                <td class="px-4 py-4 text-sm font-medium text-gray-700">
                                  {orders.reduce(
                                    (accumulator, order) =>
                                      accumulator + order.order_items.length,
                                    0
                                  )}
                                </td>
                                <td class="px-4 py-4"></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="flex items-center justify-end mt-6">
                    <button
                      onClick={handlePreviousPage}
                      class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 mr-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 rtl:-scale-x-100"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                      </svg>

                      <span>Previous</span>
                    </button>

                    {Array.from({
                      length: Math.ceil(orders.length / itemsPerPage),
                    }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        class={`px-2 py-1 text-sm rounded-md hover:bg-gray-100 ${
                          index + 1 === currentPage
                            ? "text-blue-500 bg-blue-100/60"
                            : "text-gray-500"
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}

                    <button
                      onClick={handleNextPage}
                      class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 ml-2"
                    >
                      <span>Next</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 rtl:-scale-x-100"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && selectedOrder && (
        <OrderDetailsModal order={selectedOrder} onClose={closeModal} />
      )}
    </>
  );
}
