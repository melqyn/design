import React from "react";
import Image from "next/image";
import grassScribbleGIF from "../images/grasshero2.gif";
import Link from "next/link";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

function HeroSection() {
  return (
    <section className="mx-12">
      <div className="flex flex-col">
        <div className="flex mb-8 justify-center">
          <Image
            src={grassScribbleGIF}
            alt="hero image"
            width={350}
            height={100} />
        </div>

        <div>
          <h1 className="text-[#574F4A] leading-[1.2] mb-8 text-3xl md:text-4xl lg:text-5xl font-extrabold md:text-center poppins">
            hello, i&apos;m melanie!</h1>
          <p className="text-[#76655B] mb-4 text-s lg:text-l md:text-center max-w-2xl">
            I&apos;m a problem solver dedicated to crafting feasible, practical and impactful design solutions.
            Passionate about accessibility, inclusive design, and user-centered research. 👩🏻‍💻
          </p>
          <p className="text-[#76655B] mb-8 lg:mb-12 text-s lg:text-l md:text-center">
            Currently UI/UX Designer at <b>Activate Interactive</b>.
          </p>
        </div>

        <Link href={"/#works"} className="flex md:justify-center text-[#76655B] text-opacity-50 text-s">
          Scroll down to view my works<ArrowDownIcon className="ml-3 h-5 w-5" /></Link>
      </div>

    </section>
  );
}

export default HeroSection;
