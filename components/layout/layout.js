import { Fragment } from "react";
import MainHeader from "./main-header";
import Sidebar from "./sidebar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import { useRouter } from "next/router"; // เพิ่ม import นี้

export default function Layout(props) {
  const { data: session, status } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter(); // สร้างตัวแปร router

  useEffect(() => {
    if (status === "authenticated" && session) {
      setIsLoggedIn(true);
    }
  }, [status, session]);

  // กำหนดหน้าที่ต้องการซ่อน Sidebar และ Navbar
  const hideSidebarNavbarPages = [
    "/",
    "/service-user",
    "/blog",
    "/faq",
    "/users/login",
  ];

  // ตรวจสอบว่าหน้าปัจจุบันอยู่ในหน้าที่ต้องการซ่อน Sidebar และ Navbar หรือไม่
  const shouldHideSidebarNavbar = hideSidebarNavbarPages.includes(
    router.pathname
  );

  return (
    <Fragment>
      {/* <div className="container"> */}
      {!shouldHideSidebarNavbar && isLoggedIn && <Sidebar />}
      {!shouldHideSidebarNavbar && isLoggedIn && <Navbar />}
      {shouldHideSidebarNavbar && <MainHeader session={session} />}
      <main>{props.children}</main>
      {/* </div> */}
    </Fragment>
  );
}
