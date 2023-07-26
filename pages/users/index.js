import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// Constants
const categories = [
  { name: "Youtube", image: "google.png" },
  { name: "Facebook", image: "google.png" },
  { name: "Instagram", image: "google.png" },
  { name: "Tiktok", image: "google.png" },
  { name: "Twitter", image: "google.png" },
  { name: "Website Traffic", image: "google.png" },
  // { name: "All Service", image: "google.png" },
];

export default function User() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoriesFromServices, setCategoriesFromServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [services, setServices] = useState();
  console.log("🚀 ~ file: index.js:20 ~ User ~ services:", services);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (selectedCategory) {
      setIsLoading(true);
      async function fetchServices() {
        try {
          const res = await fetch(
            `/api/service?category=${encodeURIComponent(selectedCategory)}`
          );
          const data = await res.json();
          setServices(data.services);
          // Extract the categories from the services data
          const categoriesFromServices = Array.from(
            new Set(data.services.map((service) => service.category))
          );

          // // Set the categories in the state
          // setCategoriesFromServices(categoriesFromServices);

          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching services:", error.message);
          setIsLoading(false);
        }
      }
      fetchServices();
    }
  }, [selectedCategory]);

  // Check if the session is loading
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // If there is no active session, redirect to the login page
  if (!session) {
    router.push("/users/login");
    return null;
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
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
              {categories.map((category) => (
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
              <div className="flex items-center">
                <img
                  src="google.png"
                  width={30}
                  height={30}
                  className="mx-3 my-3 "
                />
                {/* <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="">Select Category</option>
                  {categoriesFromServices?.map(
                    (
                      category // Change the variable name here
                    ) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    )
                  )}
                </select> */}
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
                {/* {selectedCategory && !isLoading && (
                  <div>
                    <h2>Services in {selectedCategory}:</h2>
                    <ul>
                      {services?.map((service) => (
                        <li key={service.id}>{service.name}</li>
                      ))}
                    </ul>
                  </div>
                )} */}
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
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
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
  );
}

const CategoryButton = ({ name, image, onClick }) => (
  <div className="bg-gray-400 flex-grow-0 overflow-hidden lg:flex-[calc((96.5%-12px)/5)] md:flex-[calc((96.5%-12px)/4)] sm:flex-[calc((96.5%-12px)/2)] rounded-md">
    <button onClick={onClick}>
      <div className="flex items-center">
        <img src={image} width={50} height={50} className="mx-3 my-3 " />
        <h2 className="mx-4">{name}</h2>
      </div>
    </button>
  </div>
);
