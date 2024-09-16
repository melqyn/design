import React from 'react';
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GPHeader from "./images/GPQueue.png";
import CSInfo from '../components/CSInfo';
import CSTitleParagraph from '../components/CSTitleParagraph';
import HighlightPara from '../components/HighlightPara';

import mapViewMidFi from "./images/mapview_midfi.jpg";
import mapViewHiFi from "./images/mapview_hifi.jpg";
import queueCompareMidFi from "./images/queuecomparison_midfi.jpg";
import queueCompareHiFi from "./images/queuecomparison_hifi.jpg";
import process from "./images/GPQueue_Process.png"
import userFlow from "./images/userflow.jpg";
import userResearchFindings from "./images/findings.png"
import wireframesOverview from "./images/wireframesoverview.png"
import mapbasedDesign from "./images/mapbased.png"
import persona from "./images/persona.png"
import solution from "./images/solution.png"

const GPQueue = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFFBFA]">
    <Navbar />
    <div className="bg-[#E9F7FF]">
      <div className="container grid grid-cols-1 md:grid-cols-12 mt-36 mx-auto py-4 px-12 lg:px-48" >
        <div className="col-span-12">
          <Image
            src={GPHeader}
            width={450}
            height={450}
            alt="makanpal image"
            className="hidden  md:block md:absolute md:top-0 md:right-24 lg:right-48 md:-mr-24"
          ></Image>
  
        </div>
        <div className="col-span-5">
        <h1 className="text-[#574F4A] text-3xl font-bold pb-8">Providing wait time clarity and streamlining mobile movements for drop-in patients at GPs.</h1>
          <p className="text-[#574F4A] font-light pb-8 md:pb-16">
          GPQueue - a mobile application to enhance waiting experience for physical drop-in visits at general practitioners in Singapore.
          </p>
        </div>
      </div>
    </div>

    <div className="container mx-auto grid grid-cols-12 py-8 px-12 lg:px-48">
      <div className="col-span-5 md:col-span-3 flex-col justify-start">
        <h4 className="text-xs font-semibold text-[#B0B0B0] pb-2">
          Project Type
        </h4>
        <p className="text-xs text-[#636363]">
          School Project (solo)
        </p>
        <p className="text-xs text-[#636363]">
          Concept Project
        </p>
      </div>

      <div className="col-span-3 md:col-span-1 flex-col justify-start">
        <h4 className="text-xs font-semibold text-[#B0B0B0] pb-2">Tool</h4>
        <p className="text-xs text-[#636363]">Figma</p>
      </div>

      <div className="col-span-4 md:col-span-2 flex-col justify-start">
        <h4 className="text-xs font-semibold text-[#B0B0B0] pb-2">
          Timeline
        </h4>
        <p className="text-xs text-[#636363]">Sep-Nov 2023</p>
      </div>
    </div>

    <div className="container mt-24 mx-auto px-12 lg:px-48">
    <CSTitleParagraph
      largetitle={'Background'}
      paragraph={"Drop-in patients experience long physical waiting times at general practitioners (GP) clinics while feeling unwell. However, there are no existing applications targeting drop-in patients at GP clinics despite the steady shift in preference toward GPs for healthcare needs in Singapore in the past decade. "}
    />

    <CSTitleParagraph
      largetitle={"The Solution"}
      paragraph={"This application aims at enhancing the waiting experience for physical drop-in patients by reducing wait times, providing wait time clarity and streamlining mobile movements around clinic wait times."}/>

    <CSTitleParagraph
      largetitle={"Project Context"}
      paragraph={"This project was designed for NUS module NM4259HM Mobile Interaction Design. GPQueue is proposed as an extension to the Health Appointment System by Open Government Products which caters to booking of appointment slots (with at least a day in advance) at GP clinics."}
    />

    <HighlightPara
      largetitle={"Opportunity"}
      paragraph={"How might we reimagine the user experience, from checking clinic wait times to registering for a drop-in appointment, to the waiting experience centred around people’s needs in a friendly, clear, and empathetic manner?"}
    />
    
    <CSTitleParagraph 
    columns={2}
      largetitle={"Target Users"}
      paragraph={"Adults adults aged 21 to 64 who visit general practitioners when feeling unwell."}
      />

<div className='pb-24'>  
      <div>
          <h2 className="text-2xl font-semibold text-[#363636] pb-4">Solution Overview</h2>
      </div> 
    <Image class="object-cover object-top w-full"
        src={solution}
        alt="GPQueue Solution Overview"
    ></Image>
    </div>

    <div className='pb-24'>  
      <div>
          <h2 className="text-xl font-semibold text-[#B0B0B0] pb-2">Iterative Prototyping</h2>
          <h2 className="text-2xl font-semibold text-[#363636] pb-4">Process</h2>
      </div> 
      <Image class="object-cover object-top w-full"
        src={process}
        alt="GPQueue Process"
      ></Image>
    </div> 

    <CSTitleParagraph
      columns={2}
      title={"Understand"}
      largetitle={"User Research"}
      paragraph={"I conducted 4 semi-structured interviews to understand the current user experience and pain points of drop-in visits at GP clinics. All sessions were one-off one-to-one sessions."}
      paragraph2="Questions were crafted around the focus on wait times to further validate online data sources on long healthcare wait times. Findings are summarised into two main pain points:"
      />

     <Image src={userResearchFindings} class="object-cover object-top w-full pb-16" alt="Table showing overview of user research findings for GPQueue"/>
    
    <div className='pb-24'>
     <h2 className="text-2xl font-semibold text-[#363636] pb-6">
          Persona
        </h2>
    <Image src={persona} class="object-cover w-full mb-16 rounded-xl" alt="GP Queue persona"/>
    </div>

<CSTitleParagraph
    title={"Define"}
    largetitle={"Problem Statement"}
    paragraph={"Adults, aged 21 to 64, who visit general practitioners when they are unwell want to avoid long physical wait times at general practitioners because extended waiting times not only disrupt their busy schedules but also result in physical discomfort and inefficiency during the clinic visit."}
    />

<div className="pb-16">
      <div>
        <h2 className="text-xl font-semibold text-[#B0B0B0] pb-2">Design and Test</h2>
        <h2 className="text-2xl font-semibold text-[#363636] pb-6">
          Wireframing
        </h2>
      </div>
      <Image class="object-cover object-top w-full"
    src={wireframesOverview}
    alt="GP Queue wireframes overview"/>
</div>

<div className="pb-16">
  <h2 className="text-2xl font-semibold text-[#363636] pb-6">
    Mid-fidelity: Addition of Map-based Interactions
  </h2>
  <p className="text-[#636363] leading-loose pb-8">
    User testings on wireframes led to some minor tweaks to the functions, such as the addition of Singpass login method and a sort feature when searching for GP clinics. 
  </p>

  <p className="text-[#636363] leading-loose pb-8">
  However, I would like to highlight the addition of map-based interactions as I iterate from wireframing to mid-fidelity prototyping. During wireframe user testing, users noted that it was difficult for them to mentally locate the different clinics based on a text address. This problem is especially evident when they are trying to compare between different clinics, resulting in users noting a need to separately search up clinic locations to compare convenience of travel routes. 
  </p>

  <p className="text-[#636363] leading-loose pb-8">
  Hence, I created a visual-based map interface where users can access clinic location and wait time information more visually. This interface aims to facilitate the comparison of queue wait times between different clinics, as well as mobile movements to and fro clinics.
  </p>

  <Image class="object-cover object-top w-full"
    src={mapbasedDesign}
    alt="Picture of map-based interactions in GP Queue"/>
</div>

    <CSTitleParagraph
    title={"Main Takeaway #1"}
    largetitle={"High-fidelty: Clear Signifiers"}
    paragraph="I initially designed the Map View function at the top-right corner of the page. However, user testers were unable to locate the button during user testing, opting to use the search bar instead. After exploring the Map View function, one user tester mentioned that she found the Map View a more efficient visual alternative than the default search page."
    paragraph2="I hence redesigned the button with more visual hierarchy as a clearer signifier to draw user attention."
    />
      <div className="grid grid-cols-12 pb-16">
        <div className="col-span-12 md:col-span-7 flex-col pb-16 md:pr-24">
          <h2 className="text-xl font-semibold text-[#363636] pb-2">Mid-fidelity Design</h2>
          <Image class="object-cover object-top w-full h-80"
              src={mapViewMidFi}
              alt="Map View function midfi"
            ></Image>
        </div>
        <div className="col-span-12 md:col-span-5 flex-col pb-16">
          <h2 className="text-xl font-semibold text-[#363636] pb-2">Hi-fidelity Design</h2>
          <Image class="object-cover object-top w-full h-80"
              src={mapViewHiFi}
              alt="Map View function hifi"
            ></Image>
        </div>
      </div>
    
    
      <CSTitleParagraph
    title={"Main Takeaway #2"}
    largetitle={"High-fidelity: Reduce User Cognitive Load by Proactively Providing Information"}
    paragraph="During user testing, I noticed that users hesitated for quite a bit upon seeing the queue length when clicking on specific clinics. When clarified on their hesitation, users mentioned that it was difficult to compare queue lengths of the current queue with alternative clinics manually as they had to remember the different numbers, highlighting user cognitive overload."
    paragraph2="Hence, my final prototype provides this comparison directly to reduce cognitive load for users. This also targets recognition over recall heuristics, helping users to faster identify shorter queues. Colour was used for easier recognition as well."
    />
    
      <div className="grid grid-cols-12 pb-16">
        <div className="col-span-12 md:col-span-7 flex-col pb-16 md:pr-24">
          <h2 className="text-xl font-semibold text-[#363636] pb-2">Mid-fidelity Design</h2>
          <Image class="object-cover object-bottom w-full h-80"
              src={queueCompareMidFi}
              alt="Map View function midfi"
            ></Image>
        </div>
        <div className="col-span-12 md:col-span-5 flex-col pb-16">
          <h2 className="text-xl font-semibold text-[#363636] pb-2">Hi-fidelity Design</h2>
          <Image class="object-cover object-bottom w-full h-80"
              src={queueCompareHiFi}
              alt="Map View function hifi"
            ></Image>
        </div>
      </div>

      <div className='pb-16'>
      <h2 className="text-2xl font-semibold text-[#363636] pb-4">Interactive Prototype</h2>
      <div className='flex items-center justify-center'>
      <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1);"}} width="full" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FVk1xWbnHSbTlPhbSyA4lSw%2FGPQueue%3Fpage-id%3D22%253A4722%26node-id%3D54-10984%26viewport%3D83%252C3376%252C0.39%26t%3DLBeO0SDP6U2ifWK4-1%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D54%253A10984%26hide-ui%3D1" allowfullscreen></iframe>
      </div></div>
      

      <CSTitleParagraph
      largetitle={"Moving forward..."}
      paragraph={"There is a need to look at accessibility features to design for the elderly population who are likely to engage in healthcare services often. Some design features to look at are font sizes, button sizes as well as designing for memory and concentration (Sergey, 2019). In designing for this alternative target group, there is also a need to focus on education of technology."}
      paragraph2={"Another important consideration is to look at the possibility of integrating GPQueue with the current Health Appointment System developed by Open Government Products (OGP). This is to reduce the number of touchpoints users have to go through to access the health services they require. By providing a centralized platform for scheduling appointments with healthcare providers, be it advanced appointments or drop in visits, it will be more convenient for users to manage their healthcare appointments from one application. Moreover, integrating with the HAS can also ensure that GPQueue operates with accurate and up-to-date information. Aligning with an already established system also helps in maintaining compliance with healthcare regulations and standards. Additionally, the association with OGP can help to enhance the credibility of this application, similar to how my user testing results showed that users feel more secure when using a familiar system such as Singpass."}
      />
    </div>

    <div className="container mt-24 mx-auto py-4 px-12">
        <Footer />
    </div>
    </main>
    

  )
}

export default GPQueue
