"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";

const Navbar = () => {
  // State to toggle dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility on click
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  return (
    <div className=" h-[142px] max-w-screen-xl mx-auto font-agTitle">
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
      {/* Navbar */}
      <div className="h-[38px] w-[1170px] mt-[40px] ml-[135px] flex items-center ">
        <div className="h-[24px] w-[675px] flex justify-between">
          <div className="h-[24px] w-[118px] text-[24px] font-bold -mt-1.5">
            Exclusive
          </div>
          <div className="h-[24px] w-[367px] flex justify-center items-center ">
            <ul className="flex items-center text-[16px] font-normal gap-14">
              <li className="underline underline-offset-2">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="hover:underline hover:underline-offset-2">
                <Link href={"/contact"}>Contact</Link>
              </li>
              <li className="hover:underline hover:underline-offset-2">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="hover:underline hover:underline-offset-2">
                <Link href={"/signUp"}>Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-[38px] w-[395px] flex justify-between items-center  ml-[148px]">
          <div className="h-[38px] w-[243px] flex justify-between items-center ">
            <div className="h-[24px] w-[211px] flex justify-between items-center   ml-[20px]">
              <input
                type="Text"
                placeholder="What are you looking for?"
                className="  text-[12px] font-normal tracking-wider border-none outline-none"
              ></input>
              <div className="w-[24px] h-[24px] mt-[4px] text-[22px] ">
                <Link href={"#"}>
                  <FiSearch />
                </Link>
              </div>
            </div>
          </div>
          <div className="h-[32px] w-[128px] ml-[24px] flex justify-between">
            <div className="h-[32px] w-[32px]  text-[30px] ">
              <Link href={"#"}>
                <IoMdHeartEmpty />
              </Link>
            </div>
            <div className="h-[32px] w-[32px]  text-[30px] ">
              <Link href={"#"}>
                <IoCartOutline />
              </Link>
            </div>
            <div className="h-[32px] w-[32px]  text-[30px] ">
              <Link href={"#"}>
                <GoPerson />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className="w-[1440px] border-gray-300 mt-[16px] border-1" />
    </div>
  );
};

export default Navbar;
