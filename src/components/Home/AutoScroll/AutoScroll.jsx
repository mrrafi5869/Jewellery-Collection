import React from "react";
import "./AutoScroll.css";

const AutoScroll = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-3/5 place-items-center mx-auto my-16">
      <div className="box w-[220px] lg:w-[320px] h-[440px] box2"></div>
      <div className="box w-[220px] lg:w-[320px] h-[440px] box1"></div>
      <div className="box w-[220px] lg:w-[320px] h-[440px] box3"></div>
      <div className="box w-[220px] lg:w-[320px] h-[440px] box4"></div>
      <div className="box w-[220px] lg:w-[320px] h-[440px] box5"></div>
      <div className="box w-[220px] lg:w-[320px] h-[440px] box6"></div>
    </div>
  );
};

export default AutoScroll;
