import { Inter, Noto_Serif_Georgian } from "next/font/google";
// import Lottie from "lottie-react";
import arrow from './../data/arrow.json'

const inter = Inter({ subsets: ["latin"] });

const serif = Noto_Serif_Georgian({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center space-y-10 p-24 bg-gradient-to-br from-red-500 via-purple-500 to-black w-full ${inter.className}`}
    >
      <div className="flex flex-row space-x-3 text-7xl font-bold text-white">
        <span>Save</span>
        <span className=" px-4 py-3 rounded-3xl bg-[#7bcefd] text-black ">
          YOUR
        </span>
        <span>Crypto</span>
      </div>

      <div className="text-white py-28">
        This project was created to properly handle crypto of anyone in case of
        loss of life of the owner.
      </div>
      {/* <Lottie
        loop={true}
        animationData={arrow}
        style={{
          height: 360,
        }}
      /> */}
      <div
        className={`bg-[#ec84fa] px-5 mr-14 py-4 rounded-3xl text-white font-semibold text-3xl `}
      >
        Get Started
      </div>
    </div>
  );
}
