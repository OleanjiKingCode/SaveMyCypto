import Avatar from "boring-avatars";
import React, { useState } from "react";
import { Tab } from "@headlessui/react";

import { useAccount } from "wagmi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Id = () => {
  let categories = ["About", "Savings", "Plans"];
  const { isConnected, address } = useAccount();

  return (
    <div>
      <div className="relative">
        <div className="h-56 bg-amber-600/20 w-full" />
        <div className=" w-56 top-32 h-56 ml-[5%] rounded-full overflow-hidden bg-white absolute">
          <Avatar
            size={224}
            variant="bauhaus"
            name={address}
            colors={["#7bcefd", "#ffffff", "#fff9db", "#ff6b6b"]}
          />
        </div>
      </div>
      <div className="w-full px-2 pt-4 pb-10 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex max-w-3xl mr-3 space-x-1 rounded-xl bg-blue-900/20 p-1 ml-auto">
            {categories.map((category, i) => (
              <Tab
                key={i}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
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
                  "bg-white py-3 px-5  flex justify-center ",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                )}
              >
                <div className="font-semibold text-2xl">{item}</div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Id;
