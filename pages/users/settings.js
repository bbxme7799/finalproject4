import React from "react";
import { useState } from "react";
import PageMetadata from "@/components/PageMetadata";
import PrivacySettingsHeader from "../../components/UserSetting/PrivacySettingsHeader";
import ProfileSection from "../../components/UserSetting/ProfileSection";
import PasswordChangeModal from "../../components/UserSetting/PasswordChangeModal";
// import fetchUserData from "../../utils/fetchUserData";

import axios from "axios";
import Layout from "@/components/layout/layout";

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

  // Check if the user is banned
  if (me.is_banned) {
    return {
      redirect: {
        destination: "/suspended",
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

export default function SettingPage({ me }) {
  console.log("🚀 ~ file: settings.js:51 ~ SettingPage ~ me:", me);
  const [formData, setFormData] = useState({
    newUsername: me.username, // เริ่มต้นด้วยค่า username จาก me
    email: me.email, // เริ่มต้นด้วยค่า email จาก me
    address: me.address,
  });

  console.log("🚀 ~ file: settings.js:40 ~ formData:", formData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  const openPasswordModal = () => {
    setIsPasswordModalOpen(true);
  };

  const closePasswordModal = () => {
    setIsPasswordModalOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        "http://localhost:8000/api/users/update-username", // เปลี่ยน URL ตามที่คุณต้องการ
        { newUsername: formData.newUsername }, // ส่งข้อมูลจาก state formData
        {
          withCredentials: true,
        }
      );

      console.log("Response data:", response.data);
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleEmailVerify = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/verify-email",
        {
          email: formData.email,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Email verification response:", response.data);
      toast.success("Email verified successfully!");
    } catch (error) {
      console.error("Error verifying email:", error);
      toast.error("Email verification failed. Please try again.");
    }
  };

  return (
    <>
      <Layout me={me}></Layout>
      <PageMetadata title="Privacy Setting" />
      <div className="ml-[255px] mt-[65px] h-auto">
        <PrivacySettingsHeader />
        <div className="mx-[200px] my-8 shadow-md h-full">
          <div className="bg-white rounded-lg px-8 py-8">
            <div className="relative">
              <main>
                <div className="py-6">
                  <ProfileSection />
                  <form className="max-w-3xl mt-8" onSubmit={handleSubmit}>
                    {/* <UsernameInput
                      formData={formData}
                      handleInputChange={handleInputChange}
                    /> */}
                    <div className="space-y-8">
                      <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label
                          for=""
                          className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                        >
                          {" "}
                          Profile Photo{" "}
                        </label>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                          <div className="flex items-center space-x-6">
                            <img
                              className="flex-shrink-0 object-cover w-12 h-12 rounded-lg"
                              src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/4/avatar-male.png"
                              alt=""
                            />
                            <button
                              type="button"
                              className="text-sm font-semibold text-gray-400 transition-all duration-200 bg-white rounded-md hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                            >
                              Remove
                            </button>

                            <button
                              type="button"
                              className="text-sm font-semibold text-indigo-600 transition-all duration-200 bg-white rounded-md hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <div className="sm:mt-px sm:pt-2">
                          <label
                            htmlFor=""
                            className="block text-sm font-bold text-gray-900"
                          >
                            Username
                          </label>
                        </div>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                          <div className="relative flex">
                            <input
                              type="text"
                              name="newUsername"
                              placeholder=""
                              value={formData.newUsername}
                              onChange={handleInputChange}
                              className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                            />
                            <button
                              type="button"
                              className="text-sm font-semibold text-indigo-600 transition-all duration-200 bg-white rounded-md hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 absolute top-1/2 right-4 transform -translate-y-1/2"
                              onClick={handleSubmit}
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label
                          htmlFor=""
                          className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                        >
                          {" "}
                          Email Address{" "}
                        </label>
                        <div className="mt-2 sm:mt-0 sm:col-span-2 flex items-center">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder=""
                            value={formData.email} // ใช้ค่าจาก formData
                            onChange={handleInputChange}
                            className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600 mr-4"
                          />
                          {formData.email && (
                            <button
                              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                              onClick={handleEmailVerify}
                            >
                              Verify
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label
                          htmlFor=""
                          className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                        >
                          {" "}
                          Wallet Address{" "}
                        </label>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                          <input
                            type="text"
                            name="text"
                            id="text"
                            placeholder=""
                            disabled
                            value={formData.address} // ใช้ค่าจาก formData
                            onChange={handleInputChange}
                            className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 sm:mt-12">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                        onClick={openPasswordModal} // เปิด Modal เมื่อคลิกที่ปุ่ม
                      >
                        CHANGE PASSWORD
                      </button>
                    </div>
                  </form>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
      {me.google_id === null && me.address === null && (
        <PasswordChangeModal
          isOpen={isPasswordModalOpen}
          onClose={closePasswordModal}
        />
      )}
    </>
  );
}
