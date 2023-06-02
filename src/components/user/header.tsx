import React from "react";
import Button from "./button";
import { NavLink } from "react-router-dom";
import { appRoutesObj } from "src/app.paths";


interface IRoutes {
  routeTitle: string;
  pageRoute: string;
}
const routes: IRoutes[] = [
  {
    routeTitle: "Pricing",
    pageRoute: appRoutesObj.getBasePath(),
  },
  {
    routeTitle: "OurTeam",
    pageRoute: appRoutesObj.getExamplePagePath(),
  },
  {
    routeTitle: "Features",
    pageRoute: appRoutesObj.getFeaturesByIdPagePath(),
  },
  
];
export default function HeaderComponents() {
  return (
    <div className=" flex justify-between h-[78px] w-screen sm:text-[12px] gap-[50px] xl:gap-[200px] sm:gap-[5px]   items-center px-[16px]  ">
      <div>
        <Button
          color={"bg-[#DBF301] text-white"}
          onClick={() => ""}
          text={"Get Started"}
        />
      </div>
      <div className="flex justify-center font-sans  items-center gap-[57px] sm: ">
      <nav className="flex justify-center font-sans  items-center gap-[57px] sm:text-[9px]">
            {routes.map((items, index) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-black sm:text-[9px] text-[16px]" : "text-black sm:text-[9px] text-[16px]"
                  }
                  key={index}
                  to={items.pageRoute}
                >
                  <h2> {(items.routeTitle)}</h2>
                  
                </NavLink>
              );
            })}
          </nav>
      </div>
      <div className="w-[154px] h-[34px] sm:w-[114px] ">
        <img src="/assets/images/Logo.png" alt="" />
      </div>
    </div>
  );
}
