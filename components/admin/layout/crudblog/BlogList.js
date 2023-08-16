import React from "react";
import stylesCategory from "./stylesCategory.module.css";

const CategoryList = ({ category }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-4">
              Category id
            </th>
            <th scope="col" className="px-4 py-3">
              Category Name
            </th>
            {/* <th scope="col" className="px-4 py-3">
              Category
            </th>
            <th scope="col" className="px-4 py-3">
              Description
            </th> */}
            {/* <th scope="col" className="px-4 py-3">
              rate price
            </th>
            <th scope="col" className="px-4 py-3">
              min
            </th> */}
            <th scope="col" className="px-4 py-3">
              {/* max */}
            </th>
            <th scope="col" className="px-4 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {category.map((cat, index) => (
            <tr className="border-b " key={index}>
              <th
                scope="row"
                className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
              >
                {cat.id}
              </th>
              <td className="px-4 py-3">{cat.name}</td>
              <td className="px-4 py-3">{cat.category}</td>
              <td className="px-4 py-3 flex items-center justify-end">
                <button
                  id={`${cat.name
                    .toLowerCase()
                    .replace(/\s/g, "-")}-dropdown-button`}
                  data-dropdown-toggle={`${cat.name
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
                  id={`${cat.name.toLowerCase().replace(/\s/g, "-")}-dropdown`}
                  className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow"
                >
                  <ul
                    className="py-1 text-sm"
                    aria-labelledby={`${cat.name
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
                        ></svg>
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
                          className="w-4 h-4 mr-2"
                          viewBox="0 0 14 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        ></svg>
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

export default CategoryList;
