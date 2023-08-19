import React from "react";

const SubTotal = ({ total }) => {
  return (
    <div className="flex items-center justify-between mt-6">
      <p className="text-lg font-medium text-gray-900">ราคารวม</p>
      <p className="text-lg font-bold text-gray-900">{total.toFixed(2)} THB</p>
    </div>
  );
};

export default SubTotal;
