import classes from "../components/index.module.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Servericon from "@/components/icons/server.png";
import Walleticon from "@/components/icons/wallet.png";
import helpdeskicon from "@/components/icons/help-desk.png";
import Socialicon from "@/components/icons/social-media.png";
import StarIcon from "@/components/icons/star.png";
import Table from "@/components/serviceTable/Table";
import bg from "@/public/images/marketinglogo.png";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import Footer from "@/components/layout/footer";
import PageMetadata from "@/components/PageMetadata";
import { motion } from "framer-motion";
import { isLoggedIn } from "../utils/auth";
import { useRouter } from "next/router";
import MainHeader from "@/components/layout/main-header";
import axios from "axios";

export const getServerSideProps = async (context) => {
  try {
    let me = null;

    const response = await axios.get("http://localhost:8000/api/users/me", {
      headers: { cookie: context.req.headers.cookie },
      withCredentials: true,
    });

    if (response.status === 200) {
      me = response.data;
      console.log("user/me info => ", me);
      if (me) {
        return {
          redirect: {
            destination: "/users",
            permanent: false,
          },
        };
      }
    }

    return {
      props: {
        me,
      },
    };
  } catch (error) {
    // Handle errors (e.g., network error, server error)
    // console.error("Error fetching user info: ", error);

    return {
      props: {
        me: null,
      },
    };
  }
};

const HomePage = ({ me }) => {
  const router = useRouter();
  const [serviceCards] = useState([
    {
      icon: Servericon,
      title: "3,xxx+ บริการในระบบ",
      desc: "เรามีคู่ค้าและเซิพเวอร์ในระบบมากถึง 3,xxx+ บริการ ตอบโจทย์ทุกรูปแบบ ประเภทบริการ",
    },
    {
      icon: Walleticon,
      title: "มีทีมงานช่วยเหลือ",
      desc: "ราคาสุดพิเศษเพื่อคุณเริ่มต้นเพียง 0.01 บาท ก็สามารถดำเนินการได้ ราคานี้แค่คุณเท่านั้น",
    },
    {
      icon: helpdeskicon,
      title: "ปลอดภัย 100%",
      desc: "ติดต่อสอบถามได้ 24 ชั่วโมง เรามีทีมงานคอยให้คำแนะนำและประสานงานกับเซิพเวอร์ที่ใช้งาน",
    },
    {
      icon: Socialicon,
      title: "3,xxx+ บริการในระบบ",
      desc: "เป็นความลับ ทุกบริการปลอดภัย และมีประสิทธิภาพ ให้คุณได้เลือกใช้ได้อย่างไม่จำกัด",
    },
  ]);

  return (
    <>
      <PageMetadata title="Home" />
      <MainHeader />
      <div className={`${classes.container} overflow-hidden`}>
        <div className={classes.body}></div>
        <div className={classes.position}>
          <div className={classes.banner}>
            <div className="grid grid-cols-1 md:grid-cols-2 text-white z-50 gap-4 md:gap-10 my-auto">
              <div className="w-full md:w-3/4">
                <div className={classes.item}>
                  <h1
                    className={`${classes.title} text-2xl md:text-4xl xl:text-5xl`}
                  >
                    เว็บปั้มวิว ปั้มไลค์ ปั้มใจ ปั้มผู้ติดตาม โปรโมท โฆษณา
                    ทำการตลาดออนไลน์
                  </h1>
                  <p className={`${classes.desc} text-sm md:text-base`}>
                    #1 บริการด้านการตลาดออนไลน์ SEO โซเชียลมีเดีย อันดับหนึ่ง
                    ปั้มวิวฟรี ปั้มใจ tiktok ปั้มไลค์ฟรี ปั้มผู้ติดตาม ปั้มฟอลโล
                    ปั้มซับ ระบบสั่งซื้ออัตโนมัติ ใช้งานง่าย อยู่ที่ไหนก็ทำได้
                    24/7
                  </p>
                  <Link href="/users" passHref>
                    <button
                      className={`${classes.btnlogin} md:w-40 md:h-10 hover:bg-gray-800 hover:text-white`}
                    >
                      สมัครสมาชิก
                    </button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center">
                <div className={classes.banner}>
                  <div className={classes.item}>
                    <motion.div
                      animate={{ x: 100 }} // ตัวแปร x คือการเลื่อนตำแหน่ง X ของ Element ไปทางขวา 100px
                      transition={{ duration: 1 }} // ระยะเวลาในการเคลื่อนไหว 1 วินาที
                    >
                      <Image src={bg} alt="Card Icon" className={classes.img} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-8 mt-32 w-[70%] mx-auto items-center text-center">
          {serviceCards.map((card, index) => (
            <div className={classes.card} key={index}>
              <div className={classes.bodycard}>
                <Image
                  src={card.icon}
                  alt="server"
                  className={classes.cardimg}
                />
                <h2 className={classes.cardtitle}>{card.title}</h2>
                <p className={classes.carddesc}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 bg-white h-[100px] mx-auto mt-16 shadow-lg rounded-2xl  border-gray-50 flex items-center justify-center">
          <div className="flex items-center">
            <Image src={StarIcon} alt="StarIcon" width={64} height={32} />
            <h1 className="font-bold text-2xl md:text-4xl ml-2">
              TOP Rated Services
            </h1>
          </div>
        </div>
        <div className="w-full md:w-2/3  h-[500px] mx-auto border-[3px] border-gray-50 flex items-center justify-center mb-10">
          <Table />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
