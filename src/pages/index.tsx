import React, { Fragment, useEffect } from "react";
import { useAccount } from "wagmi";
import Meta from "@/components/Meta";
import dynamic from "next/dynamic";
import Image from "next/image";

const CountdownWithNoSSR = dynamic(() => import("@/components/Countdown"), {
  ssr: false,
});

export default function Home() {
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      console.log("Wallet address: ", address);
    } else {
      console.log("Not connected");
    }
  }, [address, isConnected]);

  return (
    <Fragment>
      <Meta />
      <div className="w-full flex flex-col">
        <h1 className="flex flex-col sm:flex-row justify-center items-center text-4xl sm:text-4xl font-bold text-gray-800 dark:text-white">
          <div className="relative w-8 h-8 inline-block align-middle mr-2">
            {" "}
            <Image
              src="https://static.oklink.com/cdn/wallet/logo/BTC.png?x-oss-process=image/resize,w_56,h_56,type_6/ignore-error,1"
              alt="BTC logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          Next Bitcoin Halving Countdown
        </h1>
        <CountdownWithNoSSR />
      </div>
    </Fragment>
  );
}
