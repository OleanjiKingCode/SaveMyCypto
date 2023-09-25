import Avatar from "boring-avatars";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import { RxPlus } from "react-icons/rx";
import { useConnectModal, useAccountModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { shortenAddress } from "@/utilities/shortenAddress";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Id = () => {
  let categories = ["About", "Saves", "Plans"];
  const { isConnected, address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const [isOpen, setIsOpen] = useState(false);

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
                    <form className="bg-white rounded pt-2 mb-2">
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
                              required
                            />
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
                              required
                              max="90"
                            />
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
                              required
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
                              required
                            />
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
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="receiverAddress"
                            >
                              Address
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
                              required
                            />
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
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="receiverNickname"
                            >
                              Nickname
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
                            Next of Kin's Information
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
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="kinAddress"
                            >
                              Address
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
                              required
                            />
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
                              required
                            />
                          </div>
                          <div className="mb-4">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="kinNickname"
                            >
                              Nickname
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
                    </form>
                  </div>

                  <div className="mt-4 w-full flex flex-row justify-between">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-800"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-400"
                      // onClick={closeModal}
                    >
                      Submit
                    </button>
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
