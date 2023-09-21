import React from "react";
import { fondamento } from "./_app";

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
        <div className=" font-semibold space-x-5 w-full">
          <span>Official Name : </span>
          <span className="font-normal "> {officialName} </span>
        </div>
        <div className=" font-semibold space-x-5 w-full">
          <span>Email:</span>{" "}
          <span className="font-normal ">{email} Verified✅ </span>
        </div>

        <div className=" font-semibold space-x-5 w-full">
          <span>Nickname:</span>{" "}
          <span className="font-normal "> {nickname} </span>
        </div>
        <div className=" font-semibold space-x-5 w-full">
          <span>User Address:</span>
          <span className="font-normal ">{userAddress} </span>
        </div>
        <div className=" font-semibold space-x-5 w-full">
          <span>NewWallet Address:</span>
          <span className="font-normal ">{walletAddress} </span>
        </div>
      </div>
    </>
  );
};

export default Step5;
