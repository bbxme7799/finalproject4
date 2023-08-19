import React, { useState, useRef } from "react";
import axios from "axios";
import SubTotal from "./SubTotal";

const CartProduct = ({ product, onDelete }) => {
  const [editedUrl, setEditedUrl] = useState(product.url);
  const [quantity, setQuantity] = useState(product.quantity);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const editedUrlRef = useRef(editedUrl); // Using a ref to track the initial editedUrl
  const quantityRef = useRef(quantity); // Using a ref to track the initial quantity

  const handleUrlChange = (event) => {
    setEditedUrl(event.target.value);
    setIsEditing(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/carts/${product.id}`, {
        withCredentials: true,
      });
      setIsDeleted(true);
      onDelete(); // Invoke the onDelete callback from props
    } catch (error) {
      console.error(error);
    }
  };
  const handleEdit = async () => {
    if (
      quantity !== quantityRef.current ||
      editedUrl !== editedUrlRef.current
    ) {
      try {
        await axios.put(
          `http://localhost:8000/api/carts/${product.id}`,
          {
            quantity: parseInt(quantity),
            url: editedUrl,
          },
          {
            withCredentials: true,
          }
        );
        setIsEditing(false);
        editedUrlRef.current = editedUrl; // Update the reference value
        quantityRef.current = quantity; // Update the reference value
      } catch (error) {
        console.error(error);
      }
    } else {
      setIsEditing(false);
    }
  };

  return (
    <li className={`flex py-5 ${isDeleted ? "hidden" : ""}`}>
      {/* <div className="flex-shrink-0">
        <img
          className="object-cover w-16 h-16 rounded-lg"
          src={product.image}
          alt=""
        />
      </div> */}

      <div className="relative flex flex-col justify-between flex-1 ml-3">
        <div className="sm:grid sm:grid-cols-2 sm:gap-x-3">
          <div className="pr-5 sm:pr-3">
            <p className="text-base font-bold text-gray-900 truncate">
              {product.product.name}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-500 truncate">
              {/* {product.product.description} */}
            </p>
            <input
              type="text"
              className="mt-1 text-sm text-blue-500 border rounded-md px-2 py-1 w-full overflow-x-auto"
              value={editedUrl}
              onChange={handleUrlChange}
              onBlur={handleEdit} // เมื่อมีการเปลี่ยน focus ให้เรียก handleEdit
            />
          </div>

          <div className="flex items-end justify-between mt-2 sm:items-start sm:mt-1">
            <p className="flex-shrink-0 w-16 text-base font-bold text-left text-gray-900 sm:text-right sm:ml-4 sm:order-2">
              {(((product.product.rate * 1.5) / 1000) * quantity).toFixed(2)}{" "}
            </p>

            <div className="sm:order-1">
              <div className="flex">
                <input
                  type="number"
                  className="w-16 px-2 py-1 text-sm text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none"
                  value={quantity}
                  onChange={(event) =>
                    setQuantity(
                      Math.max(parseInt(event.target.value, 10) || 0, 0)
                    )
                  }
                  onBlur={handleEdit} // เมื่อมีการเปลี่ยน focus ให้เรียก handleEdit
                />
              </div>
            </div>
          </div>
        </div>

        {/* <p className="flex mt-2 space-x-2 text-xs text-gray-500">
          <svg
            className="flex-shrink-0 w-4 h-4"
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
        </p> */}

        <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
          <button
            type="button"
            onClick={handleDelete}
            className="inline-flex p-1 -m-1 text-gray-400 transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:text-gray-900"
          >
            <svg
              className="w-4 h-4"
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
