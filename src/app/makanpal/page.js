import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import makanPalHeader from "../images/makanpalheader.png";
import userGroupsBig from "./images/usergroupsbig.png";
import process from "./images/process.png";
import leavequeue from "./images/leavequeue.png";
import mockupsColIndicators from "./images/mockups_colindicators.png";
import parallelproto from "./images/parallelproto.png";
import queuereduced from "./images/queuereduced.png";
import userflow from "./images/userflow.png";
import Handover from "./images/handover.png";
import solutionOverview from "./images/solutionoverview.png"
import callNextQueue from "./images/callnextqueue.png"

import CSTitleParagraph from "../components/CSTitleParagraph";
import HighlightPara from "../components/HighlightPara";
import { call } from "file-loader";

export default function makanpal() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFFBFA]">
      <Navbar />
      <div className="bg-[#FFF5E0]">
        <div className="container grid grid-cols-1 md:grid-cols-12 mt-36 mx-auto py-4 px-12 lg:px-48">
          <div className="col-span-12">
            <Image
              src={makanPalHeader}
              width={500}
              height={500}
              alt="makanpal image"
              className="hidden md:block md:absolute md:top-0 md:right-0"
            ></Image>
          </div>

          <div className="col-span-5">
            <h1 className="text-[#574F4A] text-3xl font-bold pb-8">Digitalising physical canteen queues for stall vendors and customers.</h1>
            <p className="text-[#574F4A] font-light pb-8 md:pb-16">
              A virtual queuing system to reduce physical queue times in company canteen for staff
              during lunch hours.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-12 py-8 px-12 lg:px-48">
        <div className="col-span-5 md:col-span-3 flex-col justify-start">
          <h4 className="text-xs font-semibold text-[#B0B0B0] pb-2">
            Project Type</h4>
          <p className="text-xs text-[#636363]">
            Internship Team Project (5pax)</p>
        </div>
        <div className="col-span-3 md:col-span-1 flex-col justify-start">
          <h4 className="text-xs font-semibold text-[#B0B0B0] pb-2">Tool</h4>
          <p className="text-xs text-[#636363]">Figma</p>
        </div>
        <div className="col-span-4 md:col-span-1 flex-col justify-start">
          <h4 className="text-xs font-semibold text-[#B0B0B0] pb-2">
            Timeline
          </h4>
          <p className="text-xs text-[#636363]">Feb-May 2023</p>
        </div>
      </div>

      <div className="container mt-24 mx-auto px-12 lg:px-48">
        <CSTitleParagraph
          largetitle="The Problem"
          paragraph="Long queue in the staff canteen were reported to be unproductive. User groups with strict lunch timings such as cabin crew are unable to purchase food from popular stalls."
        />
        <CSTitleParagraph
          largetitle={"The Solution"}
          paragraph={"MakanPal is an in-house staff canteen application aimed at reducing physical queue wait times for staff during lunch hours with a virtual queuing system."}
        />
        <CSTitleParagraph
          largetitle={"Project Context"}
          paragraph={"The project was developed via Agile Scrum methodology. As an in-house project, we received directions and discussed with the Human Resource Department (HRD) as our “client”. We successfully launched the application over a one-week trial period, reaching out to 200+ staff."}
        />
        <h2 className="text-xl font-semibold text-[#363636] pb-2">
          What is Virtual Queuing?
        </h2>
        <p className="text-[#636363] leading-loose pb-8">
          To better establish the project context, I will first explain the project concept of a virtual queue (VQ) and note its delineation from virtual ordering (VO).
        </p>
        <div className="pb-16">
          <div className="container mx-auto py-4 px-8 grid grid-cols-3 mb-4 bg-[#EAEAEA] text-[#363636] rounded-xl">
            <div className="col-span-1 font-semibold">
              <p>Virtual Ordering (VO)</p>
            </div>
            <div className="col-span-2 pl-16">
              <p>Ordering (and paying) through an app</p>
            </div>
          </div>
          <div
            className="container mx-auto py-4 px-8 grid grid-cols-3 text-[#363636]
            bg-[#FBC34E] bg-opacity-20 border-[#FBC34E] border-2 rounded-xl"
          >
            <div className="col-span-1 font-semibold">
              <p>Virtual Queuing (VQ) =</p>
            </div>
            <div className="col-span-2">
              <ol className="list-decimal pl-16">
                <li>Taking a queue number via an application</li>
                <li>Waiting for your turn (anywhere!)</li>
                <li>(At your turn) Joining the physical queue at the stall</li>
                <li>
                  Ordering from and paying directly to merchants in-person
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className='pb-24'>
          <div>
            <h2 className="text-2xl font-semibold text-[#363636] pb-4">Target User Groups</h2>
            <p className="text-[#636363] leading-loose pb-8">It is important to note that the application has two interfaces each catering to one of the <b>two user groups: staff and merchants</b>.</p>
            <p className="text-[#636363] leading-loose pb-8"> The company&apos;s staff make up 90% of the customer flow in the in-house staff canteen. Meanwhile, merchants refer to the stall vendors in the canteen.
              These vendors are contracted by the company and managed by the Human Resource Department, with whom we held multiple meetings with to better cater for merchants&apos; perspectives.  </p>
          </div> <Image class="object-cover object-top w-full"
            src={userGroupsBig}
            alt="MakanPal Users"
          ></Image>
        </div>

        <CSTitleParagraph
          title="Contextual Challenge #1"
          columns={2}
          largetitle="Managing User Expectations: Transitioning from Physical to Digital"
          paragraph="With the rise of food deliveries services, most users were used to ordering their food through an app. However, VQ - queuing without ordering - remains a new concept to most staff. To smoothen out the transition to a virtual queue, we recognised the need to manage users’ expectations. How do we educate the staff about the VQ concept?"
          paragraph2="Queue management was another issue to address - How can we ensure users in queue come down to the stall punctually at their turn? How can we prevent them from coming down to the stalls too late? What happens if they miss their queue turn?"
        />
        <HighlightPara
          largetitle={"Opportunity #1 (Customer App)"}
          paragraph={"How might we reimagine the user experience of queuing in a staff canteen—joining a queue and waiting for your turn—for staff in an empathetic manner that prioritises user education and functional efficiency?"}
        />

        <div className='pb-24'>
          <div>
            <h2 className="text-2xl font-semibold text-[#363636] pb-4">Solution Overview</h2>
          </div>
          <Image class="object-cover object-top w-full"
            src={solutionOverview}
            alt="Solution Overview"></Image>
        </div>


        <div className='pb-24'>
          <div>
            <h2 className="text-2xl font-semibold text-[#363636] pb-4">The Process</h2>
            <p className="text-[#636363] leading-loose pb-8">Taking over the project from our previous batch of interns, we proceeded with Agile Methodology in working towards a Minimum Viable Product (MVP) for trial launch.</p>
          </div>
          <Image class="object-cover object-top w-full"
            src={process}
            alt="Design process"
          ></Image>
        </div>

        <div className='pb-24'>
          <div>
            <h2 className="text-2xl font-semibold text-[#363636] pb-4">1. Review Feedback from Handover</h2>
            <p className="text-[#636363] leading-loose pb-8">
              Some key observations and feedback on existing prototype passed to us by previous interns:</p>
          </div>
          <Image class="object-cover object-top w-full pb-8"
            src={Handover}
            alt="Table showing handover feedback on app"
          ></Image>


          <p className="text-[#636363] leading-relaxed pb-8">
            From here, I generated some How Might We (HMW) questions to frame
            problems for ideation for our two user groups: staff (mobile app and
            kiosk), merchants (merchant app).
          </p>

          <div className="border-[#76655B] border-l-4 px-4 mb-4 leading-relaxed">
            <p className="text-[#76655B] font-semibold">For staff user group:</p>
            <p className="text-[#76655B]">
              HMW help users feel confident that their queue ticket is valid and moving?
            </p>
            <p className="text-[#76655B]">
              HMW help users join the physical queue ideal intervals?
            </p>
          </div>

          <div className="border-[#76655B] border-l-4 px-4 leading-relaxed mb-16">
            <p className="text-[#76655B] font-semibold">
              For merchant user group:
            </p>
            <p className="text-[#76655B]">
              HMW help merchants adapt to technology by minimising changes to the
              merchants workflow?
            </p>
            <p className="text-[#76655B]">
              HMW help merchants regulate the queue?
            </p>
            <p className="text-[#76655B]">
              HMW help merchants easily gauge the virtual queue?
            </p>
          </div> </div>

        <div className='pb-24'>
          <div>
            <h2 className="text-2xl font-semibold text-[#363636] pb-4">2. Defining User Flow for Staff Users</h2>
            <p className="text-[#636363] leading-loose pb-8">There was a need to create a clear user flow so we could prioritise functions for Agile development.</p>
          </div>
          <Image class="object-cover object-top w-full"
            src={userflow}
            alt="MakanPal User Flow"
          ></Image>
        </div>

        <div className='pb-24'>
          <div>
            <h2 className="text-2xl font-semibold text-[#363636] pb-4">3. Agile Development - Designing in Agile Scrum</h2>
            <p className="text-[#636363] leading-loose pb-8">Designing in an Agile Scrum environment with concurrent prototype development, 
            I had to focus on producing development-ready high-fidelity Figma prototypes. This meant that I had to adapt my design processes to fit Agile Scrum development: 
            instead of focusing on producing basic designs of the multiple functional screens before moving into the details, I <b>
              prioritised designing each specific function one at a time</b>. 
              One thing that worked for me was <b>designing multiple iterations of the same feature</b> so that I can <b>maximise the feedback gathered during each daily stand-up</b> to produce higher quality designs each sprint.</p>
          </div>
          <Image class="object-cover object-top w-full"
            src={parallelproto}
            alt="MakanPal User Flow"
          ></Image>
        </div>

        <div className='pb-24'>
          <div>
            <h2 className="text-2xl font-semibold text-[#363636] pb-4">4. Staff Mobile App Testing: Internal Department Review + Guerrilla User Testing</h2>
            <p className="text-[#636363] leading-loose pb-8">We conducted Guerrilla User Testing in the canteen, interviewing a total of <b>30 staff</b>. Guerilla user testing findings were subsequently used to iterate our prototype design in preparation for the Minimum Viable Product (MVP) launch. I will highlight two main changes from the user testing in the following paragraphs.</p>
          </div>
        </div>

        <div className='pb-24'>
          <div>
            <h2 className="text-xl font-semibold text-[#B0B0B0] pb-2">Staff Mobile App: Key Design Strategy #1</h2>
            <h2 className="text-2xl font-semibold text-[#363636] pb-4">Using Colours to Assure Users</h2>
            <p className="text-[#636363] leading-loose pb-8">I introduced colours to help customers notice changes in wait time. This change was validated in our subsequent internal department
              review.</p>
          </div>
          <Image class="object-cover object-top w-full"
            src={mockupsColIndicators}
            alt="Using colours to assure users"
          ></Image>
        </div>


        <div className='pb-24'>
          <div>
            <h2 className="text-xl font-semibold text-[#B0B0B0] pb-2">Staff Mobile App: Key Design Strategy #2</h2>
            <h2 className="text-2xl font-semibold text-[#363636] pb-4">Improving User Freedom + Match between System and Real World</h2>
            <p className="text-[#636363] leading-loose pb-8">
              Users were uneasy about being able to reverse the decision of joining a queue.
              The lack of a &quot;Leave Queue&quot; function also affected the system&apos;s operations as merchants would face &quot;empty&quot; batches of virtual queue tickets without actual customers
              (as they  have chosen to queue at another stall instead).
            </p>
            <p className="text-[#636363] leading-loose pb-8">
              This violated the user freedom heuristic and decision was quickly made to allow users to leave a joined queue.
              It was also important to reflect this change (people leaving queue) on the Merchant App to allow merchants to visualise the expected queue, streamlining operations.</p>
          </div>
          <div className="grid grid-cols-3">
            <Image
              className="col-span-3 md:col-span-1 object-cover object-center w-2/3 md:w-full "
              src={leavequeue}
              width={400}
              height={300}
              alt="Leave Queue confirmation page"
            />
            <Image
              className="col-span-3 md:col-span-2 object-cover object-center w-full"
              src={queuereduced}
              width={400}
              height={300}
              alt="Queue length reduced"
            />
          </div>
        </div>

        <div className="pb-16">
          <div>
            <h2 className="text-xl font-semibold text-[#B0B0B0] pb-2">Challenge #2</h2>
            <h2 className="text-2xl font-semibold text-[#363636] pb-6">Integrating technology into merchants&apos; current physical workflow</h2>
          </div>

          <p className="text-[#636363] leading-loose pb-8"> These merchants are mostly in their late 50s to 60s, and are non-tech savvy - as self-reported.
            In an earlier one-day test trial (before I joined the team), the merchants have already shown resistance towards adopting technology in their workflow.
            With the HRD pushing for the revamp and renewal of the staff canteen into a &quot;digital canteen&quot;,
            our team is faced with the challenge to balance the business directions of the company with the needs and comfortability of our merchants.</p>
        </div>

        <HighlightPara
          largetitle={"Opportunity #2 (Merchant App)"}
          paragraph={"How might we integrate technology into non-tech savvy merchants’ current workflow to optimise service efficiency in an empathetic manner?"}
        />

        <div className="pb-16">
          <div>
            <h2 className="text-xl font-semibold text-[#B0B0B0] pb-2">Merchant App: Key Design Strategy #1</h2>
            <h2 className="text-2xl font-semibold text-[#363636] pb-6">Prioritise main function of managing virtual queue</h2>
          </div>

          <p className="text-[#636363] leading-loose pb-8">
            For functionality, we kept in mind the need to optimise work
            efficiency by minimising the change in merchants&apos; original
            workflow. Intentional design decisions were made to <b>prioritise
            the main function of managing a virtual queue - to call the next
            group of customers</b>. Hence, the main working screen was designed
            with great emphasis on a <b>large &quot;Call Next&quot; button</b> to call the next group of
            customers, making it easier for our merchants to recall, learn
            and adopt our technology.
          </p>
          <div className="flex w-full place-content-center mb-4">
          <Image class="w-full md:w-1/2 object-center"
            src={callNextQueue}
            alt="Merchant app screen showing call next queue"
          ></Image></div>

          <p className="text-[#636363] leading-loose pb-8">
            After user testing our prototype with our merchants, we noticed that they often feel
            hurried to call the next batch, accidentally clicking on the button multiple
            times. Thus, on the development side, we also <b>programmed a button time-out to prevent double
            clicking when rushing orders.</b>
          </p>

        </div>

        <div className="pb-16">
          <div>
            <h2 className="text-xl font-semibold text-[#B0B0B0] pb-2">Merchant App: Key Design Strategy #2</h2>
            <h2 className="text-2xl font-semibold text-[#636363] pb-6">Elderly-friendly</h2>
          </div>

          <div>
            <p className="text-[#636363] pb-2">
              Catering to our elderly Mandarin-speaking merchants, design decisions included:
            </p>
            <ul className=" text-[#636363] ml-8 pb-8 leading-loose list-disc">
              <li>choosing large, readable fonts</li>
              <li> a large primary button for main function (explained below)</li>
              <li>reducing jargons by using simple phrases</li>
              <li>programming multilingual translation capabilities.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mt-24 mx-auto py-4 px-12">
        <Footer />
      </div>
    </main>
  );
}
