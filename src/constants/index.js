import {
  logo,
  github,
  menu,
  close,
  css,
  mysql,
  express,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets';

// Company logos
import tcs from "../assets/company/tcs.png";
import EduVision from "../assets/company/EduVision.png";
import chatbot from "../assets/company/chatbot.png";
import VHP from "../assets/company/VHP.png";

// ✅ New icons for services
<<<<<<< HEAD
import mernIcon from '../assets/1.png';
import genAiIcon from '../assets/2.png';
import promptIcon from '../assets/3.png';
import daIcon from '../assets/4.png';
=======
import mernIcon from '../assets/mern.png';
import genAiIcon from '../assets/GenAi.png';
import promptIcon from '../assets/prompt.png';
import daIcon from '../assets/DA.png';
>>>>>>> 4d17df8 (Add full project with updated About.jsx and enhanced service icons)

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "MERN Developer",
    icon: mernIcon,
  },
  {
    title: "GenAI Enthusiast",
    icon: genAiIcon,
  },
  {
    title: "Prompt Engineer",
    icon: promptIcon,
  },
  {
    title: "Data Analyst",
    icon: daIcon,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Graduate Trainee",
    company_name: "Tata Consultancy Services (Not Onboarded)",
    icon: tcs,
    iconBg: "#383E56",
    date: "Jun 2025 - present",
    points: [
      "Just Received my Offer Letter from TCS but not Onboarded yet, it will usually take 6 months to 1 year for onboarding, so currently I am Unemployed !!!",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "A highly focused and curious learner, Manoj stood out for his commitment to excellence and ability to work collaboratively on team projects with his excellent leadership.",
    name: "Dr. Renuka Devi M",
    designation: "Professor",
    company: "Presidency University",
    image: secondTestimonial,
  },
  {
    testimonial:
      "Manoj actively contributed to student coordination activities and consistently demonstrated excellent time management skills. His timely support made a positive impact.",
    name: "Dr. Anand Kumar M",
    designation: "Professor",
    company: "Presidency University",
    image: thirdTestimonial,
  },
  {
    testimonial:
      "I have seen Manoj take initiative in multiple technical events and class discussions. His blend of curiosity and responsibility is exactly what the industry looks for in fresh graduates.",
    name: "Dr. Mahalakshmi R",
    designation: "Associate Dean",
    company: "Presidency University",
    image: firstTestimonial,
  },
];

const projects = [
  {
    name: "Virtual Hand Painter",
    description:
      "Virtual Hand Painter is a feature used in online meetings to represent visuals without the need for any hardware assistance. It uses our camera to track hands for drawing which reduces the reliance on text and promotes visual interaction by enabling on-screen drawing.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "white-text-gradient",
      },
      {
        name: "OpenCV",
        color: "pink-text-gradient",
      },
    ],
    image: VHP,
    source_code_link: "https://github.com/Mkjerry-jr/virtual-painter-web",
  },
  {
    name: "Simple Chatbot",
    description:
      "This is a simple Q/A chatbot designed to answer a predefined set of questions.It works on a conversational model, interpreting short user inputs effectively.The bot provides accurate responses based on the detected query. Mostly used in Customer Support and Tech Assistance fields.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "HTML-CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
    source_code_link: "https://github.com/Mkjerry-jr/Chatbot",
  },
  {
    name: "EduVision",
    description:
      "EduVision is a mini-ERP for government primary schools, managing attendance, marks, and student data. It supports role-based access for Teachers, Heads, Cluster Heads, and BEOs. Built with the MEEN stack, it enables easy supervision and centralized monitoring.",
    tags: [
      {
        name: "Node",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "white-text-gradient",
      },
      {
        name: "Ember",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: EduVision,
    source_code_link: "https://github.com/Mkjerry-jr/EduVision",
  },
];

export { services, technologies, experiences, testimonials, projects };
