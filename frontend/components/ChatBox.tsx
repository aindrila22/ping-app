"use client";

import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

const ChatBox = () => {
  const data = useSelector((state: RootState) => state.user);
  console.log("dataaa", data);
  return (
    <div className="w-full relative min-h-[92vh] overflow-y-hidden">
      <div className="absolute bottom-0 left-0 text-white px-10 w-full py-10 bg-[#101424]">
        <textarea rows={1} className="w-full text-base bg-slate-900 shadow outline-none rounded p-5 text-slate-400" />
      </div>
    </div>
  );
};

export default ChatBox;
