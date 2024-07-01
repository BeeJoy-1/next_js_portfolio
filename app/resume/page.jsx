"use client"

import {
  FaHtml5, 
  FaCss3,
  FaJs,
  FaReact, 
  FaFigma, 
  FaNodeJs,
} from 'react-icons/fa'

import { SiTailwindcss, SiNextdotjs } from 'react-icons/si'

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs'

import {
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

// About data
const about = {
  title: "About me",
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita maxime quis veritatis.",

  info: [
    {
      fieldName: "Name",
      fieldValue: "Shahriar Ahmed",
    },
    {
      fieldName: "Phone",
      fieldValue: "+01123456",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ year",
    },
    {
      fieldName: "nationality",
      fieldValue: "Bangladeshi",
    },
    {
      fieldName: "Email",
      fieldValue: "beejoy@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "languages",
      fieldValue: "English, Spanish, Bangla, Urdu, Hindi",
    },
  ]
} 

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque impedit dolorem fugit!",

  items: [
    {
      company: "Tech Solutions Inc",
      position: "Full Stack Developer",
      duration: "2022 - Present"
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021"
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer",
      duration: "2020 - 2021"
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2019 - 2020"
    },
    {
      company: "Digital Agence",
      position: "UI/UX Designer",
      duration: "2018 - 2019"
    },
    {
      company: "Software Development Firm",
      position: "Junior Developer",
      duration: "2017 - 2018"
    },
  ]
}

//Education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque impedit dolorem fugit!",

  items: [
    {
      instituation: "City University",
      degree: "BSC in CSE",
      duration: "2024"
    },
    {
      instituation: "Creative IT Institute",
      degree: "Certified MERN Stack Developer",
      duration: "2023"
    },
    {
      instituation: "Codecademy",
      degree: "Front-end Track",
      duration: "2022"
    },
    {
      instituation: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021"
    },
    
  ]
}

//Skills data
const skills = {
  title: "My skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, cupiditate suscipit! Eveniet!",
  skillList: [
    {
      icon: <FaHtml5/>,
      name: "Html 5"
    },
    {
      icon: <FaCss3/>,
      name: "Css 3"
    },
    {
      icon: <FaJs/>,
      name: "JavaScript"
    },
    {
      icon: <FaReact/>,
      name: "React.js"
    },
    {
      icon: <FaFigma/>,
      name: "Figma"
    },
    {
      icon: <FaNodeJs/>,
      name: "NodeJs"
    },
    {
      icon: <SiNextdotjs/>,
      name: "Next.js"
    },
    {
      icon: <SiTailwindcss/>,
      name: "Tailwind.css"
    },
  ]
}


const resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0}} 
      animate={{
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"}
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container mx-auto'>
        <Tabs 
          defaultValue='experience' 
          className=' flex flex-col xl:flex-row gap-[60px]'
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Contents */}

          <div className='min-h-[70vh] w-full'>
            {/* Experiece */}
            <TabsContent value="experience" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {experience.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.items.map((item,index)=> {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                  {education.description}
                </p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item,index)=> {
                      return (
                        <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                          <div className='flex items-center gap-3'>
                            {/* dot */}
                            <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                            <p className='text-white/60'>{item.instituation}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* SKills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px text-center xl:text-left]'> 
                    <h3 className='text-4xl font-bold'>       
                      {skills.title}
                    </h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                      {skills.description}
                    </p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                  {skills.skillList.map((skill,index)=> {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize '>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full">
              Experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default resume