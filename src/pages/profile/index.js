import Avatar from "boring-avatars";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import { RxPlus } from "react-icons/rx";
import { useConnectModal, useAccountModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useForm } from "react-hook-form";
import { useMultipleForm } from "@/context/useMultipleForm";
import AccountInformation from "@/components/CreateSavings/AccountInformation";
import CodeVerification from "@/components/CreateSavings/CodeVerification";

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
  const { address } = useAccount();
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

  const verifySubmit = async () => {
    console.log(boxname);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const Details = (category) => {
    if (category === "About") {
      return <div className="">GM, Oleanji</div>;
    } else if (category === "Saves") {
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
                <Dialog.Panel
                  className={`w-full ${
                    currentStepIndex === 0 ? "max-w-5xl" : "max-w-lg"
                  } transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 flex justify-center text-gray-900"
                  >
                    Create A New Savings Box
                  </Dialog.Title>
                  <div className="mt-2">
                    {currentStepIndex === 0 && (
                      <AccountInformation
                        register={register}
                        errors={errors}
                        openConnectModal={openConnectModal}
                        openAccountModal={openAccountModal}
                        handleSubmit={handleSubmit}
                        onSubmit={onSubmit}
                        closeModal={closeModal}
                      />
                    )}
                    {currentStepIndex === 1 && (
                      <CodeVerification
                        register={register}
                        errors={errors}
                        handleSubmit={handleSubmit}
                        verifySubmit={verifySubmit}
                        closeModal={closeModal}
                      />
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
