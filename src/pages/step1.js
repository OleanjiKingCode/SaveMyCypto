import React from "react";
import { fondamento } from "./_app";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const Step1 = ({
  register,
  errors,
  officialName,
  nickname,
  email,
  UpdateDataInfo,
}) => {
  return (
    <div>
      <div
        className={`text-xl font-medium w-full text-center leading-6 text-gray-900 ${fondamento.className} `}
      >
        Sign Up
      </div>
      <div className="py-6 flex flex-col space-y-8">
        <div className="flex flex-col w-full space-y-3 ">
          <div className="flex flex-row w-full space-x-3 items-center">
            <label className="w-[60%]">Official Name:</label>{" "}
            <input
              type="text"
              className="w-full h-6 py-4 px-3 border-slate-600 border-[1px] rounded-lg"
              id="name"
              placeholder="Enter your Official Name"
              value={officialName}
              onChange={(e) => UpdateDataInfo({ officialName: e.target.value })}
              minLength={6}
              required
            />
          </div>
          {errors.name && (
            <div className="py-1 text-red-500">{errors.name.message}</div>
          )}
        </div>
        <div className="flex flex-col w-full space-y-3 ">
          <div className="flex flex-row space-x-3 items-center ">
            <label className="w-[60%]">Nickname:</label>{" "}
            <input
              type="text"
              className="w-full h-6 py-4 px-3 border-slate-600 border-[1px] rounded-lg"
              id="nick"
              value={nickname}
              onChange={(e) => UpdateDataInfo({ nickname: e.target.value })}
              placeholder="Enter your Official Name"
              required
            />
          </div>
          {errors.nick && (
            <div className="py-1 text-red-500">{errors.nick.message}</div>
          )}
        </div>
        <div className="flex flex-col w-full space-y-3 ">
          <div className="flex flex-row space-x-3 items-center">
            <label className="w-[60%]">Email:</label>{" "}
            <input
              className="w-full h-6 py-4 px-3 border-slate-600 border-[1px] rounded-lg"
              id="email"
              type="email"
              value={email}
              placeholder="Enter your email address"
              onChange={(e) => UpdateDataInfo({ email: e.target.value })}
              required
            />
          </div>
          {errors.email && (
            <div className="text-red-500 py-1">{errors.email.message}</div>
          )}
        </div>
        <div className="flex justify-center">
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
  );
};

export default Step1;
