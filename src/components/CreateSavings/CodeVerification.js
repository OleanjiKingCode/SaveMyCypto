import React from "react";

const CodeVerification = ({
  handleSubmit,
  verifySubmit,
  closeModal,
  register,
  errors,
}) => {
  return (
    <form
      className="bg-white rounded pt-2 mb-2"
      onSubmit={handleSubmit(verifySubmit)}
    >
      <div className="flex flex-row">
        <div className="w-full bg-white rounded p-4 mr-4">
          <h2 className="text-lg font-semibold mb-4 ">
            Verification Of Information
          </h2>
          <div className="mb-2 w-full justify-between flex flex-row items-center">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="receiverName"
            >
              Receiver&apos;s Email Code
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-48 h-6 py-4 my-4 text-center tracking-[10px] font-semibold text-xl px-3 border-slate-600 border-[1px] outline-none"
              id="receiversCode"
              placeholder="CODE"
              {...register("receiversCode", {
                required:
                  "Please enter your the code sent to the receivers email",
              })}
            />
            {errors.receiversCode && (
              <div className="py-1 text-red-500">
                {errors.receiversCode.message}
              </div>
            )}
          </div>
          <div className="mb-2 w-full justify-between flex flex-row items-center">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="receiverName"
            >
              Nex Of Kin&apos;s Email Code
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-48 h-6 py-4 my-4 text-center tracking-[10px] font-semibold text-xl px-3 border-slate-600 border-[1px] outline-none"
              id="KinCode"
              placeholder="CODE"
              {...register("KinCode", {
                required:
                  "Please enter your the code sent to the Next of Kins email",
              })}
            />
            {errors.KinCode && (
              <div className="py-1 text-red-500">{errors.KinCode.message}</div>
            )}
          </div>
          <div className="mb-2 w-full justify-between flex flex-row items-center">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="receiverName"
            >
              Receivers WhatsApp Code
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-48 h-6 py-4 my-4 text-center tracking-[10px] font-semibold text-xl px-3 border-slate-600 border-[1px] outline-none"
              id="receiversWA"
              placeholder="CODE"
              {...register("receiversWA", {
                required:
                  "Please enter your the code sent to the receivers email",
              })}
            />
            {errors.receiversWA && (
              <div className="py-1 text-red-500">
                {errors.receiversWA.message}
              </div>
            )}
          </div>
          <div className="mb-2 w-full justify-between flex flex-row items-center">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="receiverName"
            >
              Next Of Kin&apos;s WhatsApp Code
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-48 h-6 py-4 my-4 text-center tracking-[10px] font-semibold text-xl px-3 border-slate-600 border-[1px] outline-none"
              id="NextofKinWA"
              placeholder="CODE"
              {...register("NextofKinWA", {
                required:
                  "Please enter your the code sent to the receivers email",
              })}
            />
            {errors.NextofKinWA && (
              <div className="py-1 text-red-500">
                {errors.NextofKinWA.message}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-2 w-full flex flex-row justify-between">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-800"
          onClick={closeModal}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-400"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CodeVerification;
