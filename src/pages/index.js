import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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

      
    </div>
  );
}
