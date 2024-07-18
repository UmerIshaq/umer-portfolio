"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "loerm ispib ahbhn gymt uikha ib sgtii  f ujbdg ioavav.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "loerm ispib ahbhn gymt uikha ib sgtii  f ujbdg ioavav.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description: "loerm ispib ahbhn gymt uikha ib sgtii  f ujbdg ioavav.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description: "loerm ispib ahbhn gymt uikha ib sgtii  f ujbdg ioavav.",
    href: "",
  },
];

const ServicesPage = () => {
  return (
    <section className="w-full flex flex-col justify-between py-8 lg:py-0">
      <div className="grid-flow-row px-4 lg:px-[7rem]">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.8,
            transition: { delay: 1, duration: 0.6, ease: "easeIn" },
          }}
        >
          {services.map((service, index) => {
            return (
              <div key={index}>
                <div className="flex flex-col gap-4 group">
                  <div className="wful flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {service.num}
                    </div>
                    <Link
                      href={"/"}
                      className="w-[70px] h-[70px] bg-white flex justify-center items-center rounded-full group-hover:bg-accent
                      hover:-rotate-45 transition-all duration-500"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  {/* Title  */}
                  <h2 className="text-3xl min-[350px]:text-[35px] lg:text-[42px] group-hover:text-accent font-bold transition-all duration-500">
                    {service.title}
                  </h2>
                  {/* description  */}
                  <p className="text-white/60">{service.description}</p>
                  {/* Border  */}
                  <div className="border-b-2 border-white/20 w-full"></div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
