"use client";

import { cn } from "@/lib/utils";
import CountUp from "react-countup";

// import{coun}
const stats = [
  { num: 1, text: "Years of experience" },
  { num: 10, text: "Projects completed" },
  { num: 8, text: "Technologies mastered" },
  { num: 5, text: "AWARD WON" },
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="px-4 lg:px-[6rem]">
        <div className="grid grid-cols-2 sm:grid-cols-4 mx-auto gap-6 max-w-[80vw] lg:max-w-none">
          {stats.map((stat, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex justify-center items-center gap-3 lg:gap-4 lg:justify-start"
              >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="text-3xl lg:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[120px]"
                  } leading-snug text-white/80`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
