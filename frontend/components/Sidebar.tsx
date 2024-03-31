"use client";

import { selectUser } from "@/redux/slice/userSice";
import { RootState } from "@/redux/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = ({ users }: any) => {
  const { data: session } = useSession();
  console.log(users);
  const dispatch = useDispatch();

  const handleUserClick = (user: any) => {
    dispatch(selectUser(user));
  };
  const datas: any = useSelector((state: RootState) => state.user.selectedUser);
  return (
    <div className="lg:w-1/4 lg:block hidden min-h-screen border-r border-[#251b30] hover:overflow-y-auto">
      <div className="mx-auto grid place-items-center w-full px-7 text-sm">
        <input
          className="bg-slate-900 shadow my-6 p-3 w-full placeholder-[#414067] rounded-md text-sm"
          type="text"
          placeholder="Search Names"
        />
      </div>
      <div className="pb-14">
        {users.map((user: any, idx: number) => (
          <div
            className={`flex justify-start items-center gap-4 py-4 hover:transition-all hover:ease-in-out hover:duration-500 hover:bg-[#0e101b] hover:cursor-pointer border-b border-[#251b30] px-5 ${
              datas && datas._id === user._id
                ? "bg-[#2f41a9]"
                : "bg-transparent"
            }`}
            key={idx}
            onClick={() => handleUserClick(user)}
          >
            <div>
              {session && session.user && session.user.image && (
                <Image
                  src={session.user.image}
                  alt=""
                  width={28}
                  height={28}
                  className="rounded-full"
                />
              )}
            </div>
            <div className="text-base">{user.name}</div>
          </div>
        ))}
        {/* <div className="py-7">Aindrila Bhattacharjee</div>
          <div className="py-7">Aindrila Bhattacharjee</div>
          <div className="py-7">Aindrila Bhattacharjee</div>
          <div className="py-7">Aindrila Bhattacharjee</div>
          <div className="py-7">Aindrila Bhattacharjee</div>
          <div className="py-7">Aindrila Bhattacharjee</div>
          <div className="py-7">Aindrila Bhattacharjee</div>
          <div className="py-7">Aindrila Bhattacharjee</div>
          <div className="py-7">Aindrila Bhattacharjee</div>
          <div className="py-7">Aindrila Bhattacharjee</div>
          <div className="py-7">Aindrila Bhattacharjee</div>
          <div className="py-7">Aindrila Bhattacharjee</div>
          <div className="py-7">Aindrila Bhattacharjeessssss</div> */}
      </div>
    </div>
  );
};

export default Sidebar;
