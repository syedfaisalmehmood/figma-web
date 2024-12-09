import React from "react";
import { VscSend } from "react-icons/vsc";
import { FaRegCopyright } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="h-[440px] w-[1440px]  relative flex justify-center items-center text-Text mt-[140px] bg-Text2">
      {/* main footer inside div */}
      <div className="h-[236px] w-[1170px] flex absolute bg-Text2 m-auto]">
        {/* Exclusive div */}
        <div className="h-[188px] w-[217px] flex relative -300">
          {/* Send Email Div */}
          <div className="h-[48px] w-[217px] flex absolute mt-[140px] border border-outline-2 shadow-md ">
            <input
              type="Text"
              placeholder="Enter your email"
              className="h-[24px] w-[130px] flex text-[16px] mt-[12px] ml-[16px] bg-Text2 text-Text1 font-normal border-none outline-none"
            ></input>
            <VscSend className="h-[24px] w-[24px] mt-[12px] text-[28px] ml-[32px]" />
          </div>
          <div className="h-[124px] w-[206px]  ">
            {/* Exlusive & Subscribe */}
            <div className="h-[76px] w-[118px] ">
              <h1 className="h-[24px] w-[118px] text-[24px] font-bold">
                Exclusive
              </h1>
              <h3 className="h-[24px] w-[101px] text-[20px] mt-[24px] font-medium">
                Subscribe
              </h3>
              <p className="h-[24px] w-[206px] text-[16px] mt-[24px]">
                Get 10% off your first order
              </p>
            </div>
          </div>
        </div>
        {/* support div */}
        <div className="h-[180px] w-[175px]  ml-[87px]">
          <h1 className="h-[28px] w-[81px] text-[20px] font-medium">Support</h1>
          <div className="h-[128px] w-[175px]  mt-[24px]">
            <p className="h-[48px] w-[175px] text-[16px] font-normal cursor-pointer hover:text-[15px] hover:text-Text1">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="h-[24px] w-[175px] text-[16px] mt-[16px] font-normal cursor-pointer hover:text-[15px] hover:text-Text1">
              exclusive@gmail.com
            </p>
            <p className="h-[24px] w-[175px] text-[16px] mt-[16px] font-normal cursor-pointer hover:text-[15px] hover:text-Text1">
              +88015-88888-9999
            </p>
          </div>
        </div>
        {/* Account div */}
        <div className="h-[236px] w-[123px] ml-[87px]">
          <h1 className="h-[28px] w-[85px] text-[20px] font-medium">Account</h1>
          <div className="h-[184px] w-[123px] mt-[24px] ">
            <p className="h-[24px] w-[94px] text-[16px] font-normal cursor-pointer hover:text-[12px] hover:text-Text1">
              My Account
            </p>
            <p className="h-[24px] w-[123px] text-[16px] mt-[16px] font-normal cursor-pointer hover:text-[15px] hover:text-Text1">
              Login / Register
            </p>
            <p className="h-[24px] w-[35px] text-[16px] mt-[16px] font-normal cursor-pointer hover:text-[15px] hover:text-Text1">
              Cart
            </p>
            <p className="h-[24px] w-[61px] text-[16px] mt-[16px] font-normal cursor-pointer hover:text-[15px] hover:text-Text1">
              Wishlist
            </p>
            <p className="h-[24px] w-[41px] text-[16px] mt-[16px] font-normal cursor-pointer hover:text-[15px] hover:text-Text1">
              Shop
            </p>
          </div>
        </div>
        {/* Quick Link div */}
        <div className="h-[196px] w-[109px]  ml-[87px]">
          <h1 className="h-[28px] w-[101px] text-[20px] font-medium">
            Quick Link
          </h1>
          <div className="h-[144px] w-[109px] mt-[24px] ">
            <p className="h-[24px] w-[109px] text-[16px] font-normal  cursor-pointer hover:text-[15px] hover:text-Text1">
              Privacy Policy
            </p>
            <p className="h-[24px] w-[109px] text-[16px] mt-[16px]  font-normal cursor-pointer hover:text-[15px] hover:text-Text1">
              Terms Of Use
            </p>
            <p className="h-[24px] w-[109px] text-[16px] mt-[16px]  font-normal cursor-pointer hover:text-[15px] hover:text-Text1">
              FAQ
            </p>
            <p className="h-[24px] w-[109px] text-[16px] mt-[16px]  font-normal cursor-pointer hover:text-[15px] hover:text-Text1">
              Contact
            </p>
          </div>
        </div>
        {/* Download App div */}
        <div className="h-[210px] w-[198px]  ml-[87px]">
          <div>
            <h1 className="h-[28px] w-[148px] text-[20px] font-medium">
              Download App
            </h1>
            <div>
              <p className="h-[18px] w-[194px] text-[12px] mt-[24px]  font-normal">
                Save $3 with App New User Only
              </p>
              {/* Google App / App Store / Barcode div */}
              <div className="h-[84px] w-[198px] flex justify-between mt-[8px] ">
                <div className="h-[80px] w-[80px] mt-[2px] ">
                  <Image
                    src={"/footer/Qr_Code.png"}
                    alt="QR Code Image"
                    width={80}
                    height={80}
                    className="cursor-pointer"
                  ></Image>
                </div>
                <div className="h-[84px] w-[110px] ">
                  <div className="h-[40px] flex items-center  w-[110px] ">
                    <Image
                      src={
                        "/footer/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo (1).png"
                      }
                      alt="Google Play Image"
                      width={104}
                      height={30}
                      className=" mt-[3px] ml-[3px] cursor-pointer"
                    ></Image>
                  </div>
                  <div className="h-[40px] w-[110px] mt-[4px] ">
                    <Image
                      src={"/footer/AppStore.png"}
                      alt="App Play Image"
                      width={104}
                      height={30}
                      className=" mt-[3px] ml-[3px] cursor-pointer"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[24px] w-[168px] flex justify-between items-center text-[20px] mt-[24px] text-Text ">
            <FaFacebookF className="cursor-pointer hover:text-Text1" />
            <LuTwitter className="cursor-pointer hover:text-Text1" />
            <BsInstagram className="cursor-pointer hover:text-Text1" />
            <FaLinkedinIn className="cursor-pointer hover:text-Text1" />
          </div>
        </div>
      </div>
      <div className="h-[40px] w-[1440px] flex    mt-[376px]">
        <div className="flex gap-1 ">
          <FaRegCopyright className="h-[20px]  w-[20px] text-Text1 mt-[18px] ml-[551.5px]" />

          <p className="h-[20px] w-[311px] mt-[16px] text-Text1 ">
            Copyright Rimel 2022. All right reserveds
          </p>
        </div>
      </div>
      <div className="text-Text mt-[300px] mr-[60px]">
          <Link href={"/"}>
            {" "}
            <FaArrowUp size={24} />{" "}
          </Link>
        </div>

    </div>
  );
};

export default Footer;
