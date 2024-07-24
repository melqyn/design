import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import { faHtml5, faCss3Alt, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faLanguage, faGlobe } from "@fortawesome/free-solid-svg-icons";
import Timeline from "./Timeline";

const ExperienceSection = () => {
  return (
    <section>
      <Timeline/>

      <div className="py-8 px-8 bg-[#d3d3d3] bg-opacity-20 rounded-xl">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Design Column */}
            <div className="flex flex-col items-start">
              <p className="text-xl text-[#574F4A] font-semibold mb-4">Design</p>
              <div className="flex items-center mb-6">
                <FontAwesomeIcon icon={faFigma} className="text-[#F24E1E] h-6" />
                <p className="ml-4 text-m font-semibold">Figma</p>
              </div>
            </div>

            {/* Coding Column */}
            <div className="flex flex-col items-start">
              <p className="text-xl text-[#574F4A] font-semibold mb-4">Coding</p>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faHtml5} className="text-[#F24E1E] h-6" />
                <p className="ml-4 text-m font-semibold">HTML</p>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faCss3Alt} className="text-[#1572B6] h-6" />
                <p className="ml-4 text-m font-semibold">CSS</p>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faJs} className="text-[#F7DF1E] h-6" />
                <p className="ml-4 text-m font-semibold">JavaScript</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faReact} className="text-[#61DAFB] h-6" />
                <p className="ml-4 text-m font-semibold">React</p>
              </div>
            </div>

            {/* Languages Column */}
            <div className="flex flex-col items-start">
              <p className="text-xl text-[#574F4A] font-semibold mb-4">Languages</p>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faGlobe} className="text-[#574F4A] h-4" />
                <p className="ml-4 text-m font-semibold">English</p>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faGlobe} className="text-[#574F4A] h-4" />
                <p className="ml-4 text-m font-semibold">Mandarin</p>
              </div>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon icon={faGlobe} className="text-[#574F4A] h-4" />
                <p className="ml-4 text-m font-semibold">Korean</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faGlobe} className="text-[#574F4A] h-4" />
                <p className="ml-4 text-m font-semibold">Japanese</p>
              </div>
            </div>
          </div>
        </div>
      </div>  
      
      </section>
  );
};

export default ExperienceSection;
