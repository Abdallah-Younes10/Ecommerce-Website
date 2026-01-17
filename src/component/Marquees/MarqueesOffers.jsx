import React from "react";
import dashboard from "../../assets/Dashboard.jpg";
import flash from "../../assets/EG_Flash_Deals_DC.jpg";
import u199 from "../../assets/199.jpg";
import u99 from "../../assets/99.jpg";
import u149 from "../../assets/149.jpg";
import u89 from "../../assets/89.jpg";
import amazon from "../../assets/Amazon_Basket.jpg";
// import { div } from "react-router-dom";
import Marquee from "react-fast-marquee";
export const MarqueesOffers = () => {
  return (
    <>
      <Marquee pauseOnHover speed={100}>
        <div className="flex gap-6 items-start">
          {/* صورة واحدة + نص */}
          <div  className="flex flex-col items-center gap-1">
            <img src={dashboard} alt="" className="h-80" />
            <span className="text-sm font-medium">Enjoy Prime on us</span>
          </div>

          <div  className="flex flex-col items-center gap-1">
            <img src={flash} alt="" className="h-80" />
            <span className="text-sm font-medium">New deals everyday</span>
          </div>

          {/* مجموعة صور 2x2 */}
          <div className="grid grid-cols-2 gap-2">
            <div  className="flex flex-col items-center gap-1">
              <img src={u199} alt="" className="h-35" />
              <span className="text-xs">Home & Kitchen</span>
            </div>
            <div  className="flex flex-col items-center gap-1">
              <img src={u99} alt="" className="h-35" />
              <span className="text-xs">Home Care</span>
            </div>
            <div  className="flex flex-col items-center gap-1">
              <img src={u149} alt="" className="h-35" />
              <span className="text-xs">Health & Beauty</span>
            </div>
            <div  className="flex flex-col items-center gap-1">
              <img src={u89} alt="" className="h-35" />
              <span className="text-xs">Electronics Accessories</span>
            </div>
          </div>

          <div  className="flex flex-col items-center gap-1">
            <img src={amazon} alt="" className="h-80" />
            <span className="text-sm font-medium">Buy 5 get 5% off*</span>
          </div>
          <p> </p>
        </div>
      </Marquee>
    </>
  );
};
