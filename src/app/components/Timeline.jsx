// components/Timeline.js
import React from 'react';

const timelineData = [
  {
    date: 'Jun - Nov 2022',
    title: 'UI/UX Design Intern, Activate Interactive',
    description: 'Developed a strong foundation in UI design aligned with industry standards through real-world projects.'
  },
  {
    date: 'Jan - May 2023',
    title: 'Digital Innovation (UI/UX) Intern, Singapore Airlines',
    description: 'Honed my UX techniques in a fast-paced collaborative Agile environment and gained practical experience in front-end development.'
  },
  {
    date: 'Jan 2023 - present',
    title: 'Interaction Design Teaching Assistant, National University of Singapore',
    description: 'Shared my expertise with like-minded peers through multiple stints, including module CS3240 Interaction Design, NUS SCALE Youth Programme and School of Computing (SOC) Summer Workshop 2024.'
  },
  {
    date: 'Dec 2024 - present',
    title: 'UI/UX Designer, Activate Interactive',
    description: 'Conducted user surveys, usability testings to collect user data. Collaborated closely with cross-functional roles to deliver design solutions for active client projects, mainly in government sector.'
  },
];

const Timeline = () => {
  return (
    <div className="mb-8 max-w-fit">
      {timelineData.map((item, index) => (
        <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
          {/* Vertical line and dot */}
          <div className="flex flex-col sm:flex-row items-start 
            mb-1 group-last:before:hidden 
            before:absolute before:left-2 sm:before:left-14 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[7.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 
            after:absolute after:left-2 sm:after:left-14 after:w-2 after:h-2 after:bg-[#6c7f4c] after:border-4 after:box-content after:border-white after:rounded-full after:shadow-lg sm:after:ml-[7.5rem] after:-translate-x-1/2 after:translate-y-1.5">

            <time className="sm:absolute left-0 translate-y-0.5 
            inline-flex items-center justify-center text-xs font-semibold  
           px-4 h-6 mb-3 sm:mb-0 text-[#fff] bg-[#574F4A] rounded-full">{item.date}</time>

            <div className="text-xl font-semibold text-[#636363] leading-relaxed mb-2 mr-10 sm:translate-x-20 ">{item.title}</div>
          </div>
          {/* Description */}
          <div className="text-[#636363] leading-relaxed mr-10 sm:translate-x-20">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
