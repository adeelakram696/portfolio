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
    name: "ThirdParty Funders integrations",
    desc: `Developed APIs and scheduler on ExpressJS to get the submission ID, fetch data from monday.com and transform it according to required thirdparty payload then submit it and add activity followup log with responses.
    Tech: Expressjs, Axios, typescript, node-cron, moment`,
    link: "https://approvd-company.monday.com/",
  },
  {
    name: "Dashboards on Monday.com",
    desc: `Developed multiple dashboards for brokers, Admins, Managers for daily activity, KPI, reports from Scratch using monday.com GRAPHQL APIs.
    Tech: ReactJS, Antd, Scss, Javascript, Git, Axios, dayjs`,
    link: "https://approvd-company.monday.com/",
  },
  {
    name: "Tradeaze UK - for Deliveries",
    desc: `Developed new features which raised the bussiness and clients, also increase jobs in rider by smooth job assigning.
    Tech: ReactJS, React.js, Node.js, ExpressJS, Typescript, NXJS, Monorepo, Postgresql, CSS, ChakraUI, Docker, Git/GitHub, API Development, datetime-fns, serverless, NXjs, mono-repo`,
    link: "https://www.tradeaze.uk/#features",
  },
  {
    name: "Clientshare UK - for Supplier Client relationship",
    desc: `Increased Performance by 60% after converting the application into SPA and responsive from old tech stack. improved response time. Further maintained the product
    Tech: ReactJS, Redux toolkit, Laravel Mix, Webpack, Scss, Styled component, Git/GitHub, moment`,
    link: "https://www.myclientshare.com/premium",
  },
  {
    name: "OverJet — AI visualization for Dentists",
    desc: `Added Visualization on full mouth xray FMX on Frontend using React and canvas with integration of AI data response coming through API.
    Tech: React, Redux, Axios, Canvas, D3.js`,
    link: "https://www.overjet.com/",
  },
  {
    name: "Carbon Emission - C6V",
    desc: `Developed from scratch to deployment, Web Application of carbon points marketplace to sell and purchase carbon points in industries to manage their emissions
    Tech: React, Redux, Axios, Expressjs, serverless, Antd, Postgres, Lambda, Amplify, DynamoDB, Lerna, mono-repo, StyledComponent`,
  },
  {
    name: "Load Collection Company — SIRC",
    desc: `Developed from scratch to deployment, seperate portals for admin and marchant with Role base access and user management, registrations, vehicle managment and tracking, multi-language, RTL - LTR layout.
    Tech: React, Redux, Axios, Expressjs, serverless, Antd, Postgres, Amplify, Lambda, StyledComponent`,
    link: "https://sirc.sa/",
  },
  {
    name: "Switch N CO Admin — Health Plateform",
    desc: `Created dashboard for members management and bookings management with UI revamp
    Tech: React, Redux, Axios, styled-component, scss`,
  },
  {
    name: "TeleHealth - Connect Doctors with Pateints",
    desc: `Developed from scratch to deployment, it was quick development project in time of CORONA to connect corona symptoms patients with doctor having privacy remotely. it was successfully used for that purpose by Govt of pakistan.
    Tech: React, Redux, Axios, Expressjs, Antd, Postgres, scss, encryptions`,
  },
  {
    name: "Vistajet — Booking Revamp",
    desc: `Revamp the product with CMS integration, re-design. it was a booking application for thier niche customers.
    Tech: React, Redux, Axios, Antd, modules, CMS `,
    link: "https://www.vistajet.com/en/",
  },
  {
    name: "Vistajet — GlobalView Itinerary Module",
    desc: `Vistajet internal Module to manage itinerary bookings. developed from scratch with scalable, testable code having 90% test coverage, optimized, linted code.
    Tech: React, Redux, Axios, Antd, Jest, mocha, sinon, `,
    link: "https://www.vistajet.com/en/",
  },
  {
    name: "Vistajet — Customer Booking",
    desc: `Vistajet itenerary booking application for Customers. Team work to develop, manage 60% test coverage, improved performance by time and written linted quality code.
    Tech: React, Redux, Axios, Antd, Jest, mocha, sinon, `,
    link: "https://www.vistajet.com/en/",
  },
  {
    name: "TNB Vibrant News- Malaysia",
    desc: `Developed Hybrid App from scratch for Android, IOS in phonegap JS, it was on-site development, with great client team work we launched the application on time. it was Local internal news application launched in 2015.
    Tech: Phonegap, JS`,
  },
  {
    name: "Inhouse Relocation - SIRVA",
    desc: `Formally known as inhouse relocation then aquired by SIRVA, it was an web application for vendors, users and admins to manage relocation management and making the process smooth.
    Tech: PHP, Yii, Css, html, AWS ec2`,
    link: "https://www.sirva.com/",
  },
  {
    name: "Other projects",
    desc: `Gemini Club Network (Golf club, UK) 2014, Golf Registration Scheme (UK) 2014`,
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
