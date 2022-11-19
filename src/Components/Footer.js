import React from 'react';
import {  FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";

import HNG from '../Images/Logo/Logo.svg';


const Footer = () => {
  return (
    <div className="Footer">

      <div className="p-4 bg-white sm:p-6 dark:bg-gray-900">
        <div className="md:flex sm:pl-4 md:pl-16">
          <div className="justify-between flex md:hidden mb-6 ">
              <div className="pl-4 w-[80px]">
                <img
                src={HNG}
                alt="HNG Logo"
                className="" />
              </div>
              <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 pr-4">
                  <a href="facebook" class="text-[#E7332B] hover:text-gray-900">
                      <span><FaFacebook /></span>
                  </a>
                  <a href="instagram" class="text-[#E7332B] hover:text-gray-900">
                      <span><AiFillInstagram /></span>
                  </a>
                  <a href="twitter" class="text-[#E7332B] hover:text-gray-900">
                      <span><AiFillTwitterCircle /></span>
                  </a>
                </div>
          </div>
          <div className="mt-0 mb-6 mt-6 md:mb-0 pr-40">
          <ul className="text-gray-600">
          <li className="mb-2">
              <a href="about" class="hover:underline">About HNG</a>
          </li>
          <li className="mb-4">
              <a href="stores" class="hover:underline">Our Stores</a>
          </li>
          <li>
              <a href="faqs" class="hover:underline">FAQs</a>
          </li>
          </ul>
          </div>
          <div className="grid sm:gap-6 md:gap-40 lg:grid-cols-4 md:grid-cols-2 sm: grid-cols-2 xs:grid-cols-1 ">
            <div>
                <ul className="text-gray-600">
                    <li className="mb-4">
                        <a href="bevel" class="hover:underline">Team Bevel</a>
                    </li>
                    <li className="mb-4">
                        <a href="gear" class="hover:underline">Team Gear</a>
                    </li>
                    <li className="mb-4">
                        <a href="brainbox" class="hover:underline">Team Brainbox</a>
                    </li>
                    <li className="mb-4">
                        <a href="chisel" class="hover:underline">Team Chisel</a>
                    </li>
                    <li className="mb-4">
                        <a href="boot" class="hover:underline">Team Boot</a>
                    </li>
                    <li className="mb-4">
                        <a href="headlight/" class="hover:underline">Team Headlight</a>
                    </li>
                  </ul>
              </div>
          <div>
              <ul className="text-gray-600">
              <li className="mb-4">
                  <a href="crankshaft" class="hover:underline">Team Crankshaft</a>
              </li>
            <li className="mb-4">
                  <a href="sandpaper" class="hover:underline">Team Sandpaper</a>
              </li>
              <li className="mb-4">
                  <a href="engine" class="hover:underline">Team Engine</a>
              </li>
              <li className="mb-4">
                  <a href="ruler" class="hover:underline">Team Ruler</a>
              </li>
              <li className="mb-4">
                  <a href="mallet" class="hover:underline">Team Mallet</a>
              </li>
              <li className="mb-4">
                  <a href="scale" class="hover:underline">Team Scale</a>
              </li>
              </ul>
          </div>
          <div>
              <ul className="text-gray-600 ">
              <li className="mb-4">
                  <a href="socket" class="hover:underline">Team Socket</a>
              </li>
            <li className="mb-4">
                  <a href="powerdrill" class="hover:underline">Team Powerdrill</a>
              </li>
              <li className="mb-4">
                  <a href="prybar" class="hover:underline">Team Prybar</a>
              </li>
              <li className="mb-4">
                  <a href="v-belt" class="hover:underline">Team V-belt</a>
              </li>
              <li className="mb-4">
                  <a href="hydraulic" class="hover:underline">Team Hydaulic</a>
              </li>
              <li className="mb-4">
                  <a href="clutch" class="hover:underline">Team Clutch</a>
              </li>
              </ul>
              </div>
              <div>
                  <ul className="text-gray-600">
                  <li className="mb-4">
                      <a href="tape" class="hover:underline">Team Tape</a>
                  </li>
                <li className="mb-4">
                      <a href="plug" class="hover:underline">Team Plug</a>
                  </li>
                  <li className="mb-4">
                      <a href="axle" class="hover:underline">Team Axle</a>
                  </li>
                  <li className="mb-4">
                      <a href="drillpress" class="hover:underline">Team Drillpress</a>
                  </li>
                  <li className="mb-4">
                      <a href="grit" class="hover:underline">Team Grit</a>
                  </li>
                  <li>
                      <a href="axe" class="hover:underline">Team Axe</a>
                  </li>
                  </ul>
                  </div>
            </div>
          </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="pl-4 w-[80px] hidden md:flex">
        <img
          src={HNG}
          alt="HNG Logo"
          className="" />
        </div>
        <span className="text-sm sm:mx-48 text-gray-500">&#169; 2022 <a href="hng" class="hover:underline">HNG</a>. All Rights Reserved.
        </span>
      <div>
        <span className="text-sm flex flex-rows text-gray-500 hidden md:flex">
          <TbWorld className="mt-1 mr-1" />English (US)
        </span>
      </div>
      <div class="hidden md:flex mt-4 space-x-6 sm:justify-center sm:mt-0 pr-4">
          <a href="facebook" class="text-[#E7332B] hover:text-gray-900">
              <span><FaFacebook /></span>
          </a>
          <a href="instagram" class="text-[#E7332B] hover:text-gray-900">
              <span><AiFillInstagram /></span>
          </a>
          <a href="twitter" class="text-[#E7332B] hover:text-gray-900">
              <span><AiFillTwitterCircle /></span>
          </a>
        </div>
      </div>
    </div>

    </div>
  );
}

export default Footer;
