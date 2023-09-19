import { useMultipleForm } from "@/context/useMultipleForm";
import React, { useState } from "react";
import { fondamento } from "./_app";
import Step1 from "./step1";
import { useForm, SubmitHandler } from "react-hook-form";
import Step2 from "./step2";

export default function Signup() {
  const InitialData = {
    officialName: "",
    email: "",
    nickname: "",
    address: "",
    mnemonic: "",
    privateKey: "",
  };

  const [data, setData] = useState(InitialData);

  const updateDataInfo = (info) => {
    console.log(info);
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
      register={register}
      errors={errors}
      UpdateDataInfo={updateDataInfo}
      {...data}
    />,
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

  const onSubmit = () => {
    if (currentStepIndex === 0) {
      if (!data.address.length < 1) {
        window.alert("connect your wallet");
      }
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
              isFirstIndex ? "justify-end" : "justify-between"
            } items-center`}
          >
            {!isFirstIndex && (
              <button
                className=" rounded-lg text-md py-2 px-5 text-center bg-black text-white "
                onClick={previous}
                type="button"
              >
                Back
              </button>
            )}

            <button
              className=" rounded-lg text-md py-2 px-5 text-center bg-black text-white"
              type="submit"
            >
              {isLastIndex ? "Finish" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
