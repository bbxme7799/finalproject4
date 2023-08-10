import React from "react";
import googleIcon from "../../components/icons/google-iconlogin.png";
import MetamaskIcon from "../../components/icons/Metamaskiconlogin.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import SignInAdmin from "../../components/admin/SignInAdmin";
import Layout from "@/components/layout/layout";
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
            destination: "/admin",
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

export default function LoginPage({ me }) {
  return (
    <>
      <SignInAdmin />
    </>
  );
}
