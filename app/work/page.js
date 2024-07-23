"use client";
import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSlideBtns from "@/components/WorkSlideBtns";

const projects = [
  {
    num: "01",
    category: "Shop Store",
    title: "Project 1",
    description:
      "A fast and scalable e-commerce website built with Next.js, featuring a user-friendly interface, efficient checkout process, and seamless shopping experience.",
    stack: [
      { name: "Next.Js" },
      { name: "Tailwind" },
      { name: "Redux-Toolkit" },
    ],
    img: "/assets/work/thumb1.png",
    live: "https://shop-store-dov9.vercel.app/",
    github: "https://github.com/UmerIshaq/shop-store",
  },
  {
    num: "02",
    category: "Image-Gallery",
    title: "Project 2",
    description:
      "A visually stunning and interactive image gallery website built with Next.js, showcasing a curated collection of images with smooth navigation and responsive design",
    stack: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "TypeScript" }],
    img: "/assets/work/thumb2.png",
    live: "https://image-gallery-cloz.vercel.app/",
    github: "https://github.com/UmerIshaq/image_gallery",
  },
  {
    num: "03",
    category: "Movies APP",
    title: "Project 3",
    description:
      "A comprehensive movies web app built with Next.js, featuring a vast film library, personalized recommendations.",
    stack: [{ name: "Next.js" }, { name: "Bootstrap" }],
    img: "/assets/work/thumb3.png",
    live: "https://movieapp-trh8.vercel.app/",
    github: "https://github.com/UmerIshaq/movieapp",
  },
  // {
  //   num: "04",
  //   category: "Movies APP",
  //   title: "Project 3",
  //   description:
  //     "loerm ispib ahbhn gymt uikha ib sgtii  f ujbdg ioavav. jaos namej nmska kujlorm ipsum.",
  //   stack: [{ name: "Next.js" }, { name: "Bootstrap" }],
  //   img: "/assets/work/thumb3.png",
  //   live: "https://movieapp-trh8.vercel.app/",
  //   github: "https://github.com/UmerIshaq/movieapp",
  // },
];

const WorkPage = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (Swiper) => {
    const currentSlide = Swiper.activeIndex;
    setProject(projects[currentSlide]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-8 lg:py-0"
    >
      <div className="px-4 lg:px-[7rem]">
        <div className="flex flex-col lg:flex-row lg:gap-[30px]">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col gap-[30px] lg:justify-between order-2 lg:order-none ">
            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            {/* Project category  */}
            <h2
              className="text-[32px] font-bold leading-none text-white
             group-hover:text-accent transition-all duration-500 capitalize"
            >
              {project.category}
            </h2>
            {/* Project description  */}
            <p className="text-white/60">{project.description}</p>
            {/* Project Stack  */}
            <ul className="flex gap-1 lg:gap-2">
              {project.stack.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="text-accent text-sm md:text-lg lg:text-xl flex flex-wrap"
                  >
                    {item.name}
                    {/* remove the last Comma  */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                );
              })}
            </ul>
            {/* border  */}
            <div className="border border-white/20"></div>
            {/* Buttons  */}
            <div className="flex items-center gap-4">
              {/* Live Project Button */}
              <Link href={project.live} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className=" text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              {/* Github Project Button  */}
              <Link href={project.github} target="_blank">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className=" text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github Repositry</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* Overlay  */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* Image  */}
                      <div className="w-full h-full relative">
                        <Image
                          src={project.img}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* Slider Button  */}
              <WorkSlideBtns />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPage;
