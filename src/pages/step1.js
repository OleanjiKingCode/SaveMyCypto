import React from "react";
import { fondamento } from "./_app";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

const Step1 = ({ register, errors }) => {
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
              {...register("name", {
                required: "Please enter your Official Name",
                minLength: {
                  value: 6,
                  message: "Official Name should be more than 6 chars",
                },
              })}
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
              placeholder="Enter your Official Name"
              {...register("nick", {
                required: "Please enter your nickname or common name you go by",
              })}
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
              placeholder="Enter your email address"
              {...register("email", {
                required: "Please enter email",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                  message: "Please enter valid email",
                },
              })}
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
