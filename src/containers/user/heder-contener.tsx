import React, { useState } from "react";
import Button from "src/components/user/button";
import HeaderComponents from "src/components/user/header";

export default function HeaderContainer() {
    const [toggel, setToggel] = useState(false);
  return (
    <div className=" bg-homeBackground sm:h-[400px] bg-cover bg-no-repeat w-full h-[830px] ">
      <HeaderComponents />
      <div className=" flex flex-col  font-title items-center pt-[2px] sm:text-[20px]  ">
        <div className=" flex flex-col  items-center text-[40px] pt-[50px]  ont-bold sm:text-[30px] font-title  pb-[22px]">
        <p className="font-bold font-sans "> Manage your projects and </p>
        <p className="font-bold font-sans ">collaborate with teams</p>
        </div>
        <p className="text-[20px] sm:text-[16px] font-light font-sans  ">
          A tool for visualising , organising and tracking all the work you do
        </p>
      </div>
      <div className="flex justify-center items-center sm:text-[9px] gap-[16px] pt-[40px]">
        <Button
          color={`${
            toggel
              ? "bg-green text-black"
              : "bg-whiteColor border border-green"
          } `}
          onClick={() => {
            setToggel(true);
          }}
          text={("Book Demo")}
        />
        <Button
          color={`${
            toggel
              ? "bg-whiteColor border border-green"
              : "bg-green text-black"
          }`}
          onClick={() => {
            setToggel(false);
          }}
          text={("Get Started")}
        />
      </div>
      <div> <img className=' w-[86px]  pr-[30px] pt-40 sm:pt-0 '
          src={"./assets/images/Done.png"}
           /></div>
    </div>
  );
}
