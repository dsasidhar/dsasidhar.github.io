import {
  angular,
  cruise,
  css,
  docker,
  exacta,
  fanatics,
  founder,
  freelancer,
  fullstack,
  git,
  graphql,
  html,
  javascript,
  mobileDev,
  mongodb,
  nodejs,
  postgresql,
  reactjs,
  redux,
  tailwind,
  typescript,
  webileapps,
  yahoo,
} from "@/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Fullstack Web developer",
    icon: fullstack,
  },
  {
    title: "Mobile app Developer",
    icon: mobileDev,
  },
  {
    title: "Freelance Contractor",
    icon: freelancer,
  },
  {
    title: "Founder",
    icon: founder,
  },
];

export const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Redux",
    icon: redux,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "React Native",
    icon: reactjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "graphql",
    icon: graphql,
  },

  {
    name: "docker",
    icon: docker,
  },
];

export interface IExperience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  type: string;
  location: string;
  points: string[];
}

export const experiences: IExperience[] = [
  {
    title: "Senior Software Engineer II",
    company_name: "GM Cruise",
    location: "Remote",
    type: "Contractor through Toptal",
    icon: cruise,
    iconBg: "#ffffff",
    date: "Feb 2022 - Dec 2023",
    points: [
      "Spearheaded the backend development for the company's innovative delivery system, focusing on last-mile delivery of groceries and packaged food using autonomous vehicles.",
      "Successfully integrated a major delivery partner, managing the end- to-end implementation process. This involved close collaboration with various stakeholders to ensure seamless integration with the existing system.",
      "Developed and implemented comprehensive end-to-end tests using autonomous vehicle bots, significantly enhancing system reliability and operational efficiency.",
      "Led a key initiative to automate processes in partner integration, which resulted in a 30% reduction in manual effort and faster onboarding times for new partners.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Exacta Process Platforms",
    location: "Remote",
    type: "Contractor",
    icon: exacta,
    iconBg: "#000000",
    date: "Mar 2021 - Feb 2022",
    points: [
      "Architected an advanced, mid-fidelity simulation-based training unit system from the ground up, enhancing user training in complex systems and securing a subsequent project due to its innovation and effectiveness.",
      "Engineered a reusable UI component library to streamline consistency and efficiency across multiple front-end applications.",
      "Developed an intuitive flow chart builder using SVG and React, enabling users to easily create detailed multi-step diagrams.",
      "Created a sophisticated lesson processor for the training system, effectively parsing modules and orchestrating sequential training execution.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Fanatics Inc",
    location: "Hyderabad",
    type: "Full time",
    icon: fanatics,
    iconBg: "#0a233f",
    date: "Feb 2019 - Mar 2021",
    points: [
      "Led the successful transition from a legacy front-end application to an updated, React-based architecture, significantly improving performance and user experience.",
      "Developed and maintained tools for the CRM team, aiding business units in creating targeted campaigns for audience expansion during peak periods.",
      "Solely designed and implemented a full-stack solution for a business metric visualization portal, utilized company-wide for continuous stakeholder insights.",
    ],
  },
  {
    title: "Technical Lead",
    company_name: "Webileapps India Pvt Ltd",
    location: "Hyderabad",
    type: "Full time",
    icon: webileapps,
    iconBg: "#FFFFFF",
    date: "Jan 2018 -  Feb 2019",
    points: [],
  },
  {
    title: "Senior Software Engineer",
    company_name: "Webileapps India Pvt Ltd",
    location: "Hyderabad",
    type: "Full time",
    icon: webileapps,
    iconBg: "#FFFFFF",
    date: "Jan 2016 - Jan 2018",
    points: [],
  },
  {
    title: "UI Developer",
    company_name: "Webileapps India Pvt Ltd",
    location: "Hyderabad",
    type: "Full time",
    icon: webileapps,
    iconBg: "#FFFFFF",
    date: "Dec 2014 - Dec 2015",
    points: [],
  },
  {
    title: "Technical Intern",
    company_name: "Yahoo India",
    location: "Bangalore",
    type: "Internship",
    icon: yahoo,
    iconBg: "#46286e",
    date: "Feb 2014 - Oct 2015",
    points: [],
  },
];
