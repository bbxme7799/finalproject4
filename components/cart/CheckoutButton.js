import React from "react";

const CheckoutButton = () => {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-700"
    >
      Continue to Payment
    </button>
  );
};

export default CheckoutButton;
