"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Sidebar from "../components/siderbar";

const MainPage = () => {
  return (
    <div className="relative h-[344px] w-[1170px] flex justify-between items-center font-agTitle  mt-[40px] ml-[135px]">
      {/* sidebar div working */}
      <Sidebar />
      {/* black div */}
      <div className="h-[344px] w-[892px] flex relative bg-Text2">
        <div className="h-[300px] w-[396px] relative  ">
          <span className="flex  ">
            <Image
              src={"/main_page/apple.png"}
              alt="Iphone Image"
              width={40}
              height={49}
              className="mt-[58px] ml-[64px]"
            ></Image>
            <p className="h-[20px] w-[126px] ml-[24px] mt-[72.5px] text-Text text-[16px] ">
              iPhone 14 Series
            </p>
          </span>

          <p className="h-[120px] w-[294px] mt-[20px] ml-[64px] leading-tight text-Text text-[48px] font-semibold">
            Up to 10% off Voucher
          </p>
          <span className="flex text-Text mt-[22px] ml-[67px]">
            <span className="  text-buttonscolor underline-offset-8 underline">
              Shop Now
            </span>
            <span className=" ml-[8px] mt-[6px] text-buttonscolor cursor-pointer">
              <Link href={"#"}>
                <FaArrowRight />
              </Link>
            </span>
          </span>

          {/* <div className="h-[49px] w-[190px] flex justify-between items-center mt-[58px] ml-[64px] bg-white">

          </div> */}
        </div>
        <Image
          src={"/main_page/mobile_image.png"}
          alt="Mobile Image"
          width={496}
          height={352}
          className=" mt-[16px] ml-[38px]"
        ></Image>
        <div className="absolute">
          <div className="h-[14px] w-[110px] flex justify-between items-center mt-[319px] ml-[353px]">
            <Link href={"#"}>
              <p className="h-[12px] w-[12px] rounded-full opacity-50 bg-primary"></p>
            </Link>
            <Link href={"#"}>
              <p className="h-[12px] w-[12px] rounded-full opacity-50 bg-primary"></p>
            </Link>
            <Link href={"#"}>
              <p className="h-[14px] w-[14px] rounded-full border-primary border-2  bg-secondary2"></p>
            </Link>
            <Link href={"#"}>
              <p className="h-[12px] w-[12px] rounded-full opacity-50 bg-primary"></p>
            </Link>
            <Link href={"#"}>
              <p className="h-[12px] w-[12px] rounded-full opacity-50 bg-primary"></p>
            </Link>
          </div>
        </div>
      </div>
      {/* Dropdown Menu */}
    </div>
  );
};

export default MainPage;
