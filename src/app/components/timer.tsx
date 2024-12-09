"use client";

import { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Current time in Pakistan Standard Time (PKT)
      const currentTime = new Date();
      const currentTimePKT = new Date(
        currentTime.toLocaleString("en-US", { timeZone: "Asia/Karachi" })
      );

      // Set target time in PKT (example: Christmas, 2024)
      const targetTime = new Date("2024-12-31T00:00:00+05:00"); // Ensure target time is in PKT

      // Calculate the difference in milliseconds
      const difference = targetTime.getTime() - currentTimePKT.getTime();

      if (difference <= 0) {
        clearInterval(interval); // Stop the timer once the target date is reached
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTime({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  // Format the time with leading zeros
  const formattedDays = String(time.days).padStart(2, "0");
  const formattedHours = String(time.hours).padStart(2, "0");
  const formattedMinutes = String(time.minutes).padStart(2, "0");
  const formattedSeconds = String(time.seconds).padStart(2, "0");

  return (
    <div className="flex w-[302px] h-[50px] font-agTitle justify-between ">
      <div className="w-[46px] h-[50px] grid text-Text2">
        <p className="text-[12px] font-medium w-[31px] h-[18px]">Days</p>
        <h1 className="w-[46px] h-[28px] text-[32px] font-bold -mt-[12px]">
          {formattedDays} {/* Use formatted Days with leading zero */}
        </h1>
      </div>
      <span className="text-HoverButton  text-[20px] mt-[20px] -ml-[10px] font-bold ">
        :
      </span>
      <div className="w-[46px] h-[50px] grid text-Text2">
        <p className="text-[12px] font-medium w-[31px] h-[18px]">Hours</p>
        <h1 className="w-[46px] h-[28px] text-[32px] font-bold -mt-[12px]">
          {formattedHours} {/* Use formatted hours with leading zero */}
        </h1>
      </div>
      <span className="text-HoverButton  text-[20px] mt-[20px] -ml-[10px] font-bold ">
        :
      </span>
      <div className="w-[46px] h-[50px] grid text-Text2">
        <p className="text-[12px] font-medium w-[31px] h-[18px]">Minutes</p>
        <h1 className="w-[46px] h-[28px] text-[32px] font-bold -mt-[12px]">
          {formattedMinutes} {/* Use formatted minutes with leading zero */}
        </h1>
      </div>
      <span className="text-HoverButton  text-[20px] mt-[20px] -ml-[10px] font-bold ">
        :
      </span>
      <div className="w-[46px] h-[50px] grid text-Text2">
        <p className="text-[12px] font-medium w-[31px] h-[18px]">Seconds</p>
        <h1 className="w-[46px] h-[28px] text-[32px] font-bold -mt-[12px]">
          {formattedSeconds} {/* Use formatted seconds with leading zero */}
        </h1>
      </div>
    </div>
  );
};

export default Timer;
