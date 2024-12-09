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

const Todays = () => {
  return (
    <div className="w-[1170px] h-[533px]  m-auto mt-[75px] font-agTitle ">
      <div className="relative flex w-[1170px] h-[103px] ">
        <div className="w-[600px] ">
          <div className="absolute w-[211px] h-[103px]  ">
            <div className="flex  flex-cols w-[100px] h[40px] justify-between  ">
              <p className="w-[20px] h-[40px] rounded-md bg-secondary2"></p>
              <p className=" flex w-[64px] h-[20px] mt-[8px]  text-[16px] text-secondary2 font-semibold">
                Today's
              </p>
            </div>
            <h1 className="  text-[36px] w-[211px] h-[48px] font-semibold mt-[24px]">
              Flash Sales
            </h1>
          </div>
          <div className="h-[50px] w-[302px]  mt-[53px] ml-[298px]">
            <Timer />
          </div>
        </div>
        <div className="h-[46px] w-[100px] flex justify-between items-center ml-[475px] mt-[57px] ">
          <FaArrowLeft className="text-[22px] ml-[15px]" />

          <FaArrowRight className="text-[22px] mr-[15px] opacity-50" />
        </div>
      </div>
      {/* cart1 div1 */}
      <div className="h-[350px] w-[1170px] flex justify-between mt-[40px] ">
        <div className="h-[350px] relative w-[270px] flex  ">
          <div className="h-[250px] w-[270px] flex  ">
            <div className="h-[26px] w-[55px] absolute bg-secondary2 mt-[12px] ml-[12px] text-[12px] font-normal text-Text rounded-md flex justify-center items-center">
              -40%
            </div>
            <div className="h-[76px] w-[34px] absolute mt-[12px] ml-[224px] ">
              <IoMdHeartEmpty className="h-[20px] w-[20px] mt-3 m-auto " />
              <IoEyeOutline className="h-[20px] w-[20px] mt-3 m-auto " />
            </div>
            <div className="h-[180px] w-[190px] flex relative  mt-[35px]  ml-[40px] ">
              <Image
                src={"/today_images/card-1.png"}
                alt="Card-1 Image.png"
                width={172}
                height={152}
                className=""
              ></Image>
            </div>
          </div>
          <div className="h-[84px] w-[201px] absolute  mt-[266px]">
            <p className="h-[24px] w-[201px] text-[16px] text-black font-medium ">
              HAVIT HV-G92 Gamepad
            </p>
            <div className="h-[24px] w-[85px] flex justify-between  mt-[8px]">
              <p className="text-[16px] font-medium text-secondary2">$120</p>
              <p className="text-[16px] font-medium text-Text2 opacity-50 line-through">
                $160
              </p>
            </div>
            <div className="h-[20px] w-[140px] flex text-staricon gap-2 items-center  mt-[8px]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-[14px] font-semibold text-Text2 opacity-50">
                (88)
              </span>
            </div>
          </div>
        </div>
        {/* cart1-div2 */}
        <div className="h-[350px] w-[270px] ">
          <div className="h-[350px] relative w-[270px] flex  ">
            <div className="h-[250px] w-[270px] flex justify-between ">
              <div className="h-[26px] w-[55px] absolute bg-secondary2 mt-[12px] ml-[12px] text-[12px] font-normal text-Text rounded-md flex justify-center items-center">
                -35%
              </div>
              <div className="h-[76px] w-[34px] absolute mt-[12px] ml-[224px] ">
                <IoMdHeartEmpty className="h-[20px] w-[20px] mt-3 m-auto " />
                <IoEyeOutline className="h-[20px] w-[20px] mt-3 m-auto " />
              </div>
              <div className="flex  h-[180px] w-[190px] relative  mt-[35px]  ml-[40px] ">
                <Image
                  src={"/today_images/cart1-div2-image.png"}
                  alt="Card-1 Image.png"
                  width={191}
                  height={101}
                  className=""
                ></Image>
              </div>
            </div>
            <div className="flex absolute mt-[80%]  w-[270px] h-[41px] bg-black rounded-sm">
              <button className="w-[96px] h-[41px] text-[16px] font-medium text-BG m-auto">
                Add To Cart
              </button>
            </div>

            <div className="h-[84px] w-[201px] absolute  mt-[266px]">
              <p className="h-[24px] w-[201px] text-[16px] text-black font-medium ">
                AK-900 Wired Keyboard{" "}
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
                <FaStar className="text-Text2 opacity-25" />
                <span className="text-[14px] font-semibold text-Text2 opacity-50">
                  (75)
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* cart1 div3 */}
        <div className="h-[350px] w-[270px]">
          <div className="h-[350px] relative w-[270px] flex  ">
            <div className="h-[250px] w-[270px] flex  ">
              <div className="h-[26px] w-[55px] absolute bg-secondary2 mt-[12px] ml-[12px] text-[12px] font-normal text-Text rounded-md flex justify-center items-center">
                -30%
              </div>
              <div className="h-[76px] w-[34px] absolute mt-[12px] ml-[224px] ">
                <IoMdHeartEmpty className="h-[20px] w-[20px] mt-3 m-auto " />
                <IoEyeOutline className="h-[20px] w-[20px] mt-3 m-auto " />
              </div>
              <div className="h-[180px] w-[190px] flex relative  mt-[35px]  ml-[40px] ">
                <Image
                  src={"/today_images/cart1-div3-image.png"}
                  alt="Card-1 Image.png"
                  width={170}
                  height={129}
                  className="mt-[28px] -ml-[5px]"
                ></Image>
              </div>
            </div>
            <div className="h-[84px] w-[201px] absolute  mt-[266px]">
              <p className="h-[24px] w-[201px] text-[16px] text-black font-medium ">
                IPS LCD Gaming Monitor{" "}
              </p>
              <div className="h-[24px] w-[85px] flex justify-between  mt-[8px]">
                <p className="text-[16px] font-medium text-secondary2">$370</p>
                <p className="text-[16px] font-medium text-Text2 opacity-50 line-through">
                  $400
                </p>
              </div>
              <div className="h-[20px] w-[140px] flex text-staricon gap-2 items-center  mt-[8px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-[14px] font-semibold text-Text2 opacity-50">
                  (99)
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* cart1 div4 */}
        <div className="h-[350px] w-[270px]">
          <div className="h-[350px] relative w-[270px] flex  ">
            <div className="h-[250px] w-[270px] flex  ">
              <div className="h-[26px] w-[55px] absolute bg-secondary2 mt-[12px] ml-[12px] text-[12px] font-normal text-Text rounded-md flex justify-center items-center">
                -25%
              </div>
              <div className="h-[76px] w-[34px] absolute mt-[12px] ml-[224px] ">
                <IoMdHeartEmpty className="h-[20px] w-[20px] mt-3 m-auto " />
                <IoEyeOutline className="h-[20px] w-[20px] mt-3 m-auto " />
              </div>
              <div className="h-[190px] w-[180px] flex relative  mt-[38px]   ml-[40px]  ">
                <Image
                  src={"/today_images/cart1-div4-image.png"}
                  alt="Card-1 Image.png"
                  width={107}
                  height={180}
                  className="m-auto"
                ></Image>
              </div>
            </div>
            <div className="h-[84px] w-[201px] absolute  mt-[266px]">
              <p className="h-[24px] w-[201px] text-[16px] text-black font-medium ">
                S-Series Comfort Chair{" "}
              </p>
              <div className="h-[24px] w-[85px] flex justify-between  mt-[8px]">
                <p className="text-[16px] font-medium text-secondary2">$375</p>
                <p className="text-[16px] font-medium text-Text2 opacity-50 line-through">
                  $400
                </p>
              </div>
              <div className="h-[20px] w-[140px] flex text-staricon gap-2 items-center  mt-[8px]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfStroke />

                <span className="text-[14px] font-semibold text-Text2 opacity-50">
                  (99)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[1170px] border-Text2/30 mt-[60px]  border-1" />
    </div>
  );
};

export default Todays;
