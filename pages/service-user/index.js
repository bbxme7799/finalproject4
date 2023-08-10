import Table from "@/components/serviceTable/Table";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css"; // core css
import PageMetadata from "@/components/PageMetadata";
import MainHeader from "@/components/layout/main-header";
import axios from "axios";
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
  return (
    <>
      <PageMetadata title="Service" />
      <MainHeader />
      <div className="mt-5 w-full md:w-2/3  h-[500px] mx-auto  border-[3px] border-gray-50 flex items-center justify-center mb-10">
        <Table />
      </div>
    </>
  );
}
