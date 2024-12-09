"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Blackheader = () => {
  // State to toggle dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility on click
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div>
      {/* title Discount Bar */}
      <div className="h-[48px] w-[1440px] bg-black flex items-center text-white  ">
        <div className="h-[24px] w-[859px] ml-[445px]   flex  ">
          <div className="h-[24px] w-[550px] justify-between text-[15px]  flex     ">
            <p className="   ">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Link className="underline text-[14px] font-semibold " href={""}>
              ShopNow
            </Link>
          </div>
          {/* English Button */}
          <div
            className="  w-[78px] h-[24px] ml-[231px] text-[15px] flex justify-around items-center text-white relative"
            onClick={toggleDropdown}
          >
            <div>
              <button className="flex items-center font-light text-[15px] tracking-wide">
                English {/* // Toggle dropdown on click English */}
              </button>
            </div>
            <div className="-mr-3">
              <IoIosArrowDown />

              <ul
                className={`${
                  isDropdownOpen ? "block" : "hidden"
                } absolute -left-10 mt-3  bg-white text-black py-1 w-[130px] text-[16px]  text-left rounded shadow-md shadow-black ;`}
              >
                <li className="py-1 px-2 pl-4 hover:bg-blue-600 hover:text-white cursor-pointer">
                  English
                </li>
                <li className="py-1 px-2  pl-4 hover:bg-blue-600 hover:text-white cursor-pointer">
                  Urdu
                </li>
                <li className="py-1 px-2 pl-4  hover:bg-blue-600 hover:text-white cursor-pointer">
                  Arabic
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blackheader;
