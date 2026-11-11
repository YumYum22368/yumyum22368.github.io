// แก้ข้อมูลบนเว็บทั้งหมดที่ไฟล์นี้ไฟล์เดียว

export type Project = {
  name: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
};

export const profile = {
  name: "Methe Sriwongkorakod",
  role: "Full Stack Developer · DevOps",
  summary:
    "Full Stack Developer with 3 years of experience building web and mobile applications in TypeScript, React/Next.js and Node.js. Most recently I worked on TIFFA EzySuite, a customs declaration platform for import/export businesses, across the front end, back-end services and deployment.",
  email: "methe22368@gmail.com",
  github: "https://github.com/YumYum22368",
};

export const highlights = [
  { value: "3", label: "years of experience" },
  { value: "30+", label: "services deployed with Kubernetes & Jenkins" },
  { value: "FE · BE · DevOps", label: "end-to-end ownership" },
];

export const experience = [
  {
    company: "TTT Brother Co., Ltd.",
    role: "Senior Software Developer (Full Stack)",
    period: "Sep 2023 – Nov 2026",
    points: [
      "Developed features for TIFFA EzySuite, a customs declaration platform covering import/export declarations, commercial invoices, CIS/CIC templates and Auto Mail, built with Next.js 14, React, TypeScript and Ant Design.",
      "Built and maintained REST APIs in Node.js (Express) and Sequelize across services for declaration, validation, master data, CIS, manifest, RGP and Open API.",
      "Developed the validation service with Kafka and Redis, and the search service on Elasticsearch.",
      "Built internal and client systems: an ERP with Warehouse, HR, Talent Point, Ticket and Accounting modules, a web app with a React Native mobile app, and AI user and admin portals.",
      "Wrote Kubernetes manifests (Deployment, Service, Ingress) and Jenkins pipelines to build and deploy services to UAT and production, and ran other projects on Docker Compose.",
      "Wrote Python scripts for legacy data migration and Zoho data sync.",
      "Analyzed bug reports and change requests, traced issues from front end to back end, and wrote technical cards for the team.",
    ],
  },
];

export const skillIcons =
  "ts,js,py,react,nextjs,vite,tailwind,nodejs,express,sequelize,kafka,postgres,redis,elasticsearch,supabase,docker,kubernetes,jenkins,nginx,git,jest,figma";

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "SQL", "Python"] },
  {
    group: "Frontend",
    items: ["React", "Next.js", "React Native", "Vite", "Ant Design", "Tailwind CSS", "TanStack Query", "Zustand"],
  },
  { group: "Backend", items: ["Node.js (Express)", "REST API", "Sequelize ORM", "Kafka"] },
  {
    group: "Databases & Search",
    items: ["PostgreSQL", "Microsoft SQL Server", "Redis", "Elasticsearch", "Supabase"],
  },
  { group: "Testing", items: ["Jest"] },
  {
    group: "DevOps & Tools",
    items: ["Docker", "Docker Compose", "Kubernetes", "Jenkins CI/CD", "Nginx", "Git", "Figma"],
  },
];

// เพิ่ม project ส่วนตัวที่นี่ ถ้ายังว่างหน้าเว็บจะแสดง "Coming soon"
export const projects: Project[] = [];

export const education = {
  school: "Sripatum University",
  degree: "Information Technology",
  graduated: "June 2021",
  gpax: "3.70",
};
