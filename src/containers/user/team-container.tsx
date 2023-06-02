import React from "react";
import TextIcon from "src/components/user/text-icon";
import { CiHeadphones } from "react-icons/ci";

export default function TeamContainer() {
  return (
    <div className=" flex flex-col  items-center  pt-[12px]  ont-bold  font-title  pb-[22px]">
      <p className="text-[16px]  sm:text-[13px] font-light ">
        Bring team collaboration and productivity like never before{" "}
      </p>

      <div className="grid grid-cols-3 p-16 -[330px] h-[188px] sm:p-[53px]  ">
        <div className=" border-l-[1px] border-b-[1px] border-[#dddada] pl-3">
          <TextIcon
            title={"Interface"}
            text={
              "Auto backup,smooth interface ensures you complete your scheduled tasks"
            }
            img={"/assets/icons/Group (4).png"}
          />
        </div>
        <div className="border-b-[1px] border-l-[1px]  border-[#dddada]">
          <TextIcon
            title={"24/7"}
            text={"Real time feedback for all your queries "}
            img={"/assets/icons/Group (3).png"}
          />
        </div>
        <div className="border-b-[1px]  border-[#dddada]">
          <TextIcon
            title={"Support"}
            text={
              "Centralize your data from multiple sources and process it in real time"
            }
            img={"/assets/icons/Group (5).png"}
          />
        </div>
        <div className="border-l-[1px] border-[#dddada]">
          <TextIcon
            title={"Storage"}
            text={"Unlimited storage for your teams "}
            img={"/assets/icons/Group (7).png"}
          />
        </div>
        <div className="border-l-[1px] border-[#dddada]">
          <TextIcon
            title={"Flexibility"}
            text={"Track’s world class interface built for speed and delight"}
            img={"/assets/icons/Group (6).png"}
          />
        </div>
        <div>
          <TextIcon
            title={"Backup"}
            text={
              "Ensure no data is lost with our auto AI powered backup systems"
            }
            img={"/assets/icons/archive-content 1.png"}
          />
        </div>
      </div>
      <div className="w-[300px] h-[400px]">
        
       
      </div>
      <div className="w-[600px] font-sans  flex flex-col text-center p-[3px] items-center text-[14px]   sm:text-[10px] font-light ">
        <p>Your favorite project management team now flexible enough to take on any project<br></br> Work how you want and where you want</p>
      </div>
    </div>
  );
}
