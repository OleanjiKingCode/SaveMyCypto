import React from "react";
import { useAccount } from "wagmi";
import { shortenAddress } from "@/utilities/shortenAddress";

const AccountInformation = ({
  register,
  closeModal,
  handleSubmit,
  onSubmit,
  errors,
  openConnectModal,
  openAccountModal,
}) => {
  const { isConnected, address } = useAccount();

  const AccountSavingInformation = ({
    register,
    errors,
    openConnectModal,
    openAccountModal,
  }) => {
    return (
      <div className="w-1/3 bg-white rounded p-4 mr-4">
        <h2 className="text-lg font-semibold mb-4 flex justify-center">
          Account Saving Information
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="receiverName"
          >
            Saving Box&apos;s Name <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="boxname"
            type="text"
            placeholder="Name"
            {...register(`boxname`, {
              required: "Please enter this savings name",
            })}
          />
          {errors.boxname && (
            <div className="py-1 text-red-500">{errors.boxname.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="savingsAccount"
          >
            Savings Account <span className="text-red-500">*</span>
          </label>
          {!isConnected ? (
            <div
              onClick={openConnectModal}
              className=" bg-blue-300 cursor-pointer rounded-lg w-full p-2 text-white flex items-center justify-center font-semibold"
            >
              ConnectButton
            </div>
          ) : (
            <div
              onClick={openAccountModal}
              className=" bg-blue-300 cursor-pointer rounded-lg w-full p-2 text-white flex items-center justify-center font-semibold"
            >
              {shortenAddress(address)}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="percentageToSave"
          >
            Percentage to Save <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="percentageToSave"
            type="number"
            placeholder="Percentage to Save"
            {...register(`percentageToSave`, {
              required: "Please enter this savings percentage",
              max: {
                value: 90,
                message: "Percentage cannot be greater than 90%",
              },
            })}
          />
          {errors.percentageToSave && (
            <div className="py-1 text-red-500">
              {errors.percentageToSave.message}
            </div>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="token"
          >
            Token <span className="text-red-500">*</span>
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="token"
            {...register("token")}
          >
            <option value="ETH">ETH</option>
            <option value="USDC">USDC</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="unlockDateTime"
          >
            Unlock date/time <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="unlockDateTime"
            type="datetime-local"
            {...register("unlockDateTime", {
              required: "Please choose an unlock time and date",
            })}
          />
          {errors.unlockDateTime && (
            <div className="py-1 text-red-500">
              {errors.unlockDateTime.message}
            </div>
          )}
        </div>
      </div>
    );
  };

  const ReceiversInformation = ({ register, errors }) => {
    return (
      <div className="w-1/3 bg-white rounded p-4 mr-4">
        <h2 className="text-lg font-semibold mb-4 flex justify-center">
          Receivers Information
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="receiverName"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="receiverName"
            type="text"
            placeholder="Name"
            {...register("receiverName", {
              required: "Please enter the receivers name",
              minLength: {
                value: 3,
                message: "Receivers name should be more than 3 chars",
              },
            })}
          />
          {errors.receiverName && (
            <div className="py-1 text-red-500">
              {errors.receiverName.message}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="receiverAddress"
          >
            Wallet Address (optional)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="receiverAddress"
            type="text"
            placeholder="Address"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="receiverEmail"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="receiverEmail"
            type="email"
            placeholder="Email"
            {...register("receiverEmail", {
              required: "Please enter the receivers email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please enter valid email",
              },
            })}
          />
          {errors.receiverEmail && (
            <div className="text-red-500 py-1">
              {errors.receiverEmail.message}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="receiverPhone"
          >
            WhatsApp phone number <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="receiverPhone"
            type="tel"
            placeholder="WhatsApp phone number"
            {...register("receiverPhone", {
              required: "Please enter a valid whatsApp number",
            })}
          />
          {errors.receiverPhone && (
            <div className="text-red-500 py-1">
              {errors.receiverPhone.message}
            </div>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="receiverNickname"
          >
            Nickname (optional)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="receiverNickname"
            type="text"
            placeholder="Nickname"
          />
        </div>
      </div>
    );
  };

  const NextOfKinInformation = ({ register, errors }) => {
    return (
      <div className="w-1/3 bg-white rounded p-4 mr-4">
        <h2 className="text-lg font-semibold mb-4 flex justify-center">
          Next of Kin&apos;s Information
        </h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="kinName"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="kinName"
            type="text"
            placeholder="Name"
            {...register("kinName", {
              required: "Please enter the Kin's name",
              minLength: {
                value: 3,
                message: "Kin's name should be more than 3 chars",
              },
            })}
          />
          {errors.kinName && (
            <div className="py-1 text-red-500">{errors.kinName.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="kinAddress"
          >
            Wallet Address (optional)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="kinAddress"
            type="text"
            placeholder="Address"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="kinEmail"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="kinEmail"
            type="email"
            placeholder="Email"
            {...register("kinEmail", {
              required: "Please enter Kin's email",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please enter valid email",
              },
            })}
          />
          {errors.kinEmail && (
            <div className="text-red-500 py-1">{errors.kinEmail.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="kinPhone"
          >
            WhatsApp phone number <span className="text-red-500">*</span>
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="kinPhone"
            type="tel"
            placeholder="WhatsApp phone number"
            {...register("kinPhone", {
              required: "Please enter a valid whatsApp number",
            })}
          />
          {errors.kinPhone && (
            <div className="text-red-500 py-1">{errors.kinPhone.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="kinNickname"
          >
            Nickname (optional)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="kinNickname"
            type="text"
            placeholder="Nickname"
          />
        </div>
      </div>
    );
  };

  return (
    <form
      className="bg-white rounded pt-2 mb-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-row">
        <AccountSavingInformation
          register={register}
          errors={errors}
          openConnectModal={openConnectModal}
          openAccountModal={openAccountModal}
        />
        <ReceiversInformation register={register} errors={errors} />
        <NextOfKinInformation register={register} errors={errors} />
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
export default AccountInformation;
