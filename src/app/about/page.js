import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import ExperienceSection from "../components/ExperienceSection"
import Timeline from "../components/Timeline";
import Link from "next/link";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/solid"

const About = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFFBFA]">
      <Navbar />

      <div className="container mt-36 mx-auto py-4 px-12 lg:px-48">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="col-span-7 pb-8 place-self-left">
            <h1 className="text-[#574F4A] text-2xl font-bold pb-8">
            👋🏻 About Me   </h1>
            <p className="text-[#636363] pb-4 leading-relaxed">
            I’m a <b>problem solver</b> at heart with a passion for blending strategy, data, and user-centered methodologies to create meaningful, practical, and feasible solutions.
            </p>
            <p className="text-[#636363] pb-4 leading-relaxed">
            Currently, I’m a <b>UI/UX Designer</b> at Activate Interactive, where I focus on government projects. My experience also includes working in <b>fast-paced agile environments</b> like the Singapore Airlines Digital Innovation Lab, as well as peer mentoring in interaction design.
            </p>
            <p className="text-[#636363] pb-4 leading-relaxed">
            I take a <b>product-thinking approach</b> to research and design—balancing user needs, business goals, and technical feasibility to create impactful experiences.
            </p>
          </div>
          <div className="col-span-5 flex md:pl-8 lg:pl-16">
            <div className="h-full flex items-start">
              <Image
                src="/images/melpic.jpg"
                alt="Melanie's Picture"
                width={604.8}
                height={756}
                className="object-right rounded-xl"/>
            </div>
          </div>
        </div>

        <div>
        <h1 className="text-[#574F4A] mt-16 text-2xl font-bold pb-8">
        💻 My Experience </h1>
        <p className="text-[#636363] pb-4 leading-relaxed">
            ... at a glance! View my resume for details on my different experiences.
            </p>
          <Timeline/>
          <Link
                href={"/Melanie Quek_Resume.pdf"}
                target="_blank"
                className="text-[#574F4A] inline-flex items-center hover:text-opacity-70 font-bold py-4 pl-8 pr-8 border-2 border-[#574F4A] hover:border-[#574F4A70] rounded-full"
              >
                View Melanie's resume
                <ArrowTopRightOnSquareIcon className="ml-3 h-5 w-5" />
              </Link>
        </div>

        <div>
          <h1 className="text-[#574F4A] mt-16 text-2xl font-bold pb-8">
            👩🏻‍💻 At work, I&apos;m...
          </h1>
          <div className="p-8 bg-[#d3d3d3] bg-opacity-20 rounded-xl group">
            <p className="text-[#636363] font-bold pb-4 leading-relaxed">
            &quot;Melanie exhibited strong leadership skills, excellent communication, and people management skills in the various project teams...&quot;
            </p>

            <p className="text-[#636363] pb-4 leading-relaxed">
              Melanie is an exceptionally driven person, always ready to take on challenges. She challenged herself
              to pick up front-end web development ... Melanie adapted well into the dynamic innovation lab
              environment and has shown perseverance in pushing through ideas and turning them into working
              proof-of-concepts amid the uncertainties and tight timeline. Being a good team player, Melanie was
              well received by other interns and colleagues at KrisLab.
            </p>

            <div className="mb-4">
              <p className="text-[#636363] font-semibold leading-relaxed">
                ⸻ Ivan Khor
              </p>
              <p className="text-[#636363] text-opacity-70 text-xs pb-2 leading-relaxed">
                Lead Digital Innovation Technologist at <b>Singapore Airlines</b>, May 2023
              </p>
            </div>

            <Link
                href={"/Quek Yi Ning Melanie_SIA Testimonial.pdf"}
                target="_blank"
                className="text-[#574F4A] inline-flex items-center hover:text-opacity-70 font-bold py-4 pl-8 pr-8 border-2 border-[#574F4A] hover:border-[#574F4A70] rounded-full"
              >
                View full reference letter
                <ArrowTopRightOnSquareIcon className="ml-3 h-5 w-5" />
              </Link>

          </div>
        </div>
        
        <div>
          <h1 className="text-[#574F4A] mt-16 text-2xl font-bold pb-8">
            🌿 When I&apos;m not designing...</h1>
          <p className="text-[#636363] pb-8 leading-relaxed">
            I love most things creative and hands-on - I sketch, paint, crochet and make pottery at times. I also love travelling and exploring new food spots!
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-6 lg:grid-cols-12">
            <div className="col-span-3">
              <Image
                src="/images/cny.jpg"
                alt="Melanie and sister with crochet orange bag"
                width={302.4}
                height={403.2}
                className="h-auto w-full rounded-xl"
              />
              <p className="text-[#636363] pt-4 leading-relaxed">
                My older sister and me with our handmade crochet orange bags for Lunar New Year! 🍊🍊
              </p>
            </div>

            <div className="col-span-3">
              <Image
                src="/images/emccdance.jpg"
                alt="Melanie and sister with crochet orange bag"
                width={302.4}
                height={403.2}
                className="h-auto w-full rounded-xl"
              />
              <p className="text-[#636363] pt-4 leading-relaxed">
                I&apos;ve been dancing since secondary school. Am always thankful for the community dance has given me, and the many things I&apos;ve learnt about myself throughout the years.
              </p>
            </div>

            <div className="col-span-3">
              <Image
                src="/images/melinjp.jpg"
                alt="Melanie at Kamakura"
                width={302.4}
                height={403.2}
                className="h-auto w-full rounded-xl"
              />
              <p className="text-[#636363] pt-4 leading-relaxed">
                This was me on my first solo trip with Mt. Fuji in the background! 🗻
              </p>
            </div>

            <div className="col-span-3">
              <Image
                src="/images/eating.jpg"
                alt="Melanie at a cafe"
                width={302.4}
                height={403.2}
                className="h-auto w-full rounded-xl"
              />
              <p className="text-[#636363] pt-4 leading-relaxed">
                I... love eating 🫶🏻 <a class=" text-[#636363] underline hover:text-opacity-70"
                  href="https://www.instagram.com/thehungrymelon/">@thehungrymelon</a> on Instagram is where I share my tummy adventures with the foodie community!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-24 mx-auto py-4 px-12">
        <Footer />
      </div>
    </main>
  );
};

export default About;
