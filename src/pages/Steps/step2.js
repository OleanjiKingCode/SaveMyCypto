import React from "react";
import { fondamento } from "@/utilities/fonts";

const Step2 = ({ mnemonic, walletAddress }) => {
  return (
    <>
      <div
        className={`text-xl font-medium w-full text-center leading-6 text-gray-900 ${fondamento.className} `}
      >
        New Wallet Created
      </div>
      <div className="w-full pt-1 pb-4 space-x-3">
        <span className="text-lg font-semibold">Address :</span>
        <span className="font-thin">{walletAddress} </span>
      </div>
      <span className="text-lg font-semibold">Secret Phrase: </span>
      <span className="text-md font-semibold">
        (Copy down the below phrase in a safe place){" "}
      </span>
      <div className=" grid grid-cols-4 gap-4 pt-2 pb-7">
        {mnemonic.map((item, i) => {
          return (
            <div key={i} className="flex flex-col gap-3 text-center">
              <div className="p-4 rounded-lg cursor-pointer w-full font-semibold text-center bg-slate-200 text-black ">
                {item}
              </div>
              <span className={`${fondamento.className} `}>{i + 1}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Step2;
