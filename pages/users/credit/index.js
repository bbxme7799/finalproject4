import React from "react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import PageMetadata from "@/components/PageMetadata";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Layout from "@/components/layout/layout";
import Web3 from "web3";
import CONTRACT_ABI from "../../../contract/busd-abi.json";

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

export default function CreditPage({ me }) {
  const [creditAmount, setCreditAmount] = useState("");

  const handleCreditChange = (e) => {
    setCreditAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const amountInput = e.target.elements.amount.value;

    // Check if creditAmount is empty
    if (!amountInput) {
      toast.error("โปรดกรอกข้อมูล input ให้ครบถ้วนก่อนที่ชำระ", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return; // Stop execution if creditAmount is empty
    }

    // Handle your submit logic here, e.g., send the credit amount to the server
    console.log("Credit Amount:", creditAmount);
    // Clear the input field after submission
    setCreditAmount("");
  };

  const CONTRACT_ADDRESS = "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee";

  const web3 = new Web3(
    Web3.givenProvider || "https://data-seed-prebsc-1-s1.binance.org:8545"
  );
  const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);

  function convertToWei(price) {
    return "0x" + Number(price * 1e18).toString(16);
  }

  const handletopup = async () => {
    // const web3 = new Web3(window.ethereum);
    try {
      // Request access to accounts
      // await window.ethereum.enable();
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const selectedAddress = accounts[0];
      console.log("selectedAddress:", selectedAddress);
      const response = await axios.post(
        "http://localhost:8000/api/topup", // ปรับ URL เป็น URL ของเว็บเซิร์ฟเวอร์ของคุณ
        {
          address: selectedAddress,
        },
        {
          withCredentials: true,
        }
      );
      console.log(
        "🚀 ~ file: index.js:141 ~ handletopup ~ response:",
        response
      );
      let result = await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: selectedAddress,
            to: CONTRACT_ADDRESS,
            chainId: 97,
            data: contract.methods
              .transfer(
                "0xF66D753De15379B0B445df6956356d18A1B47e1F",
                convertToWei(1)
              )
              .encodeABI(),
          },
        ],
      });
    } catch (error) {
      console.error("Error with Metamask:", error);
    }
  };

  return (
    <>
      <PageMetadata title="Add" />
      <Layout me={me}></Layout>
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
                  {/* Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dignissimos dolorem vel cupiditate laudantium dicta. */}
                </p>
                <div className="mt-8 space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                      Send BUSD Payment
                    </label>
                    <select
                      name="name"
                      id="name"
                      className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                    >
                      <option>
                        0x0c18aEe54A5e4bF95A1338BB6d1E8182491993D9
                      </option>
                      {/* Add more options as needed */}
                    </select>
                  </div>

                  {/* <div>
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
                    </div> */}
                  <div>
                    <label
                      htmlFor="job"
                      className="text-sm text-gray-700 block mb-1 font-medium"
                    >
                      Amount
                    </label>
                    <input
                      type="text"
                      name="amount"
                      id="amount"
                      className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                      placeholder="15.23"
                    />
                  </div>
                </div>
                <div className="space-x-4 mt-8">
                  <button
                    onClick={handletopup}
                    className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
                  >
                    PAY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
