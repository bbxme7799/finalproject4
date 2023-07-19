import Link from "next/link";
import styles from "./main-header.module.css";

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
function MainHeader() {
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
        <Link href="/users/login" passHref>
          <button className={styles.logout}>เข้าสู่ระบบ</button>
        </Link>
      </div>
    </div>
  );
}

export default MainHeader;
