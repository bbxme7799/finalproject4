// components/CategoryButton.js
import React from "react";

const CategoryButton = ({ name, image, onClick }) => (
  <div className="bg-gray-400 flex-grow-0 overflow-hidden lg:flex-[calc((96.5%-12px)/5)] md:flex-[calc((96.5%-12px)/4)] sm:flex-[calc((96.5%-12px)/2)] rounded-md">
    <button onClick={onClick}>
      <div className="flex items-center">
        <img src={image} width={50} height={50} className="mx-3 my-3 " />
        <h2 className="mx-4">{name}</h2>
      </div>
    </button>
  </div>
);

export default CategoryButton;
