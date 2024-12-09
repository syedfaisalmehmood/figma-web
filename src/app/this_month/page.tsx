import React from "react";
import Timer from "../components/timer";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Thismonth = () => {
  return (
    <div className="w-[1170px] h-[533px]  m-auto mt-[140px] font-agTitle ">
      <div className="relative flex w-[1170px] h-[103px] ">
        <div className="w-[600px] ">
          <div className="absolute w-[400px] h-[108px]  ">
            <div className="flex  flex-cols w-[125px] h[40px] justify-between  ">
              <p className="w-[20px] h-[40px] rounded-md bg-secondary2"></p>
              <p className=" flex w-[89px] h-[20px] mt-[10px] tracking-tight ml-[16px]  text-[16px] text-secondary2 font-semibold ">
                This Month
              </p>
            </div>
            <h1 className="  text-[36px] w-[400px] h-[48px] font-semibold mt-[24px]">
              Best Selling Products
            </h1>
          </div>
        </div>
        <div className="h-[56px] w-[159px] flex justify-center items-center ml-[475px] text-Text text-[16px] rounded-md mt-[57px] bg-secondary2 font-medium cursor-pointer hover:opacity-90">
          <Link href={"#"}> View All</Link>
        </div>
      </div>
      {/* cart2 div1 */}
      <div className="h-[350px] w-[1170px] flex justify-between mt-[40px] ">
        <div className="h-[350px] relative w-[270px] flex  ">
          <div className="h-[250px] w-[270px] flex  ">
            <div className="h-[76px] w-[34px] absolute mt-[12px] ml-[224px] ">
              <IoMdHeartEmpty className="h-[20px] w-[20px] mt-3 m-auto " />
              <IoEyeOutline className="h-[20px] w-[20px] mt-3 m-auto " />
            </div>
            <div className="h-[146px] w-[140px] flex relative  mt-[52px]  ml-[40px] ">
              <Image
                src={"/thismonth/coat.png"}
                alt="Card-1 Image"
                width={140}
                height={146}
                className=""
              ></Image>
            </div>
          </div>
          <div className="h-[84px] w-[201px] absolute  mt-[266px]">
            <p className="h-[24px] w-[201px] text-[16px] text-black font-medium ">
              The north coat
            </p>
            <div className="h-[24px] w-[85px] flex justify-between  mt-[8px]">
              <p className="text-[16px] font-medium text-secondary2">$260</p>
              <p className="text-[16px] font-medium text-Text2 opacity-50 line-through">
                $360
              </p>
            </div>
            <div className="h-[20px] w-[140px] flex text-staricon gap-2 items-center  mt-[8px]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-[14px] font-semibold text-Text2 opacity-50">
                (65)
              </span>
            </div>
          </div>
        </div>
        {/* cart2-div2 */}
        <div className="h-[350px] w-[270px] ">
          <div className="h-[350px] relative w-[270px] flex  ">
            <div className="h-[250px] w-[270px] flex justify-between ">
              <div className="h-[76px] w-[34px] absolute mt-[12px] ml-[224px] ">
                <IoMdHeartEmpty className="h-[20px] w-[20px] mt-3 m-auto " />
                <IoEyeOutline className="h-[20px] w-[20px] mt-3 m-auto " />
              </div>
              <div className="flex  h-[130px] w-[180px] relative  mt-[55px]  ml-[40px] ">
                <Image
                  src={"/thismonth/bag.png"}
                  alt="Card-1 Image"
                  width={178}
                  height={129}
                  className=""
                ></Image>
              </div>
            </div>
            {/* Add to Cart Button */}
            {/* <div className="flex absolute mt-[80%]  w-[270px] h-[41px] bg-black rounded-sm">
              <button className="w-[96px] h-[41px] text-[16px] font-medium text-BG m-auto">
                Add To Cart
              </button>
            </div> */}

            <div className="h-[84px] w-[201px] absolute  mt-[266px]">
              <p className="h-[24px] w-[201px] text-[16px] text-black font-medium ">
                Gucci duffle bag
              </p>
              <div className="h-[24px] w-[85px] flex justify-between  mt-[8px]">
                <p className="text-[16px] font-medium text-secondary2">$960</p>
                <p className="text-[16px] font-medium text-Text2 opacity-50 line-through">
                  $1160
                </p>
              </div>
              <div className="h-[20px] w-[140px] flex text-staricon gap-2 items-center  mt-[8px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />
                <span className="text-[14px] font-semibold text-Text2 opacity-50">
                  (65)
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* cart2 div3 */}
        <div className="h-[350px] w-[270px]">
          <div className="h-[350px] relative w-[270px] flex  ">
            <div className="h-[250px] w-[270px] flex  ">
              <div className="h-[76px] w-[34px] absolute mt-[12px] ml-[224px] ">
                <IoMdHeartEmpty className="h-[20px] w-[20px] mt-3 m-auto " />
                <IoEyeOutline className="h-[20px] w-[20px] mt-3 m-auto " />
              </div>
              <div className="h-[120px] w-[191px] flex relative  mt-[60px]  ml-[40px] ">
                <Image
                  src={"/thismonth/cpu_cooler.png"}
                  alt="Card-1 Image"
                  width={191}
                  height={95}
                  className="mt-[28px] -ml-[5px]"
                ></Image>
              </div>
            </div>
            <div className="h-[84px] w-[201px] absolute  mt-[266px]">
              <p className="h-[24px] w-[201px] text-[16px] text-black font-medium ">
                RGB liquid CPU Cooler
              </p>
              <div className="h-[24px] w-[85px] flex justify-between  mt-[8px]">
                <p className="text-[16px] font-medium text-secondary2">$160</p>
                <p className="text-[16px] font-medium text-Text2 opacity-50 line-through">
                  $170
                </p>
              </div>
              <div className="h-[20px] w-[140px] flex text-staricon gap-2 items-center  mt-[8px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />
                <span className="text-[14px] font-semibold text-Text2 opacity-50">
                  (65)
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* cart2 div4 */}
        <div className="h-[350px] w-[270px]">
          <div className="h-[350px] relative w-[270px] flex  ">
            <div className="h-[250px] w-[270px] flex  ">
              <div className="h-[76px] w-[34px] absolute mt-[12px] ml-[224px] ">
                <IoMdHeartEmpty className="h-[20px] w-[20px] mt-3 m-auto " />
                <IoEyeOutline className="h-[20px] w-[20px] mt-3 m-auto " />
              </div>
              <div className="h-[190px] w-[180px] flex relative  mt-[38px]   ml-[40px]  ">
                <Image
                  src={"/thismonth/book_self.png"}
                  alt="Card-1 Image"
                  width={140}
                  height={176}
                  className="m-auto"
                ></Image>
              </div>
            </div>
            <div className="h-[84px] w-[201px] absolute  mt-[266px]">
              <p className="h-[24px] w-[201px] text-[16px] text-black font-medium ">
                Small BookSelf
              </p>
              <div className="h-[24px] w-[85px] flex justify-between  mt-[8px]">
                <p className="text-[16px] font-medium text-secondary2">$360</p>
                {/* <p className="text-[16px] font-medium text-Text2 opacity-50 line-through">
                  $400
                </p> */}
              </div>
              <div className="h-[20px] w-[140px] flex text-staricon gap-2 items-center  mt-[8px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />

                <span className="text-[14px] font-semibold text-Text2 opacity-50">
                  (65)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thismonth;
