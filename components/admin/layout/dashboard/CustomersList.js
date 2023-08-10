// CustomersList.js
import React from "react";

const CustomersList = () => {
  return (
    <div className="px-4 py-5 sm:p-6">
      <div>
        <p className="text-base font-bold text-gray-900">Recent Customers</p>
        <p className="mt-1 text-sm font-medium text-gray-500">
          Lorem ipsum dolor sit ametis.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <div className="flex items-center justify-between space-x-5">
          <div className="flex items-center flex-1 min-w-0">
            <img
              className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
              src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/1/avatar-male.png"
              alt=""
            />
            <div className="flex-1 min-w-0 ml-4">
              <p className="text-sm font-bold text-gray-900">Jenny Wilson</p>
              <p className="mt-1 text-sm font-medium text-gray-500">
                w.lawson@example.com
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">$11,234</p>
            <p className="mt-1 text-sm font-medium text-gray-500 truncate">
              Austin
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between space-x-5">
          <div className="flex items-center flex-1 min-w-0">
            <img
              className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
              src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/1/avatar-male-2.png"
              alt=""
            />
            <div className="flex-1 min-w-0 ml-4">
              <p className="text-sm font-bold text-gray-900">Devon Lane</p>
              <p className="mt-1 text-sm font-medium text-gray-500 truncate">
                dat.roberts@example.com
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 text-right">
            <p className="text-sm font-medium text-gray-900">$11,159</p>
            <p className="mt-1 text-sm font-medium text-gray-500 truncate">
              New York
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between space-x-5">
          <div className="flex items-center flex-1 min-w-0">
            <img
              className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
              src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/1/avatar-female-2.png"
              alt=""
            />
            <div className="flex-1 min-w-0 ml-4">
              <p className="text-sm font-bold text-gray-900">Jane Cooper</p>
              <p className="mt-1 text-sm font-medium text-gray-500 truncate">
                jgraham@example.com
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">$10,483</p>
            <p className="mt-1 text-sm font-medium text-gray-500">Toledo</p>
          </div>
        </div>

        <div className="flex items-center justify-between space-x-5">
          <div className="flex items-center flex-1 min-w-0">
            <img
              className="flex-shrink-0 object-cover w-10 h-10 rounded-full"
              src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/1/avatar-male-3.png"
              alt=""
            />
            <div className="flex-1 min-w-0 ml-4">
              <p className="text-sm font-bold text-gray-900">Dianne Russell</p>
              <p className="mt-1 text-sm font-medium text-gray-500 truncate">
                curtis.d@example.com
              </p>
            </div>
          </div>

          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">$9,084</p>
            <p className="mt-1 text-sm font-medium text-gray-500">Naperville</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <a
          href="#"
          title=""
          className="inline-flex items-center text-xs font-semibold tracking-widest text-gray-500 uppercase hover:text-gray-900"
        >
          See all Customers
          <svg
            className="w-4 h-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CustomersList;
