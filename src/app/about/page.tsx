import React from "react";
import Blackheader from "../components/blackheader";
import Navbar from "../components/navbar";
import Image from "next/image";
import { BsShopWindow } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaSackDollar } from "react-icons/fa6";
import ServicePage from "../components/service";

const About = () => {
  return (
    <div className="w-[1440px] h-[2905px]  m-auto  font-agTitle">
      <Navbar />
      {/* home/about */}
      <div className="flex justify-center items-center w-[114px] h-[21px] mt-[80px] ml-[135px] ">
        <p className="w-[42px] h-[21px] text-Text2/80 text-[14px] font-normal mr-[6px]">
          Home
        </p>
        <p className="w-[13px] text-Text2">/</p>
        <p className="w-[42px] h-[21px] text-Text2 text-[14px] font-normal ml-[6px]">
          About
        </p>
      </div>
      <div className="flex justify-between items-center  w-[1440px] h-[609px]">
        <div className="w-[525px] h-[336px]  ml-[135px] -mt-[80px] ">
          <h1 className="w-[277px]  tracking-wider h-[72px] text-[54px] font-seemibold text-Text2 ">
            Our Story
          </h1>
          <p className="mt-[20px] w-[525px] h-[130px] text-Text2 font-poppins leading-6 font-normal font-family">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="mt-[24px] w-[525px] h-[130px] text-Text2 font-poppins  leading-6 font-normal font-family">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="w-[705px] h-[609px] ml-[75px]   ">
          <Image
            src={"/about-image/about-image.jpg"}
            alt={"about-image"}
            width={705}
            height={609}
            className="mt-[42px] rounded-md"
          ></Image>
        </div>
        {/*4box-icon$*/}
      </div>
      <div className="flex justify-between items-center w-[1170px] h-[230px] m-auto mt-[88px]">
        <div className="flex w-[270px] h-[230px] ">
          <div className="w-[169px] h-[170px] ml-[50px] mb-[31px] mr-[51px] mt-[30px] ">
            <div className="ml-[44.5px] relative w-[80px] h-[80px] rounded-full bg-service/30">
              <div className="w-[58px] h-[58px] absolute rounded-full bg-black mt-[11px] ml-[12px]">
                <BsShopWindow className="flex w-[32px] h-[30px] absolute  text-Text mt-[12px] ml-[12px] " />
              </div>
            </div>
            <div className="flex flex-col w-[169px] h-[66px]  mt-[24px]">
              <h1 className="w-[92px]  h-[32px] tracking-wider text-[32px] ml-[38.5px] font-bold mt-[2px] text-black ">
                10.5k
              </h1>
              <p className="w-[169px] h-[24px] tracking-wide mt-[16px] ml-[4px] justify-center text-[16px] font-normal text-black">
                Sallers active our site
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-[270px] h-[230px]">
          {" "}
          <div className="w-[169px] h-[170px] ml-[50px] mb-[31px] mr-[51px] mt-[30px] ">
            <div className="ml-[44.5px] relative w-[80px] h-[80px] rounded-full bg-service/30">
              <div className="w-[58px] h-[58px] absolute rounded-full bg-black mt-[11px] ml-[12px]">
                <AiOutlineDollarCircle className="flex w-[35px] h-[35px] absolute  text-Text mt-[12px] ml-[12px] " />
              </div>
            </div>
            <div className="flex flex-col w-[200px] h-[62px]  mt-[24px]">
              <h1 className="w-[64px]  h-[30px] text-[32px] ml-[55px] tracking-wide font-bold  text-black ">
                33k
              </h1>
              <p className="w-[200px] h-[24px] tracking-wider mt-[16px] -ml-[10px] justify-center text-[16px] font-normal text-black">
                Monthly Produduct Sale{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-[270px] h-[230px] ">
          <div className="w-[169px] h-[170px] ml-[50px] mb-[31px] mr-[51px] mt-[30px] ">
            <div className="ml-[44.5px] relative w-[80px] h-[80px] rounded-full bg-service/30">
              <div className="w-[58px] h-[58px] absolute rounded-full bg-black mt-[11px] ml-[12px]">
                <Image
                  src={"/about-image/shopping-bag.png"}
                  alt={"money-icon"}
                  width={27}
                  height={33}
                  className="flex w-[32px] h-[30px] absolute  text-Text mt-[12px] ml-[12px] "
                ></Image>
              </div>
            </div>
            <div className="flex flex-col w-[169px] h-[66px]  mt-[24px]">
              <h1 className="w-[96px]  h-[30px] text-[32px] ml-[38.5px] font-bold mt-[2px] text-black ">
                45.5k
              </h1>
              <p className="w-[215px] h-[24px] tracking-wide mt-[16px] -ml-[20px] justify-center text-[16px] font-normal text-black">
                Customer active in our site{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-[270px] h-[230px] -300">
          <div className="w-[169px] h-[170px] ml-[50px] mb-[31px] mr-[51px] mt-[30px] ">
            <div className="ml-[44.5px] relative w-[80px] h-[80px] rounded-full bg-service/30">
              <div className="w-[58px] h-[58px] absolute rounded-full bg-black mt-[11px] ml-[12px]">
                <FaSackDollar className="flex w-[32px] h-[30px] absolute  text-Text mt-[12px] ml-[12px] " />
              </div>
            </div>
            <div className="flex flex-col w-[169px] h-[66px]  mt-[24px]">
              <h1 className="w-[62px]  h-[30px] text-[32px] ml-[55px] font-bold mt-[2px] text-black ">
                25k
              </h1>
              <p className="w-[213px] h-[24px] tracking-wide mt-[16px] -ml-[20px] justify-center text-[16px] font-normal text-black">
                Anual gross sale in our site{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <ServicePage /> */}
    </div>
  );
};

export default About;
