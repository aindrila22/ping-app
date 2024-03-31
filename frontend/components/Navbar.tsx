"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Navbar = () => {
  const { data: session } = useSession();
  const datas: any = useSelector((state: RootState) => state.user.selectedUser);
  console.log(datas);
  return (
    <div className="flex justify-between items-center w-full h-16 bg-[#101424] shadow shadow-[#251b30] px-6 text-white">
      <div>
        {session && session.user && (
          <div className="flex justify-start items-center gap-4">
            <div className="dropdown">
              <div tabIndex={0} role="button" className=" m-1">
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    alt=""
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>{session.user.name}</a>
                </li>
                <li>
                  <a onClick={() => signOut()}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      {datas && (
        <div className="text-white">
          <div></div>
          <div>{datas?.name}</div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
