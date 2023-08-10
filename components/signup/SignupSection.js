import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import GoogleIcon from "@/components/icons/google-iconlogin.png";
import MetamaskIcon from "@/components/icons/Metamaskiconlogin.png";
import Image from "next/image";

const SignInSection = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/signup",
        {
          username: username,
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(" response:", response);

      // เช็คว่ามี statusText เป็น 'Created' (201) หรือไม่
      if (response.statusText === "Created") {
        // แสดง Sweetalert เมื่อสมัครสำเร็จ
        Swal.fire({
          icon: "success",
          title: "สมัครสำเร็จ!",
          text: "คุณได้ทำการสมัครสมาชิกเรียบร้อยแล้ว",
        });
      }
    } catch (error) {
      console.error(error);

      // เช็คว่าเป็น bad request (status 400) หรือไม่
      if (error.response && error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "ผิดพลาด!",
          text: "การสมัครสมาชิกไม่สำเร็จ กรุณาตรวจสอบข้อมูลที่กรอก",
        });
      }
    }
  };

  return (
    <section
      className="relative py-12 bg-gray-900 sm:py-16 lg:py-20"
      style={{ backgroundAttachment: "fixed", height: "100vh" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          className="object-cover object-bottom w-full h-full transform rotate-180 opacity-10"
          src="https://cdn.rareblocks.xyz/collection/clarity/images/features/6/background-pattern.png"
          alt=""
        />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative max-w-md mx-auto mt-10 lg:max-w-xl">
          <div className="absolute inset-x-1.5 top-8 -inset-y-4">
            <div
              className="w-full h-full mx-auto rotate-180 rounded-3xl opacity-90 blur-xl filter"
              style={{
                background:
                  "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
              }}
            ></div>
          </div>

          <div className="relative overflow-hidden bg-white rounded-2xl lg:rounded-3xl">
            <div className="px-6 py-7 sm:px-12 sm:py-10">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 font-pj sm:text-4xl xl:text-5xl">
                  สมัครสมาชิก
                </h1>
                {/* <p className="mt-6 text-lg font-normal text-gray-600 font-pj">
                  เข้าสู่ระบบเพื่อเลือกซื้อบริการในระบบ
                </p> */}

                <div
                  title=""
                  className="
                  flex items-center justify-center w-full px-6 py-3 mt-8
                  text-sm font-bold text-gray-900 transition-all duration-200
                  bg-gray-100 border border-transparent rounded-xl hover:bg-gray-200
                  focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200
                  font-pj
  "
                  role="button"
                >
                  <Link href="http://localhost:8000/api/auth/google">
                    <button className="flex items-center">
                      <Image
                        className="w-5 h-5 mr-4"
                        src={GoogleIcon}
                        alt="GoogleIcon"
                      />
                      <span className="text-base">สมัครสมาชิกด้วย Google</span>
                    </button>
                  </Link>
                </div>

                <Link
                  href="/signup"
                  title=""
                  className="
                  flex items-center justify-center w-full px-6 py-3 mt-8
                  text-sm font-bold text-gray-900 transition-all duration-200
                  bg-gray-100 border border-transparent rounded-xl hover:bg-gray-200
                  focus:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200
                  font-pj
  "
                  role="button"
                >
                  <div className="flex items-center">
                    <Image
                      className="w-5 h-5 mr-4"
                      src={MetamaskIcon}
                      alt="MetamaskIcon"
                    />
                    <span className="text-base">สมัครสมาชิกด้วย Metamask</span>
                  </div>
                </Link>

                <p className="mt-8 text-sm font-normal text-center text-gray-600">
                  หรือ สมัครสมาชิกด้วยอีเมล
                </p>
              </div>
              {/* <form action="#" method="POST" className="mt-8"> */}
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900 font-pj"
                  >
                    Username
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      value={username}
                      placeholder="Username"
                      className="block w-full px-6 py-3 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900 font-pj"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      value={email}
                      placeholder="Email address"
                      className="block w-full px-6 py-3 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900 font-pj"
                    >
                      Password
                    </label>

                    <a
                      href="#"
                      title=""
                      className="text-base font-medium text-gray-500 rounded font-pj hover:text-gray-900 hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                    >
                      ลืมรหัสผ่าน?
                    </a>
                  </div>
                  <div className="mt-2.5">
                    <input
                      type="password"
                      value={password}
                      placeholder="Password (min. 8 characters)"
                      className="block w-full px-6 py-3 text-gray-900 placeholder-gray-600 bg-white border border-gray-400 rounded-xl focus:border-gray-900 focus:ring-gray-900 caret-gray-900"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  onClick={handleSignup}
                  className="flex items-center justify-center w-full px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 font-pj hover:bg-gray-600"
                >
                  สมัครสมาชิก
                </button>
              </div>
              {/* </form> */}

              <svg
                className="w-auto h-4 mx-auto mt-8 text-gray-300"
                viewBox="0 0 172 16"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Replace the SVG lines with the original SVG lines */}
              </svg>

              {/* <p className="mt-5 text-base font-normal text-center text-gray-900 font-pj">
                คุณยังไม่มีบัญชี?{" "}
                <a
                  href="#"
                  title=""
                  className="font-bold rounded hover:underline focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  สร้างบัญชีฟรี
                </a>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignInSection;
