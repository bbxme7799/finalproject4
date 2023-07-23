import { Fragment } from "react";
import MainHeader from "./main-header";
import Sidebar from "./sidebar";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Navbar from "./navbar";
export default function Layout(props) {
  const { data: session, status } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (status === "authenticated" && session) {
      setIsLoggedIn(true);
    }
  }, [status, session]);

  return (
    <Fragment>
      {/* <div className="container"> */}
      {isLoggedIn && <Sidebar />}
      {isLoggedIn && <Navbar />}
      {!isLoggedIn && <MainHeader />}
      <main>{props.children}</main>
      {/* </div> */}
    </Fragment>
  );
}
