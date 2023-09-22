import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useMultipleForm } from "@/context/useMultipleForm";
import { CgSpinner } from "react-icons/cg";
import { generateRandom5DigitCode } from "@/utilities/getRandomDigits";
import { noWallet, wrongCode, wrongEntry } from "@/components/toasts";
import { ethers } from "ethers";
import { useAccount } from "wagmi";
import Step1 from "./Steps/step1";
import Step2 from "./Steps/step2";
import Step3 from "./Steps/step3";
import Step4 from "./Steps/step4";
import Step5 from "./Steps/step5";

export default function Signup() {
  const { isConnected, address } = useAccount();
  const [loading, setLoading] = useState(false);
  const [codeForEmail, setCodeForEmail] = useState("");

  useEffect(() => {
    setCodeForEmail(generateRandom5DigitCode());
  }, []);

  const sendEmail = async (to) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ to, codeForEmail }),
      });
      if (response.status === 200) {
        console.log("Email sent successfully.");
      } else {
        console.log("Error sending email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const InitialData = {
    officialName: "",
    email: "",
    nickname: "",
    userAddress: "",
    walletAddress: "",
    mnemonic: [],
    privateKey: "",
    randomNumbers: [],
    code: codeForEmail,
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
    formState: { errors },
  } = useForm();

  const arraySteps = [
    <Step1 key="step1" register={register} errors={errors} {...data} />,
    <Step2 key="step2" {...data} />,
    <Step3 key="step3" {...data} register={register} errors={errors} />,
    <Step4 key="step4" {...data} register={register} errors={errors} />,
    <Step5 key="step5" {...data} />,
  ];
  const { currentStepIndex, step, next, isLastIndex } =
    useMultipleForm(arraySteps);

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

  const onSubmit = async ({
    Val1,
    Val2,
    Val3,
    Val4,
    Val5,
    officialName,
    nick,
    code,
    email,
  }) => {
    let incorrectEntryFound = false;
    setLoading(true);
    if (currentStepIndex === 0) {
      if (!isConnected) {
        noWallet();
        setLoading(false);
        return;
      } else {
        updateDataInfo({
          userAddress: address,
          officialName: officialName,
          nickname: nick,
          email: email,
        });
        await sendEmail(email);
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
          setLoading(false);
          return;
        }
      });
    } else if (currentStepIndex === 3) {
      if (code !== codeForEmail) {
        console.log(code, codeForEmail);
        wrongCode();
        setLoading(false);
        return;
      }
    }
    if (!incorrectEntryFound) {
      setLoading(false);
      next();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-white">
      <div className="bg-white py-5 h-[50%] w-[80%] lg:w-[45%] lg:h-[50%] sm:px-9 px-3 rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          {step}
          <div
            className={`w-full flex flex-row ${
              true ? "justify-end" : "justify-between"
            } items-center`}
          >
            <button
              className=" rounded-lg text-md py-2 px-5 text-center bg-black text-white"
              type="submit"
            >
              {loading ? (
                <CgSpinner className="animate-spin" size={20} />
              ) : isLastIndex ? (
                "Sign and Finish"
              ) : (
                "Next"
              )}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
