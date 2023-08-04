import React from "react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import PageMetadata from "@/components/PageMetadata";

export default function CreditPage() {
  const session = useSession();
  const [creditAmount, setCreditAmount] = useState("");

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  const handleCreditChange = (e) => {
    setCreditAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle your submit logic here, e.g., send the credit amount to the server
    console.log("Credit Amount:", creditAmount);
    // Clear the input field after submission
    setCreditAmount("");
  };

  return (
    <>
      <PageMetadata title="Add" />
      <div className="ml-[255px] mt-[65px] h-auto">
        <div className="bg-white my-[2px] ">
          <div className="flex mx-2 py-2">
            <h1 className="font-bold text-lg">Add credit:</h1>
            <p className="text-lg pl-2">เติมเครดิต</p>
          </div>
        </div>
        <div className="mx-[200px] my-8 shadow-md h-full">
          <div className="bg-white h-auto rounded-lg px-8 py-8">
            <div className="relative">
              {/* <form rm onSubmit={handleSubmit} className="my-3">
                <div className="mb-4">
                  <input
                    type="number"
                    className="border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring focus:border-blue-300 w-full"
                    placeholder="Enter credit amount"
                    value={creditAmount}
                    onChange={handleCreditChange}
                  />
                </div>
                <div className="flex items-center">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  >
                    Submit
                  </button>
                </div>
              </form> */}
              <div className="p-8 border-gray-200">
                <h1 className="font-medium text-3xl">Add Credit</h1>
                <p className="text-gray-600 mt-6">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dignissimos dolorem vel cupiditate laudantium dicta.
                </p>
                <form>
                  <div className="mt-8 space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-sm text-gray-700 block mb-1 font-medium"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-sm text-gray-700 block mb-1 font-medium"
                      >
                        Email Adress
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                        placeholder="yourmail@provider.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="job"
                        className="text-sm text-gray-700 block mb-1 font-medium"
                      >
                        Job title
                      </label>
                      <input
                        type="text"
                        name="job"
                        id="job"
                        className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                        placeholder="(ex. developer)"
                      />
                    </div>
                  </div>
                  <div className="space-x-4 mt-8">
                    <button
                      type="submit"
                      className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
                    >
                      Save
                    </button>
                    {/* Secondary */}
                    <button className="py-2 px-4 bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
