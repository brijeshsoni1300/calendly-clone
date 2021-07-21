import React from "react";
import CardLeft from "./components/CardLeft";
import Introsection from "./components/Introsection";
import "./Home.css";
import CardRight from "./components/CardRight";
import CompanySection from "./components/CompanySection";
import HeadingPara from "./components/HeadingPara";
import CalendlyWorking from './components/CalendlyWorking';
import VerticalCard from "./components/VerticalCard";

function Home() {
  return (
    <div className="home">
      <Introsection
        key={1}
        para="Calendly is your hub for scheduling meetings professionally and
            efficiently, eliminating the hassle of back-and-forth emails so you
            can get back to work."
        heading="Easy scheduling"
        headingSpan="ahead"
        img="https://images.ctfassets.net/k0lk9kiuza3o/2GBW40b0geTwkz6IvDu2FZ/f2f74f52a70628ae404d03a023bfde06/HomePage_GIF1_BG_2.svg"
        form="true"
        button="Sign up"
      />

      <CompanySection />
      <HeadingPara
        heading="See Calendly in action"
        para=""
      />
      <CalendlyWorking />
      <HeadingPara
        heading="Schedule meetings without the back-and-forth emails"
        para="Calendly uncomplicates scheduling by only offering times that work with your availability across all of your calendars."
      />
      <div className="home__scheduleMeets">
      <div className="home__scheduleMeet">
          <VerticalCard 
            image="https://images.ctfassets.net/k0lk9kiuza3o/6yqxo5oZyfcKFqn25VNniI/9cba7530e7edd0d422f18347c90b941f/Homepage_Gif02_BG_A.svg"
            heading="Meet the way you want"
            para="Open your schedule only to the days and times that work for you. When your invitee chooses a meeting slot, it’s instantly confirmed."
          />
          <VerticalCard 
            image="https://images.ctfassets.net/k0lk9kiuza3o/71A22WqOpSL6muMiJ1cUdJ/a0b9bcfb1500170913bb3784ae6c8e8b/Homepage_Gif03_BG_A.svg"
            heading="Calendly coordinates it all"
            para="Meetings are scheduled without calendar conflicts, reminders go out automatically, and rescheduling is a breeze for everyone."
          />
          
      </div>
      <button>see how teams use Calendly</button>
      </div>
      <HeadingPara
        heading="Do more of what you do best"
        para="With scheduling hassles and interruptions gone, your day is cleared for accomplishment."
      />
      <CardRight
        key={1}
        image="https://images.ctfassets.net/k0lk9kiuza3o/577P5zlqHsW5qhrEjxiPVC/d827d3e4255e9052c4f0bbff7c83e0a7/Companies01_BG_a.svg"
        title="WORKFLOW MANAGEMENT"
        heading="Automate reminders and follow-ups"
        disc="Calendly puts your entire meeting workflow on autopilot, sending everything from reminder emails to thank you notes, so you can focus on the work only you can do. It’s like getting an assistant, even if you’re a business of one."
      />
      <CardLeft
        key={1}
        image="https://images.ctfassets.net/k0lk9kiuza3o/1pqBivym1uc4arWjw70fXs/a31901472fed857d39b7b77134ecc279/Homepage_Gif05_BG_A.svg"
        title="ON-DEMAND SCHEDULING"
        heading="Make more connections and reduce cancellations"
        disc="Prospects can schedule meetings in just a few clicks – whenever the moment is right. And cancellations go down because rescheduling is easy, fast, and on their terms."
      />
      <CardRight
        key={2}
        image="https://images.ctfassets.net/k0lk9kiuza3o/7vNKHYIm5uHYXjdJfmXotL/11bff5c0ef6983e656d627a1846613bb/Homepage_Gif06_BGa.jpg?w=1423&h=1116&fl=progressive&q=50&fm=jpg"
        title="THE COURTEOUS APPROACH"
        heading="Delight invitees with modern scheduling"
        disc="Time is a precious commodity. Calendly is the courteous way to book meetings and other appointments, because scheduling with just a few clicks makes the most of everyone's time."
      />

      <CardLeft
        key={1}
        image="https://images.ctfassets.net/k0lk9kiuza3o/csrPGy0rtsu1NV2ID5zXb/b87e658795f798923c981e0c9b33da42/Bitly.jpg?w=786&h=786&fl=progressive&q=50&fm=jpg"
        title="BITLY"
        heading="Not only do the SDRs come in with a whole calendar of prospects to speak with, they have more prospects show up to their meetings."
        disc=""
      />

      <div className="home__seeCalendly"></div>
    </div>
  );
}

export default Home;
