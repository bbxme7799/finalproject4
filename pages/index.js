import classes from "../components/index.module.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Servericon from "@/components/icons/server.png";
import Walleticon from "@/components/icons/wallet.png";
import helpdeskicon from "@/components/icons/help-desk.png";
import Socialicon from "@/components/icons/social-media.png";
import ServiceList from "@/components/serviceTable/serivce-list";
import bg from "@/public/images/marketinglogo.png";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import Footer from "@/components/layout/footer";
import PageMetadata from "@/components/PageMetadata";
import { motion } from "framer-motion";

const HomePage = () => {
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
      <div className={`${classes.container} overflow-hidden`}>
        <div className={classes.body}></div>
        <div className={classes.position}>
          <div className={classes.banner}>
            <div className="grid-flow-row-dense grid-cols-2 text-white z-50 flex gap-[90px] my-auto">
              <div className="col-span-2 w-[70%]">
                <div className={classes.item}>
                  <h1 className={classes.title}>
                    เว็บปั้มวิว ปั้มไลค์ ปั้มใจ ปั้มผู้ติดตาม โปรโมท โฆษณา
                    ทำการตลาดออนไลน์
                  </h1>
                  <p className={classes.desc}>
                    #1 บริการด้านการตลาดออนไลน์ SEO โซเชียลมีเดีย อันดับหนึ่ง
                    ปั้มวิวฟรี ปั้มใจ tiktok ปั้มไลค์ฟรี ปั้มผู้ติดตาม ปั้มฟอลโล
                    ปั้มซับ ระบบสั่งซื้ออัตโนมัติ ใช้งานง่าย อยู่ที่ไหนก็ทำได้
                    24/7
                  </p>
                  <Link href="/users" passHref>
                    <button className={classes.btnlogin}>สมัครสมาชิก</button>
                  </Link>
                </div>
              </div>
              <div className="col-span-1 w-[30%] text-center items-center">
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
        <div className="w-[50%] bg-white h-[100px] mx-auto mt-16 shadow-lg rounded-2xl border-[3px] border-gray-50 flex items-center justify-center">
          <h1 className="font-bold text-4xl">TOP Rated Services</h1>
        </div>
        <div className="w-[60%] bg-white h-[500px] mx-auto mt-16 shadow-lg border-[3px] border-gray-50 flex items-center justify-center mb-10">
          <ServiceList />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
