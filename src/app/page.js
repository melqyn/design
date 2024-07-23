import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/ProjectSection";
import Footer from "./components/Footer";
export const metadata = {
 title: "melaniequek",
description: "Melanie's Design Portfolio",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFFBFA]">
      <Navbar/>
      <div className="container mt-12 mx-auto flex justify-center items-center min-h-screen">
      <HeroSection/>
      </div>

      <div id="works">
        <div className="flex justify-center mx-auto px-12 mt-12">
        <ProjectSection/>
        </div>
      </div>

      <div className="container mt-24 mx-auto py-4 px-12">
      <Footer/>
      </div>

    </main>
  )
}