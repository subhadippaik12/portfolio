import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Competitive programmer .", "Full Stack Developer ."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 20,
      delaySpeed: 500,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Welcome to my website </h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Subhadip Paik</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="true"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner