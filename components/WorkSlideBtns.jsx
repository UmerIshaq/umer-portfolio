"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
const WorkSlideBtns = (containerStyles, btnStyles, iconsStyles) => {
  const swiper = useSwiper();
  return (
    <div
      className="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
     lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
    >
      <button
        className="bg-accent hover:bg-accent-hover w-[44px] h-[44px] 
      text-[22px] text-primary flex justify-center items-center transition-all"
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button
        className="bg-accent hover:bg-accent-hover w-[44px] h-[44px] 
      text-[22px] text-primary flex justify-center items-center transition-all"
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSlideBtns;
