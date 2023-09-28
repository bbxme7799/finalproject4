import SidebarAdmin from "../../components/admin/layout/sidebarAdmin";
import NavbarAdmin from "../../components/admin/layout/navbarAdmin";
import SaleItem from "../../components/admin/layout/dashboard/SaleItem";
import SalesReport from "../../components/admin/layout/dashboard/SalesReport";
import TrafficSourcesChart from "../../components/admin/layout/dashboard/TrafficSourcesChart";
import TransactionsList from "../../components/admin/layout/dashboard/TransactionsList";
import CustomersList from "../../components/admin/layout/dashboard/CustomersList";
import PageMetadata from "@/components/PageMetadata";
import axios from "axios";
import { useEffect, useState } from "react";

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

export default function AdminDashBoardPage({ me }) {
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [totalDeposit, setTotalDeposit] = useState(0);
  const [totalWithdraw, setTotalWithdraw] = useState(0);

  useEffect(() => {
    // Fetch total customers from API
    axios
      .get("http://localhost:8000/api/users/getusers", {
        withCredentials: true,
      })
      .then((response) => {
        setTotalCustomers(response.data.length);
      });

    // Fetch total transactions from API
    axios
      .get("http://localhost:8000/api/transactoins/admin", {
        withCredentials: true,
      }) // Adjust the API endpoint as needed
      .then((response) => {
        setTotalTransactions(response.data.total);
      });
    axios
      .get("http://localhost:8000/api/transactoins/deposit", {
        withCredentials: true,
      }) // Adjust the API endpoint as needed
      .then((response) => {
        setTotalDeposit(response.data.totalAmount);
      });
    axios
      .get("http://localhost:8000/api/transactoins/withdraw", {
        withCredentials: true,
      }) // Adjust the API endpoint as needed
      .then((response) => {
        setTotalWithdraw(response.data.total);
      });
  }, []);

  return (
    <>
      <PageMetadata title="Dashboard" />
      <div className="flex flex-col">
        <NavbarAdmin />
        <div className="flex flex-1">
          <SidebarAdmin />

          <div className="flex flex-col flex-1 overflow-x-hidden">
            <main>
              <div className="py-6">
                <div className="px-4 mx-auto sm:px-6 md:px-8">
                  <div className="md:items-center md:flex"></div>
                </div>

                <div className="px-4 mx-auto mt-8 sm:px-6 md:px-8">
                  <div className="space-y-5 sm:space-y-6">
                    <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      <SaleItem
                        title="Total Transaction"
                        amount={totalTransactions}
                        positive
                      />
                      <SaleItem
                        title="Total Deposit"
                        amount={totalDeposit}
                        positive={false}
                      />
                      <SaleItem
                        title="Total Withdraw"
                        amount={totalWithdraw}
                        positive={false}
                      />
                      <SaleItem
                        title="Total Customers"
                        amount={totalCustomers.toLocaleString()}
                        positive
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
                      <SalesReport />

                      {/* <div className="overflow-hidden bg-white border border-gray-200 rounded-xl lg:col-span-2">
                        <TrafficSourcesChart />
                      </div> */}
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
                      <TransactionsList />

                      <div className="overflow-hidden bg-white border border-gray-200 rounded-xl lg:col-span-2">
                        <CustomersList />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
