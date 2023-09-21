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

      <div className="text-lg w-full py-4  grid grid-cols-2 gap-2">
        <div className="w-40% font-semibold">Official Name: </div>
        <div className="font-normal "> {officialName} </div>
        <div className="w-40% font-semibold">Email:</div>{" "}
        <div className="font-normal ">{email}</div>
        <div className="w-40% font-semibold">Email Status:</div>{" "}
        <div className="font-normal ">Verified✅ </div>
        <div className="w-40% font-semibold">Nickname:</div>{" "}
        <div className="font-normal "> {nickname} </div>
        <div className="w-40% font-semibold">User Address:</div>
        <div className="font-normal ">{shortenAddress(userAddress)} </div>
        <div className="w-40% font-semibold">Wallet Address:</div>
        <div className="font-normal ">{shortenAddress(walletAddress)} </div>
      </div>
    </>
  );
};

export default Step5;
