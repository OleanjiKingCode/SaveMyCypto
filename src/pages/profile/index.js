import Avatar from "boring-avatars";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import { RxPlus } from "react-icons/rx";
import { useConnectModal, useAccountModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useForm } from "react-hook-form";
import { useMultipleForm } from "@/context/useMultipleForm";
import { shortenAddress } from "@/utilities/shortenAddress";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Id = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { currentStepIndex, next, isLastIndex } = useMultipleForm(["1", "2"]);
  let categories = ["About", "Saves", "Plans"];
  const { isConnected, address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = async ({
    boxname,
    percentageToSave,
    token,
    unlockDateTime,
    receiverName,
    receiverEmail,
    receiverPhone,
    kinName,
    kinEmail,
    kinPhone,
  }) => {
    console.log(
      boxname,
      address,
      percentageToSave,
      token,
      unlockDateTime,
      receiverName,
      receiverEmail,
      receiverPhone,
      kinName,
      kinEmail,
      kinPhone
    );
    next();
  };

  const verifySubmit = async() => {

  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const Details = (cat) => {
    if (cat === "About") {
      return <div className="">GM, Oleanji</div>;
    } else if (cat === "Saves") {
      return (
        <div className="w-full flex flex-col gap-4 justify-center items-center outline-none">
          <div
            className="bg-slate-200 rounded-md hover:bg-slate-300 p-5"
            onClick={openModal}
          >
            <RxPlus size={80} />
          </div>
          <span>No Savings</span>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="relative">
        <div className="h-56 bg-amber-600/20 w-full" />
        <div className=" top-32 w-[200px] h-[200px] ml-[5%] rounded-full overflow-hidden bg-white absolute">
          <Avatar
            size={200}
            variant="bauhaus"
            name={address}
            colors={["#7bcefd", "#ffffff", "#fff9db", "#ff6b6b"]}
          />
        </div>
      </div>
      <div className="w-full px-2 pt-1 pb-10 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex max-w-lg mr-3 space-x-1 rounded-xl bg-blue-900/20 p-1 ml-auto">
            {categories.map((category, i) => (
              <Tab
                key={i}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-16">
            {categories.map((item, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "bg-white pt-3 pb-1 px-5  flex justify-center"
                )}
              >
                <div className="font-semibold text-2xl w-full">
                  {Details(item)}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 flex justify-center text-gray-900"
                  >
                    Create A New Savings Box
                  </Dialog.Title>
                  <div className="mt-2">
                    {currentStepIndex === 0 && (
                      <form
                        className="bg-white rounded pt-2 mb-2"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="flex flex-row">
                          <div className="w-1/3 bg-white rounded p-4 mr-4">
                            <h2 className="text-lg font-semibold mb-4 flex justify-center">
                              Account Saving Information
                            </h2>
                            <div className="mb-4">
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="receiverName"
                              >
                                Saving Box&apos;s Name{" "}
                                <span className="text-red-500">*</span>
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
                                <div className="py-1 text-red-500">
                                  {errors.boxname.message}
                                </div>
                              )}
                            </div>
                            <div className="mb-4">
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="savingsAccount"
                              >
                                Savings Account{" "}
                                <span className="text-red-500">*</span>
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
                                Percentage to Save{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="percentageToSave"
                                type="number"
                                placeholder="Percentage to Save"
                                {...register(`percentageToSave`, {
                                  required:
                                    "Please enter this savings percentage",
                                  max: {
                                    value: 90,
                                    message:
                                      "Percentage cannot be greater than 90%",
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
                                Unlock date/time{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="unlockDateTime"
                                type="datetime-local"
                                {...register("unlockDateTime", {
                                  required:
                                    "Please choose an unlock time and date",
                                })}
                              />
                              {errors.unlockDateTime && (
                                <div className="py-1 text-red-500">
                                  {errors.unlockDateTime.message}
                                </div>
                              )}
                            </div>
                          </div>
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
                                    message:
                                      "Receivers name should be more than 3 chars",
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
                                    value:
                                      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
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
                                WhatsApp phone number{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="receiverPhone"
                                type="tel"
                                placeholder="WhatsApp phone number"
                                {...register("receiverPhone", {
                                  required:
                                    "Please enter a valid whatsApp number",
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
                                    message:
                                      "Kin's name should be more than 3 chars",
                                  },
                                })}
                              />
                              {errors.kinName && (
                                <div className="py-1 text-red-500">
                                  {errors.kinName.message}
                                </div>
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
                                    value:
                                      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                                    message: "Please enter valid email",
                                  },
                                })}
                              />
                              {errors.kinEmail && (
                                <div className="text-red-500 py-1">
                                  {errors.kinEmail.message}
                                </div>
                              )}
                            </div>
                            <div className="mb-4">
                              <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="kinPhone"
                              >
                                WhatsApp phone number{" "}
                                <span className="text-red-500">*</span>
                              </label>
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="kinPhone"
                                type="tel"
                                placeholder="WhatsApp phone number"
                                {...register("kinPhone", {
                                  required:
                                    "Please enter a valid whatsApp number",
                                })}
                              />
                              {errors.kinPhone && (
                                <div className="text-red-500 py-1">
                                  {errors.kinPhone.message}
                                </div>
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
                            // onClick={closeModal}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    )}
                    {currentStepIndex === 1 && (
                      <div>
                        <form
                          className="bg-white rounded pt-2 mb-2"
                          onSubmit={handleSubmit(verifySubmit)}
                        >
                          <div className="flex flex-row">
                            <div className="w-1/3 bg-white rounded p-4 mr-4">
                              <h2 className="text-lg font-semibold mb-4 flex justify-center">
                                Account Saving Information
                              </h2>
                              <div className="mb-4">
                                <label
                                  className="block text-gray-700 text-sm font-bold mb-2"
                                  htmlFor="receiverName"
                                >
                                  Saving Box&apos;s Name{" "}
                                  <span className="text-red-500">*</span>
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
                                  <div className="py-1 text-red-500">
                                    {errors.boxname.message}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Id;
