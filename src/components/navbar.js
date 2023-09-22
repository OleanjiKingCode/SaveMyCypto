import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full px-10 pb-2 pt-3 flex flex-row justify-between">
      <Link
        href="/"
        className="flex flex-row space-x-1 text-lg items-center justify-center text-center font-bold text-black"
      >
        <span>Save</span>
        <span className=" py-1 px-2 rounded-lg bg-[#7bcefd] text-white ">
          YOUR
        </span>
        <span>Crypto</span>
      </Link>
      <div className="sm:block hidden">
        <ConnectButton />
      </div>
    </div>
  );
};

export default Navbar;
