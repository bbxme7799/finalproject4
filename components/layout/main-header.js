import Link from "next/link";
import styles from "./main-header.module.css";
import React, { memo } from "react";
import { signOut } from "next-auth/react";
const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Service",
    url: "/service-user",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "FAQ",
    url: "/faq",
  },
];
const MainHeader = (props) => {
  const { session } = props;
  const userEmail = session?.user.email;

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" }); // เรียกใช้ signOut เมื่อมีการคลิกปุ่ม "ออกจากระบบ"
  };

  return (
    <div className={styles.container}>
      <div className={styles.area}></div>
      <div className={styles.nav}>
        <Link href="/" className={styles.logo}>
          MyService
        </Link>
        <div className={styles.links}>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
        </div>
        {userEmail ? (
          // If userEmail exists (user is logged in), show "ออกจากระบบ" button
          <button className={styles.logout} onClick={handleSignOut}>
            ออกจากระบบ
          </button>
        ) : (
          // If userEmail is missing (user is not logged in), show "เข้าสู่ระบบ" button
          <Link href="/users/login" passHref>
            <button className={styles.login}>เข้าสู่ระบบ</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default memo(MainHeader);
