import React from "react";
import stylesCategory from "./stylesCategory.module.css";

const ModalOverlay = ({ closeModal }) => {
  return (
    <div className={`${stylesCategory["modal-overlay"]}`}>
      <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center"></div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative p-4 bg-white rounded-lg shadow sm:p-5">
            <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 ">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Add Category
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
                onClick={closeModal}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form action="#">
              <div class="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    ชื่อหมวดหมู่
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="YouTube Views - 𝐆𝐨𝐨𝐠𝐥𝐞 𝐀𝐝𝐬【 🍓Promotion❤️ 】"
                    required=""
                  />
                </div>
              </div>
              <button
                type="submit"
                className="text-white inline-flex items-center bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                <svg
                  className="mr-1 -ml-1 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Add new Category
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalOverlay;
