import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Adeel Akram",
  title: "Hi all, I'm Adeel",
  description:
    "I'm a passionate Senior Full Stack web developer specializing in web development across multiple scalable projects and products. Throughout my career, I’ve worked on both frontend and backend technologies, focusing on creating efficient, maintainable, and high-performing applications. I have expertise in React, JavaScript, API integration, and cloud-based services, and have contributed to projects involving complex API integrations, component migration, and performance optimization.",
  resumeLink: "/resume/Adeel_akram_Resume.pdf",
};

export const openSource = {
  githubUserName: "adeelakram696",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:adeelakram696@gmail.com",
  linkedin: "https://www.linkedin.com/in/madeelakram",
  github: "https://github.com/adeelakram696",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "SENIOR FULL STACK DEVELOPER WHO WANTS TO EXPLORE",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive SPA Applications in React"),
        emoji("⚡ Building RESTful APIs in ExpressJS"),
        emoji("⚡ Building Scalable, Testable Web Application"),
      ],
      softwareSkills: [
        {
          skillName: "Javascript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Typescript",
          iconifyTag: "skill-icons:typescript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "ExpressJS",
          iconifyTag: "skill-icons:expressjs-light",
        },
        {
          skillName: "CSS",
          iconifyTag: "skill-icons:css",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Serverless",
          iconifyTag: "vscode-icons:file-type-serverless",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Jest",
          iconifyTag: "skill-icons:jest",
        },
        {
          skillName: "Postgres",
          iconifyTag: "logos:postgresql",
        },
        {
          skillName: "GraphQL",
          iconifyTag: "logos:graphql",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "80",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "FAST National University of Computer And Emerging Sciences",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "August 2009 - May 2013",
    logo: "https://www.eduvision.edu.pk/edu_news/images/logo-FAST-NU.png",
    desc: "",
    // grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Senior Fullstack Engineer",
    company: "Founder and lightning ltd UK (REMOTE)",
    companyLogo: "/img/icons/common/f+l.jpeg",
    date: "Aug 2021 - Present",
    desc: "As a Senior Full Stack Developer, I specialize in building dynamic web applications using React.js and Node.js. My expertise in JavaScript (ES6+), HTML5, CSS3/SASS/LESS, and TypeScript ensures interactive, responsive user interfaces. I translate Figma designs into user-friendly components and manage state effectively with Redux and Context API. On the backend, I develop robust RESTful APIs and GraphQL solutions, deploying scalable applications via AWS. I streamline workflows using Webpack, Babel, Git, and Docker, and maintain high code quality with testing frameworks like Jest and Enzyme, excelling in Agile environments using Jira and Trello.",
  },
  {
    role: "Principal Software Engineer",
    company: "Venturedive pvt ltd.",
    companyLogo: "/img/icons/common/vd.jpg",
    date: "Apr 2016 - July 2024",
    desc: "I have successfully delivered numerous projects using React.js, Node.js, and Express.js, leading a team of six junior developers while mentoring them on best coding practices. I built scalable web applications with responsive UI using CSS3, SASS, and LESS, and implemented state management solutions with Redux and Context API. My work also involved developing and integrating RESTful APIs and GraphQL, as well as leading API development and third-party integrations. Through combining technical expertise with leadership, I consistently delivered efficient, high-quality projects while fostering growth within my team.​",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Software Engineer",
    company: "Goodcore soft pvt ltd.",
    companyLogo: "/img/icons/common/gcs.jpeg",
    date: "Jul 2013 - Apr 2016",
    desc: "I began my career as a web developer, gaining extensive experience in managing multiple products, ensuring smooth operations, and achieving set goals. This laid a strong foundation for my proficiency as a web developer. I have worked with a variety of technologies, including PHP, PhoneGap, CSS, JavaScript, and ASP.NET, and had the opportunity to work onsite for a client in Malaysia, TNB (Tenaga Nasional Berhad), contributing to successful project development and implementation.​",
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/1hanzla100/developer-portfolio",
    link: "https://developer-portfolio-1hanzla100.vercel.app/",
  },
  {
    name: "Giebo",
    desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
    link: "https://gibeo.io/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Hooligan Culture",
    desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
    link: "https://hooliganculture.com/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Magdalena Milosevic",
    role: "Technology Project manager",
    feedback:
      "Adeel worked on one of my projects as vendor senior developer where I was the client receiving Project Manager for good 9 months. He is a great developer consistently delivery project objectives on time and great quality. His role was crucial for delivering successful software product. You can also rely on him that any work will be completed within the given specification and beyond. He also has a great strength in working independently. Thoroughly hope that this recommendation will bring huge value to Adeel's future career. ",
  },
  {
    name: "Irfan A Wahid",
    role: "Vice President - Software Engineering at JPMorgan Chase & Co.",
    feedback:
      "Adeel is an outstanding software engineer who continuously exceeds the expectations set for his position. He has demonstrated excellent programming and analytical skills which are very essential to address the constantly evolving client’s business requirements. The best thing I noticed in him is his insatiable zeal to learn latest technical skills, technology stacks and tools and offer better solutions",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "M Adeel Akram",
  description: greetings.description,
  author: "Adeel Akram",
  image: "https://avatars.githubusercontent.com/u/27729957?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Adeel",
    "Adeel Akram",
    "@adeelakram",
    "madeelakram",
    "Portfolio",
    "Adeel Portfolio ",
    "Adeel Akram Portfolio",
    "Senior React Developer",
    "Senior Fullstack Developer",
    "Senior Fullstack engineer",
    "Web developer",
  ],
};
