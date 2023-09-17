import { Inter, Fondamento } from "next/font/google";
import Lottie from "lottie-react";
import arrow from "./../data/arrowBlack.json";

const inter = Inter({ subsets: ["latin"] });

const fondamento = Fondamento({
  weight: "400",
  subsets: ["latin"],
});

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
      <div
        className={`bg-black px-5 py-4 rounded-3xl text-white font-semibold text-2xl `}
      >
        Get Started
      </div>
    </div>
  );
}
