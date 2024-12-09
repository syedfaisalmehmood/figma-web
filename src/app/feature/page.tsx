import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

import React from "react";

const Feature = () => {
  return (
    <div className="h-[768px] w-[1170px] mt-[140px] m-auto  font-agTitle ">
      {/* div heade items */}
      <div className="h-[108px] w-[216px] ">
        <div className="h-[40px] w-[110px] flex  ">
          <div className="h-[40px] w-[20px] bg-secondary2 rounded-md"></div>
          <p className="h-[20px] w-[74px] text-[16px] ml-[16px] mt-[8px] font-semibold text-secondary2">
            Featured
          </p>
        </div>
        <div className="h-[48px] w-[216px] mt-[20px] text-[36px] font-semibold text-Text2 ">
          New Arrival
        </div>
      </div>
      {/* main div dividers for images */}
      <div className="h-[600px] w-[1170px] flex justify-between mt-[60px] ">
        {/* image div of playstation */}
        <div className="h-[600px] relative w-[570px] bg-Text2 group">
          <Image
            src={"/feature/ps5-slim-goedkope-playstation_large 1.png"}
            alt="Playstation Image"
            width={511}
            height={511}
            className="mt-[89px] ml-[29px] absolute"
          ></Image>
          <div className="h-[122px] absolute w-[242px]   mt-[446px] ml-[32px]">
            {/* playstation div text for SHOP NOW */}
            <div className="h-[82px] w-[242px]">
              <h1 className="h-[24px] w-[162px] text-[24px] font-semibold text-Text">
                PlayStation 5
              </h1>
              <p className="h-[42px] w-[242px] mt-[16px] text-[14px] font-normal text-Text">
                Black and White version of the PS5 coming out on sale.
              </p>
            </div>
            <div>
              <button className="h-[24px] w-[81px] mt-[16px] text-[16px] font-medium text-Text underline underline-offset-4 ">
                Shop Now
              </button>
              <FaArrowRight className=" text-Text absolute ml-[85px] text-[20px] -mt-[10px] transform -translate-y-[50%] opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
            </div>
          </div>
        </div>
        {/* right side divs for images */}
        <div className="h-[600px] w-[570px] flex relative  ml-[]">
          {/* <women wearing hat psing image div */}
          <div className="h-[284px] w-[570px] relative bg-Text2 group">
            <div className="h-[122px] absolute w-[255px] ml-[24px]">
              <div className="h-[286px] absolute w-[432px] ml-[113px]">
                <Image
                  src={
                    "/feature/attractive-woman-wearing-hat-posing-black-background 1.png"
                  }
                  alt="attractive-woman-wearing-hat-posing-black-background 1 Image"
                  width={432}
                  height={286}
                  className=" absolute"
                ></Image>
              </div>
              {/* Women div Text */}
              <div className="h-[82px]  mt-[138px] aboslute w-[255px]">
                <h1 className="h-[24px] aboslute w-[255px] text-[24px] font-semibold text-Text">
                  Women’s Collections
                </h1>
                <p className="h-[42px] w-[255px] aboslute mt-[16px] text-[14px] font-normal text-Text">
                  Featured woman collections that give you another vibe.
                </p>
              </div>
              <div>
                <button className="h-[24px] w-[81px] mt-[16px] text-[16px] font-medium text-Text underline underline-offset-4 ">
                  Shop Now
                </button>
                <FaArrowRight className=" text-Text absolute ml-[85px] text-[20px] -mt-[10px] transform -translate-y-[50%] opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
              </div>
            </div>
          </div>
          {/* Speaker Div Image */}
          <div className="h-[284px] w-[570px] flex justify-between absolute  mt-[316px]">
            <div className="h-[284px] w-[270px] flex absolute bg-Text2  ">
              <Image
                src={"/feature/Frame 707.png"}
                alt="Frame 707 Image"
                width={190}
                height={221}
                className="mt-[31px] ml-[40px] absolute"
              ></Image>
            </div>
            {/* speaker div Text */}
            <div className="h-[85px] w-[191px] mt-[175px] ml-[24px] z-50 aboslute   group">
              <h1 className="h-[24px] aboslute w-[114px] text-[24px] font-semibold text-Text">
                Speakers
              </h1>
              <p className="h-[21px] w-[191px] aboslute mt-[8px] text-[14px] font-normal text-Text">
                Amazon wireless speakers
              </p>
              <div>
                <button className="h-[24px] w-[81px] absolute mt-[8px] text-[16px] font-medium text-Text underline underline-offset-4 ">
                  Shop Now
                </button>
                <FaArrowRight className=" text-Text absolute ml-[85px] text-[20px] mt-[22px] transform -translate-y-[50%] opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
              </div>
            </div>
            {/* Perfume Div Image */}
            <div className="h-[284px] w-[270px] flex absolute bg-Text2  ml-[300px]">
              <Image
                src={"/feature/652e82cd70aa6522dd785109a455904c.png"}
                alt="GUCCI Perfume Image"
                width={210}
                height={222}
                className="mt-[38px] ml-[34px] absolute"
              ></Image>
            </div>
            {/* Perfume div text */}
            <div className="h-[85px] w-[191px] mt-[175px] mr-[52px] z-50 aboslute   group">
              <h1 className="h-[24px] aboslute w-[114px] text-[24px] font-semibold text-Text">
                Perfume
              </h1>
              <p className="h-[21px] w-[191px] aboslute mt-[8px] text-[14px] font-normal text-Text">
                GUCCI INTENSE OUD EDP
              </p>
              <div>
                <button className="h-[24px] w-[81px] absolute mt-[8px] text-[16px] font-medium text-Text underline underline-offset-4 ">
                  Shop Now
                </button>
                <FaArrowRight className=" text-Text absolute ml-[85px] text-[20px] mt-[22px] transform -translate-y-[50%] opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
