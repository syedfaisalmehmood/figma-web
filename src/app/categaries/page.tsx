import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { CiMobile3 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { TbDeviceGamepad } from "react-icons/tb";
import Link from "next/link";

const Category = () => {
  return (
    <div className="w-[1170] h-[313px]  m-auto mt-[80px] font-agTitle ">
      <div className="w-[1170] h-[108px]  flex justify-between items-center">
        <div className="w-[379px] h-[108px] ">
          <div className="flex  flex-cols w-[126px] h[40px]  ">
            <p className="w-[20px] h-[40px] rounded-md bg-secondary2"></p>
            <p className=" flex w-[64px] h-[20px] ml-[16px] mt-[10px]  text-[16px] text-secondary2 font-semibold">
              Categories
            </p>
          </div>
          <h1 className="  text-[36px] w-[379px] h-[48px] font-semibold mt-[20px]">
            Browse By Category{" "}
          </h1>
        </div>
        {/* Left & Right Arrow */}
        <div className="h-[46px] w-[100px] flex justify-between items-center ml-[475px] mt-[57px] ">
          <FaArrowLeft className="text-[22px] ml-[15px]" />
          <FaArrowRight className="text-[22px] mr-[15px] opacity-50" />
        </div>
      </div>
      {/* Icons Div */}
      <div className="h-[145px] w-[1170px] mt-[60px] flex justify-between ">
        <div className="h-[145px] w-[170px] relative flex justify-center hover:bg-secondary2 border-2 border-Text2/10 rounded-md hover:text-Text  ">
          <Link href={"#"}>
            <CiMobile3 className="mt-[31.12] text-[56px]   " />
          </Link>
          <p className="mt-[97px] h-[24px] absolute text-[16px]  ">Phones</p>
        </div>
        <div className="h-[145px] w-[170px] relative flex justify-center hover:bg-secondary2 border-2 border-Text2/10 rounded-md  hover:text-Text">
          <Link href={"#"}>
            <HiOutlineComputerDesktop className="mt-[31.12]  text-[48px]   " />
          </Link>
          <p className="mt-[97px] h-[24px] absolute text-[16px]  ">Computers</p>
        </div>
        <div className="h-[145px] w-[170px] relative flex justify-center hover:bg-secondary2 border-2 border-Text2/10 rounded-md  hover:text-Text">
          <Link href={"#"}>
            <BsSmartwatch className="mt-[31.12] text-[48px]   " />
          </Link>
          <p className="mt-[97px] h-[24px] absolute text-[16px]  ">
            SmartWatch
          </p>
        </div>
        <div className="h-[145px] w-[170px] relative flex justify-center hover:bg-secondary2 border-2 border-Text2/10 rounded-md  hover:text-Text">
          <Link href={"#"}>
            <CiCamera className="mt-[31.12] text-[48px]   " />
          </Link>
          <p className="mt-[97px] h-[24px] absolute text-[16px]  ">Camera</p>
        </div>
        <div className="h-[145px] w-[170px] relative flex justify-center hover:bg-secondary2 border-2  border-Text2/10 rounded-md  hover:text-Text">
          <Link href={"#"}>
            <CiHeadphones className="mt-[31.12] text-[48px]   " />
          </Link>
          <p className="mt-[97px] h-[24px] absolute text-[16px]  ">
            HeadPhones
          </p>
        </div>
        <div className="h-[145px] w-[170px] relative flex justify-center hover:bg-secondary2 border-2 border-Text2/10 rounded-md  hover:text-Text">
          <Link href={"#"}>
            <TbDeviceGamepad className="mt-[31.12] text-[56px] opacity-80   " />
          </Link>
          <p className="mt-[97px] h-[24px] absolute text-[16px]  ">Gaming</p>
        </div>
      </div>
      <hr className="w-[1170px] border-Text2/30 mt-[70px]  border-1" />
    </div>
  );
};

export default Category;
