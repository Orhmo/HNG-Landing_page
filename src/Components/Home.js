import React from 'react';

import Google from "../Images/Companies/Google.svg";
import Amazon from "../Images/Companies/Amazon.svg";
import Group from "../Images/Companies/Group.svg";
import Uber from "../Images/Companies/Uber.svg";

import Card1 from "../Images/Cards/Frame_1.svg";
import Card2 from "../Images/Cards/Frame_2.svg";
import Card3 from "../Images/Cards/Frame_3.svg";
import Card4 from "../Images/Cards/Frame_4.svg";
import ABout from "../Images/About/Frame_5.svg";
import Quote from "../Images/Quote.svg";

const Home = () => {
  const  Cards = [
    {
    img: Card1,
    title:'TEAM AXLE',
    des:'Engineer 360: An assessment platform for Engineers',
    },
    {
    img: Card2,
    title:'TEAM AXLE',
    des:'A Stock Analysis Web Application for FinTech',
    },
    {
    img: Card3,
    title:'TEAM AXLE',
    des:'Engineer 360: An assessment platform for Engineers',
    },
    {
    img: Card4,
    title:'TEAM AXLE',
    des:'Engineer 360: An assessment platform for Engineers',
    }
  ]
  return (
    <div className="Home">

      {/*===============HERO===============*/}
    <div className="py-4  md:px-24 px-4">

      <div className="Hero_image_set_1 ">
      </div>

      <div className="Hero_message align-center justify-center w-2/3">
        <h2 className="md:text-5xl text-4xl font-bold tracking-wide md:leading-tight leading-smug">Get to know about amazing projects buit by
          <span className="text-[#E7332B]"> HNG Interns </span>over the years
        </h2>
        <p className="">
          Get to know about amazing projects buit by HNG Interns over the years.
          Get to know about amazing projects buit by HNG Interns over the years.
          Get to know about amazing projects buit by HNG Interns over the years
        </p>


        <div className="Buttons flex flex-row align-center justify-center">
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

      <div className="Hero_image_set_2">
      </div>
    </div>

      {/*===============ABOUT================*/}
      <section className="Blog">
      <div className="md:flex flex-row gap-6 md:px-4 md:px-28 items-center">
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
      <div className="align-center justify-center">
        <p className="text-xs text-[#E7332B]">LASTEST PROJECTS</p>
        <h3 className="">
          Check out the latest projects from HNGi9 teams
        </h3>
        <p className="text-sm">
          Get to know about amazing projects buit by HNG Interns over the years.
          Get to know about amazing projects buit by HNG Interns over the years.
          Get to know about amazing projects buit by HNG Interns over the years
        </p>


        <div className="Car">
          {Cards.map(({cards, id}) => (
           <div key={id}>
           <img src= {Cards.img} alt="img" className="h-16"/>
           <h1 className="font-semi-bold text-gray-300 text-sm my-3">{Cards.title}</h1>
           <p className="text-lg leading-relaxed text-black">{Cards.des}</p>
           <button className="text-sm">View Team Axle >></button>
           </div>
        ))}
        </div>

        <div>
        <button
          href="more"
          className="text-[#E7332B]  border border-[#E7332B] hover:bg-[#E7332B] hover:text-white bg-white m-2 p-2 " >
          View More
        </button>
        </div>
      </div>
      </section>

      <section className="Quote">
      <div className= " text-center bg-[#007BFF] h-[40vh] align-center justify-center">
        <img src={Quote} alt="quote" className="p-2 w-full h-10 text-center align-center justify-center" />
        <p className="p-4">Amazing Quoyte from the founder to entice people and give personal experience on his own experince.
          Amazing Quoyte from the founder to entice people and give personal experience on his own experince.
        </p>
      </div>
      </section>

      {/*==============PARTNERS===========*/}
      <div className=" text-center Partners bg-[#F9FBFF] align-center justify-center">
        <section className="Partners">
        <p className="pt-32 text-xs text-[#E7332B]">OUR PATNERS</p>
        <div className="flex justify-center flex-wrap md:w-4/5 my-16 mx-auto gap-x-20 md:gap-y-12 gap-y-8">
        <img
          src={Uber} alt="logo"
          className="h-14"
          />
        <img
         src={Group} alt="logo"
          className="h-14"
          />
        <img
         src={Google} alt="logo"
          className="h-14"
          />
        <img
          src={Amazon} alt="logo"
          className="h-14"
          />
        <img
          src={Amazon} alt="logo"
          className="h-14"
          />
        <img
          src={Uber} alt="logo"
          className="h-14"
          />
        <img
          src={Group} alt="logo"
          className="h-14"
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
