// All site content lives here. Edit this file — never the components.
import { photos as allPhotos } from "./photos.js";

// Curated Journeys grid: hiking only.
// Add/remove slugs here — every downloaded photo stays in photos.js.
const FEATURED = [
  "chandrashila-peak",
  "12000-ft",
  "oslo-norway",
  "mullerthal-hiking",
  "austria",
];

export const photos = FEATURED.map((slug) =>
  allPhotos.find((p) => p.src === `insta/${slug}.jpg`)
).filter(Boolean);

export const identity = {
  name: "Ankit Gupta",
  prompt: "$ whoami",
  taglines: ["backend engineer.", "mountain person."],
  chips: ["python", "llms", "fastapi", "health-ai", "amsterdam", "12000 ft"],
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
    "I build backend systems for health-AI at Clear.bio in Amsterdam — clinical data pipelines, medical LLM extraction running entirely inside hospital firewalls, and integrations that move patient records across borders without ever leaking a byte. Python is my first language; regulated, can't-fail environments are my comfort zone. When I'm not shipping, I'm outside: hiking Himalayan and European trails, chasing festivals across Spain, or biking somewhere flat because the Netherlands offers nothing taller.",
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
    name: "clinical-llm-pipeline",
    desc: "Fully on-premise medical text extraction at Clear.bio — llama3.1 and meditron via Ollama inside hospital infrastructure. Zero patient data leaves the clinical firewall. CE-marked, GDPR-compliant.",
    stack: ["python", "ollama", "fastapi", "docker"],
    link: null,
  },
  {
    name: "hireup",
    desc: "End-to-end recruitment SaaS — profile management, job listings, and application tracking. Full ownership from design through deployment.",
    stack: ["python", "react", "postgresql"],
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
      "Own patient-facing backend services end-to-end: clinical pipelines, medical NLP, EHR integrations.",
      "Kenya health-system integrations (PharmAccess, CarePay) across a cross-border regulated environment.",
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
