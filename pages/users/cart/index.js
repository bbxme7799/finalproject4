import React, { useState } from "react";
import CartProduct from "../../../components/cart/CartProduct";
import SubTotal from "../../../components/cart/SubTotal";
import CheckoutButton from "../../../components/cart/CheckoutButton";

const CartPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Sample data for demonstration purposes
  const products = [
    {
      id: 1,
      name: "Apple Watch Series 7",
      color: "Golden",
      price: 259.0,
      image:
        "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/2/product-1.png",
      delivery: "Will arrive in 2 days",
    },
    {
      id: 2,
      name: "Beylob 90 Speaker",
      color: "Space Gray",
      price: 59.0,
      image:
        "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/2/product-2.png",
      delivery: "Only 2 items available",
    },
    {
      id: 3,
      name: "Beoplay M5 Bluetooth Speaker",
      color: "Gray Edition",
      price: 99.0,
      image:
        "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/2/product-3.png",
      delivery: "Will arrive in 2 days",
    },
    {
      id: 4,
      name: "Apple Watch Series 7 - 44mm",
      color: "Golden",
      price: 159.0,
      image:
        "https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/cart-page/2/product-1.png",
      delivery: "Will arrive in 2 days",
    },
  ];

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
          <span className="px-2 py-1 ml-4 text-xs font-bold tracking-widest uppercase bg-gray-400 rounded-full rounded-r-none py-1 text-gray-50">
            4 Items
          </span>
        </div>

        <div className="max-w-2xl mx-auto mt-8 md:mt-12">
          <div className="overflow-hidden bg-white shadow rounded-xl">
            <div className="px-4 py-6 sm:px-8 sm:py-10">
              <div className="flow-root">
                <ul className="divide-y divide-gray-200 -my-7">
                  {products.map((product) => (
                    <CartProduct key={product.id} product={product} />
                  ))}
                </ul>
              </div>

              <hr className="border-gray-200 mt-7" />

              <SubTotal total={699} />

              <div className="mt-6 text-center">
                <CheckoutButton />
                <p className="mt-6 text-sm font-normal text-gray-500">
                  All the taxes will be calculated while checkout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
