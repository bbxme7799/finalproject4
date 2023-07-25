import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
//import { getSession, signOut } from "next-auth/react";

export default function User() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [services, setServices] = useState([]);
  console.log("🚀 ~ file: index.js:10 ~ User ~ services:", services);
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
    router.push("/users/login"); // Replace "/login" with the path to your login page
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
              <div className="bg-gray-400 flex-grow-0 overflow-hidden lg:flex-[calc((96.5%-12px)/5)] md:flex-[calc((96.5%-12px)/4)] sm:flex-[calc((96.5%-12px)/2)] rounded-md">
                <div className="flex items-center">
                  <button></button>
                  <img
                    src="google.png"
                    width={50}
                    height={50}
                    className="mx-3 my-3 "
                  />
                  <h2 className="mx-4"> Youtube </h2>
                </div>
              </div>
              <div className="bg-gray-400 flex-grow-0 overflow-hidden lg:flex-[calc((96.5%-12px)/5)] md:flex-[calc((96.5%-12px)/4)] sm:flex-[calc((96.5%-12px)/2)] rounded-md">
                <button
                  onClick={() =>
                    handleCategoryChange(
                      "Website Traffic - เพิ่มทราฟฟิคเข้าเว็บ Session < ~60 วินาที #🅸🅿🆅🆂"
                    )
                  }
                >
                  <div className="flex items-center">
                    <img
                      src="google.png"
                      width={50}
                      height={50}
                      className="mx-3 my-3 "
                    />
                    <h2 className="mx-4"> Facebook </h2>
                  </div>
                </button>
              </div>
              <div className="bg-gray-400 flex-grow-0 overflow-hidden lg:flex-[calc((96.5%-12px)/5)] md:flex-[calc((96.5%-12px)/4)] sm:flex-[calc((96.5%-12px)/2)] rounded-md">
                <div className="flex items-center">
                  <img
                    src="google.png"
                    width={50}
                    height={50}
                    className="mx-3 my-3 "
                  />
                  <h2 className="mx-4"> Instagram </h2>
                </div>
              </div>
              <div className="bg-gray-400 flex-grow-0 overflow-hidden lg:flex-[calc((96.5%-12px)/5)] md:flex-[calc((96.5%-12px)/4)] sm:flex-[calc((96.5%-12px)/2)] rounded-md">
                <div className="flex items-center">
                  <img
                    src="google.png"
                    width={50}
                    height={50}
                    className="mx-3 my-3 "
                  />
                  <h2 className="mx-4"> Tiktok </h2>
                </div>
              </div>
              <div className="bg-gray-400 flex-grow-0 overflow-hidden lg:flex-[calc((96.5%-12px)/5)] md:flex-[calc((96.5%-12px)/4)] sm:flex-[calc((96.5%-12px)/2)] rounded-md">
                <div className="flex items-center">
                  <img
                    src="google.png"
                    width={50}
                    height={50}
                    className="mx-3 my-3 "
                  />
                  <h2 className="mx-4"> Twitter </h2>
                </div>
              </div>
              <div className="bg-gray-400 flex-grow-0 overflow-hidden lg:flex-[calc((96.5%-12px)/5)] md:flex-[calc((96.5%-12px)/4)] sm:flex-[calc((96.5%-12px)/2)] rounded-md">
                <div className="flex items-center">
                  <img
                    src="google.png"
                    width={50}
                    height={50}
                    className="mx-3 my-3 "
                  />
                  <h2 className="mx-4"> Traffic / SEO </h2>
                </div>
              </div>
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
                {/* {services.map((service) => (
                  <datalist id="categories">
                    <option
                      key={service._id}
                      value={service.name + " - " + service.description}
                    />
                  </datalist>
                ))} */}
              </div>
            </div>
          </div>
          <div>
            <div className="my-3">
              <h2>บริการ</h2>
            </div>
            <div className="border-gray-300 border-[2px] bg-white rounded-md">
              <div className="flex items-center">
                <h2 className="mx-3 my-3">Telegram Member</h2>
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

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/users/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { user: session.user },
//   };
// }
