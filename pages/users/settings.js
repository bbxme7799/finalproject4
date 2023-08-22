import React from "react";
import { useState } from "react";
import PageMetadata from "@/components/PageMetadata";
import PrivacySettingsHeader from "../../components/UserSetting/PrivacySettingsHeader";
import ProfileSection from "../../components/UserSetting/ProfileSection";
import UsernameInput from "../../components/UserSetting/UsernameInput";
import UpdateButton from "../../components/UserSetting/UpdateButton";
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
  return {
    props: {
      me,
    },
  };
};

export default function SettingPage({ me }) {
  const [formData, setFormData] = useState({
    newUsername: me.username, // เริ่มต้นด้วยค่า username จาก me
    email: me.email, // เริ่มต้นด้วยค่า email จาก me
  });

  console.log("🚀 ~ file: settings.js:40 ~ formData:", formData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
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
                      {/* <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
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
                      </div> */}
                      {/* <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label
                          for=""
                          className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                        >
                          {" "}
                          First & Last Name{" "}
                        </label>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                            <div>
                              <input
                                type="text"
                                name=""
                                id=""
                                placeholder=""
                                value="Janiter"
                                className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                              />
                            </div>

                            <div>
                              <input
                                type="text"
                                name=""
                                id=""
                                placeholder=""
                                value="Janiter"
                                className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                              />
                            </div>
                          </div>
                        </div>
                      </div> */}
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
                              value={formData.newUsername} // ใช้ค่าจาก formData
                              onChange={handleInputChange}
                              className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label
                          for=""
                          className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                        >
                          {" "}
                          Email Address{" "}
                        </label>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                          <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder=""
                            disabled
                            value={formData.email} // ใช้ค่าจาก formData
                            onChange={handleInputChange}
                            className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                          />
                        </div>
                      </div>
                      {/* <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label
                          for=""
                          className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                        >
                          {" "}
                          Write Your Bio{" "}
                        </label>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                          <textarea
                            name=""
                            id=""
                            placeholder="Write about you"
                            value=""
                            rows="4"
                            className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                            spellcheck="false"
                          ></textarea>
                        </div>
                      </div> */}
                      {/* <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <div className="sm:mt-px sm:pt-2">
                          <label
                            for=""
                            className="block text-sm font-bold text-gray-900"
                          >
                            {" "}
                            Username{" "}
                          </label>
                          <p className="mt-1 text-sm font-medium text-gray-500">
                            You can change it later
                          </p>
                        </div>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                          <div className="relative flex">
                            <input
                              type="text"
                              name="newUsername" // เปลี่ยน name เป็น newUsername
                              placeholder=""
                              value={formData.newUsername} // ใช้ค่าจาก state formData
                              onChange={handleInputChange} // เรียกใช้ฟังก์ชัน handleInputChange
                              className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                            />
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label
                          for=""
                          className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                        >
                          {" "}
                          Website{" "}
                        </label>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                          <div className="relative flex">
                            <div className="inline-flex items-center px-3 text-gray-900 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 sm:text-sm">
                              https://
                            </div>

                            <input
                              type="url"
                              name=""
                              id=""
                              placeholder=""
                              value="postcrafts.co"
                              className="border flex-1 block w-full min-w-0 px-4 py-3 placeholder-gray-500 border-gray-300 rounded-none rounded-r-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                            />
                          </div>
                        </div>
                      </div> */}
                      {/* <div className="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                        <label
                          for=""
                          className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                        >
                          {" "}
                          Job Title{" "}
                        </label>
                        <div className="mt-2 sm:mt-0 sm:col-span-2">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder=""
                            value="Software Developer"
                            className="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                          />

                          <div className="relative flex items-center mt-2">
                            <div className="flex items-center h-5">
                              <input
                                type="checkbox"
                                name="profile"
                                id="profile"
                                className="border w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                                checked
                              />
                            </div>

                            <div className="ml-3">
                              <label
                                for="profile"
                                className="text-sm font-medium text-gray-900"
                              >
                                {" "}
                                Show this on my profile{" "}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>

                    <UpdateButton />
                  </form>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
