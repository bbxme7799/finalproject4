import Table from "@/components/serviceTable/Table";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import PageMetadata from "@/components/PageMetadata";
import MainHeader from "@/components/layout/main-header";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchInput from "@/components/serviceTable/SearchInput";
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

export default function SerivceUserPage({ me }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [apiData, setApiData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // Add searchQuery state

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl = `http://localhost:8000/api/products?page=${currentPage}&per_page=20`;

        if (searchQuery) {
          apiUrl += `&keyword=${encodeURIComponent(searchQuery)}`;
        }

        const response = await axios.get(apiUrl);

        const newData = response.data.data;

        // Set data from the current page
        setApiData(newData);
        setTotalPages(response.data.total_page);
      } catch (error) {
        console.error("Error fetching API data: ", error);
      }
    };

    fetchData();
  }, [currentPage, searchQuery]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      <PageMetadata title="Service" />
      <MainHeader />

      {/* <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
        คำถามที่พบบ่อย
      </h2>
      <div className="mt-5 w-full md:w-2/3 h-[500px] mx-auto border-[3px] border-gray-50 flex items-center justify-center mb-10"></div> */}

      <section className="py-12 mt-6 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              บริการในระบบ
            </h2>
            {/* <p className="max-w-lg mx-auto mt-6 text-base text-gray-600 font-pj">
              คำถามหรือคำสั่งที่มักถูกนำเสนอและถูกสอบถามอย่างถี่ที่สุดในบริบทหนึ่ง
            </p> */}
          </div>

          <div className="max-w-8xl mx-auto mt-8 sm:mt-14">
            <div className="space-y-4">
              {apiData && (
                <div>
                  <SearchInput value={searchQuery} onChange={setSearchQuery} />

                  <Table
                    products={apiData}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                  {/* Rest of your component */}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
