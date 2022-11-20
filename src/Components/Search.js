import  React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const teams = [
    { name : "Team Axe"},
    { name : "Team Brainbox"},
    { name : "Team Grit"},
    { name : "Team Clutch"},
    { name : "Team Engine"},
    { name : "Team Boot"},
    { name : "Team Chisel"},
    { name : "Team Mallet"},
    { name : "Team VBelt"},
    { name : "Team socket"},
    { name : "Team Powerdrill"},
    { name : "Team Axle"},
    { name : "Team Axe"},
    { name : "Team Gear"},
    { name : "Team Prybar"},
  ]

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  if (searchInput.length > 0) {
    teams.filter((team) => {
      return
      team.name.match(searchInput);
    });
  }
  return (

    <div className ="Search">
    <form action="/" method = "get" >
    <div className="hidden md:flex md:flex-row md:border md:border-grey-200 md:rounded-md  md:w-[22vw]">
    <button
      type="submit"
      className="text-lg m-2 "
      >
      <FiSearch />
    </button>
      <input
        type="text"
        id="header-search"
        className="text-xs w-full border border-white"
        onChange={handleChange}
        value={searchInput}
        placeholder="Search about HNG teams and mentors"
      />
      </div>

      <div className="flex md:hidden">
      <button
        type="submit"
        className="text-2xl mt-2 ml-62"
        >
        <FiSearch />
      </button>
      </div>
      </form>
      </div>

  )
}

export default Search;
