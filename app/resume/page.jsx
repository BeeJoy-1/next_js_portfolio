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
      name: "html 5"
    },
    {
      icon: <FaCss3/>,
      name: "Css 3"
    },
    {
      icon: <FaJs/>,
      name: "JS"
    },
    {
      icon: <FaReact/>,
      name: "React"
    },
    {
      icon: <FaFigma/>,
      name: "Figma"
    },
    {
      icon: <FaNodeJs/>,
      name: "NodeJs"
    },
  ]
}


const resume = () => {
  return (
    <div>resume page</div>
  )
}

export default resume