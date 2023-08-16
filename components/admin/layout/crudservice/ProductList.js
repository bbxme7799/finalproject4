import React from "react";
import styles from "./style.module.css";

const ProductList = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-4">
              Service id
            </th>
            <th scope="col" className="px-4 py-3">
              Service Name
            </th>
            <th scope="col" className="px-4 py-3">
              Category
            </th>
            <th scope="col" className="px-4 py-3">
              Description
            </th>
            <th scope="col" className="px-4 py-3">
              rate price
            </th>
            <th scope="col" className="px-4 py-3">
              min
            </th>
            <th scope="col" className="px-4 py-3">
              max
            </th>
            <th scope="col" className="px-4 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr className="border-b " key={index}>
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
              >
                {product.service}
              </th>
              <td className="px-4 py-3 max-w-[12rem] truncate">
                {product.name}
              </td>
              <td className="px-4 py-3 max-w-[12rem] truncate">
                {product.category}
              </td>
              <td className="px-4 py-3 max-w-[12rem] truncate">
                {product.description}
              </td>
              <td className="px-4 py-3">{product.rate}</td>
              <td className="px-4 py-3">{product.min}</td>
              <td className="px-4 py-3">{product.max}</td>
              <td className="px-4 py-3 flex items-center justify-end">
                <button
                  id={`${product.name
                    .toLowerCase()
                    .replace(/\s/g, "-")}-dropdown-button`}
                  data-dropdown-toggle={`${product.name
                    .toLowerCase()
                    .replace(/\s/g, "-")}-dropdown`}
                  className="inline-flex items-center text-sm font-medium hover:bg-gray-100 text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none"
                  type="button"
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                </button>
                <div
                  id={`${product.name
                    .toLowerCase()
                    .replace(/\s/g, "-")}-dropdown`}
                  className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
                >
                  <ul
                    className="py-1 text-sm"
                    aria-labelledby={`${product.name
                      .toLowerCase()
                      .replace(/\s/g, "-")}-dropdown-button`}
                  >
                    <li>
                      <button
                        type="button"
                        data-modal-target="updateProductModal"
                        data-modal-toggle="updateProductModal"
                        className="flex w-full items-center py-2 px-4 hover:bg-gray-100 text-gray-700"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        ></svg>
                        Edit
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        data-modal-target="readProductModal"
                        data-modal-toggle="readProductModal"
                        className="flex w-full items-center py-2 px-4 hover:bg-gray-100 text-gray-700"
                      >
                        <svg
                          className="w-4 h-4 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          {/* Preview icon */}
                        </svg>
                        Preview
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        data-modal-target="deleteModal"
                        data-modal-toggle="deleteModal"
                        className="flex w-full items-center py-2 px-4 hover:bg-gray-100 text-red-500"
                      >
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
