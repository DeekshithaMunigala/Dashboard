import { MdKeyboardArrowRight } from "react-icons/md";
import { PiBellSimpleRinging } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="py-2 bg-white px-10 shadow-md flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="px-2 text-gray-400 tracking-wide font-bold">Home</h1>
          <MdKeyboardArrowRight className="text-gray-400 h-6 w-6" />
          <h1 className="px-2 text-[#00308F] tracking-wide font-bold">
            Dashboard V2
          </h1>
        </div>
        <div className="w-6/12 flex justify-around items-center">
          <div className="relative w-4/6">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search anything.."
              className="w-full border border-[#7CB9E8] outline-0 bg-[#F0F8FF] rounded-md px-10 py-1"
            />
            <IoSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>

          <PiBellSimpleRinging className="text-gray-500 h-6 w-6" />
        </div>
      </div>
    </>
  );
};

export default Header;
