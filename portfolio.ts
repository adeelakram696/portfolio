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
  title: "Hi all, I am Adeel",
  description:
    "A Full Stack Engineer with 12+ years of experience building scalable web applications across fintech, healthtech, AI, logistics, and aviation. I work with JavaScript, TypeScript, React, Node.js, and cloud services. Currently working as a Staff Engineer at Beam.AI on AI agent workflows and integrations.",
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
  subTitle: "STAFF FULL STACK ENGINEER WITH 12+ YEARS EXPERIENCE",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive SPA Applications in React and Next.js"),
        emoji("⚡ Building RESTful APIs and GraphQL services in Node.js"),
        emoji("⚡ Building Scalable, Testable Web Applications on AWS"),
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
          skillName: "Nextjs",
          iconifyTag: "logos:nextjs-icon",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs-icon",
        },
        {
          skillName: "ExpressJS",
          iconifyTag: "skill-icons:expressjs-light",
        },
        {
          skillName: "Redux",
          iconifyTag: "logos:redux",
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
          skillName: "MySQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "MongoDB",
          iconifyTag: "logos:mongodb-icon",
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
    role: "Staff ML & Backend Engineer",
    company: "Beam.AI (REMOTE)",
    companyLogo: "/img/icons/common/beam.png",
    date: "Jan 2025 - Present",
    desc: "Building AI agent workflows and managing integrations (GitHub, Stripe, Salesforce). Built the automated testing framework from scratch taking coverage from 0% to 67%. Automated the integration development process reducing it from 5 days to 1 day. Working on an autotuner module for self-optimizing AI agent workflows.",
  },
  {
    role: "Senior Technical Lead",
    company: "Z2C Limited, Karachi",
    companyLogo: "/img/icons/common/z2c.png",
    date: "Jan 2025 - Mar 2025",
    desc: "Analyzed product infrastructure and optimized costs. Reduced database storage from 900GB to 300GB through data analysis. Eliminated abandoned EC2 instances cutting unnecessary infrastructure costs. Conducted workflow and architectural audits to resolve inefficiencies.",
  },
  {
    role: "Senior Fullstack Engineer",
    company: "Founder and Lightning Ltd UK (REMOTE)",
    companyLogo: "/img/icons/common/f+l.jpeg",
    date: "Jul 2021 - Dec 2024",
    desc: "Built and maintained multiple products as a full stack developer working remotely with a London-based team. Worked across React, Node.js, TypeScript, GraphQL, and AWS. Delivered end-to-end features from frontend to backend with unit testing across projects including Tradeaze, ClientShare, and OverJet.",
  },
  {
    role: "Principal Software Engineer",
    company: "VentureDive Pvt Ltd.",
    companyLogo: "/img/icons/common/vd.jpg",
    date: "Apr 2016 - Aug 2021",
    desc: "Grew from Software Engineer to Principal over 5 years. Led and delivered multiple products using React, Node.js, and Express.js. Mentored a team of junior developers on coding practices and quality standards. Built products from scratch including TeleHealth (COVID response) and SIRC (loan collection system) using serverless architecture.",
  },
  {
    role: "Software Engineer",
    company: "GoodCore Software Inc.",
    companyLogo: "/img/icons/common/gcs.jpeg",
    date: "Aug 2013 - Apr 2016",
    desc: "Started my career as a web developer, managing multiple products across different technologies including PHP, JavaScript, and ASP.NET. Worked onsite in Malaysia for TNB (Tenaga Nasional Berhad). Built a strong foundation in full-stack development working with international clients from UK, Europe, and Malaysia.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Beam.AI — AI Agent Platform",
    desc: `AI agent platform to automate industry-level workflows. Managing integrations and Agent OS improvement. Built autotuner module and automated testing framework from 0 to 67% coverage.
    Tech: JavaScript, LangChain, VectorDB, PostgreSQL, NATS, Event Broker`,
    link: "https://beam.ai",
  },
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
    desc: `Full stack development from frontend to backend with unit testing. Developed new features that grew the business and client base, improved job assignment flow for riders.
    Tech: ReactJS, Node.js, ExpressJS, TypeScript, NX Monorepo, PostgreSQL, ChakraUI, Docker, Serverless`,
    link: "https://www.tradeaze.uk/#features",
  },
  {
    name: "Clientshare UK - for Supplier Client relationship",
    desc: `Increased performance by 60% after converting the application into SPA and responsive design from the old tech stack. Improved response time and maintained the product.
    Tech: ReactJS, Redux Toolkit, Laravel Mix, Webpack, SCSS, Styled Components`,
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
    desc: `Developed from scratch to deployment. Separate portals for admin and merchant with role-based access, user management, registrations, vehicle management and tracking, multi-language, RTL/LTR layout.
    Tech: React, Redux, Axios, ExpressJS, Serverless, Antd, PostgreSQL, Amplify, Lambda, Styled Components`,
    link: "https://sirc.sa/",
  },
  {
    name: "Switch N CO Admin — Health Platform",
    desc: `Created dashboard for members management and bookings management with UI revamp.
    Tech: React, Redux, Axios, Styled Components, SCSS`,
  },
  {
    name: "TeleHealth — Connect Doctors with Patients",
    desc: `Developed from scratch during COVID to connect patients with doctors remotely with privacy. Successfully used by the Government of Pakistan for that purpose.
    Tech: React, Redux, Axios, ExpressJS, Antd, PostgreSQL, SCSS, Encryption`,
  },
  {
    name: "Vistajet — Booking Revamp",
    desc: `Revamped the product with CMS integration and re-design. Booking application for their niche customers.
    Tech: React, Redux, Axios, Antd, CMS`,
    link: "https://www.vistajet.com/en/",
  },
  {
    name: "Vistajet — GlobalView Itinerary Module",
    desc: `Internal module to manage itinerary bookings. Developed from scratch with scalable, testable code having 90% test coverage.
    Tech: React, Redux, Axios, Antd, Jest, Mocha, Sinon`,
    link: "https://www.vistajet.com/en/",
  },
  {
    name: "Vistajet — Customer Booking",
    desc: `Itinerary booking application for customers. Developed as a team with 60% test coverage, improved performance and maintained quality linted code.
    Tech: React, Redux, Axios, Antd, Jest, Mocha, Sinon`,
    link: "https://www.vistajet.com/en/",
  },
  {
    name: "TNB Vibrant News — Malaysia",
    desc: `Developed hybrid app from scratch for Android and iOS using PhoneGap. On-site development in Malaysia, launched on time in 2015. Internal news application for Tenaga Nasional Berhad.
    Tech: PhoneGap, JavaScript`,
  },
  {
    name: "Inhouse Relocation — SIRVA",
    desc: `Formerly known as Inhouse Relocation, then acquired by SIRVA. Web application for vendors, users and admins to manage relocation processes.
    Tech: PHP, Yii, CSS, HTML, AWS EC2`,
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
  url: "https://adeelakram.com",
  keywords: [
    "Adeel",
    "Adeel Akram",
    "@adeelakram",
    "madeelakram",
    "Portfolio",
    "Adeel Portfolio",
    "Adeel Akram Portfolio",
    "Staff Software Engineer",
    "Full Stack Developer",
    "Full Stack Engineer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Web Developer",
  ],
};
