"use client";

import Image from "next/image";
import google from "../public/google2.svg";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="min-h-screen bg-black grid place-items-center w-full">
      <div onClick={() => signIn("google")} className="cursor-pointer">
        <Image src={google} alt="bg" width={100} height={100} />
      </div>{" "}
    </div>
  );
};

export default Login;
