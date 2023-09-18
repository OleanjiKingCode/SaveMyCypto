import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Inter, Fondamento } from "next/font/google";
import Link from "next/link";

const fondamento = Fondamento({
  weight: "400",
  subsets: ["latin"],
});

export default function signup() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white py-4 w-[40%] h-[50%] px-9 rounded-lg shadow-md">
        <div
          className={`text-xl font-medium w-full text-center leading-6 text-gray-900 ${fondamento.className} `}
        >
          Sign Up
        </div>

        <div className="mt-6 flex flex-col space-y-8">
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
      </div>
    </div>
  );
}
