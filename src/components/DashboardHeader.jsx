import { FaPlus } from "react-icons/fa6";
import { HiOutlineRefresh } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa6";

const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center mb-3">
      <h1 className="text-black font-bold tracking-wide">CNAAP Dashboard</h1>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <button className="flex justify-between items-center py-1 px-2 bg-[#ffffff] rounded-sm font-semibold tracking-wide">
          Add widget <FaPlus className="ml-2" />
        </button>

        <div className="py-2 px-2 bg-[#ffffff] rounded-sm ml-5">
          <HiOutlineRefresh />
        </div>
        <div className="py-2 px-2 bg-[#ffffff] rounded-sm ml-5">
          <BsThreeDotsVertical />
        </div>

        <div className="flex justify-between items-center border border-[#00308F] rounded-sm ml-5">
          <div className="py-2 px-1 bg-[#ffffff] rounded-sm mr-1">
            <MdOutlineAccessTimeFilled className="text-[#00308F] " />
          </div>
          <p className="flex justify-between items-center py-1 px-2 text-[#00308F] font-bold tracking-wide bg-[#ffffff]">
            Last 2 days <FaAngleDown className="ml-2" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
