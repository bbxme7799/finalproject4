import PageMetadata from "@/components/PageMetadata";
import axios from "axios";
import MainHeader from "@/components/layout/main-header";

export const getServerSideProps = async (context) => {
  try {
    let me = null;

    const response = await axios.get("http://localhost:8000/api/users/me", {
      headers: { cookie: context.req.headers.cookie },
      withCredentials: true,
    });

    if (response.status === 200) {
      me = response.data;
      console.log("user/me info => ", me);
      if (me) {
        return {
          redirect: {
            destination: "/users",
            permanent: false,
          },
        };
      }
    }

    return {
      props: {
        me,
      },
    };
  } catch (error) {
    // Handle errors (e.g., network error, server error)
    // console.error("Error fetching user info: ", error);

    return {
      props: {
        me: null,
      },
    };
  }
};
const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];

export default function BlogPage({ me }) {
  return (
    <>
      <PageMetadata title="ฺBlog" />
      <MainHeader />
      <section class="py-12 mt-6 bg-gray-50 sm:py-16 lg:py-20">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div class="text-center sm:flex sm:items-end sm:space-x-16 sm:text-left">
            <h2 class="max-w-xs text-3xl font-bold text-gray-900 sm:text-4xl shrink-0">
              บทความล่าสุด
            </h2>
            {/* <p class="max-w-xs mt-5 text-sm font-normal leading-6 text-gray-500 sm:mt-0">
              Create custom landing pages with Rareblocks that converts more
              visitors than any website.
            </p> */}
          </div>

          <div class="grid grid-cols-1 gap-6 px-8 mt-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:px-0">
            <div class="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
              <a href="#" title="" class="flex shrink-0 aspect-w-4 aspect-h-3">
                <img
                  class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/2/thumbnail-1.png"
                  alt=""
                />
              </a>
              <div class="flex-1 px-4 py-5 sm:p-6">
                <a href="#" title="" class="">
                  <p class="text-lg font-bold text-gray-900">
                    How to write content about your photographs
                  </p>
                  <p class="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit quis auctor odio arcu et dolor.
                  </p>
                </a>
              </div>
              <div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" title="" class="">
                        {" "}
                        Growth{" "}
                      </a>
                    </p>
                    <span class="text-sm font-medium text-gray-900"> • </span>
                    <p class="text-sm font-medium text-gray-900">7 Mins Read</p>
                  </div>

                  <a href="#" title="" class="" role="button">
                    <svg
                      class="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="17" y1="7" x2="7" y2="17"></line>
                      <polyline points="8 7 17 7 17 16"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
              <a href="#" title="" class="flex shrink-0 aspect-w-4 aspect-h-3">
                <img
                  class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/2/thumbnail-2.png"
                  alt=""
                />
              </a>
              <div class="flex-1 px-4 py-5 sm:p-6">
                <a href="#" title="" class="">
                  <p class="text-lg font-bold text-gray-900">
                    How to write content about your photographs
                  </p>
                  <p class="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit quis auctor odio arcu et dolor.
                  </p>
                </a>
              </div>
              <div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" title="" class="">
                        {" "}
                        Growth{" "}
                      </a>
                    </p>
                    <span class="text-sm font-medium text-gray-900"> • </span>
                    <p class="text-sm font-medium text-gray-900">7 Mins Read</p>
                  </div>

                  <a href="#" title="" class="" role="button">
                    <svg
                      class="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="17" y1="7" x2="7" y2="17"></line>
                      <polyline points="8 7 17 7 17 16"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
              <a href="#" title="" class="flex shrink-0 aspect-w-4 aspect-h-3">
                <img
                  class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/2/thumbnail-3.png"
                  alt=""
                />
              </a>
              <div class="flex-1 px-4 py-5 sm:p-6">
                <a href="#" title="" class="">
                  <p class="text-lg font-bold text-gray-900">
                    How to write content about your photographs
                  </p>
                  <p class="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit quis auctor odio arcu et dolor.
                  </p>
                </a>
              </div>
              <div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" title="" class="">
                        {" "}
                        Growth{" "}
                      </a>
                    </p>
                    <span class="text-sm font-medium text-gray-900"> • </span>
                    <p class="text-sm font-medium text-gray-900">7 Mins Read</p>
                  </div>

                  <a href="#" title="" class="" role="button">
                    <svg
                      class="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="17" y1="7" x2="7" y2="17"></line>
                      <polyline points="8 7 17 7 17 16"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
              <a href="#" title="" class="flex shrink-0 aspect-w-4 aspect-h-3">
                <img
                  class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/2/thumbnail-4.png"
                  alt=""
                />
              </a>
              <div class="flex-1 px-4 py-5 sm:p-6">
                <a href="#" title="" class="">
                  <p class="text-lg font-bold text-gray-900">
                    How to write content about your photographs
                  </p>
                  <p class="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit quis auctor odio arcu et dolor.
                  </p>
                </a>
              </div>
              <div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" title="" class="">
                        {" "}
                        Growth{" "}
                      </a>
                    </p>
                    <span class="text-sm font-medium text-gray-900"> • </span>
                    <p class="text-sm font-medium text-gray-900">7 Mins Read</p>
                  </div>

                  <a href="#" title="" class="" role="button">
                    <svg
                      class="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="17" y1="7" x2="7" y2="17"></line>
                      <polyline points="8 7 17 7 17 16"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
              <a href="#" title="" class="flex shrink-0 aspect-w-4 aspect-h-3">
                <img
                  class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/2/thumbnail-5.png"
                  alt=""
                />
              </a>
              <div class="flex-1 px-4 py-5 sm:p-6">
                <a href="#" title="" class="">
                  <p class="text-lg font-bold text-gray-900">
                    How to write content about your photographs
                  </p>
                  <p class="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit quis auctor odio arcu et dolor.
                  </p>
                </a>
              </div>
              <div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" title="" class="">
                        {" "}
                        Growth{" "}
                      </a>
                    </p>
                    <span class="text-sm font-medium text-gray-900"> • </span>
                    <p class="text-sm font-medium text-gray-900">7 Mins Read</p>
                  </div>

                  <a href="#" title="" class="" role="button">
                    <svg
                      class="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="17" y1="7" x2="7" y2="17"></line>
                      <polyline points="8 7 17 7 17 16"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
              <a href="#" title="" class="flex shrink-0 aspect-w-4 aspect-h-3">
                <img
                  class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/2/thumbnail-6.png"
                  alt=""
                />
              </a>
              <div class="flex-1 px-4 py-5 sm:p-6">
                <a href="#" title="" class="">
                  <p class="text-lg font-bold text-gray-900">
                    How to write content about your photographs
                  </p>
                  <p class="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit quis auctor odio arcu et dolor.
                  </p>
                </a>
              </div>
              <div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" title="" class="">
                        {" "}
                        Growth{" "}
                      </a>
                    </p>
                    <span class="text-sm font-medium text-gray-900"> • </span>
                    <p class="text-sm font-medium text-gray-900">7 Mins Read</p>
                  </div>

                  <a href="#" title="" class="" role="button">
                    <svg
                      class="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="17" y1="7" x2="7" y2="17"></line>
                      <polyline points="8 7 17 7 17 16"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
              <a href="#" title="" class="flex shrink-0 aspect-w-4 aspect-h-3">
                <img
                  class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/2/thumbnail-7.png"
                  alt=""
                />
              </a>
              <div class="flex-1 px-4 py-5 sm:p-6">
                <a href="#" title="" class="">
                  <p class="text-lg font-bold text-gray-900">
                    How to write content about your photographs
                  </p>
                  <p class="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit quis auctor odio arcu et dolor.
                  </p>
                </a>
              </div>
              <div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" title="" class="">
                        {" "}
                        Growth{" "}
                      </a>
                    </p>
                    <span class="text-sm font-medium text-gray-900"> • </span>
                    <p class="text-sm font-medium text-gray-900">7 Mins Read</p>
                  </div>

                  <a href="#" title="" class="" role="button">
                    <svg
                      class="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="17" y1="7" x2="7" y2="17"></line>
                      <polyline points="8 7 17 7 17 16"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow group rounded-xl hover:shadow-lg hover:-translate-y-1">
              <a href="#" title="" class="flex shrink-0 aspect-w-4 aspect-h-3">
                <img
                  class="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/blog-grid/2/thumbnail-8.png"
                  alt=""
                />
              </a>
              <div class="flex-1 px-4 py-5 sm:p-6">
                <a href="#" title="" class="">
                  <p class="text-lg font-bold text-gray-900">
                    How to write content about your photographs
                  </p>
                  <p class="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
                    Lorem ipsum dolor sit amet, consec tetur adipiscing elit.
                    Sit quis auctor odio arcu et dolor.
                  </p>
                </a>
              </div>
              <div class="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-2">
                    <p class="text-sm font-medium text-gray-900">
                      <a href="#" title="" class="">
                        {" "}
                        Growth{" "}
                      </a>
                    </p>
                    <span class="text-sm font-medium text-gray-900"> • </span>
                    <p class="text-sm font-medium text-gray-900">7 Mins Read</p>
                  </div>

                  <a href="#" title="" class="" role="button">
                    <svg
                      class="w-5 h-5 text-gray-300 transition-all duration-200 group-hover:text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <line x1="17" y1="7" x2="7" y2="17"></line>
                      <polyline points="8 7 17 7 17 16"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
