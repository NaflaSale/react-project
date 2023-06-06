import React from "react";
import {  AiTwotoneStar } from "react-icons/ai";
import UserCom from "src/components/user/user-comp";

export default function UserContainer() {
  return (
    <div>
      <div className=" flex justify-center   -space-x-1 overflow-hidden  pt-6">
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="/assets/images/6.png"
          alt=""
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="/assets/images/5.png"
          alt=""
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="/assets/images/4.png"
          alt=""
        />
        <img
          className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
          src="/assets/images/3.png"
          alt=""
        />
      </div>

      <div className="flex justify-center pt-20 text-[16px] sm:text-[10px] font-normal">
        <p>2000+ Happy users</p>
      </div>
      <div className="flex items-center  ">
        <UserCom
          img={"./assets/images/BG (1).png"}
          text={"No more switching between taks.Time management has become  for my team"}
          title={"Devon Lane"}
          hint={"DLDesign.co"}
         
        />
         <UserCom
          img={"./assets/images/BG.png"}
          text={"Track has simplified all my tasks.Managing my work has become easier.”"}
          title={"Jenny Wilson"}
          hint={"Grower.io"}
         
        />
      </div>
    </div>
  );
}
