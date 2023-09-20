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
import Step4 from "./step4";

export default function Signup() {
  const { isConnected, address } = useAccount();
  // const wallet = ethers.Wallet.createRandom();

  // const walletDetails = {
  //   privateKey: wallet.privateKey,
  //   address: wallet.address,
  //   mnemonic: wallet._mnemonic().phrase.split(" "),
  // };

  const InitialData = {
    officialName: "",
    email: "",
    nickname: "",
    userAddress: "",
    walletAddress: "",
    mnemonic: [],
    privateKey: "",
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
    <Step1 key="step1" register={register} errors={errors} {...data} />,
    <Step2 key="step2" {...data} />,
    <Step3 key="step3" {...data} register={register} errors={errors} />,
    <Step4 key="step4" {...data} register={register} errors={errors}  />,
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

  const wrongEntry = () => {
    toast.warn("You have entered a wrong phrase", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const getRandomPhrases = () => {
    const randomNumbers = [];
    while (randomNumbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * 12) + 1;
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
        randomNumbers.sort((a, b) => a - b);
      }
    }
    updateDataInfo({
      randomNumbers: randomNumbers,
    });
    return randomNumbers;
  };

  const onSubmit = ({
    Val1,
    Val2,
    Val3,
    Val4,
    Val5,
    officialName,
    nick,
    email,
  }) => {
    let incorrectEntryFound = false;
    if (currentStepIndex === 0) {
      if (!isConnected) {
        notify();
        return;
      } else {
        updateDataInfo({
          userAddress: address,
          officialName: officialName,
          nick: nick,
          email: email,
        });
        const wallet = ethers.Wallet.createRandom();

        const walletDetails = {
          privateKey: wallet.privateKey,
          address: wallet.address,
          mnemonic: wallet._mnemonic().phrase.split(" "),
        };
        updateDataInfo({
          walletAddress: walletDetails.address,
          mnemonic: walletDetails.mnemonic,
          privateKey: walletDetails.privateKey,
        });
      }
    } else if (currentStepIndex === 1) {
      getRandomPhrases();
    } else if (currentStepIndex === 2) {
      const allAnswers = [Val1, Val2, Val3, Val4, Val5];
      data.randomNumbers.forEach((item, i) => {
        if (data.mnemonic[item - 1] !== allAnswers[i]) {
          wrongEntry();
          incorrectEntryFound = true;
          return;
        }
      });
    }
    if (!incorrectEntryFound) {
      next();
    }
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
