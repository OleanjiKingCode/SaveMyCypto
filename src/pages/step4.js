import React from "react";
import { fondamento } from "./_app";

const Step4 = ({ email }) => {
  return (
    <>
      <div
        className={`text-xl font-medium w-full mb-3 text-center leading-6 text-gray-900 ${fondamento.className} `}
      >
        Verify Your Email
      </div>

      <span className="text-lg font-semibold">
        A code has been sent to your email <span className="">{email}</span>
      </span>
    </>
  );
};

export default Step4;
