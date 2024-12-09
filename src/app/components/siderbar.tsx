"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Add event listener to close dropdown when clicking outside
    const handleClickOutside = (event: any) => {
      const dropdowns = document.querySelectorAll(".dropdown-content");
      dropdowns.forEach((dropdown: any) => {
        if (!dropdown.contains(event.target) && !event.target.closest("li")) {
          setOpenDropdown(0); // Close the dropdown if clicked outside
        }
      });
    };

    // Bind the event listener
    window.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  if (!isClient) return null;

  const toggleDropdown = (dropdownNumber: any) => {
    setOpenDropdown(openDropdown === dropdownNumber ? 0 : dropdownNumber);
  };

  return (
    <div>
      {/* sidbar div */}
      <div className="h-[344px] w-[217px] font-agTitle ">
        <ul className="h-[344px] w-[217px] flex-col  text-[16px] font-normal leading-10  ml-1">
          <div className=" h-[24px] w-[217px] flex justify-between items-center ">
            <li className="flex items-center">Woman's Fashion</li>
            <Link href={"#"}>
              <MdOutlineKeyboardArrowRight
                className=" text-[24px]"
                onClick={() => toggleDropdown(1)}
              />
              <ul
                className={`${
                  openDropdown === 1 ? "block" : "hidden"
                } absolute bg-white w-[530px] grid grid-cols-5  left-56  -top-1 p-[6px] z-50 text-[16px] text-Text2 rounded-lg shadow-sm shadow-black`}
              >
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    dress
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    skirt
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    blouse
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    pants
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    jackets
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    coat
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    sweater
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    top
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    jeans
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    shorts
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    scarfs
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    flats
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    hat
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    heals
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    sunglasses
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    boots
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    sandals
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    handbag
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    clutch
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    necklaces
                  </li>
                </Link>
              </ul>
            </Link>
          </div>
          <div className="h-[24px] w-[217px] flex justify-between items-center mt-[14px] mb-2">
            <li className="flex items-center">Men's Fashion</li>
            <Link href={"#"}>
              <MdOutlineKeyboardArrowRight
                className="  text-[24px]"
                onClick={() => toggleDropdown(2)}
              />
              <ul
                className={`${
                  openDropdown === 2 ? "block" : "hidden"
                } absolute bg-white w-[530px] grid grid-cols-5  left-56  top-8 p-[6px] z-50 text-[16px] text-Text2 rounded-lg shadow-sm shadow-black`}
              >
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    shirt
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    t-shirt
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    polo
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    sweater
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    hoodie
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    jacket
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    coat
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    blazer
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    pants
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    jeans
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    shorts
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    suits
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    tie
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    bowtie
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    belt
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    socks
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    shoes
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    sneakers
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    loafers
                  </li>
                </Link>
                <Link href={"#"}>
                  <li className="hover:bg-gray-200 hover:rounded-md pl-2">
                    boots
                  </li>
                </Link>
              </ul>
            </Link>
          </div>
          <li>Electronics</li>
          <li>Home & Lifystyle</li>
          <li>Medicine</li>
          <li>Sport & Outdoor</li>
          <li>Baby's & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
