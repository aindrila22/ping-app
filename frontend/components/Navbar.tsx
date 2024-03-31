"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();
  //console.log(session);
  return (
    <div className="flex justify-between items-center w-full h-16 bg-[#101424] shadow shadow-[#251b30] px-6 text-white">
      <div>
        {session && (
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
    </div>
  );
};

export default Navbar;
