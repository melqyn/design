// components/Timeline.js
import React from 'react';

const timelineData = [
  {
    date: 'Jun - Nov, 2022',
    title: 'UI/UX Design Intern, Activate Interactive',
    description: 'Developed strong foundation in UI design based in real-world projects.'
  },
  {
    date: 'Jan - May, 2023',
    title: 'Digital Innovation (UI/UX) Intern, Singapore Airlines',
    description: 'Honed my UX techniques in a fast-paced collaborative environment, and gained practical experience in front-end development, all within an Agile development environment.'
  },
  {
    date: 'Jan - Jul, 2024',
    title: 'Interaction Teaching Assistant, National University of Singapore',
    description: 'Multiple stints where I shared my expertise with like-minded peers, including module CS3240 Interaction Design, NUS SCALE Youth Programme and School of Computing (SOC) Summer Workshop 2024.'
  },
];

const Timeline = () => {
  return (
    <div className="mb-8 max-w-fit">
      {timelineData.map((item, index) => (
        <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
          {/* Vertical line and dot */}
          <div className="flex flex-col sm:flex-row items-start 
          mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-10 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 
          after:absolute after:left-2 sm:after:left-10 after:w-2 after:h-2 after:bg-[#6c7f4c] after:border-4 after:box-content after:border-white after:rounded-full after:shadow-lg sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            
            <time className="sm:absolute left-0 translate-y-0.5 
            inline-flex items-center justify-center text-xs font-semibold  
           px-4 h-6 mb-3 sm:mb-0 text-[#fff] bg-[#574F4A] rounded-full">{item.date}</time>

            <div className="text-xl font-semibold text-[#363636] mr-10 sm:translate-x-12 ">{item.title}</div>
          </div>
          {/* Description */}
          <div className="text-[#636363] leading-loose mr-10 sm:translate-x-12">{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
