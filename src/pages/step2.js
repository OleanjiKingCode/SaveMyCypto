import React from "react";
import { ethers } from "ethers";
import { fondamento } from "./_app";

const Step2 = () => {
  const wallet = ethers.Wallet.createRandom();

  const walletDetails = {
    privateKey: wallet.privateKey,
    address: wallet.address,
    mnemonic: wallet._mnemonic().phrase.split(" "),
  };
  return (
    <div>
      <div
        className={`text-xl font-medium w-full text-center leading-6 text-gray-900 ${fondamento.className} `}
      >
        New Wallet Created
      </div>

      <span className="text-lg font-semibold">Secret Phrase:</span>
      <div className=" grid grid-cols-4 gap-4 py-7">
        {walletDetails.mnemonic.map((item, i) => {
          return (
            <div className="flex flex-col gap-3 text-center">
              <div
                key={i}
                className="p-4 rounded-lg font-semibold text-center bg-slate-200 text-black "
              >
                {item}
              </div>
              <span className={`${fondamento.className} `}>{i + 1}</span>
            </div>
          );
        })}
      </div>
      <div className="w-full pt-1 pb-4 space-x-3">
        <span className="text-lg font-semibold">Address :</span>
        <span className="font-thin">{walletDetails.address} </span>
      </div>
    </div>
  );
};

export default Step2;
