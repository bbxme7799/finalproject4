import React, { useState, useEffect, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const Navbar = ({ me }) => {
  console.log("🚀 ~ file: navbar.js:6 ~ Navbar ~ me:", me);
  return (
    <nav className="shadow bg-white fixed w-full z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-[63px]">
          <div className="flex-shrink-0 flex items-center">
            {/* Your logo image */}
            {/* <Image
              className="hidden lg:block h-8 w-auto"
              src="/logo.svg"
              alt="Logo"
            /> */}
          </div>
          <div className="flex items-center">
            <div className="ml-3 relative">
              <div>
                <Link href="/users/cart">
                  <button
                    className="max-w-xs flex items-center text-sm rounded-full focus:outline-none"
                    id="cart-menu"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Cart Menu</span>
                    <FaShoppingCart className="h-5 w-5 text-gray-600" />
                  </button>
                </Link>
              </div>
            </div>
            <div className="ml-3 relative">
              <div>
                <button
                  className="max-w-xs flex items-center text-sm rounded-full focus:outline-none"
                  id="balance-menu"
                  aria-haspopup="true"
                >
                  {/* Your balance content */}
                  <span className="font-semibold">$1,234.56</span>
                </button>
              </div>
            </div>
            <div className="ml-3 relative">
              {/* Your logo image for small screens */}
              {/* <Image
                className="block lg:hidden h-8 w-auto"
                src="/logo.svg"
                alt="Logo"
              /> */}
              <span className="hidden md:flex bg-black text-white text-sm px-3 py-4 rounded-xl mr-2 items-center w-[fit-content]">
                <span className="flex-grow">{me.username || "Hi"}</span>
              </span>

              {/* <img
                className="object-cover w-10 h-10 rounded-md"
                src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/images/avatar-square/avatar-square.png"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
