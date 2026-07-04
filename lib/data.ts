export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  "Core Stack": [
    "C#",
    "ASP.NET Core",
    "Ruby on Rails 8",
    "Angular",
    "Next.js",
    "Entity Framework",
  ],
  "AI & Data": [
    "RAG Pipelines",
    "Ollama",
    "Vector DB",
    "LLM APIs",
    "SignalR",
    "WebSockets",
  ],
  Frontend: [
    "Angular",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Stimulus.js",
    "Hotwire / Turbo",
    "Tailwind CSS",
    "HTML/CSS",
    "Electron.js",
  ],
  Backend: [
    "ASP.NET Core",
    "Ruby on Rails 8",
    "Spring Boot",
    "REST APIs",
    "MVC / ActiveRecord",
  ],
  Databases: [
    "PostgreSQL",
    "SQL Server",
    "MySQL",
  ],
  "DevOps & Tooling": [
    "Docker",
    "Docker Compose",
    "Git",
    "VPS",
    "Nginx",
    "Puma",
    "Agile / Scrum",
  ],
};

// Favourite tech stack — with icons (via simple-icons CDN)
export const favouriteTech = [
{
  name: "ASP.NET Core",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
},
  {
    name: "Ruby on Rails",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg",
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Ollama",
    icon: "https://ollama.com/public/ollama.png",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

export const projects = [
  {
    title: "yassinefragrance.com",
    description:
      "Luxury perfume decants platform — premium design, elegant catalogue, seamless checkout experience. Built with Rails backend + Next.js frontend for a fully modern, high-end shopping experience.",
    stack: ["Rails", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "VPS"],
    image: "/projects/yassinefragrance.png",
    github: null,
    live: "https://yassinefragrance.com",
    featured: true,
  },
  {
    title: "bissofragrance.com",
    description:
      "Production Rails 8 luxury perfume decants e-commerce — 400+ SKUs, cart, cash-on-delivery checkout, full admin back-office. 50,000+ visits/month, 200+ orders processed. Self-managed VPS deployment (Nginx + Puma), zero downtime since launch.",
    stack: ["Rails 8", "Devise", "Rack::Attack", "will_paginate", "PostgreSQL", "VPS"],
    image: "/projects/bissofragrance.png",
    github: null,
    live: "https://bissofragrance.com",
    featured: true,
  },
  {
    title: "kmarperfume.com",
    description:
      "Second production Rails e-commerce store — full admin dashboard with product, order & customer management, sales analytics. Live and maintained since Dec. 2025.",
    stack: ["Rails", "Devise", "Rack::Attack", "PostgreSQL", "Admin Dashboard", "VPS"],
    image: "/projects/kmarperfume.png",
    github: null,
    live: "https://kmarperfume.com",
    featured: true,
  },
  {
    title: "Smart Order",
    description:
      "QR-code restaurant ordering system — customer scans, browses menu, places order appearing in back-office in real time via WebSockets (<1s latency). Electron.js desktop build — fully offline, deployable on local network with no cloud dependency.",
    stack: ["Rails 8", "Devise", "acts_as_taggable", "WebSockets", "Stimulus.js", "Electron.js", "PostgreSQL"],
    image: "/projects/smartorder.png",
    github: "https://github.com/theazizltaief",
    live: null,
    featured: false,
  },
  {
    title: "FlowUp — HR SaaS Platform",
    description:
      "All-in-one HR SaaS delivered across 5 Scrum sprints at Aetos Technology: Micro-Learning module, Communication feed with real-time SignalR chat, HR management module + integrated RAG AI agent for automated document workflows (C# chunking, Ollama embeddings, vector DB).",
    stack: ["ASP.NET Core", "Angular", "Entity Framework", "SignalR", "RAG", "Ollama", "SQL Server"],
    image: "/projects/flowup.png",
    github: null,
    live: null,
    featured: false,
  },
];

export const experiences = [
  {
    role: "Freelance Fullstack Developer",
    company: "yassinefragrance.com",
    type: "Freelance · Live",
    period: "Current",
    description:
      "Architected and delivered a premium luxury perfume e-commerce platform combining Rails backend with a Next.js frontend. Focus on elegant UX, performant catalogue browsing, and seamless checkout flow. Self-managed VPS deployment and ongoing maintenance.",
    stack: ["Rails", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "VPS"],
  },
  {
    role: "Freelance Rails Developer",
    company: "kmarperfume.com",
    type: "Freelance · Live",
    period: "Dec 2025 — Present",
    description:
      "Built and deployed a production Rails e-commerce store with full admin dashboard: catalogue management, order lifecycle tracking, customer management, and sales analytics. Reused and refined architecture from bissofragrance.",
    stack: ["Rails", "PostgreSQL", "Devise", "Rack::Attack", "VPS"],
  },
  {
    role: "Freelance Rails Developer",
    company: "bissofragrance.com",
    type: "Freelance · Live",
    period: "Sep 2025 — Present",
    description:
      "Architected and delivered a production-grade Rails 8 e-commerce platform for luxury perfume decants. 400+ SKUs, 50,000+ monthly visits, 200+ orders. Implemented Devise, Rack::Attack, will_paginate, N+1 query elimination, eager loading, DB indexing. Self-managed VPS deployment (Nginx + Puma) — zero downtime.",
    stack: ["Rails 8", "PostgreSQL", "Devise", "Rack::Attack", "Nginx", "Puma", "VPS"],
  },
  {
    role: "Ruby on Rails Developer — Intern",
    company: "B-Solutions",
    type: "Internship",
    period: "Jul 2025",
    description:
      "Built a full-stack QR-code restaurant ordering system in Rails 8. Real-time back-office via WebSockets (<1s latency). Devise authentication, acts_as_taggable for menu categories, Stimulus.js for reactive UI. Packaged as Electron.js desktop app — fully offline.",
    stack: ["Rails 8", "WebSockets", "Electron.js", "Stimulus.js", "Devise", "PostgreSQL"],
  },
  {
    role: "Fullstack Intern — Digital Workplace Platform",
    company: "Aetos Technology",
    type: "PFE · Final Year Project",
    period: "Feb 2025 — May 2025",
    description:
      "Designed and delivered 3 modules of an all-in-one HR SaaS across 5 Scrum sprints: Micro-Learning, Communication (real-time feed, SignalR chat, groups), HR management. Built and shipped a complete RAG AI agent — C# document chunking, Ollama embeddings, vector DB.",
    stack: ["ASP.NET Core", "Angular", "SignalR", "Entity Framework", "SQL Server", "Ollama", "RAG"],
  },
];

export const education = [
  {
    degree: "Bachelor's in Software Engineering & Information Systems",
    school: "ISTIC — Borj Cédria, University of Carthage",
    period: "2022 — 2025",
    detail: "3rd year · Final project completed",
  },
  {
    degree: "Baccalaureate in Computer Science",
    school: "Lycée Technique de Radès",
    period: "2022",
    detail: "Graduated",
  },
];

export const socialLinks = {
  github: "https://github.com/theazizltaief",
  linkedin: "https://www.linkedin.com/in/aziz-ltaief-b93517197/",
  email: "aziz.ltaief6040@istic.ucar.tn",
  cv: "/cv.pdf",
};