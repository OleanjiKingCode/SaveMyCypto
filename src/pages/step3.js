import React from "react";
import { fondamento } from "./_app";

const Step3 = ({ mnemonic }) => {
  const getRandomPhrases = () => {
    const randomNumbers = [];
    while (randomNumbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * 12) + 1;
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    return randomNumbers;
  };

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
        {getRandomPhrases().map((item, i) => {
          return (
            <div key={i} className="flex flex-col gap-3 text-center">
              <div className="p-4 rounded-lg font-semibold text-center bg-slate-200 text-black ">
                <input
                  required
                  type="text"
                  className=" border-b-[1px] border-slate-800 bg-transparent w-full focus:border-b-[1px] outline-none"
                />
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
