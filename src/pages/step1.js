import React from "react";
import { fondamento } from "./_app";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const Step1 = () => {
  return (
    <div className="py-6 flex flex-col space-y-8">
      <div className="flex flex-row w-full space-x-3 items-center">
        <span className="w-[60%]">Official Name:</span>{" "}
        <input
          type="text"
          className="w-full h-6 py-4 px-3 border-slate-600 border-[1px] rounded-lg"
        />
      </div>
      <div className="flex flex-row space-x-3 items-center ">
        <span className="w-[60%]">Nickname:</span>{" "}
        <input
          type="text"
          className="w-full h-6 py-4 px-3 border-slate-600 border-[1px] rounded-lg"
        />
      </div>
      <div className="flex flex-row space-x-3 items-center">
        <span className="w-[60%]">Email:</span>{" "}
        <input
          type="text"
          className="w-full h-6 py-4 px-3 border-slate-600 border-[1px] rounded-lg"
        />
      </div>
      <div className="flex  justify-center">
        <ConnectButton />
      </div>

      <div
        className={`${fondamento.className} mt-10 w-full text-center space-x-3`}
      >
        <span>Already have an account?</span>
        <Link href="/signIn" className="text-blue-500 underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Step1;
