import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import CategoryButton from "@/components/CategoryButton"; // นำ Component CategoryButton เข้ามาใช้งาน
//import FacebookIcon from "@/components/icons/facebook.png";
import InstragramIcon from "@/components/icons/Instagram.png";
import FacebookIcon from "@/components/icons/facebook.png";
import YtIcon from "@/components/icons/youtube.png";
import TwitterIcon from "@/components/icons/twitter.png";
import TrafficIcon from "@/components/icons/traffic.png";
import TiktokIcon from "@/components/icons/tiktok.png";
import PageMetadata from "@/components/PageMetadata";

const categoriess = [
  { name: "Youtube", image: YtIcon },
  { name: "Facebook", image: FacebookIcon },
  { name: "Instagram", image: InstragramIcon }, // Replace "google.png" with Googleicon
  { name: "Twitter", image: TwitterIcon }, // Replace "google.png" with Googleicon
  { name: "Website Traffic", image: TrafficIcon }, // Replace "google.png" with Googleicon
  { name: "TikTok", image: TiktokIcon }, // Replace "google.png" with Googleicon
  // { name: "All Service", image: "google.png" }, // Make sure to provide the correct image path
];

export default function User() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const { data: session, status } = useSession();
  const router = useRouter();
  const [serviceData, setServiceData] = useState([]);
  const arr = Object.keys(serviceData).map((key) => serviceData[key]);
  console.log("🚀 ~ file: index.js:36 ~ User ~ arr:", arr);

  const findSimilarCategory = (searchTerm) => {
    if (!searchTerm) return null;

    const searchTermLowerCase = searchTerm.toLowerCase();
    return categories.find(
      (category) =>
        category.name.toLowerCase().includes(searchTermLowerCase) ||
        searchTermLowerCase.includes(category.name.toLowerCase())
    );
  };

  useEffect(() => {
    if (selectedCategory) {
      setIsLoading(true);
      async function fetchData() {
        try {
          const encodedCategory = encodeURIComponent(selectedCategory);
          const response = await fetch(
            `/api/service?category=${encodedCategory}`
          );
          const data = await response.json();
          setServiceData(data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching service data:", error);
          setIsLoading(false);
        }
      }
      fetchData();
    } else {
      // ...
    }
  }, [selectedCategory]);

  useEffect(() => {
    setIsLoading(true);
    async function fetchCategories() {
      try {
        const res = await fetch("/api/category");
        const data = await res.json();
        setCategories(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error.message);
        setIsLoading(false);
      }
    }
    fetchCategories();
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      setSelectedCategory(categories[0].name);
    }
  }, [categories]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // If there is no active session, redirect to the login page
  if (!session) {
    router.push("/users/login");
    return null;
  }

  const handleCategoryChange = (categoryName, categoryImage) => {
    const similarCategory = findSimilarCategory(categoryName);
    if (similarCategory) {
      setSelectedCategory(similarCategory.name);
    } else {
      console.log("No similar category found.");
    }
  };

  return (
    <>
      <PageMetadata title="Order" />
      <div className="ml-[255px] mt-[65px] h-auto">
        <div className="bg-white my-[2px] ">
          <div className="flex mx-2 py-2 ">
            <h1 className="font-bold text-lg"> New order :</h1>
            <p className="text-lg pl-2"> คำสั่งซื้อใหม่</p>
          </div>
        </div>
        <div className="mx-[50px] my-6  shadow-md">
          <div className="bg-yellow-300 h-auto rounded-lg px-8 py-8">
            <h1>ประกาศสำคัญ</h1>
            <h1>ข้อกำหนดในการให้บริการใหม่ปี 2023</h1>
          </div>
        </div>

        <div className="mx-[50px] my-6 shadow-md ">
          <div className="bg-white h-auto rounded-lg px-8 py-8">
            <div className="flex relative">
              <div className="w-full flex flex-wrap gap-4 content-start">
                {categoriess.map((category) => (
                  <CategoryButton
                    key={category.name}
                    onClick={() => handleCategoryChange(category.name)}
                    name={category.name}
                    image={category.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-[50px] my-6 shadow-md ">
          <div className="bg-white h-auto rounded-lg px-8 py-8">
            <div>
              <div className="mb-3">
                <h2>หมวดหมู่</h2>
              </div>
              <div className="border-gray-300 border-[2px] bg-white rounded-md">
                <div className="flex items-center mx-3 my-3">
                  {/* <img
      src="google.png"
      width={30}
      height={30}
      className="mx-3 my-3 "
    /> */}
                  <select
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    value={selectedCategory || ""}
                  >
                    <option value="">All Categories</option>
                    {categories
                      .map((category) => category.name)
                      .sort()
                      .map((categoryName) => (
                        <option key={categoryName} value={categoryName}>
                          {categoryName}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              {/* Loading state */}
            </div>
            <div>
              <div className="my-3">
                <h2>บริการ</h2>
              </div>
              <div className="border-gray-300 border-[2px] bg-white rounded-md">
                <div className="flex items-center">
                  <h2 className="mx-3 my-3">
                    <select>
                      <option value="">All Categories</option>
                      {arr[0]?.map((item) => (
                        <option key={item._id} value={item.name}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </h2>
                </div>
              </div>
              <h2 className="text-sm text-gray-500 my-[2px]">10 คำสั่งซื้อ</h2>
            </div>
            <div>
              <div className="my-3">
                <h2>รายละเอียด</h2>
              </div>
              <div className="border-gray-300 border-[2px] bg-white rounded-md">
                <div className="flex items-center">
                  <p className="mx-3 my-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="my-3">
                <h2>ลิงก์</h2>
              </div>
              <div className="border-gray-300 border-[2px] bg-white rounded-md">
                <div className="flex items-center">
                  <input type="text" className="w-full py-2 text-base px-2" />
                </div>
              </div>
            </div>
            <div>
              <div className="my-3">
                <h2>ปริมาณ</h2>
              </div>
              <div className="border-gray-300 border-[2px] bg-white rounded-md">
                <div className="flex items-center">
                  <input type="text" className="w-full py-2 text-base px-2" />
                </div>
              </div>
              <div className="flex items-center">
                <h2 className="text-sm text-red-500 my-[2px]">ขั้นต่ำ 100 </h2>
                <p className="px-2 text-sm">สูงสุด 100 - ทวีคูณละ 100</p>
              </div>
            </div>
            <div>
              <div className="my-3">
                <h2>ค่าใช้จ่าย</h2>
              </div>
              <div className="border-gray-300 border-[2px] bg-white rounded-md">
                <div className="flex items-center">
                  <input type="text" className="w-full py-2 text-base" />
                </div>
              </div>
            </div>
            <div className="bg-sky-500 w-[120px] text-center my-5 py-3 px-3 rounded-lg text-white ml-auto">
              <button>ยืนยันคำสั่งซื้อ</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
