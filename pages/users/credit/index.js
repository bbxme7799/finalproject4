import React from "react";
import { useSession } from "next-auth/react";
import { useState } from "react";

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
            <form onSubmit={handleSubmit} className="my-3">
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
