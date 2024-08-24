import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Image from "next/image";
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
// import { UpdateFollower } from "react-mouse-follower";
import React from "react";

export default function Home() {
  return (
    // <UpdateFollower
    //   mouseOptions={{
    //     sensitivity: 0.5,
    //     backgroundColor: "aqua",
    //     followSpeed: 0.5,
    //     zIndex: 999,
    //     mixBlendMode: "difference",
    //   }}
    // >
    <section className="w-full">
      <div className="px-4 lg:px-[7rem] h-full">
        <div className="flex flex-col gap-4 lg:flex-row justify-between items-center 2xl:pt-2 lg:pb-24 ">
          {/* Text  */}
          <div className="text-center mb-4 lg:mb-0 lg:text-left order-2 lg:order-none">
            <span className="text-xl">Next.js Developer</span>
            <h1 className="h1 mb-6">
              Hello i&apos;m <br />
              <span className="text-accent lg:text-[65px]">Umer Ishaaq</span>
            </h1>
            <p className="max-w-[500px] mb-4 text-white/80">
              I excel at crafting elegant digital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/* Button And Socials  */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 rounded-full"
              >
                <span>Download Cv</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="lg:mb-0">
                <Socials
                  ContainerStyle={"flex gap-6"}
                  IconStyle="h-9 w-9 border border-accent rounded-full flex justify-center 
                  items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 lg:order-none mb-8 lg:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
    // </UpdateFollower>
  );
}
