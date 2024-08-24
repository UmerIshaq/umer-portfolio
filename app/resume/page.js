"use client";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiBootstrap,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

// About Data
const about = {
  title: "About me",
  description:
    "Creative and detail-oriented front-end developer, passionate about translating innovative ideas into interactive, user-friendly digital experiences.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Umer IShaaq",
    },
    {
      fieldName: "Phone",
      fieldValue: "00 966 58 092 2409",
    },
    {
      fieldName: "WhatsApp",
      fieldValue: "0092 302 3299241",
    },
    {
      fieldName: "Email",
      fieldValue: "mumarishaq241@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ year",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Arabi, Urdu/Hindi",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistan",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};
// Experience Data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Showcasing a year of hands-on experience in front-end development, with a proven track record of building dynamic, user-focused websites and applications.",
  items: [
    {
      Company: "ICR-IT CENTER",
      Position: "Front-end Intern",
      duration: "MAY-2023 - Aug-2023",
    },
    {
      Company: "Medifox Tech.(India)",
      Position: "Junior Developer",
      duration: "Aug-2023 - Dec-2023",
    },
    {
      Company: "Xorco Netz",
      Position: "Next.js developer",
      duration: "Jan-2024 - Present",
    },
    // {
    //   Company: "Tech Academy",
    //   Position: "Teaching Assistant",
    //   duration: "2019 - 2020",
    // },
    // {
    //   Company: "Digital Agency",
    //   Position: "UI/UX Designer",
    //   duration: "2018 - 2019",
    // },
    // {
    //   Company: "Software Development",
    //   Position: "Junior Developer",
    //   duration: "2017 - 2018",
    // },
  ],
};
// Education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Solid foundation in web development, backed by formal education in computer science and continuous learning through advanced courses and certifications.",
  items: [
    {
      Institution: "Virtual University pak",
      degree: "BSSE 5th Smester",
      duration: "2022 - present",
    },
    {
      Institution: "ICR-IT Center",
      degree: "Front-end web",
      duration: "2023",
    },
    {
      Institution: "The Scholars College",
      degree: "Inter in ICS",
      duration: "2019-2021",
    },
    {
      Institution: "Govt. High School RP.",
      degree: "Matriculation",
      duration: "2017-2019",
    },
    // {
    //   Institution: "Online Course",
    //   degree: "Programming Course",
    //   duration: "2020-2021",
    // },
    // {
    //   Institution: "Tech Institute",
    //   degree: "Certified web devloper",
    //   duration: "2019",
    // },
    // {
    //   Institution: "Design School",
    //   degree: "Diploma in Graphics Design",
    //   duration: "2016-2018",
    // },
    // {
    //   Institution: "Community college",
    //   degree: "Associate Degree in Computer Science",
    //   duration: "2014 - 2016",
    // },
  ],
};

// Skills Data
const skills = {
  title: "My Skills",
  description:
    "Proficient in modern front-end technologies including React.js, Next.js, Tailwind CSS, Bootstrap5, Html5, CSS3, JavaScript and Redux-Toolkit, with a strong focus on responsive design and performance optimization.",
  SkillList: [
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React Js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    // {
    //   icon: <SiNodedotjs />,
    //   name: "Node.js",
    // },
    // {
    //   icon: <SiMongodb />,
    //   name: "MongoDB",
    // },
    // {
    //   icon: <SiExpress />,
    //   name: "Express js",
    // },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap 5",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS ",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
  ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
const ResumePage = () => {
  return (
    <section>
      <div className="px-4 lg:px-[7rem]">
        <motion.div
          className="flex justify-center items-center py-12 lg:py-0 min-h-[80vh] "
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.8, duration: 0.6, ease: "easeIn" },
          }}
        >
          <div className="px-4 lg:px-[7rem] w-full">
            <Tabs
              defaultValue="experience"
              className="flex flex-col justify-center items-center lg:items-start lg:flex-row gap-[60px] w-full"
            >
              <TabsList className="flex flex-col w-full lg:w-1/4 max-w-[385px] gap-4">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About me</TabsTrigger>
              </TabsList>
              <div className="min-h-[60vh] w-full xl:w-2/3">
                {/* Experience  */}
                <TabsContent value="experience" className="w-full">
                  <div className="flex flex-col text-center gap-[30px] lg:text-left">
                    <h3 className="text-3xl font-bold">{experience.title}</h3>
                    <p className="max-w-[600px] text-white/60">
                      {experience.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item, index) => {
                          return (
                            <li
                              key={index}
                              className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col
                               justify-center items-center lg:items-start gap-1 text-white/60"
                            >
                              <span className="text-accent">
                                {item.duration}
                              </span>
                              <h3 className="text-xl text-center lg:text-left">
                                {item.Position}
                              </h3>
                              <div className="flex items-center gap-3">
                                {/* dot  */}
                                <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                                <p>{item.Company}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
                {/* Education  */}
                <TabsContent value="education" className="w-full">
                  <div className="flex flex-col text-center gap-[30px] lg:text-left">
                    <h3 className="text-3xl font-bold">{education.title}</h3>
                    <p className="max-w-[600px] text-white/60">
                      {education.description}
                    </p>
                    <ScrollArea className="h-[400px]">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {education.items.map((item, index) => {
                          return (
                            <li
                              key={index}
                              className="bg-[#232329] h-[184px] py-2 px-4 rounded-xl flex flex-col
                               justify-center items-center lg:items-start gap-1 text-white/60"
                            >
                              <span className="text-accent">
                                {item.duration}
                              </span>
                              <h3 className="text-xl text-center lg:text-left">
                                {item.degree}
                              </h3>
                              <div className="flex items-center gap-3">
                                {/* dot  */}
                                <span className="w-[6px] h-[6px] bg-accent rounded-full"></span>
                                <p>{item.Institution}</p>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
                {/* Skills  */}
                <TabsContent value="skills" className="w-full h-full">
                  <div className="flex flex-col gap-[30px]">
                    <div className="flex flex-col text-center gap-[30px] lg:text-left">
                      <h3 className="text-3xl font-bold">{skills.title}</h3>
                      <p className="max-w-[600px] text-white/60">
                        {skills.description}
                      </p>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {skills.SkillList.map((item, index) => {
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger
                                  className="w-full h-[150px] bg-[#232329]  rounded-xl 
                                flex justify-center items-center group"
                                >
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                    {item.icon}
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize">{item.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </TabsContent>
                {/* About me  */}
                <TabsContent
                  value="about"
                  className="w-full text-center xl:text-left"
                >
                  <div className="flex flex-col text-center gap-[30px] lg:text-left">
                    <h3 className="text-3xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60">
                      {about.description}
                    </p>
                    <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px]">
                      {about.info.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="flex justify-center items-center lg:justify-start gap-1"
                          >
                            <span className="text-white/60">
                              {item.fieldName}
                            </span>
                            <span className="text-white/60">:</span>
                            <span className="text-xl">{item.fieldValue}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumePage;
