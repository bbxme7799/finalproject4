import { memo } from "react";

const Navbar = () => {
  return (
    <nav className="shadow bg-white fixed w-full z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between h-[63px]">
          <div className="flex-shrink-0 flex items-center">
            {/* <Image
              className="hidden lg:block h-8 w-auto"
              src="/logo.svg"
              alt="Logo"
            /> */}
          </div>
          <div className="flex items-center">
            <div className="ml-3 relative">
              <div>
                <button
                  className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none"
                  id="user-menu"
                  aria-haspopup="true"
                >
                  <span className="sr-only">User Menu</span>
                  {/* <Image
                    className="h-8 w-8 rounded-full"
                    src="/user-avatar.jpg"
                    alt="User Avatar"
                  /> */}
                </button>
              </div>
            </div>
            <div className="ml-3 relative">
              <div>
                <button
                  className="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none"
                  id="balance-menu"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Balance Menu</span>
                  <span className="font-semibold">$1,234.56</span>
                </button>
              </div>
            </div>
            <div className="ml-3 relative">
              <div>
                {/* <Image
                  className="block lg:hidden h-8 w-auto"
                  src="/logo.svg"
                  alt="Logo"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
