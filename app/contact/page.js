"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+966) 58 092 2409",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mumarishaq241@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Code Corner, Tech Town 13579",
  },
];

import { motion } from "framer-motion";
const ContactPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="px-4 lg:px-[7rem]">
        <div className="flex flex-col lg:flex-row gap-[30px]">
          {/* Form  */}
          <div className="lg:w-[54%] order-2 lg:order-none">
            <form className="flex flex-col p-10 gap-6 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl text-accent">
                Let&rsquo;s work together
              </h3>
              <p className="text-white/60">
                loerm ispib ahbhn gymt uikha ib sgtii f ujbdg ioavav. jaos namej
                nmska kujlorm ipsum.
              </p>
              {/* Input  */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="FirstName" />
                <Input type="lastname" placeholder="LastName" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/* Select  */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Developmengt</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Logo Deisgn</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Textarea  */}
              <Textarea
                className="h-[200px]"
                placeholder="Type Your message here."
              />
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* Info  */}
          <div className="flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[52px] xl:h-[52px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
