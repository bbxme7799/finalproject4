import React from "react";

const CartProduct = ({ product }) => {
  return (
    <li className="flex py-7">
      <div className="flex-shrink-0">
        <img
          className="object-cover w-24 h-24 rounded-lg"
          src={product.image}
          alt=""
        />
      </div>

      <div className="relative flex flex-col justify-between flex-1 ml-5">
        <div className="sm:grid sm:grid-cols-2 sm:gap-x-5">
          <div className="pr-9 sm:pr-5">
            <p className="text-base font-bold text-gray-900">{product.name}</p>
            <p className="mt-1.5 text-sm font-medium text-gray-500">
              {product.color}
            </p>
          </div>

          <div className="flex items-end justify-between mt-4 sm:justify-end sm:items-start sm:mt-0">
            <p className="flex-shrink-0 w-20 text-base font-bold text-left text-gray-900 sm:text-right sm:ml-8 sm:order-2">
              ${product.price}
            </p>

            <div className="sm:order-1">
              <select
                name=""
                id=""
                className="block py-1 pl-3 pr-10 text-sm font-normal text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md caret-gray-900 focus:ring-gray-900 focus:border-gray-900"
              >
                <option value="">1</option>
              </select>
            </div>
          </div>
        </div>

        <p className="flex mt-3 space-x-2 text-sm text-gray-500">
          <svg
            className="flex-shrink-0 w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{product.delivery}</span>
        </p>

        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
          <button
            type="button"
            className="inline-flex p-2 -m-2 text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:text-gray-900"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartProduct;
