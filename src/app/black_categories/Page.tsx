"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Timer_Blackdiv from "../components/timer _blackdiv";

const Black_Categories = () => {
  return (
    <div className=" h-[500px] w-[1170px]  m-auto font-agTitle mt-[140px] bg-Text2">
      {/* Text div */}
      <div className="h-[500px] w-[450px] ml-[56px] flex relative ">
        <div>
          <p className="h-[20px] w-[90px]  mt-[69px] text-Button1 absolute text-[16px] font-semibold ">
            Cagegories
          </p>
        </div>
        <div>
          <p className="h-[120px] w-[443px] mt-[121px]  leading-tight text-Text text-[48px] font-semibold ">
            Enhance Your Music Experience
          </p>
        </div>
        <div className="absolute mt-[273px]  h-[62px] w-[320px]">
          <Timer_Blackdiv />
        </div>
        <div className="h-[56px] w-[171px] mt-[375px] absolute bg-Button1 shadow-md rounded-md text-Text flex justify-center text-[16px] font-medium hover:bg-slate-300">
          <button className=""> Buy Now!</button>
        </div>
        <div className="h-[full] w-[full] absolute ml-[500px] bg-blue-200">
          <div className="h-[900px] w-[800px] absolute ">
            <Image
              src={"/black_categories/bg.png"}
              alt="bg Image"
              width={10000}
              height={10000}
              className="mt-[3px] -ml-[150px] "
            ></Image>
          </div>
          <div className="h-[420px] w-[600px] absolute mt-[37px]   ">
            <Image
              src={"/black_categories/banner-1.png"}
              alt="Banner-1 Image"
              width={568}
              height={330}
              className="mt-[45px] ml-[16px] "
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Black_Categories;
