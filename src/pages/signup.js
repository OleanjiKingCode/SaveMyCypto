import { useMultipleForm } from "@/context/useMultipleForm";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Step1 from "./step1";
import { useForm, SubmitHandler } from "react-hook-form";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import Step2 from "./step2";
import Step3 from "./step3";

export default function Signup() {
  const { isConnected, address } = useAccount();
  const wallet = ethers.Wallet.createRandom();

  const walletDetails = {
    privateKey: wallet.privateKey,
    address: wallet.address,
    mnemonic: wallet._mnemonic().phrase.split(" "),
  };

  const InitialData = {
    officialName: "",
    email: "",
    nickname: "",
    userAddress: "",
    walletAddress: walletDetails.address,
    mnemonic: walletDetails.mnemonic,
    privateKey: walletDetails.privateKey,
    randomNumbers: [],
    randPhrasesAns: [],
  };

  const [data, setData] = useState(InitialData);

  const updateDataInfo = (info) => {
    setData((prev) => {
      return { ...prev, ...info };
    });
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const arraySteps = [
    <Step1
      key="step1"
      register={register}
      errors={errors}
      UpdateDataInfo={updateDataInfo}
      {...data}
    />,
    <Step2
      key="step2"
      UpdateDataInfo={updateDataInfo}
      walletDetails={walletDetails}
      {...data}
    />,
    <Step3 key="step3" {...data} UpdateDataInfo={updateDataInfo} />,
  ];
  const {
    currentStepIndex,
    steps,
    step,
    previous,
    next,
    isFirstIndex,
    isLastIndex,
  } = useMultipleForm(arraySteps);

  const notify = () => {
    toast.warn("Connect your wallet", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const onSubmit = () => {
    if (currentStepIndex === 0) {
      if (!isConnected) {
        notify();
        return;
      } else {
        updateDataInfo({ userAddress: address });
      }
    } else if (currentStepIndex === 2) {
    }
    next();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white py-5 w-[40%] h-[50%] px-9 rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          {step}
          <div
            className={`w-full flex flex-row ${
              true ? "justify-end" : "justify-between"
            } items-center`}
          >
            {/* {!isFirstIndex && (
              <button
                className=" rounded-lg text-md py-2 px-5 text-center bg-black text-white "
                onClick={previous}
                type="button"
              >
                Back
              </button>
            )} */}

            <button
              className=" rounded-lg text-md py-2 px-5 text-center bg-black text-white"
              type="submit"
            >
              {isLastIndex ? "Finish" : "Next"}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
