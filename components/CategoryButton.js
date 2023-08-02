// components/CategoryButton.js
import React from "react";
import Image from "next/image";

const CategoryButton = ({ name, image, onClick }) => (
  <div className="bg-gray-100 flex-grow-0 overflow-hidden lg:flex-[calc((96.5%-12px)/5)] md:flex-[calc((96.5%-12px)/4)] sm:flex-[calc((96.5%-12px)/2)] rounded-md">
    <button onClick={onClick}>
      <div className="flex items-center">
        <Image
          src={image}
          alt={name}
          width={50} // Set the width to the desired size (e.g., 50px)
          height={50} // Set the height to the desired size (e.g., 50px)
          className="mx-3 my-3 icon-size" // Add a class to control the max size
        />
        <h2 className="mx-4">{name}</h2>
      </div>
    </button>
  </div>
);

export default CategoryButton;
