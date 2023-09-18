import { Inter, Fondamento } from "next/font/google";
import Lottie from "lottie-react";
import arrow from "./../data/arrowBlack.json";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center space-y-9 p-24 bg-white w-full ${inter.className}`}
    >
      <div className="flex flex-row space-x-3 text-7xl w-full items-center justify-center text-center font-bold text-black">
        <span>Save</span>
        <span className=" px-4 py-3 rounded-3xl bg-[#7bcefd] text-white ">
          YOUR
        </span>
        <span>Crypto</span>
      </div>

      <div
        className={`text-black pt-[65px] text-center w-[70%] text-lg ${fondamento.className} `}
      >
        This project was created to properly handle crypto of anyone as
        instructed in case of loss of life or any unfortunacy that befalls the
        owner.
      </div>
      <Lottie
        loop={true}
        animationData={arrow}
        style={{
          height: 70,
        }}
      />

      <Link
        className={`bg-black px-5 py-4 cursor-pointer rounded-3xl text-white font-semibold text-2xl `}
        href="./signup"
      >
        Get Started
      </Link>

      {/* <Transition appear show={isOpen} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className={`text-lg font-medium text-center leading-6 text-gray-900 ${fondamento.className} `}
                  >
                    Sign Up
                  </Dialog.Title>
              

                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-black hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Continue
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition> */}
    </div>
  );
}
