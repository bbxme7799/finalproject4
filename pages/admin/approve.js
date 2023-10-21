import { useEffect, useState } from "react";
import SidebarAdmin from "../../components/admin/layout/sidebarAdmin";
import NavbarAdmin from "../../components/admin/layout/navbarAdmin";
import PageMetadata from "@/components/PageMetadata";
import ApproveTable from "@/components/admin/layout/tableapprove/UserTable";
import axios from "axios";

const API_BASE_URL = process.env.BACKEND_URL;

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

export default function ApprovePage() {
  const [users, setUsers] = useState([]);
  console.log("🚀 ~ file: approve.js:45 ~ ApprovePage ~ users:", users);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/transactoins/request-withdraw/admin`, {
        withCredentials: true,
      })
      .then((response) => {
        const fetchedUsers = response.data.data;
        console.log(
          "🚀 ~ file: usermanage.js:53 ~ .then ~ fetchedUsers:",
          fetchedUsers
        );
        setUsers(fetchedUsers);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

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
                  อนุมัติการถอนเงิน Approval of withdraw
                </h1>
                <ApproveTable users={users} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
