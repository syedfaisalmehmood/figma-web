import Link from "next/link";
import React from "react";

const Viewall = () => {
  return (
    <div>
      <div className="w-[234px] h-[56] bg-Button2 font-agTitle mt-[76px] m-auto shadow-lg hover:bg-opacity-80 shadow-black rounded-sm">
        <button className=" text-16px font-medium   ml-[48px] mt-[16px] text-Text cursor-pointer">
          {" "}
          <Link href={"#"}> View All Products</Link>
        </button>
      </div>
    </div>
  );
};

export default Viewall;
