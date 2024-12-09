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
import Viewall from "../components/viewallproducts";

const OurProducts = () => {
  return (
    <div className="w-[1170px] h-[1016px]  m-auto mt-[71px] font-agTitle ">
      <div className="relative flex w-[1170px] h-[103px] ">
        <div className="w-[600px] ">
          <div className="absolute w-[398x] h-[108px]  ">
            <div className="flex  flex-cols w-[142px] h[40px] justify-between  ">
              <p className="w-[20px] h-[40px] rounded-md bg-secondary2"></p>
              <p className=" flex w-[106px] h-[20px] mt-[8px]  text-[16px] text-secondary2 font-semibold">
                Our Products
              </p>
            </div>
            <h1 className="  text-[36px] w-[398px] h-[48px] font-semibold mt-[24px]">
              Explore Our Products
            </h1>
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
            {/* <div className="h-[26px] w-[55px] absolute bg-secondary2 mt-[12px] ml-[12px] text-[12px] font-normal text-Text rounded-md flex justify-center items-center">
              -40%
            </div> */}
            <div className="h-[76px] w-[34px] absolute mt-[12px] ml-[224px] ">
              <IoMdHeartEmpty className="h-[20px] w-[20px] mt-3 m-auto " />
              <IoEyeOutline className="h-[20px] w-[20px] mt-3 m-auto " />
            </div>
            <div className="h-[180px] w-[115px] flex relative  mt-[35px]  ml-[40px] ">
              <Image
                src={"/our_products/Bread_Dry_Dog_Food.png"}
                alt="Bread_Dry_Dog_Food Image"
                width={115}
                height={180}
                className=""
              ></Image>
            </div>
          </div>
          <div className="h-[84px] w-[201px] absolute  mt-[266px]">
            <p className="h-[24px] w-[201px] text-[16px] text-black font-medium ">
              Breed Dry Dog Food
            </p>
            <div className="h-[24px] w-[85px] flex justify-between gap-2 mt-[8px]">
              <p className="text-[16px] font-medium text-secondary2">$100</p>
              {/* <p className="text-[16px] font-medium text-Text2 opacity-50 line-through">
                $160
              </p> */}

              <div className="h-[20px] w-[140px] flex text-staricon gap-1 items-center  ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="text-Text2 opacity-25" />
                <FaStar className="text-Text2 opacity-25" />
                <span className="text-[14px] font-semibold text-Text2 opacity-50">
                  (35)
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* cart1-div2 */}
        <div className="h-[350px] w-[270px] ">
          <div className="h-[350px] relative w-[270px] flex  ">
            <div className="h-[250px] w-[270px] flex justify-between ">
              {/* <div className="h-[26px] w-[55px] absolute bg-secondary2 mt-[12px] ml-[12px] text-[12px] font-normal text-Text rounded-md flex justify-center items-center">
                -35%
              </div> */}
              <div className="h-[76px] w-[34px] absolute mt-[12px] ml-[224px] ">
                <IoMdHeartEmpty className="h-[20px] w-[20px] mt-3 m-auto " />
                <IoEyeOutline className="h-[20px] w-[20px] mt-3 m-auto " />
              </div>
              <div className="flex  h-[163px] w-[146px] relative  mt-[35px]  ml-[50px] ">
                <Image
                  src={"/our_products/CANON_EOS_DSLR_Camera.png"}
                  alt="CANON_EOS_DSLR_Camera Image"
                  width={146}
                  height={163}
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
              <p className="h-[24px] w-[208px] text-[16px] text-black font-medium ">
                CANON EOS DSLR Camera
              </p>
              <div className="h-[24px] w-[85px] flex justify-between gap-2 mt-[8px]">
                <p className="text-[16px] font-medium text-secondary2">$360</p>
                {/* <p className="text-[16px] font-medium text-Text2 opacity-50 line-through">
                  $1160
                </p> */}

                <div className="h-[20px] w-[140px] flex text-staricon gap-1 items-center ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-Text2 opacity-25" />
                  <span className="text-[14px] font-semibold text-Text2 opacity-50">
                    (95)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* cart1 div3 */}
        <div className="h-[350px] w-[270px]">
          <div className="h-[350px] relative w-[270px] flex  ">
            <div className="h-[250px] w-[270px] flex  ">
              {/* <div className="h-[26px] w-[55px] absolute bg-secondary2 mt-[12px] ml-[12px] text-[12px] font-normal text-Text rounded-md flex justify-center items-center">
                -30%
              </div> */}
              <div className="h-[76px] w-[34px] absolute mt-[12px] ml-[224px] ">
                <IoMdHeartEmpty className="h-[20px] w-[20px] mt-3 m-auto " />
                <IoEyeOutline className="h-[20px] w-[20px] mt-3 m-auto " />
              </div>
              <div className="h-[180px] w-[172px] flex relative  mt-[35px]  ml-[40px] ">
                <Image
                  src={"/our_products/ASUS_FHD_Gaming_Laptop.png"}
                  alt="ASUS_FHD_Gaming_Laptop Image.png"
                  width={172}
                  height={180}
                  className="mt-[14px] -ml-[5px]"
                ></Image>
              </div>
            </div>
            <div className="h-[84px] w-[201px] absolute  mt-[266px]">
              <p className="h-[24px] w-[201px] text-[16px] text-black font-medium ">
                ASUS FHD Gaming Laptop
              </p>
              <div className="h-[24px] w-[85px] flex justify-between gap-2 mt-[8px]">
                <p className="text-[16px] font-medium text-secondary2">$700</p>
                {/* <p className="text-[16px] font-medium text-Text2 opacity-50 line-through">
                  $400
                </p> */}

                <div className="h-[20px] w-[140px] flex text-staricon gap-1 items-center  ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="text-[14px] font-semibold text-Text2 opacity-50">
                    (325)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* cart1 div4 */}
        <div className="h-[350px] w-[270px]">
          <div className="h-[350px] relative w-[270px] flex  ">
            <div className="h-[250px] w-[270px] flex  ">
              {/* <div className="h-[26px] w-[55px] absolute bg-secondary2 mt-[12px] ml-[12px] text-[12px] font-normal text-Text rounded-md flex justify-center items-center">
                -25%
              </div> */}
              <div className="h-[76px] w-[34px] absolute mt-[12px] ml-[224px] ">
                <IoMdHeartEmpty className="h-[20px] w-[20px] mt-3 m-auto " />
                <IoEyeOutline className="h-[20px] w-[20px] mt-3 m-auto " />
              </div>
              <div className="h-[159px] w-[172px] flex relative  mt-[38px]   ml-[40px]  ">
                <Image
                  src={"/our_products/Curology_Product_Set.png"}
                  alt="Curology_Product_Set Image.png"
                  width={172}
                  height={159}
                  className="m-auto"
                ></Image>
              </div>
            </div>
            <div className="h-[84px] w-[201px] absolute  mt-[266px]">
              <p className="h-[24px] w-[201px] text-[16px] text-black font-medium ">
                Curology Product Set
              </p>
              <div className="h-[24px] w-[85px] flex justify-between gap-2 mt-[8px]">
                <p className="text-[16px] font-medium text-secondary2">$500</p>
                {/* <p className="text-[16px] font-medium text-Text2 opacity-50 line-through">
                  $400
                </p> */}

                <div className="h-[20px] w-[140px] flex text-staricon gap-1 items-center  ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-Text2 opacity-25" />

                  <span className="text-[14px] font-semibold text-Text2 opacity-50">
                    (145)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cart2 div5 */}
      <div className="h-[350px] w-[1170px] flex justify-between mt-[40px] ">
        <div className="h-[350px] relative w-[270px] flex  ">
          <div className="h-[250px] w-[270px] flex  ">
            <div className="h-[26px] w-[55px] absolute bg-Button1 mt-[12px] ml-[12px] text-[12px] font-normal text-Text rounded-md flex justify-center items-center">
              New
            </div>
            <div className="h-[76px] w-[34px] absolute mt-[12px] ml-[224px] ">
              <IoMdHeartEmpty className="h-[20px] w-[20px] mt-3 m-auto " />
              <IoEyeOutline className="h-[20px] w-[20px] mt-3 m-auto " />
            </div>
            <div className="h-[133px] w-[180px] flex relative  mt-[58px]  ml-[40px] ">
              <Image
                src={"/our_products/Kids_Electric_Car.png"}
                alt="Kids_Electric_Car Image.png"
                width={180}
                height={133}
                className=""
              ></Image>
            </div>
          </div>
          <div className="h-[84px] w-[201px] absolute  mt-[266px]">
            <p className="h-[24px] w-[201px] text-[16px] text-black font-medium ">
              Kids Electric Car
            </p>
            <div className="h-[24px] w-[85px] flex justify-between gap-2 mt-[8px]">
              <p className="text-[16px] font-medium text-secondary2">$960</p>
              {/* <p className="text-[16px] font-medium text-Text2 opacity-50 line-through">
                $160
              </p> */}

              <div className="h-[20px] w-[140px] flex text-staricon gap-1 items-center  ">
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
            {/* circle cart */}
            <div className="w-[48px] h-[20px] flex justify-between">
              <p className="w-[20px] h-[20px] rounded-full border-2 border-black flex justify-center items-center ">
                <p className="w-[12px] h-[12px] rounded-full bg-secondary2 "></p>
              </p>

              <p className="w-[20px] h-[20px] rounded-full bg-secondary2"></p>
            </div>
          </div>
        </div>
        {/* cart2-div6 */}
        <div className="h-[350px] w-[270px] ">
          <div className="h-[350px] relative w-[270px] flex  ">
            <div className="h-[250px] w-[270px] flex justify-between ">
              {/* <div className="h-[26px] w-[55px] absolute bg-secondary2 mt-[12px] ml-[12px] text-[12px] font-normal text-Text rounded-md flex justify-center items-center">
                -35%
              </div> */}
              <div className="h-[76px] w-[34px] absolute mt-[12px] ml-[224px] ">
                <IoMdHeartEmpty className="h-[20px] w-[20px] mt-3 m-auto " />
                <IoEyeOutline className="h-[20px] w-[20px] mt-3 m-auto " />
              </div>
              <div className="flex  h-[164px] w-[186px] relative  mt-[45px]  ml-[40px] ">
                <Image
                  src={"/our_products/Jr._Zoom_Soccer_Cleats.png"}
                  alt="Jr._Zoom_Soccer_Cleats Image.png"
                  width={186}
                  height={164}
                  className=""
                ></Image>
              </div>
            </div>
            {/* <div className="flex absolute mt-[80%]  w-[270px] h-[41px] bg-black rounded-sm">
              <button className="w-[96px] h-[41px] text-[16px] font-medium text-BG m-auto">
                Add To Cart
              </button>
            </div> */}

            <div className="h-[84px] w-[201px] absolute  mt-[266px]">
              <p className="h-[24px] w-[201px] text-[16px] text-black font-medium ">
                Jr. Zoom Soccer Cleats
              </p>
              <div className="h-[24px] w-[85px] flex justify-between gap-2 mt-[8px]">
                <p className="text-[16px] font-medium text-secondary2">$1160</p>
                {/* <p className="text-[16px] font-medium text-Text2 opacity-50 line-through">
                  $1160
                </p> */}
                <div className="h-[20px] w-[140px] flex text-staricon gap-1 items-center  ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <span className="text-[14px] font-semibold text-Text2 opacity-50">
                    (35)
                  </span>
                </div>
              </div>
              <div className="w-[48px] h-[20px] flex justify-between">
                <p className="w-[20px] h-[20px] rounded-full border-2 border-black flex justify-center items-center ">
                  <p className="w-[12px] h-[12px] rounded-full bg-circleicon"></p>
                </p>

                <p className="w-[20px] h-[20px] rounded-full bg-secondary2"></p>
              </div>
            </div>
          </div>
        </div>
        {/* cart2 div7 */}
        <div className="h-[350px] w-[270px]">
          <div className="h-[350px] relative w-[270px] flex  ">
            <div className="h-[250px] w-[270px] flex  ">
              <div className="h-[26px] w-[55px] absolute bg-Button1 mt-[12px] ml-[12px] text-[12px] font-normal text-Text rounded-md flex justify-center items-center">
                New
              </div>
              <div className="h-[76px] w-[34px] absolute mt-[12px] ml-[224px] ">
                <IoMdHeartEmpty className="h-[20px] w-[20px] mt-3 m-auto " />
                <IoEyeOutline className="h-[20px] w-[20px] mt-3 m-auto " />
              </div>
              <div className="h-[150px] w-[178px] flex relative  mt-[35px]  ml-[40px] ">
                <Image
                  src={"/our_products/GP11_Shooter_USB_Gamepad.png"}
                  alt="GP11_Shooter_USB_Gamepad Image.png"
                  width={178}
                  height={150}
                  className="mt-[12px] -ml-[5px]"
                ></Image>
              </div>
            </div>
            <div className="h-[84px] w-[201px] absolute  mt-[266px]">
              <p className="h-[24px] w-[221px] text-[16px] text-black font-medium ">
                GP11 Shooter USB Gamepad
              </p>
              <div className="h-[24px] w-[85px] flex justify-between gap-2 mt-[8px]">
                <p className="text-[16px] font-medium text-secondary2">$660</p>
                {/* <p className="text-[16px] font-medium text-Text2 opacity-50 line-through">
                  $400
                </p> */}

                <div className="h-[20px] w-[140px] flex text-staricon gap-1 items-center  ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />
                  <span className="text-[14px] font-semibold text-Text2 opacity-50">
                    (55)
                  </span>
                </div>
              </div>
              <div className="w-[48px] h-[20px] flex justify-between">
                <p className="w-[20px] h-[20px] rounded-full border-2 border-Text2 flex justify-center items-center ">
                  <p className="w-[12px] h-[12px] rounded-full bg-Text2"></p>
                </p>

                <p className="w-[20px] h-[20px] rounded-full bg-secondary2"></p>
              </div>
            </div>
          </div>
        </div>
        {/* cart2 div8 */}
        <div className="h-[350px] w-[270px]">
          <div className="h-[350px] relative w-[270px] flex  ">
            <div className="h-[250px] w-[270px] flex  ">
              {/* <div className="h-[26px] w-[55px] absolute bg-secondary2 mt-[12px] ml-[12px] text-[12px] font-normal text-Text rounded-md flex justify-center items-center">
                -25%
              </div> */}
              <div className="h-[76px] w-[34px] absolute mt-[12px] ml-[224px] ">
                <IoMdHeartEmpty className="h-[20px] w-[20px] mt-3 m-auto " />
                <IoEyeOutline className="h-[20px] w-[20px] mt-3 m-auto " />
              </div>
              <div className="h-[176px] w-[182px] flex relative  mt-[30px]   ml-[30px]  ">
                <Image
                  src={"/our_products/Quilted_Satin_Jacket.png"}
                  alt="Quilted_Satin_Jacket Image.png"
                  width={182}
                  height={176}
                  className="m-auto"
                ></Image>
              </div>
            </div>
            <div className="h-[84px] w-[201px] absolute  mt-[266px]">
              <p className="h-[24px] w-[201px] text-[16px] text-black font-medium ">
                Quilted Satin Jacket
              </p>
              <div className="h-[24px] w-[85px] flex justify-between gap-2 mt-[8px]">
                <p className="text-[16px] font-medium text-secondary2">$660</p>
                {/* <p className="text-[16px] font-medium text-Text2 opacity-50 line-through">
                  $400
                </p> */}

                <div className="h-[20px] w-[140px] flex text-staricon gap-1 items-center  ">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfStroke />

                  <span className="text-[14px] font-semibold text-Text2 opacity-50">
                    (55)
                  </span>
                </div>
              </div>
              <div className="w-[48px] h-[20px] flex justify-between">
                <p className="w-[20px] h-[20px] rounded-full border-2 border-black flex justify-center items-center ">
                  <p className="w-[12px] h-[12px] rounded-full bg-radiogreen"></p>
                </p>

                <p className="w-[20px] h-[20px] rounded-full bg-secondary2"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Viewall />
    </div>
  );
};

export default OurProducts;
