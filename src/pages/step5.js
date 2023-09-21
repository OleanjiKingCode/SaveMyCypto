import React from "react";
import { fondamento } from "./_app";
import { shortenAddress } from "@/utilities/shortenAddress";

const Step5 = ({
  officialName,
  email,
  nickname,
  userAddress,
  walletAddress,
}) => {
  return (
    <>
      <div
        className={`text-xl font-medium w-full mb-3 text-center leading-6 text-gray-900 ${fondamento.className} `}
      >
        Summary Of Sign Up Process
      </div>

      <div className="text-lg w-full py-4 space-y-2">
        <div className=" font-semibold space-x-2 flex flex-row   w-full">
          <div className="w-40%">Official Name : </div>
          <div className="font-normal "> {officialName} </div>
        </div>
        <div className=" font-semibold space-x-2 flex flex-row   w-full">
          <div className="w-40%">Email:</div>{" "}
          <div className="font-normal ">{email} Verified✅ </div>
        </div>

        <div className=" font-semibold space-x-2 flex flex-row   w-full">
          <div className="w-40%">Nickname:</div>{" "}
          <div className="font-normal "> {nickname} </div>
        </div>
        <div className=" font-semibold space-x-2 flex flex-row   w-full">
          <div className="w-40% block">User Address:</div>
          <div className="font-normal ">{shortenAddress(userAddress)} </div>
        </div>
        <div className=" font-semibold space-x-2 flex flex-row   w-full">
          <div className="w-40%">NewWallet Address:</div>
          <div className="font-normal ">{walletAddress} </div>
        </div>
      </div>
    </>
  );
};

export default Step5;
