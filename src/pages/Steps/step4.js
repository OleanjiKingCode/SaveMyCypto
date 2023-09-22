import React from "react";
import { fondamento } from "@/utilities/fonts";

const Step4 = ({ email, register, errors }) => {
  return (
    <>
      <div
        className={`text-xl font-medium w-full mb-3 text-center leading-6 text-gray-900 ${fondamento.className} `}
      >
        Verify Your Email
      </div>

      <div className="text-lg w-full text-center pt-2">
        A code has been sent to your email{" "}
        <span className=" font-thin italic">{email}</span>
      </div>
      <div className="w-full text-center my-2 ">
        <input
          type="text"
          className="w-48 h-6 py-4 my-4 text-center tracking-[10px] font-semibold text-xl px-3 border-slate-600 border-[1px] outline-none"
          id="code"
          placeholder="CODE"
          {...register("code", {
            required: "Please enter your the code sent to your email",
          })}
        />
        {errors.code && (
          <div className="py-1 text-red-500">{errors.code.message}</div>
        )}
      </div>
    </>
  );
};

export default Step4;
