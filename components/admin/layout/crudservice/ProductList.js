import React, { useState } from "react";
import styles from "./style.module.css";
import Modal from "./Modal";
import Swal from "sweetalert2";
import axios from "axios";

const ProductList = ({ products }) => {
  const [activeDropdowns, setActiveDropdowns] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productList, setProductList] = useState(products);

  const toggleDropdown = (productId) => {
    if (activeDropdowns.includes(productId)) {
      setActiveDropdowns(activeDropdowns.filter((id) => id !== productId));
    } else {
      setActiveDropdowns([...activeDropdowns, productId]);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = async (productId) => {
    // Show a confirmation dialog using SweetAlert
    const result = await Swal.fire({
      title: "คุณต้องการที่จะลบ?",
      text: "หากตกลงจะทำการลบและไม่สามารถกู้คืนได้",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ลบเลย!",
      cancelButtonText: "ยกเลิก",
    });

    // If the user confirms the deletion, proceed with the deletion
    if (result.isConfirmed) {
      try {
        // Make a DELETE request to the API endpoint with the given product ID
        await axios.delete(`http://localhost:8000/api/products/${productId}`);

        // Remove the deleted product from the products list
        setProductList((prevProductList) =>
          prevProductList.filter((product) => product.service !== productId)
        );

        // Show a success message
        Swal.fire("ลบ!", `ไอดีที่ถูกลบ: ${productId}`, "success");
      } catch (error) {
        console.error("Error deleting product:", error);
        // Show an error message using SweetAlert
        Swal.fire(
          "Error",
          "An error occurred while deleting the product.",
          "error"
        );
      }
    }
  };

  return (
    <>
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
                <td className="px-4 py-3">
                  <button
                    id={`${product.name
                      .toLowerCase()
                      .replace(/\s/g, "-")}-dropdown-button`}
                    data-dropdown-toggle={`${product.name
                      .toLowerCase()
                      .replace(/\s/g, "-")}-dropdown`}
                    onClick={() => toggleDropdown(product.service)}
                    className="text-gray-500 hover:text-gray-800 focus:outline-none"
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
                  {activeDropdowns.includes(product.service) && (
                    <div
                      id={`${product.name
                        .toLowerCase()
                        .replace(/\s/g, "-")}-dropdown`}
                      className="absolute z-20 right-20 mt-2 w-44 bg-white border border-gray-200 divide-y divide-gray-100 rounded-lg shadow"
                    >
                      <ul
                        className="py-1 text-sm"
                        aria-labelledby="apple-imac-27-dropdown-button"
                      >
                        <li>
                          <button
                            type="button"
                            onClick={() => handleEditProduct(product)}
                            className="flex w-full items-center py-2 px-4 hover:bg-gray-100  text-gray-700 "
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                            Edit
                          </button>
                        </li>

                        <li>
                          <button
                            type="button"
                            onClick={() => handleDeleteProduct(product.service)}
                            className="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 text-red-500 dark:hover:text-red-400"
                          >
                            <svg
                              className="w-4 h-4 mr-2"
                              viewBox="0 0 14 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                fill="currentColor"
                                d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z"
                              />
                            </svg>
                            Delete
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="backdrop-blur-5 bg-opacity-50 bg-black absolute inset-0"></div>
          <Modal
            isOpen={editingProduct !== null}
            onClose={() => setEditingProduct(null)}
            product={editingProduct} // Pass the editingProduct data to the Modal
          ></Modal>
        </div>
      )}
    </>
  );
};

export default ProductList;
