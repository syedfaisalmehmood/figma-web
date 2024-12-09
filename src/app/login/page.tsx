import React from "react";
import Blackheader from "../components/blackheader";
import Footer from "../footer/page";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
  return (
    <div className="w-[1440px] h-[1561px]  m-auto font-agTitle">
      <div>
        <Blackheader />
        {/* Navbar */}
        <div className="h-[38px] w-[1170px] mt-[40px] ml-[135px] flex items-center  ">
          <div className="h-[24px] w-[675px] flex justify-between">
            <div className="h-[24px] w-[118px] text-[24px] font-bold -mt-1.5">
              Exclusive
            </div>
            <div className="h-[24px] w-[367px] flex justify-center items-center ">
              <ul className="flex items-center text-[16px] font-normal gap-14">
                <li className="underline underline-offset-2">
                  <Link href={"#"}>Home</Link>
                </li>

                <li className="hover:underline hover:underline-offset-2">
                  <Link href={"#"}>Contact</Link>
                </li>
                <li className="hover:underline hover:underline-offset-2">
                  <Link href={"#"}>About</Link>
                </li>
                <li className="hover:underline hover:underline-offset-2">
                  <Link href={"/signUp"}>Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-[38px] w-[347px] flex justify-between items-center  ml-[148px]">
            <div className="h-[38px] w-[243px] flex justify-between items-center ">
              <div className="h-[24px] w-[211px] flex justify-between items-center   ml-[20px]">
                <input
                  type="Text"
                  placeholder="What are you looking for?"
                  className="  text-[12px] font-normal border-none outline-none"
                ></input>
                <div className="w-[24px] h-[24px] mt-[4px] text-[22px] ">
                  <Link href={"#"}>
                    <FiSearch />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-[1440px] border-gray-300 mt-[16px] border-1" />
      </div>
      {/* signUp div */}
      <div className="w-[1305px] h-[781px] mt-[76px]  relative mr-[135px]">
        <div className="w-[805px] h-[781px] bg-signupbg absolute">
          <Image
            src={"/signup-login-image/signup-image.png"}
            alt={"signup-image"}
            width={805}
            height={781}
            className="mt-[75px]"
          ></Image>
        </div>
        {/* login form */}
        <div className=" relative w-[371px] h-[781px] ml-[934px] bg-yellow border-0 border-black">
          <div className=" absolute w-[370px] h-[326px] mt-[200px] ">
            <div className="flex flex-col w-[345px] h-[78px]   ">
              <h1 className="w-[345px] h-[30px] text-[36px] font-medium tracking-wider -mt-[6px] text-Text2">
                Log in to Exclusive{" "}
              </h1>
              <p className="w-[191px] [24px] text-[16px] mt-[32px] tracking-wider font-normal text-Text2">
                Enter your details below
              </p>
              <div className="w-[370px] h-[404px]  mt-[48px]">
                <input
                  type="text"
                  className="w-[370px] ml-[0.5px] text-[16px] font-normal tracking-widest  h-[32px] border-0 border-b-2 border-gray-500  outline-none pb-1"
                  placeholder="Email or Phone Number"
                />
                <input
                  type="text"
                  className="w-[370px] h-[32px] ml-[0.5px] text-[16px] font-normal tracking-widest mt-[40px]  border-0 border-b-2 border-gray-500  outline-none pb-1"
                  placeholder="Password"
                />
                <div className="w-[370px] h-[56px]  flex justify-between mt-[40px]">
                <button className=" w-[143px] h-[56px] tracking-wider bg-secondary2 rounded-md hover:bg-opacity-80 flex justify-center items-center  text-Text text-[16px] font-normal">
                  Login
                </button>
                <p className="flex justify-center items-center ml-[87px] text-[16px] font-normal tracking-wide text-secondary2 mt-[16px]  w-[141px] h-[24]">Forget Password?</p>
                </div>
                {/* <div className="w-[370px] h-[116px]  mt-[16px]">
                  <div className="w-[370px] h-[56px] flex justify-center items-center shadow-md shadow-gray-500 border-2 rounded-md border-black/30">
                    <FcGoogle className="flex justify-center w-[24px] h-[24px]" />

                    <p className=" flex justify-center text-Text2/70 hover:text-black w-[159px] h-[24px] text-[16px] font-medium tracking-wider ml-[10px] cursor-pointer">
                      Sign up with Google
                    </p>
                  </div>
                  <div className=" w-[370px] h-[56px] flex justify-center items-center ">
                    <div className="flex justify-center w-[248px] h-[28px] ">
                      <p className=" w-[180px] mt-[2px] h-[24px] text-[16px] font-normal text-Text2/70 ">
                        Already have account?
                      </p>

                      <p className=" cursor-pointer w-[47px] h-[24px] text-Text2/70  hover:text-black underline underline-offset-4">
                        Log in
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LogIn;
