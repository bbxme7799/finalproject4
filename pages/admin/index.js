import SidebarAdmin from "../../components/admin/layout/sidebarAdmin";
import NavbarAdmin from "../../components/admin/layout/navbarAdmin";
import SaleItem from "../../components/admin/layout/dashboard/SaleItem";
import SalesReport from "../../components/admin/layout/dashboard/SalesReport";
import TrafficSourcesChart from "../../components/admin/layout/dashboard/TrafficSourcesChart";
import TransactionsList from "../../components/admin/layout/dashboard/TransactionsList";
import CustomersList from "../../components/admin/layout/dashboard/CustomersList";
import PageMetadata from "@/components/PageMetadata";
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
                  <div className="md:items-center md:flex">
                    <p className="text-base font-bold text-gray-900">
                      Hey Mariana -
                    </p>
                    <p className="mt-1 text-base font-medium text-gray-500 md:mt-0 md:ml-2">
                      here's what's happening with your store today
                    </p>
                  </div>
                </div>

                <div className="px-4 mx-auto mt-8 sm:px-6 md:px-8">
                  <div className="space-y-5 sm:space-y-6">
                    <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      <SaleItem
                        title="Today's Sale"
                        amount="12,426"
                        percentage="36"
                        positive
                      />
                      <SaleItem
                        title="Total Sales"
                        amount="2,38,485"
                        percentage="14"
                        positive={false}
                      />
                      <SaleItem
                        title="Total Orders"
                        amount="84,382"
                        percentage="36"
                        positive
                      />
                      <SaleItem
                        title="Total Customers"
                        amount="33,493"
                        percentage="36"
                        positive
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
                      <SalesReport />

                      <div className="overflow-hidden bg-white border border-gray-200 rounded-xl lg:col-span-2">
                        <TrafficSourcesChart />
                      </div>
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
