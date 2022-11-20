import React, { useState } from 'react';
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import HNG from '../Images/Logo/Logo.svg';

import Search from './Search.js';
const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="NavBar flex justify-between py-4 px-24 px-4 mt-8">
    <div className="">{/*--nav begin*/}
    <img
      src={HNG}
      alt="HNG Logo"
      className="h-9 cursor-pointer" />
    </div>

   {/* ==========Navigation============ */}
   <div>
    <ul className="hidden md:flex cursor-pointer text-black text-lg text-center gap-8 mt-2">
      <li className="hover:text-red-600">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:text-red-600 ">
        <NavLink to="/Teams">Teams</NavLink>
      </li>
      <li className="hover:text-red-600">
        <NavLink to="/FAQs">FAQs</NavLink>
      </li>
      <li className="hover:text-red-600">
        <NavLink to="/About_HNG">AboutHNG</NavLink>
      </li>
    </ul>
    </div> {/*--nav ends*/}

    <div className="">
      <Search />
    </div>

    {/*============Hamburger Menu============*/}
    <div
      onClick={() => setNav(!nav)}
      className="cursor-pointer relative text-black md:hidden z-50 mt-2"
      >
      {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
    </div>

    {nav && (
      <ul
      className={"md:hidden absolute lg:hidden flex flex-col align-center justify-center top-[15%] z-50 bg-white w-2/3 h-1/2 shadow-2xl gap-10 text-medium p-7 pt-20 right-0 duration-500"}>
      <li className="hover:text-red-600 ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="hover:text-red-600">
        <NavLink to="/Teams">Teams <FaAngleDown className="" /></NavLink>
      </li>
      <li className="hover:text-red-600">
        <NavLink to="/FAQs">FAQs</NavLink>
      </li>
      <li className="hover:text-red-600">
        <NavLink to="/About_HNG">AboutHNG</NavLink>
      </li>
      </ul>

    )}

    </div>
  );
}

export default NavBar;
