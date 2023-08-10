import SidebarAdmin from "../../components/admin/layout/sidebarAdmin";
import NavbarAdmin from "../../components/admin/layout/navbarAdmin";
import SaleItem from "../../components/admin/layout/dashboard/SaleItem";
import SalesReport from "../../components/admin/layout/dashboard/SalesReport";
import TrafficSourcesChart from "../../components/admin/layout/dashboard/TrafficSourcesChart";
import TransactionsList from "../../components/admin/layout/dashboard/TransactionsList";
import CustomersList from "../../components/admin/layout/dashboard/CustomersList";
import PageMetadata from "@/components/PageMetadata";
import ProductTable from "@/components/admin/layout/crudservice/ProductTable";

export default function AdminPage() {
  return (
    <>
      <PageMetadata title="Dashboard" />
      <div className="flex flex-col">
        <NavbarAdmin />
        <div className="flex flex-1">
          <SidebarAdmin />
          <div className="flex flex-col flex-1 overflow-x-hidden">
            <div className="py-6">
              <div className="px-4 mx-auto sm:px-6 md:px-12">
                <h1 className="text-2xl font-semibold mb-4">จัดการบริการ</h1>
                <div className="md:items-center md:flex">
                  <ProductTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
