// SalesReport.js
import React from "react";
import SalesChartComponent from "./SalesChart";

const SalesReport = () => (
  <div className="overflow-hidden bg-white border border-gray-200 rounded-xl lg:col-span-4">
    <div className="px-4 pt-5 sm:px-6">
      <div className="flex flex-wrap items-center justify-between">
        <p className="text-base font-bold text-gray-900 lg:order-1">
          Sales Report
        </p>
        <button
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm lg:order-2 2xl:order-3 md:order-last hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        >
          <svg
            className="w-4 h-4 mr-1 -ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Export to CSV
        </button>

        <nav className="flex items-center justify-center mt-4 space-x-1 2xl:order-2 lg:order-3 md:mt-0 lg:mt-4 sm:space-x-2 2xl:mt-0">
          <a
            href="#"
            title=""
            className="px-2 py-2 text-xs font-bold text-gray-900 transition-all border border-gray-900 rounded-lg sm:px-4 hover:bg-gray-100 dration-200"
          >
            {" "}
            12 Months{" "}
          </a>

          <a
            href="#"
            title=""
            className="px-2 py-2 text-xs font-bold text-gray-500 transition-all border border-transparent rounded-lg sm:px-4 hover:bg-gray-100 dration-200"
          >
            {" "}
            6 Months{" "}
          </a>

          <a
            href="#"
            title=""
            className="px-2 py-2 text-xs font-bold text-gray-500 transition-all border border-transparent rounded-lg sm:px-4 hover:bg-gray-100 dration-200"
          >
            {" "}
            30 Days{" "}
          </a>

          <a
            href="#"
            title=""
            className="px-2 py-2 text-xs font-bold text-gray-500 transition-all border border-transparent rounded-lg sm:px-4 hover:bg-gray-100 dration-200"
          >
            {" "}
            7 Days{" "}
          </a>
        </nav>
      </div>

      <div id="chart4"></div>
    </div>
  </div>
);

export default SalesReport;
