import React from "react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import PageMetadata from "@/components/PageMetadata";

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

export default function ({ me }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    creditAmount: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/updateUserInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Data updated successfully:", data);
      } else {
        console.error("Error updating data:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <>
      <Layout me={me}></Layout>
      <PageMetadata title="Privacy Setting" />
      <div class="ml-[255px] mt-[65px] h-auto">
        <div class="bg-white my-[2px]">
          <div class="flex mx-2 py-2">
            <h1 class="font-bold text-lg">Privacy settings:</h1>
            <p class="text-lg pl-2">ตั้งค่าข้อมูลส่วนตัว</p>
          </div>
        </div>
        <div className="mx-[200px] my-8 shadow-md h-full">
          <div className="bg-white rounded-lg px-8 py-8">
            <div className="relative">
              <main>
                <div class="py-6">
                  <div class="px-4 mx-auto sm:px-6 md:px-8">
                    <h1 class="text-xl font-bold text-gray-900 mb-4">
                      Settings
                    </h1>
                  </div>

                  <div class="px-4 mx-auto mt-8 sm:px-6 md:px-8">
                    <div class="w-full pb-1 overflow-x-auto">
                      <div class="border-b border-gray-200"></div>
                    </div>

                    <div class="mt-6">
                      <p class="text-base font-bold text-gray-900">Profile</p>
                      <p class="mt-1 text-sm font-medium text-gray-500">
                        Lorem ipsum dolor sit amet, consectetur adipis.
                      </p>
                    </div>

                    <form class="max-w-3xl mt-8">
                      <div class="space-y-8">
                        <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                          <label
                            for=""
                            class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                          >
                            {" "}
                            Profile Photo{" "}
                          </label>
                          <div class="mt-2 sm:mt-0 sm:col-span-2">
                            <div class="flex items-center space-x-6">
                              <img
                                class="flex-shrink-0 object-cover w-12 h-12 rounded-lg"
                                src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/settings/4/avatar-male.png"
                                alt=""
                              />
                              <button
                                type="button"
                                class="text-sm font-semibold text-gray-400 transition-all duration-200 bg-white rounded-md hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
                              >
                                Remove
                              </button>

                              <button
                                type="button"
                                class="text-sm font-semibold text-indigo-600 transition-all duration-200 bg-white rounded-md hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        </div>

                        <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                          <label
                            for=""
                            class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                          >
                            {" "}
                            First & Last Name{" "}
                          </label>
                          <div class="mt-2 sm:mt-0 sm:col-span-2">
                            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                              <div>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  placeholder=""
                                  value="Martin"
                                  class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                />
                              </div>

                              <div>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  placeholder=""
                                  value="Janiter"
                                  class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                          <label
                            for=""
                            class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                          >
                            {" "}
                            Email Address{" "}
                          </label>
                          <div class="mt-2 sm:mt-0 sm:col-span-2">
                            <input
                              type="email"
                              name=""
                              id=""
                              placeholder=""
                              value="j.martin@gmail.com"
                              class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                            />
                          </div>
                        </div>

                        <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                          <label
                            for=""
                            class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                          >
                            {" "}
                            Write Your Bio{" "}
                          </label>
                          <div class="mt-2 sm:mt-0 sm:col-span-2">
                            <textarea
                              name=""
                              id=""
                              placeholder="Write about you"
                              value=""
                              rows="4"
                              class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg resize-y focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                              spellcheck="false"
                            ></textarea>
                          </div>
                        </div>

                        <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                          <div class="sm:mt-px sm:pt-2">
                            <label
                              for=""
                              class="block text-sm font-bold text-gray-900"
                            >
                              {" "}
                              Username{" "}
                            </label>
                            <p class="mt-1 text-sm font-medium text-gray-500">
                              You can change it later
                            </p>
                          </div>
                          <div class="mt-2 sm:mt-0 sm:col-span-2">
                            <div class="relative flex">
                              <div class="inline-flex items-center px-3 text-gray-900 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 sm:text-sm">
                                rareblocks.co/user/
                              </div>

                              <input
                                type="text"
                                name=""
                                id=""
                                placeholder=""
                                value="martin.janiter"
                                class="border flex-1 block w-full min-w-0 px-4 py-3 placeholder-gray-500 border-gray-300 rounded-none rounded-r-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                              />
                            </div>
                          </div>
                        </div>

                        {/* <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                          <label
                            for=""
                            class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                          >
                            {" "}
                            Website{" "}
                          </label>
                          <div class="mt-2 sm:mt-0 sm:col-span-2">
                            <div class="relative flex">
                              <div class="inline-flex items-center px-3 text-gray-900 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50 sm:text-sm">
                                https://
                              </div>

                              <input
                                type="url"
                                name=""
                                id=""
                                placeholder=""
                                value="postcrafts.co"
                                class="border flex-1 block w-full min-w-0 px-4 py-3 placeholder-gray-500 border-gray-300 rounded-none rounded-r-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                              />
                            </div>
                          </div>
                        </div> */}

                        {/* <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                          <label
                            for=""
                            class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                          >
                            {" "}
                            Job Title{" "}
                          </label>
                          <div class="mt-2 sm:mt-0 sm:col-span-2">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder=""
                              value="Software Developer"
                              class="border block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-lg focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm caret-indigo-600"
                            />

                            <div class="relative flex items-center mt-2">
                              <div class="flex items-center h-5">
                                <input
                                  type="checkbox"
                                  name="profile"
                                  id="profile"
                                  class="border w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
                                  checked
                                />
                              </div>

                              <div class="ml-3">
                                <label
                                  for="profile"
                                  class="text-sm font-medium text-gray-900"
                                >
                                  {" "}
                                  Show this on my profile{" "}
                                </label>
                              </div>
                            </div>
                          </div>
                        </div> */}

                        {/* <div class="sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start">
                          <label
                            for=""
                            class="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                          >
                            {" "}
                            Country{" "}
                          </label>
                          <div class="mt-2 sm:mt-0 sm:col-span-2">
                            <select class="block w-full py-3 pl-4 pr-10 border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm">
                              <option>United States</option>
                            </select>
                          </div>
                        </div> */}
                      </div>

                      <div class="mt-6 sm:mt-12">
                        <button
                          type="submit"
                          class="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
