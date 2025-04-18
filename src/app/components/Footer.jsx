"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Footer = () => {
  const currentPage = usePathname();

  let secondHeadingText = "";
  let secondHeadingUrl = "";

  switch (currentPage) {
    case "/about":
      secondHeadingText = "See my works 🎨";
      secondHeadingUrl = "/#works";
      break;
    default:
      secondHeadingText = "Learn more about me 👀";
      secondHeadingUrl = "/about";
  }

  return (
    <div className="bottom-0 left-0 right-0 mt-16">
      <div className="flex flex-col items-left mx-auto pb-16">
        <h3 className="text-[#76655B] text-lg font-bold py-2">
          ... that&apos;s not all!
        </h3>

        <Link href={secondHeadingUrl}>
          <h3 className="flex items-center text-[#574F4A] text-xl md:text-2xl hover:text-[#574F4A] hover:text-opacity-50 font-bold py-2">
            {secondHeadingText}
            <ArrowRightIcon className="ml-3 h-5 w-5" />
          </h3>
        </Link>

        <Link href={"/Melanie Quek_Resume.pdf"}  target="_blank">
          <h3 className="flex items-center text-[#574F4A] text-xl md:text-2xl hover:text-[#574F4A] hover:text-opacity-50 font-bold py-2">
            view my resume 📄
            <ArrowRightIcon className="ml-3 h-5 w-5" />
          </h3>
        </Link>

        <Link href="https://www.linkedin.com/in/melaniequek">
          <h3 className="flex items-center text-[#574F4A] text-xl md:text-2xl hover:text-[#574F4A] hover:text-opacity-50 font-bold py-2">
            or say hello on Linkedin 👋🏻
            <ArrowRightIcon className="ml-3 h-5 w-5" />
          </h3>
        </Link>
      </div>
      <div className="flex flex-col items-left mx-auto pb-12">
      <p className="text-[#76655B] text-xs text-opacity-40 ">Designed and coded by Melanie Quek 2025 © </p></div>
    </div>
  );
};

export default Footer;
