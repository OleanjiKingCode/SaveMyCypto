import { useMultipleForm } from "@/context/useMultipleForm";
import React from "react";
import { fondamento } from "./_app";
import Step1 from "./step1";
import Step2 from "./step2";

export default function Signup() {
  const arraySteps = [<Step1 key="step1" />, <Step2 key="step2" />];
  const {
    currentStepIndex,
    steps,
    step,
    previous,
    next,
    isFirstIndex,
    isLastIndex,
  } = useMultipleForm(arraySteps);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white py-5 w-[40%] h-[50%] px-9 rounded-lg shadow-md">
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
            >
              Back
            </button>
          )}

          <button
            className=" rounded-lg text-md py-2 px-5 text-center bg-black text-white "
            onClick={next}
          >
            {isLastIndex ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
