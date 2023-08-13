import SearchInput from "./SearchInput";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";
import React, { useState, useEffect, useCallback } from "react";
import ProductModal from "./ProductModal";

const Table = ({ products, currentPage, totalPages, onPageChange }) => {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Add this line
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    // Set displayedProducts whenever products change
    setDisplayedProducts(products);
  }, [products]);

  const goToPreviousPage = useCallback(() => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }, [currentPage, onPageChange]);

  const goToNextPage = useCallback(() => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }, [currentPage, onPageChange, totalPages]);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <SearchInput />
        {products.length > 0 ? (
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Services ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Services Name
                </th>
                {/* <th scope="col" className="px-6 py-3">
              Category
            </th> */}
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {displayedProducts.map((product, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {product.service}
                  </th>
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">
                    {(product.rate * 1.5).toFixed(6)} (ต่อ1000)
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="font-medium text-blue-600 hover:underline"
                      onClick={() => {
                        setSelectedProduct(product);
                        setIsModalVisible(true);
                      }}
                    >
                      MORE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Loading...</p>
        )}
        <nav
          className="flex items-center justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-900">
              {products.length > 0
                ? (currentPage - 1) * products.length + 1
                : 0}
            </span>{" "}
            -{" "}
            <span className="font-semibold text-gray-900">
              {currentPage === totalPages && products.length < 15
                ? (currentPage - 1) * products.length + products.length
                : currentPage * products.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900">
              {totalPages * products.length}
            </span>
          </span>
          <ul className="inline-flex -space-x-px text-sm h-8">
            <li>
              <a
                href="#"
                className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight ${
                  currentPage === 1
                    ? "text-gray-500 bg-white border border-gray-300 rounded-l-lg"
                    : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                }`}
                onClick={goToPreviousPage}
              >
                Previous
              </a>
            </li>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <li
                  key={pageNumber}
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${
                    pageNumber === currentPage
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                  onClick={() => onPageChange(pageNumber)} // callback ดึงข้อมูลจาก API
                >
                  {pageNumber}
                </li>
              )
            )}
            <li>
              <a
                href="#"
                className={`flex items-center justify-center px-3 h-8 leading-tight ${
                  currentPage === totalPages
                    ? "text-gray-500 bg-white border border-gray-300 rounded-r-lg"
                    : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                }`}
                onClick={goToNextPage}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {selectedProduct && (
        <ProductModal
          selectedProduct={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default Table;
