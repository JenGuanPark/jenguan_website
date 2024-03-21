import { useEffect, useState } from "react";
//Importing icon
import { IoLogoGithub, IoFlash, IoPlanet } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer className="bg-02 sm:flex sm:items-center sm:justify-between p-2 sm:p-6 xl:p-6 dark:bg-09">
      <p className="mb-4 text-sm text-center text-gray-500 dark:text-gray-300  sm:mb-0">
        &copy; {new Date().getFullYear()}-
        <a
          className="font-bold hover:text-custom-green hover:dark:text-custom-green"
          href="https://twitter.com/JenGuan_eth"
          target="_blank"
          rel="noopener noreferrer"
        >
          JenGuan
        </a>
        . All rights reserved
      </p>
      <div className="flex justify-center items-center space-x-1">
        {/* Twitter */}
        <a
          href="https://twitter.com/JenGuan_eth"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-300 hover:text-custom-green hover:dark:text-custom-green hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <FaXTwitter className="w-5 h-5" />
          <span className="sr-only">Twitter</span>
        </a>
        {/* GitHub */}
        <a
          href="https://github.com/JenGuanPark"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-300 hover:text-custom-green hover:dark:text-custom-green hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <IoLogoGithub className="w-5 h-5" />
          <span className="sr-only">Github</span>
        </a>
        {/* Bitcoin Lightning */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-300 hover:text-custom-green hover:dark:text-custom-green hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <IoFlash className="w-5 h-5" />
          <span className="sr-only">Bitcoin Wallet</span>
        </a>
        {/* WebSite */}
        <a
          href="https://twitter.com/JenGuan_eth"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-300 hover:text-custom-green hover:dark:text-custom-green hover:bg-gray-100 dark:hover:bg-gray-600"
        >
          <IoPlanet className="w-6 h-6" />
          <span className="sr-only">Twitter</span>
        </a>
      </div>
    </footer>
  );
}
