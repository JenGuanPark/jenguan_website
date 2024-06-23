import React, { Fragment } from "react";
import Meta from "@/components/Meta";
import Image from "next/image";
export default function Bridge() {
  return (
    <Fragment>
      <Meta />
      <div className="w-full md:w-1/2 mx-auto p-6 flex flex-col justify-center items-center bg-gray-50 dark:bg-09 rounded-xl">
        <h1 className="flex flex-col sm:flex-row justify-center items-center text-4xl font-bold">
          <span className="text-center w-full md:w-auto white-space-nowrap">
            Fuck you ZkSync and Layerzero 😠
          </span>
        </h1>
        <h3 className="mt-2 flex flex-col sm:flex-row justify-center  items-center text-3xl font-bold">
          <span className="mx-2 mt-4 sm:mt-2">I will always love</span>
          <a
            className="mt-0 sm:mt-2 text-custom-green underline"
            href="https://arbitrum.foundation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arbitrum ❤️
          </a>
        </h3>
        <h3 className="text-2xl text-center mt-8">Thanks for the follow!</h3>
        <a
          href="https://twitter.com/JenGuan_eth"
          target="_blank"
          className="py-4 pr-4"
        >
          <div
            style={{
              borderRadius: "50%",
              overflow: "hidden",
              width: "50px",
              height: "50px",
            }}
          >
            <Image
              src="/img/logo2.png"
              alt="logo"
              width={60}
              height={60}
              layout="intrinsic"
            />
          </div>
        </a>
      </div>
    </Fragment>
  );
}
