// All site content lives here. Edit this file — never the components.

// Gamified hiking timeline, newest first. Dates are best-guess — edit freely.
// xp drives the total + hiker level in the Journeys section.
// All 27 downloaded photos remain in assets-archive/ (not shipped).
export const trails = [
  {
    date: "2026",
    spot: "Austrian Alps",
    country: "Austria",
    flag: "🇦🇹",
    xp: 850,
  },
  {
    date: "2025",
    spot: "Tungnath ridge · 12,000 ft",
    country: "India",
    flag: "🇮🇳",
    xp: 1000,
    badge: "altitude junkie",
  },
  {
    date: "2025",
    spot: "Chandrashila Peak · 12,083 ft",
    country: "India",
    flag: "🇮🇳",
    xp: 1200,
    badge: "summit unlocked",
  },
  {
    date: "2025",
    spot: "Mørkgonga, Oslo",
    country: "Norway",
    flag: "🇳🇴",
    xp: 700,
  },
  {
    date: "2025",
    spot: "Mullerthal Trail",
    country: "Luxembourg",
    flag: "🇱🇺",
    xp: 450,
  },
];

export const identity = {
  name: "Ankit Gupta",
  prompt: "$ whoami",
  taglines: ["backend engineer.", "mountain person."],
  chips: ["python", "llms", "ai-agents", "fastapi", "amsterdam", "12000 ft"],
  nav: [
    { label: "about", href: "#about" },
    { label: "trails", href: "#journeys" },
    { label: "work", href: "#projects" },
    { label: "log", href: "#experience" },
    { label: "contact", href: "#contact" },
  ],
};

export const about = {
  story:
    "I build AI-powered backend systems at Clear.bio in Amsterdam — production data pipelines, LLM extraction running fully on-premise behind strict firewalls, and cross-border integrations that move sensitive records without ever leaking a byte. Python is my first language; regulated, can't-fail environments are my comfort zone. When I'm not shipping, I'm outside: hiking Himalayan and European trails, chasing festivals across Spain, or biking somewhere flat because the Netherlands offers nothing taller.",
  stats: [
    { flag: "--countries", value: "15+ visited" },
    { flag: "--highest-trek", value: "12,000 ft · Chandrashila" },
    { flag: "--hackathons", value: "3× winner" },
    { flag: "--dutch", value: "A2 and climbing" },
  ],
};

export const journeys = {
  instagram: "https://www.instagram.com/ankit.codes/",
  handle: "@ankit.codes",
};

export const projects = [
  {
    name: "careerboat",
    desc: "Job-data platform: multi-board scraping pipeline (LinkedIn, Indeed, Internshala), LLM enrichment with company-profile caching, and salary/location ETL feeding a production MySQL store.",
    stack: ["python", "mysql", "openai", "aws"],
    link: null,
  },
  {
    name: "llm-extraction-pipeline",
    desc: "Fully on-premise LLM text-extraction pipeline at Clear.bio — llama3.1 and meditron via Ollama on private infrastructure. Zero sensitive data leaves the network. CE-marked, GDPR-compliant product.",
    stack: ["python", "ollama", "fastapi", "docker"],
    link: null,
  },
];

export const experience = [
  {
    hash: "a3f9c21",
    role: "backend-engineer",
    org: "clear.bio",
    place: "Amsterdam",
    period: "2022 — now",
    points: [
      "Own production backend services end-to-end: data pipelines, NLP/LLM extraction, partner API integrations.",
      "Cross-border partner integrations (PharmAccess, CarePay) in a heavily regulated environment.",
    ],
  },
  {
    hash: "7d21e04",
    role: "python-developer",
    org: "appventurez",
    place: "Noida",
    period: "2022",
    points: [
      "Backend services, automated data workflows, and REST APIs; deployment practices adopted team-wide.",
    ],
  },
  {
    hash: "5b8aa93",
    role: "fullstack-intern",
    org: "yokoso",
    place: "Gurgaon",
    period: "2021",
    points: [
      "Financial system automations — Python backend logic with a React front-end.",
    ],
  },
  {
    hash: "1c0de42",
    role: "python-intern",
    org: "the-hobnob",
    place: "Delhi",
    period: "2020",
    points: ["Admin panel and content management frontend."],
  },
];

export const contact = [
  { service: "email", label: "devankitgupta01@gmail.com", href: "mailto:devankitgupta01@gmail.com" },
  { service: "linkedin", label: "in/ankit-gupta", href: "https://www.linkedin.com/in/ankit-gupta4b4848196" },
  { service: "github", label: "github.com/ankitgupta", href: "https://github.com/devankitgupta01" },
  { service: "instagram", label: "@ankit.codes", href: "https://www.instagram.com/ankit.codes/" },
];
