import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 6,
    title: "GPQueue",
    projectinfo: "school • 2023",
    description:
      "Providing wait time clarity and streamlining mobile movements for drop-in patients at GPs.",
    image: "/images/projects/GPQueue.png",
    url: "/GPQueue",
    label:"UI/UX Design",
    label2:"Mobile Interaction Design"
  },

  {
    id: 5,
    title: "MakanPal",
    projectinfo: "internship • 2023",
    description:
      "Digitalising physical canteen queues for stall vendors and customers for increased comfort and efficiency.",
    image: "/images/projects/cover1.png",
    url: "/makanpal",
    label:"Product Design",
    label2:"UI/UX Design",
  },

  {
    id: 4,
    title: "homebuddy",
    projectinfo: "school • solo • 2022",
    description:
      "Connecting apartment hunting with district research, improving accessibility and security for prospective tenants.",
    image: "/images/projects/cover2.png",
    url: "https://medium.com/design-bootcamp/homebuddy-an-apartment-hunting-mobile-app-ux-case-study-1a3b06bb1bdf",
    label:"UI/UX Design"
  },

  // {
  //   id: 3,
  //   title: "Eaterio",
  //   projectinfo: "school • team (4pax) • 2022",
  //   description:
  //     "Decide where and what to eat collaboratively, with trusted recommendations from your social circles.",
  //   image: "/images/projects/cover3.png",
  //   url: "https://uxfol.io/p/98661551/030f3a8d",
  //   label:"UI/UX Design"
  // },

  // {
  //   id: 2,
  //   title: "Noise Tracker",
  //   projectinfo: "hackathon • team (3pax) • 2021",
  //   description:
  //     "A community spirit-building application to help identify noise disturbance sources in the Sembawang community.",
  //   image: "/images/projects/cover4.png",
  //   url: "/",
  // },

  {
    id: 1,
    title: "Bouncy Escape",
    projectinfo: "school • solo • 2021",
    description: "Coded a platform game with HTML, CSS, JavaScript.",
    image: "/images/projects/cover5.png",
    url: "/bouncyescape/index.html",
    label:"Coding"
  },
];

const ProjectSection = () => {
  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-[#574F4A] mt-12 mb-12">
        My Works
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        {projectsData.map((project, index) => (
          <div key={project.id} className={index === 0 ? 'md:col-span-2' : ''}>
            <ProjectCard
              title={project.title}
              projectinfo={project.projectinfo}
              description={project.description}
              imgUrl={project.image}
              url={project.url}
              label={project.label}
              label2={project.label2}
            />
          </div>
        ))}
      </div>
    </div>
  );
};


export default ProjectSection;
