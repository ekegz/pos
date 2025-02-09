import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-12 flex justify-around">
      <button className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] rounded-[20px] w-[200px]">
        <FaHome className="inline mr-2" size={30} />
        <p>Home</p>
      </button>
      <button className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] rounded-[20px] w-[200px]">
        <MdOutlineReorder className="inline mr-2" size={30} />
        <p>Orders</p>
      </button>
      <button className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] rounded-[20px] w-[200px]">
        <MdTableBar className="inline mr-2" size={30} />
        <p>Tables</p>
      </button>
      <button className="flex items-center justify-center text-[#f5f5f5] bg-[#343434] rounded-[20px] w-[200px]">
        <CiCircleMore className="inline mr-2" size={30} />
        <p>More</p>
      </button>

      <button className="absolute bottom-4 items-center text-[#f5f5f5] bg-[#f6b100] rounded-full p-3">
        <BiSolidDish size={30} />
      </button>
    </div>
  );
};

export default BottomNav;
