import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[270px] h-[360 px] lgl:w-[400px] lgl:h-[540px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-10 w-[300px] h-[250px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner