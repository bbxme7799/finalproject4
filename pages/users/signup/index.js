import React from "react";
import googleIcon from "../../../components/icons/google-iconlogin.png";
import MetamaskIcon from "../../../components/icons/Metamaskiconlogin.png";
import Image from "next/image";
import { useRouter } from "next/router";
import SignUpSection from "../../../components/signup/SignupSection";
import MainHeader from "@/components/layout/main-header";

export default function LoginPage() {
  const router = useRouter();

  return (
    <>
      <MainHeader />
      <SignUpSection />
    </>
  );
}
