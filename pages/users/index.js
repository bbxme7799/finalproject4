import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import CategoryButton from "@/components/CategoryButton";
import InstragramIcon from "@/components/icons/Instagram.png";
import FacebookIcon from "@/components/icons/facebook.png";
import YtIcon from "@/components/icons/youtube.png";
import TwitterIcon from "@/components/icons/twitter.png";
import TrafficIcon from "@/components/icons/traffic.png";
import TiktokIcon from "@/components/icons/tiktok.png";
import PageMetadata from "@/components/PageMetadata";
import axios from "axios";
import Layout from "@/components/layout/layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const categoriess = [
  { name: "Youtube", image: YtIcon },
  { name: "Facebook", image: FacebookIcon },
  { name: "Instagram", image: InstragramIcon }, // Replace "google.png" with Googleicon
  { name: "Twitter", image: TwitterIcon }, // Replace "google.png" with Googleicon
  { name: "Website Traffic", image: TrafficIcon }, // Replace "google.png" with Googleicon
  { name: "TikTok", image: TiktokIcon }, // Replace "google.png" with Googleicon
  // { name: "All Service", image: "google.png" }, // Make sure to provide the correct image path
];

export default function User({ me }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [link, setLink] = useState(""); // เพิ่ม state variable สำหรับเก็บค่าลิงก์
  const [quantity, setQuantity] = useState(0); // เพิ่ม state variable สำหรับเก็บปริมาณ
  const [isInputValid, setIsInputValid] = useState(false); // เพิ่ม state variable สำหรับเช็คข้อมูล input

  const findSimilarCategory = (searchTerm) => {
    if (!searchTerm) return null;

    const searchTermLowerCase = searchTerm.toLowerCase();
    return categories.find(
      (category) =>
        category.name.toLowerCase().includes(searchTermLowerCase) ||
        searchTermLowerCase.includes(category.name.toLowerCase())
    );
  };

  const handleCategoryChange = (categoryName, categoryImage) => {
    const similarCategory = findSimilarCategory(categoryName);
    if (similarCategory) {
      setSelectedCategory(similarCategory.name);
    } else {
      console.log("No similar category found.");
    }
  };

  console.log(
    "🚀 ~ file: index.js:31 ~ User ~ selectedProduct:",
    selectedProduct
  );

  const handleProductChange = (selectedProductJSON) => {
    const productWithoutSpace = selectedProductJSON
      .replace(/&nbsp;/g, " ")
      .replace(/&gt;/g, ">");
    const parsedProduct = JSON.parse(productWithoutSpace);
    setSelectedProduct(parsedProduct);
  };

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/categories"
        );
        const { data, total_page } = response.data;
        setPerPage(total_page); // Set perPage to total_page for now

        // Fetch data from all pages
        const allCategories = [];
        for (let page = 1; page <= total_page; page++) {
          const pageResponse = await axios.get(
            `http://localhost:8000/api/categories?page=${page}`
          );
          const pageData = pageResponse.data.data;
          allCategories.push(...pageData);
        }

        setCategories(allCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  useEffect(() => {
    // Fetch product data based on selected category
    async function fetchProductData() {
      try {
        if (selectedCategory !== "") {
          const response = await axios.get(
            `http://localhost:8000/api/products`,
            {
              params: {
                keyword: selectedCategory,
              },
            }
          );
          const { data } = response.data;
          setProducts(data);

          // Call handleProductChange immediately when new products are loaded
          if (data.length > 0) {
            handleProductChange(JSON.stringify(data[0]));
          }
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }

    fetchProductData();
  }, [selectedCategory]);

  const checkInputValidity = () => {
    const isLinkValid = link !== "";
    const isQuantityValid = quantity > 0;

    setIsInputValid(isLinkValid && isQuantityValid);
  };

  // เรียกใช้ฟังก์ชัน checkInputValidity เมื่อ link หรือ quantity เปลี่ยนแปลง
  useEffect(() => {
    checkInputValidity();
  }, [link, quantity]);

  const handleOrderConfirmation = () => {
    if (isInputValid) {
      // ทำสิ่งที่คุณต้องการเมื่อข้อมูล input ถูกต้องและผู้ใช้คลิกยืนยันคำสั่งซื้อ
      // ตัวอย่างเช่นเรียก API สำหรับการส่งคำสั่งซื้อ
      console.log("Order confirmed!");
    } else {
      // แสดงข้อความให้ผู้ใช้รู้ว่าต้องกรอกข้อมูลให้ถูกต้องก่อน
      toast.error("โปรดกรอกข้อมูล input ให้ถูกต้องก่อนที่จะยืนยันคำสั่งซื้อ", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <>
      <PageMetadata title="Order" />
      <Layout me={me}> </Layout>
      <div className="ml-[255px] mt-[65px] h-auto">
        <div className="bg-white my-[2px] ">
          <div className="flex mx-2 py-2 ">
            <h1 className="font-bold text-lg"> New order :</h1>
            <p className="text-lg pl-2"> คำสั่งซื้อใหม่</p>
          </div>
        </div>
        {/* <div className="mx-[50px] my-6  shadow-md">
          <div className="bg-yellow-300 h-auto rounded-lg px-8 py-8">
            <h1>ประกาศสำคัญ</h1>
            <h1>ข้อกำหนดในการให้บริการใหม่ปี 2023</h1>
          </div>
        </div> */}

        <div className="mx-[50px] my-6 shadow-md ">
          <div className="bg-white h-auto rounded-lg px-8 py-8">
            <div className="flex relative">
              <div className="w-full flex flex-wrap gap-4 content-start">
                {categoriess.map(({ name, image }) => (
                  <CategoryButton
                    key={name}
                    onClick={() => handleCategoryChange(name)}
                    name={name}
                    image={image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-[50px] my-6 shadow-md ">
          <div className="bg-white h-auto rounded-lg px-4 py-4">
            <div>
              <div className="mb-3">
                <h2>หมวดหมู่</h2>
              </div>
              <div className="border-gray-300 border-[2px] bg-white rounded-md">
                <div className="flex items-center mx-2 my-2">
                  {/* <img
      src="google.png"
      width={30}
      height={30}
      className="mx-3 my-3 "
    /> */}
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
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
                  <h2 className="mx-2 my-2">
                    <select
                      onChange={(e) => handleProductChange(e.target.value)}
                    >
                      {products.map((product) => (
                        <option
                          key={product.service}
                          value={JSON.stringify(product)}
                        >
                          {product.name}
                        </option>
                      ))}
                    </select>

                    {/* {products.map((product) => (
                      <li key={product.id}>{product.name}</li>
                    ))} */}
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
                <pre className="mx-5 my-5 whitespace-pre-wrap break-words overflow-wrap-break text-xs overflow-y-auto max-h-[200px]">
                  {selectedProduct ? selectedProduct.description : ""}
                </pre>
              </div>
            </div>
            <div>
              <div className="my-3">
                <h2>ลิงก์</h2>
              </div>
              <div className="border-gray-300 border-[2px] bg-white rounded-md">
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full py-2 text-base px-2"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="my-3">
                <h2>ปริมาณ</h2>
              </div>
              <div className="border-gray-300 border-[2px] bg-white rounded-md">
                <div className="flex items-center">
                  <input
                    type="text"
                    className="w-full py-2 text-base px-2"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center">
                <h2 className="text-sm text-red-500 my-[2px]">
                  ขั้นต่ำ {selectedProduct ? selectedProduct.min : ""}{" "}
                </h2>
                <p className="px-2 text-sm">
                  สูงสุด {selectedProduct ? selectedProduct.max : ""} - ทวีคูณละ
                  {selectedProduct ? selectedProduct.step : ""}
                </p>
              </div>
            </div>
            {selectedProduct && quantity > 0 && (
              <div>
                <div className="my-3">
                  <h2>ค่าใช้จ่ายทั้งหมด</h2>
                </div>
                <div className="border-gray-300 border-[2px] bg-white rounded-md">
                  <div className="flex items-center">
                    <input
                      type="text"
                      className="w-full py-2 text-base px-2 mr-2" // เพิ่ม mr-2 ใน className เพื่อให้เว้นระยะห่าง
                      value={(quantity * selectedProduct.rate).toFixed(2)} // คำนวณและแสดงผลค่าใช้จ่ายทั้งหมด
                      readOnly
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="flex">
              <div className="bg-blue-500 w-[120px] text-center my-5 py-3 px-3 rounded-lg text-white ml-auto mr-2">
                <button onClick={handleOrderConfirmation}>
                  เพิ่มเข้าตะกร้า
                </button>
              </div>
              <div className="bg-green-500 w-[120px] text-center my-5 py-3 px-3 rounded-lg text-white">
                <button onClick={handleOrderConfirmation}>สั่งซื้อเลย</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

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
        destination: "/users/signin",
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
