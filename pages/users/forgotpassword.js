import React from "react";
import ForgotPasswordForm from "../../components/forgotpassword/ForgotPasswordForm";
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

export default function ForgotpasswordPage({ me }) {
  return (
    <>
      <MainHeader />
      <ForgotPasswordForm />
    </>
  );
}