import React from 'react';

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
        title:"TEAM AXLE",
        des:'Engineer 360: An assessment platform for Engineers',
      },
      {
        icon:Card2,
        title:'TEAM AXLE',
        des:'A Stock Analysis Web Application for FinTech',
      },
      {
        icon:Card3,
        title:'TEAM AXLE',
        des:'Engineer 360: An assessment platform for Engineers',
      },
      {
        icon:Card4,
        title:'TEAM AXLE',
        des:'Engineer 360: An assessment platform for Engineers',
      }
  ]

  return (
    <div className="Home">

      {/*===============HERO===============*/}
    <div className="mt-8 mb-16 grid grid-cols-1 md:grid-cols-3">

      <div className="Hero_image_set_1 hidden md:flex">
        <img src={Hero_1} alt="hero" className="absolute mr-4 m-4" />
        <img src={Hero_2} alt="hero" className="relative mt-40 ml-0 h-1/2 border border-white" />
      </div>

      <div className="Hero_message align-center justify-center w-full ">
        <h2 className=" md:text-5xl text-4xl font-bold tracking-wide md:leading-tight leading-smug text-center">Get to know about amazing projects buit by
          <span className="text-[#E7332B]"> HNG Interns </span>over the years
        </h2>
        <p className="m-6">
          Get to know about amazing projects buit by HNG Interns over the years.
          Get to know about amazing projects buit by HNG Interns over the years.
          Get to know about amazing projects buit by HNG Interns over the years
        </p>


        <div className="Buttons flex flex-col px-20 md:px-4 md:py-2 md:w-full md:flex-row justify-center align-center ">
          <button
            href="teams"
            className="border border-[#E7332B] bg-[#E7332B] text-white m-2 p-2 hover:scale-105 shadow-sm font=semi-bold md:text-sm text-xs tracking-wide" >
            View Current Teams
          </button>
          <button
            href="teams"
            className="border border-[#E7332B] bg-transparent text-[#E7332B] m-2 p-2 hover:scale-105 shadow-sm font=semi-bold md:text-sm text-xs tracking-wide" >
            View Previous Projects
          </button>
        </div>
      </div>

      <div className="Hero_image_set_2 ml-40 hidden md:flex">
        <img src={Hero_3} alt="hero" className="absolute ml-4 m-2" />
        <img src={Hero_4} alt="hero" className="relative mt-40 ml-40 h-1/2 border border-white" />
      </div>
      <div className="Hero_image_set_2 ml-40 flex md:hidden mt-8">
        <img src={Hero_5} alt="hero" className="absolute right-0" />
        <img src={Hero_6} alt="hero" className="relative mt-40 bottom-4 w-[250vw] h-3/4 right-32" />
      </div>
    </div>

      {/*===============ABOUT================*/}
      <section className="Blog">
      <div className="md:flex flex-row gap-4 md:px-4 md:px-28 items-center m-4">
        <div className="flex-1">
        <p className="text-xs text-[#E7332B]">ABOUT HNG PROJECT</p>
        <h3 className="md:text-4xl font:bold md:leading-smug text-2xl leading-normal w-2/3">
          Know more about HNG Internship Epi. 9
        </h3>
        <p className="text-sm text-grey-600 md:w-2/3 leading-relaxed py-5">
          Get to know about amazing projects buit by HNG Interns over the years.
          Get to know about amazing projects buit by HNG Interns over the years.
          Get to know about amazing projects buit by HNG Interns over the years
        <br />
          Get to know about amazing projects buit by HNG Interns over the years. Get to know about amazing projects buit.
        </p>
        <span className="text-[#007BFF] text-xs">Join Waitlist >></span>
        </div>
        <div className="flex-1">
          <img
            src={ABout}
            alt="img"
            className="md:h-[300px] h-full object-cover w-full"/>
        </div>
      </div>
      </section>

      {/*==============PROJECTS================*/}
      <section className="Projects">
      <div className="text-center align-center justify-center m-16">
        <p className="text-xs text-[#E7332B] m-2">LASTEST PROJECTS</p>
        <h3 className="md:text-4xl font:bold font-[600] md:leading-smug text-2xl leading-normal px-44 md:px-72 md:mx-16 m-1">
          Check out the latest projects from HNGi9 teams
        </h3>
        <p className="text-sm m-2 mx-14 px-28 py-4 md:mx-24 md:px-44 md:py-2">
          Get to know about amazing projects buit by HNG Interns over the years.
          Get to know about amazing projects buit by HNG Interns over the years.
          Get to know about amazing projects buit by HNG Interns over the years
        </p>

        <div className="mt-40">
        <div className="card grid grid-cols-1 md:grid-cols-4 md:-mt-48 gap-10 md:p-14 p-10 mt-5 rounded-md justify-center align-center text-center">
        {Cards.map ((cards, i) => (
            <div key={i}>
              <img src={cards.icon} alt="projects" className="justify-center align-center"/>
              <h1 className="font-semi-bold text-gray-300 text-sm my-3">{cards.title}</h1>
              <p className="text-lg leading-relaxed text-black">{cards.des}</p>
              <button className="text-xs text-[#007BFF]">View Team Axle >></button>
            </div>
          ))
        }
        </div>
        </div>

        <div className=" hidden md:flex mt-40">
        <div className="card grid grid-cols-4 md:-mt-48 gap-10 md:p-14 p-10 mt-5 rounded-md justify-center align-center text-center">
        {Cards.map ((cards, i) => (
            <div key={i}>
              <img src={cards.icon} alt="projects" className="justify-center align-center"/>
              <h1 className="font-semi-bold text-gray-300 text-sm my-3">{cards.title}</h1>
              <p className="text-lg leading-relaxed text-black">{cards.des}</p>
              <button className="text-xs text-[#007BFF]">View Team Axle >></button>
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
      <div className= "p-12 text-center text-white font-medium bg-[#007BFF] h-[50vh] align-center justify-center">
        <img src={Quote} alt="quote" className="p-2 w-full h-10 text-center align-center justify-center" />
        <p className="p-4 px-32 md:px-72 md:py-8">Amazing Quoyte from the founder to entice people and give personal experience on his own experince.
          Amazing Quoyte from the founder to entice people and give personal experience on his own experince.
        </p>
        <span className="text-sm text-center">Mark Mark</span>
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
        <div className="m-12 bg-[#1E2532] h-1/2 align-center justify-center">
          <p className=" p-8 text-xs text-[#E7332B]">OUR PATNERS</p>
          <h3 className="text-white w-fit md:text-3xl text-xl m-2 md:mx-32 mx-6 md:px-64 md:py-4 px-40 py-4 ">Get the Latest News on Scholarships Around The World.</h3>

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
