import Image from "next/image";
import React from "react";
import { RiCustomerServiceLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { RiShieldCheckLine } from "react-icons/ri";

const ServicePage = () => {
  return (
    <div className="flex justify-between w-[943px] h-[161px] mt-[140px] ml-[249px] bg-white  ">
      <div className="w-[249px] h-[161px]  flex justify-center   ">
        <div className="w-[80px] h-[80px] rounded-full  relative flex justify-center items-center bg-service/30">
          <div className="w-[58px] h-[58px] absolute  bg-black rounded-full">
            <TbTruckDelivery className="w-[32px] h-[30px] absolute  text-Text mt-[14px] ml-[14px] " />
          </div>
          <div className="  w-[249px]  h-[57px] mt-[176px]">
            <h1 className="flex h-[28px] w-[242px] text-[20px] ml-[3.5px] font-semibold">
              FREE AND FAST DELIVERY
            </h1>
            <p className="flex h-[21px] w-[249px] text-[14px] tracking-wide ml-[2px] font-normal mt-[8px]">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
      </div>
      <div className="w-[262px] h-[161px]  flex justify-center">
        <div className="w-[80px] h-[80px] rounded-full  relative flex justify-center items-center bg-service/30">
          <div className="w-[58px] h-[58px] absolute  bg-black rounded-full">
            <RiCustomerServiceLine className="w-[32px] h-[30px] absolute  text-Text mt-[14px] ml-[13px]" />
          </div>
          <div className="  w-[247px]  h-[57px] mt-[176px]">
            <h1 className="flex h-[28px] w-[247px] text-[20px] ml-[3.5px] font-semibold">
              24/7 CUSTOMER SERVICE
            </h1>
            <p className="flex h-[21px] w-[219px] text-[14px] tracking-wide ml-[14px] font-normal mt-[8px]">
              Friendly 24/7 customer support
            </p>
          </div>
        </div>
      </div>
      <div className="w-[256px] H-[161px]  flex justify-center ">
        <div className="w-[80px] h-[80px] rounded-full  relative flex justify-center items-center bg-service/30">
          <div className="w-[58px] h-[58px] absolute  bg-black rounded-full">
            <RiShieldCheckLine className="w-[32px] h-[30px] absolute  text-Text mt-[14px] ml-[13px]" />
          </div>
          <div className="  w-[256px]  h-[57px] mt-[176px]">
            <h1 className="flex h-[28px] w-[256px] text-[20px] ml-[3.5px] font-semibold">
              MONEY BACK GUARANTEE
            </h1>
            <p className="flex h-[21px] w-[220px] text-[14px] tracking-wide ml-[18px] font-normal mt-[8px]">
              We reurn money within 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
