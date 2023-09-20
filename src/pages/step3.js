import React from "react";
import { fondamento } from "./_app";

const Step3 = ({ register, errors, randomNumbers }) => {
  return (
    <>
      <div
        className={`text-xl font-medium w-full mb-3 text-center leading-6 text-gray-900 ${fondamento.className} `}
      >
        Proof of wallet ownership
      </div>

      <span className="text-lg font-semibold">
        {" "}
        Enter the phrase appropriately
      </span>

      <div className=" grid grid-cols-4 gap-4 pt-4 pb-7">
        {randomNumbers.map((item, i) => {
          return (
            <div key={i} className="flex flex-col gap-3 text-center">
              <div className="p-4 rounded-lg font-semibold text-center bg-slate-200 text-black ">
                <input
                  type="text"
                  id={`Val${i}`}
                  className=" border-b-[1px] border-slate-800 bg-transparent w-full focus:border-b-[1px] outline-none"
                  {...register(`Val${i}`, {
                    required: "Please enter the phrase",
                  })}
                />
                {errors[`Val${i}`] && <div className="text-red-500">*</div>}
              </div>
              <span className={`${fondamento.className} `}>{item}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Step3;
