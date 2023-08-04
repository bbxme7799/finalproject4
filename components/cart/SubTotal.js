import React from "react";

const SubTotal = ({ total }) => {
  return (
    <div className="flex items-center justify-between mt-6">
      <p className="text-lg font-medium text-gray-900">Sub Total</p>
      <p className="text-lg font-bold text-gray-900">${total}</p>
    </div>
  );
};

export default SubTotal;
