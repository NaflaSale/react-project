import { useTranslation } from "react-i18next";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { appRoutesObj } from "src/app.paths";
import { NavLink } from "react-router-dom";
import i18n from "src/core/configs/i18n";

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
    routeTitle: "Features",
    pageRoute: appRoutesObj.getFeaturesByIdPagePath(),
  },
  {
    routeTitle: "OurTeam",
    pageRoute: appRoutesObj.getOurTeamByIdPagePath(),
  },
];
function NavBar() {
  

  const { t } = useTranslation();
  return (
    <div className="container mx-auto flex  justify-center sm:justify-start pt-[85px] sm:pt-0 ">
      <div
        className={`flex sm:flex-col sm:h-screen sm:w-1/2 h-[72px] w-[1120px] container bg-gradient-to-r from-lightBlue to-darkBlue rounded-[8px] sm:rounded-none  items-center justify-between sm:justify-start sm:items-start sm:gap-[50px] px-[16px] sm:pt-[57px] `}>
        <div className="flex justify-center items-center gap-[57px] sm:flex-col">
          <nav className="flex gap-[29px] font-subTitle sm:flex-col">
            {routes.map((items, index) => {
              return (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-orang text-[16px]" : "text-whiteColor text-[16px]"
                  }
                  key={index}
                  to={items.pageRoute}
                >
                  <h2> {t(items.routeTitle)}</h2>
                  
                </NavLink>
              );
            })}
          </nav>
        </div>
        
      </div>
    </div>
  );
}

export default NavBar;