import React, { useState, useEffect } from "react";
import CartProduct from "../../../components/cart/CartProduct";
import SubTotal from "../../../components/cart/SubTotal";
import CheckoutButton from "../../../components/cart/CheckoutButton";
import Layout from "@/components/layout/layout";
import axios from "axios";

export const getServerSideProps = async (context) => {
  const me = await axios
    .get("http://localhost:8000/api/users/me", {
      headers: { cookie: context.req.headers.cookie },
      withCredentials: true,
    })
    .then((response) => response.data)
    .catch(() => null);

  console.log("user/me info => ", me);
  if (!me) {
    return {
      redirect: {
        destination: "/users/signin",
        permanent: false,
      },
    };
  }
  return {
    props: {
      me,
    },
  };
};

const CartPage = ({ me }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalItemCount, setTotalItemCount] = useState(0);

  useEffect(() => {
    async function fetchCartItems() {
      try {
        const response = await axios.get("http://localhost:8000/api/carts", {
          headers: { cookie: document.cookie },
          withCredentials: true,
        });

        setCartItems(response.data);
        setTotalItemCount(response.data.length);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    }

    fetchCartItems();
  }, []);

  const handleCartItemDelete = () => {
    setTotalItemCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <Layout me={me}></Layout>
      <div className="ml-[255px] mt-[65px]">
        <div className="bg-white my-2">
          <div className="flex mx-2 py-2">
            <h1 className="font-bold text-lg">Cart :</h1>
            <p className="text-lg pl-2">ตะกร้าสินค้า</p>
          </div>
        </div>
      </div>
      <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-xl">
          <div className="flex items-center justify-between md:flex-row">
            <h1 className="text-base md:text-xl lg:text-2xl font-bold text-gray-900">
              Shopping Cart
            </h1>
            <span class="px-2 py-1 ml-4 text-xs font-bold tracking-widest uppercase bg-gray-400 rounded-full rounded-r-nonepy-1 text-gray-50">
              {" "}
              {totalItemCount} Items{" "}
            </span>
          </div>

          <div className="max-w-3xl mx-auto mt-8 md:mt-12">
            <div className="overflow-hidden bg-white shadow rounded-xl">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="flow-root">
                  <ul className="divide-y divide-gray-200 -my-4 md:-my-7">
                    {cartItems.map((product) => (
                      <CartProduct
                        key={product.id}
                        product={product}
                        onDelete={handleCartItemDelete} // Pass onDelete callback here
                      />
                    ))}
                  </ul>
                </div>

                <hr className="border-gray-200 my-4 md:my-7" />

                <SubTotal total={699} />

                <div className="mt-6 text-center">
                  <CheckoutButton />
                  {/* <p className="mt-4 md:mt-6 text-xs md:text-sm font-normal text-gray-500">
                    All the taxes will be calculated while checkout
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
