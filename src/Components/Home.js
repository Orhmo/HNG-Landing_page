import React from 'react';
import '../index.css';

import Hero_1 from "../Images/Hero_images/Frame_1.svg";
import Hero_2 from "../Images/Hero_images/Frame_2.svg";
import Hero_3 from "../Images/Hero_images/Frame_3.svg";
import Hero_4 from "../Images/Hero_images/Frame_4.svg";
import Hero_5 from "../Images/Hero_images/Frame_5.svg";
import Hero_6 from "../Images/Hero_images/Frame_6.svg";

import Card1 from "../Images/Cards/Frame_1.svg";
import Card2 from "../Images/Cards/Frame_2.svg";
import Card3 from "../Images/Cards/Frame_3.svg";
import Card4 from "../Images/Cards/Frame_4.svg";

import Card5 from "../Images/Cards/Frame_5.svg";
import Card6 from "../Images/Cards/Frame_6.svg";
import Card7 from "../Images/Cards/Frame_7.svg";
import Card8 from "../Images/Cards/Frame_8.svg";

import Google from "../Images/Companies/Google.svg";
import Amazon from "../Images/Companies/Amazon.svg";
import Group from "../Images/Companies/Group.svg";
import Uber from "../Images/Companies/Uber.svg";

import ABout from "../Images/About/Frame_5.svg";
import Quote from "../Images/Quote.svg";

const Home = (props) => {
  const Cards = [
     {
        icon:Card1,
        title:'TEAM BRAINBOX',
        des:'Scrybe: World class Transcription and Sentiment Analysis for yor Business',
        btn: 'View Team Brainbox >>',
      },
      {
        icon:Card2,
        title:'TEAM BOOT',
        des:'Kitchen Diary: The Best Platform To Get Your Customized Recipe Card',
        btn:'View Team Boot >>',
      },
      {
        icon:Card3,
        title:'TEAM TAPE',
        des:'Noxus: Generate Eye catchy images with just your words',
        btn:'View Team Tape >>',

      },
      {
        icon:Card4,
        title:'TEAM GRIT',
        des:'Engineer 360: An assessment platform for Engineers',
        btn:'View Team Grit >>',
      }
  ]

  const Extras = [
     {
        icon:Card5,
        title:'TEAM CLUTCH',
        des:'Voxclips: Convert Your Podcasts Audio Into Video with Heads that talk.',
        btn:'View Team Clutch >>',
      },
      {
        icon:Card6,
        title:'TEAM AXE',
        des:'AxeAPI: Let’s Identify your VIP’s And Convert Them To Sales',
        btn:'View Team Axe >>',
      },
      {
        icon:Card7,
        title:'TEAM ENGINE',
        des:'LoveMe: Instantly create your deepest feelings with our AI generated letters.',
        btn:'View Team Engine >>',
      },
      {
        icon:Card8,
        title:'TEAM RULER',
        des:'Minegram: Torzilla offers a simple API that delivers to you structured texts for your images anywhere',
        btn:'View Team Ruler >>'
      }
  ]

  return (
    <div className="Home">

      {/*===============HERO===============*/}
    <div className="mt-16 mb-8 grid grid-cols-1 md:flex md:gap-6 md:justify-between">

      <div className="Hero_image_set_1 hidden md:flex">
        <img src={Hero_1} alt="hero" className="absolute left-4" />
        <img src={Hero_2} alt="hero" className="relative left-0 h-[100vh]" />
      </div>

      <div className="Hero_message text-center align-center justify-center w-full md:mt-8 md:ml-44 ">
        <h2 className="text-3xl md:text-4xl md:w-[45vw] font-bold trackimg-wide md:leading-tight leading-smug text-center">Get to know about amazing projects built by
          <span className="text-[#E7332B]"> HNG Interns </span>over the years
        </h2>
        <p className="m-4 md:w-[48vw] tracking-wide text-center">
          HNG internship is an annual internship where interns are trained on various task at a very fast pace.
          There have been 8 completed editions with over 1000+ finalist.
        </p>


        <div className="Buttons flex flex-col px-20 md:px-4 md:py-2 md:w-full md:flex-row justify-center align-center ">
          <button
            href="teams"
            className="border border-[#E7332B] bg-[#E7332B] text-white m-4 p-4 px-8 hover:scale-105 shadow-sm font=semi-bold md:text-sm text-xs tracking-wide" >
            Join waitlist
          </button>
          <button
            href="teams"
            className="border border-[#E7332B] bg-transparent text-[#E7332B] m-4 p-4 hover:scale-105 shadow-sm font=semi-bold md:text-sm text-xs tracking-wide" >
            View Previous Projects
          </button>
        </div>
      </div>

      <div className="Hero_image_set_2 ml-40 hidden md:flex">
        <img src={Hero_3} alt="hero" className="absolute right-4" />
        <img src={Hero_4} alt="hero" className="relative right-0 h-[100vh]" />
      </div>
      <div className="Hero_image_set_2 ml-40 flex md:hidden mt-8">
        <img src={Hero_5} alt="hero" className="absolute right-0" />
        <img src={Hero_6} alt="hero" className="relative mt-40 bottom-4 w-[250vw] h-3/4 right-32" />
      </div>
    </div>

      {/*===============ABOUT================*/}
      <section className="Blog">
      <div className="mr-2 md:flex flex-row md:px-4 md:px-28 items-center m-2 mb-32">
        <div className="flex-1">
        <p className="text-xs text-[#E7332B]">ABOUT HNG PROJECT</p>
        <h3 className="md:text-4xl font:bold md:leading-smug text-2xl leading-normal w-2/3">
          Know more about HNG Internship Epi. 9
        </h3>
        <p className="text-sm md:text-base text-grey-600 w-[320px] md:w-[470px] leading-relaxed py-5">
        The Internship is designed to surface the very best of candidates out of a large pool of participants.
        It is fast paced and challenging, and helps people learn how to work in teams, deal with pressure and quickly expand their knowledge.
        </p>
        <p className="text-sm md:text-base text-grey-600 w-[320px] md:w-[480px] leading-relaxed py-5 mt-2">
        Anybody can apply. The Internship itself focuses on participants with prior experience either by going through the training phase,
        or self learning. However, if you have no prior experience, we still encourage you to apply you'll learn a lot from the experience.
        </p>
        <span className="text-[#007BFF] text-xs mb-2">Join Waitlist >></span>
        </div>
        <div className="flex-1">
          <img
            src={ABout}
            alt="img"
            className="md:h-[400px] h-full object-cover w-full mt-8"/>
        </div>
      </div>
      </section>

      {/*==============PROJECTS================*/}
      <section className="Projects">
      <div className="text-center align-center justify-center m-16">
        <p className="text-xs text-[#E7332B] m-2">LASTEST PROJECTS</p>
        <h3 className="md:text-4xl font:bold font-[600] md:leading-smug text-2xl leading-normal px-4 md:mx-32 lg:px-72 lg:mx-16 m-1 text-center">
          Check out the latest projects from HNGi9 teams
        </h3>
        <p className="text-sm text-center m-2 mx-4 px-2 py-2 md:mx-16 md:px-8 lg:mx-24 lg:px-44 lg:py-2">
          Get to know about amazing projects buit by HNG Interns over the years.
          These products have been made live and solve various challenges users have.
       </p>

        <div className="mt-4 md:mt-40 flex-flex-wrap">
        <div className="card grid grid-cols-1 md:grid-cols-4 md:-mt-48 gap-10 md:p-14 p-10 mt-5 rounded-md justify-center align-center text-center">
        {Cards.map ((cards, i) => (
            <div key={i}>
              <img src={cards.icon} alt="projects" className="justify-center align-center hover:scale-105"/>
              <div className="align-left text-left">
              <h1 className="font-semi-bold text-gray-300 text-sm my-3">{cards.title}</h1>
              <p className="text-lg leading-relaxed">{cards.des}</p>
              <button className="text-xs text-[#007BFF] hover:scale-105">{cards.btn}</button>
            </div>
            </div>
          ))
        }
        </div>
        </div>

        <div className=" hidden md:flex mt-40">
        <div className="card grid grid-cols-4 md:-mt-48 gap-10 md:p-14 p-10 mt-5 rounded-md justify-center align-center text-center">
        {Extras.map ((extras, i) => (
            <div key={i}>
              <img src={extras.icon} alt="projects" className="justify-center align-center left-16 hover:scale-105"/>
              <div className="align-left text-left">
              <h1 className="font-semi-bold text-gray-300 text-sm my-3">{extras.title}</h1>
              <p className="text-sm md:text-lg leading-relaxed">{extras.des}</p>
              <button className="text-xs text-[#007BFF] hover:scale-105">{extras.btn}</button>
            </div>
            </div>
          ))
        }
        </div>
        </div>


        <div>
        <button
          href="more"
          className="text-[#E7332B]  border border-[#E7332B] hover:bg-[#E7332B] hover:text-white bg-white m-2 p-2 mb-4" >
          View More
        </button>
        </div>
      </div>

      </section>

      {/*================QUOTES================*/}
      <section className="Quote">
      <div className= "p-12 text-center text-white font-medium bg-[#007BFF] h-fit align-center justify-center">
        <img src={Quote} alt="quote" className="p-2 w-full h-10 text-center align-center justify-center" />
        <p className="text-lg md:text-3xl p-4 px-4 md:px-16 md:py-8">
        “HNG internships brings out the best of every intern we have. They are trained to design, build and develop softwares in weeks.
        I am always impressed with the quality of work I get yearly.”
        </p>
        <span className="text-2xl text-center">Mark Mark</span>
      </div>
      </section>

      {/*==============PARTNERS===========*/}
      <div className=" text-center Partners bg-[#F9FBFF] align-center justify-center">
        <section className="Partners">
        <p className="pt-32 text-xs text-[#E7332B]">OUR PATNERS</p>
        <div className="flex justify-center flex-wrap md:w-4/5 my-16 mx-auto gap-x-20 md:gap-y-12 gap-y-8 mb-32">
        <img
          src={Uber} alt="logo"
          />
        <img
         src={Group} alt="logo"
          />
        <img
         src={Google} alt="logo"
          />
        <img
          src={Amazon} alt="logo"
          />
        <img
          src={Amazon} alt="logo"
          />
        <img
          src={Uber} alt="logo"
          />
        <img
          src={Group} alt="logo"
          />
        </div>
        </section>

        <section className="Newsletters">
        <div className="m-12 bg-[#1E2532] h-[50vh] align-center justify-center">
          <p className=" p-8 text-xs text-[#E7332B]">OUR PATNERS</p>
          <h3 className="text-white w-fit md:text-3xl text-xl m-2 md:mx-32 mx-6 md:px-64 md:py-4 px-4 py-4 ">Get the Latest News on Scholarships Around The World.</h3>

        <form className="pb-4">
          <input
            type="text"
            name="text"
            placeholder="Enter Email Address"
            className="border m-2 text-sm text-[#FDFEFF] bg-[#1E2532] l w-1/2 px-6 py-3 my-2"
            />
          <button
            className="bg-[#E7332B] text-white w-fit mt-1 px-6 py-3 my-2 hover:text-[#E7332B] hover:bg-transparent hover:border hover:border-[#E7332B]">
            Subscribe
          </button>
          </form>
          </div>
        </section>
        </div>
      </div>


  );
}

export default Home;
