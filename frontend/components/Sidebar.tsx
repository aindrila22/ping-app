import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Sidebar = ({ users }: any) => {
  const { data: session } = useSession();
  console.log(users);
  return (
    <div className="lg:w-1/4 lg:block hidden min-h-screen border-r border-[#251b30] hover:overflow-y-auto">
      <div className="mx-auto grid place-items-center w-full px-7 text-sm">
        <input
          className="bg-[#271c3e] my-6 p-3 w-full placeholder-[#b5b3b8] rounded-md text-sm"
          type="text"
          placeholder="Search Names"
        />
      </div>
      <div className="pb-14">
        {users.map((user: any, idx: number) => (
          <div
            className="flex justify-start items-center gap-4 py-4 hover:transition-all hover:ease-in-out hover:duration-500 hover:bg-[#0e101b] hover:cursor-pointer border-b border-[#251b30] px-5"
            key={idx}
          >
            <div>
              {session && session.user.image && (
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
