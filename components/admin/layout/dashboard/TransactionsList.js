import React from "react";

const TransactionsList = () => {
  return (
    <div class="overflow-hidden bg-white border border-gray-200 rounded-xl lg:col-span-4">
      <div class="px-4 py-5 sm:p-6">
        <div class="sm:flex sm:items-start sm:justify-between">
          <div>
            <p class="text-base font-bold text-gray-900">Transactions</p>
            <p class="mt-1 text-sm font-medium text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipis.
            </p>
          </div>

          <div class="mt-4 sm:mt-0">
            <a
              href="#"
              title=""
              class="inline-flex items-center text-xs font-semibold tracking-widest text-gray-500 uppercase hover:text-gray-900"
            >
              See all Transactions
              <svg
                class="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="divide-y divide-gray-200">
        <div class="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
          <div class="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
            <span class="text-xs font-medium text-green-900 bg-green-100 rounded-full inline-flex items-center px-2.5 py-1">
              <svg
                class="-ml-1 mr-1.5 h-2.5 w-2.5 text-green-500"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx="4" cy="4" r="3"></circle>
              </svg>
              Completed
            </span>
          </div>

          <div class="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
            <button
              type="button"
              class="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
          </div>

          <div class="px-4 lg:py-4 sm:px-6 lg:col-span-2">
            <p class="text-sm font-bold text-gray-900">Visa card **** 4831</p>
            <p class="mt-1 text-sm font-medium text-gray-500">Card payment</p>
          </div>

          <div class="px-4 lg:py-4 sm:px-6">
            <p class="text-sm font-bold text-gray-900">$182.94</p>
            <p class="mt-1 text-sm font-medium text-gray-500">Jan 17, 2022</p>
          </div>

          <div class="px-4 lg:py-4 sm:px-6">
            <p class="mt-1 text-sm font-medium text-gray-500">Amazon</p>
          </div>
        </div>

        <div class="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
          <div class="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
            <span class="text-xs font-medium text-green-900 bg-green-100 rounded-full inline-flex items-center px-2.5 py-1">
              <svg
                class="-ml-1 mr-1.5 h-2.5 w-2.5 text-green-500"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx="4" cy="4" r="3"></circle>
              </svg>
              Completed
            </span>
          </div>

          <div class="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
            <button
              type="button"
              class="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
          </div>

          <div class="px-4 lg:py-4 sm:px-6 lg:col-span-2">
            <p class="text-sm font-bold text-gray-900">Mastercard **** 6442</p>
            <p class="mt-1 text-sm font-medium text-gray-500">Card payment</p>
          </div>

          <div class="px-4 lg:py-4 sm:px-6">
            <p class="text-sm font-bold text-gray-900">$99.00</p>
            <p class="mt-1 text-sm font-medium text-gray-500">Jan 17, 2022</p>
          </div>

          <div class="px-4 lg:py-4 sm:px-6">
            <p class="mt-1 text-sm font-medium text-gray-500">Facebook</p>
          </div>
        </div>

        <div class="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
          <div class="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
            <span class="text-xs font-medium text-yellow-900 bg-yellow-100 rounded-full inline-flex items-center px-2.5 py-1">
              <svg
                class="-ml-1 mr-1.5 h-2.5 w-2.5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx="4" cy="4" r="3"></circle>
              </svg>
              Pending
            </span>
          </div>

          <div class="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
            <button
              type="button"
              class="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
          </div>

          <div class="px-4 lg:py-4 sm:px-6 lg:col-span-2">
            <p class="text-sm font-bold text-gray-900">Account ****882</p>
            <p class="mt-1 text-sm font-medium text-gray-500">Bank payment</p>
          </div>

          <div class="px-4 lg:py-4 sm:px-6">
            <p class="text-sm font-bold text-gray-900">$249.94</p>
            <p class="mt-1 text-sm font-medium text-gray-500">Jan 17, 2022</p>
          </div>

          <div class="px-4 lg:py-4 sm:px-6">
            <p class="mt-1 text-sm font-medium text-gray-500">Netflix</p>
          </div>
        </div>

        <div class="grid grid-cols-3 py-4 gap-y-4 lg:gap-0 lg:grid-cols-6">
          <div class="col-span-2 px-4 lg:py-4 sm:px-6 lg:col-span-1">
            <span class="text-xs font-medium text-red-900 bg-red-100 rounded-full inline-flex items-center px-2.5 py-1">
              <svg
                class="-ml-1 mr-1.5 h-2.5 w-2.5 text-red-500"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx="4" cy="4" r="3"></circle>
              </svg>
              Canceled
            </span>
          </div>

          <div class="px-4 text-right lg:py-4 sm:px-6 lg:order-last">
            <button
              type="button"
              class="inline-flex items-center justify-center w-8 h-8 text-gray-400 transition-all duration-200 bg-white rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
            >
              <svg
                class="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
          </div>

          <div class="px-4 lg:py-4 sm:px-6 lg:col-span-2">
            <p class="text-sm font-bold text-gray-900">Amex card **** 5666</p>
            <p class="mt-1 text-sm font-medium text-gray-500">Card payment</p>
          </div>

          <div class="px-4 lg:py-4 sm:px-6">
            <p class="text-sm font-bold text-gray-900">$199.24</p>
            <p class="mt-1 text-sm font-medium text-gray-500">Jan 17, 2022</p>
          </div>

          <div class="px-4 lg:py-4 sm:px-6">
            <p class="mt-1 text-sm font-medium text-gray-500">Amazon Prime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsList;
