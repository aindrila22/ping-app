"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ChatBox from "./ChatBox";

const Home = ({ users }: any) => {
  const { data: session } = useSession();
  //console.log(session);
  //console.log(users)

  return (
    <div className="max-h-screen bg-[#141827] w-full max-w-screen-2xl overflow-y-hidden">
      <Navbar />
      <div className="overflow-y-hidden flex justify-start w-full items-start">
        <Sidebar users={users} />
        <ChatBox/>
      </div>
    </div>
  );
};

export default Home;
