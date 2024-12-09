"use client";

import { useState, useEffect } from "react";

const Timer_Blackdiv = () => {
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
      <div className="w-[62px] h-[62px] grid rounded-full justify-center bg-white text-Text2">
        <h1 className="text-[16px] font-bold flex relative mt-[12px]">
          <p className="text-[11px] font-medium absolute mt-[20px] -ml-[4px]">
            Days
          </p>
          {formattedDays} {/* Use formatted Days with leading zero */}
        </h1>
      </div>

      <div className="w-[62px] h-[62px] grid rounded-full justify-center bg-white text-Text2">
        <h1 className="text-[16px] font-bold flex relative mt-[12px]">
          <p className="text-[11px] font-medium absolute mt-[20px] -ml-[5px]">
            Hours
          </p>
          {formattedHours} {/* Use formatted hours with leading zero */}
        </h1>
      </div>

      <div className="w-[62px] h-[62px] grid rounded-full justify-center bg-white text-Text2">
        <h1 className="text-[16px] font-bold flex relative mt-[12px]">
          <p className="text-[11px] font-medium absolute mt-[20px] -ml-[10px]">
            Minutes
          </p>
          {formattedMinutes} {/* Use formatted minutes with leading zero */}
        </h1>
      </div>

      <div className="w-[62px] h-[62px] grid rounded-full justify-center bg-white text-Text2">
        <h1 className="text-[16px] font-bold flex relative mt-[12px]">
          <p className="text-[11px] font-medium absolute mt-[20px] -ml-[12px]">
            Seconds
          </p>
          {formattedSeconds} {/* Use formatted seconds with leading zero */}
        </h1>
      </div>
    </div>
  );
};

export default Timer_Blackdiv;
