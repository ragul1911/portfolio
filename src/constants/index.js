import jarvis from "../assets/projects/jarvis.jpg";
import appointly from "../assets/projects/appointly.jpg";
import foodiehub from "../assets/projects/foodiehub.jpg";

export const HERO_CONTENT = `I'm a Computer Science Engineering student and aspiring full-stack developer who enjoys building practical applications, solving real-world problems, and learning new technologies. I enjoy working across frontend, backend, databases, and AI-powered applications.`;

export const ABOUT_TEXT = `I'm a Computer Science and Engineering student with a strong interest in full-stack development, backend engineering, and AI. I enjoy understanding how systems work behind the scenes and turning ideas into practical applications.

I have hands-on experience building web applications, REST APIs, database-driven systems, and AI-powered applications. I'm always curious about new technologies and enjoy learning by building real projects.

I believe in writing practical code, solving problems step by step, and continuously improving my skills.`;

export const EDUCATION = [
  {
    institution: "Dhanalakshmi Srinivasan University",
    location: "Trichy, Tamil Nadu",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "2023 – 2027",
    score: "CGPA: 7.42 / 10.0",
  },
];

export const EXPERIENCES = [
  {
    year: "July 2026 – August 2026",
    role: "Web Development Intern",
    company: "CodSoft",
    location: "Remote",
    description: `Developed a full-stack food delivery platform using React.js, Node.js, and MongoDB. Built RESTful APIs for authentication, order processing, and dynamic menu management. Optimized MongoDB schema design and indexing strategies for improved query performance. Ensured cross-browser compatibility and responsive mobile-first design.`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Jarvis – AI-Powered Virtual Assistant",
    image: jarvis,
    description:
      "Designed a modular AI assistant integrating multiple LLM APIs for conversational reasoning and multimodal input processing. Built backend orchestration, prompt structuring, API routing, response streaming, structured error handling, speech recognition, text-to-speech, PyQt5 desktop interface, Vision AI, and Selenium-based web automation.",
    technologies: ["Python", "FastAPI", "LLM APIs", "Vision AI", "PyQt5", "Selenium"],
    link: "https://github.com/ragul1911",
  },
  {
    title: "Appointly – Multi-Service Appointment Booking Platform",
    image: appointly,
    description:
      "Developed a web-based appointment booking platform featuring responsive React.js interfaces for service discovery and scheduling. Implemented Express.js REST APIs, MongoDB integration, interactive calendar, daily time-slot management, double-booking prevention, secure authentication, and role-based access control.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    link: "https://github.com/ragul1911",
  },
  {
    title: "FoodieHub – Food Delivery Web Application",
    image: foodiehub,
    description:
      "Created a dynamic food delivery platform featuring restaurant listings, interactive menu browsing, and responsive cart management. Designed customer order APIs, real-time database updates with MongoDB, JWT authentication, and a mobile-first responsive UI.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    link: "https://github.com/ragul1911",
  },
];

export const CERTIFICATIONS = [
  {
    title: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    category: "Full-Stack Development",
  },
  {
    title: "Front-End Web Development with React",
    issuer: "Coursera",
    category: "Frontend & UI",
  },
  {
    title: "Server-side Development with NodeJS, Express and MongoDB",
    issuer: "Coursera",
    category: "Backend & Database",
  },
  {
    title: "MongoDB Basics for Developers",
    issuer: "MongoDB University",
    category: "Database & Architecture",
  },
];

export const EXTRACURRICULARS = [
  {
    role: "Class Representative",
    organization: "Dhanalakshmi Srinivasan University",
    description: "Coordinated communication between faculty and a cohort of 60+ students.",
  },
  {
    role: "Member, AI & Data Science Club",
    organization: "Technical Club",
    description: "Participated in technical workshops and peer mentoring sessions.",
  },
  {
    role: "Event Organizer",
    organization: "Technical & Cultural Committee",
    description: "Organized and conducted university-level technical and cultural events.",
  },
];

export const SKILLS_DATA = {
  languages: ["Python", "JavaScript", "SQL (Basic)"],
  frontend: ["React.js", "PyQt5", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind CSS"],
  backend: ["FastAPI", "Node.js", "Express.js", "LLM APIs", "Vision AI", "RESTful APIs"],
  databaseAndTools: ["MongoDB", "MySQL", "Git", "GitHub", "Postman", "VS Code", "npm"],
};

export const CONTACT = {
  address: "Trichy, Tamil Nadu, India",
  email: "ragul1911rm@gmail.com",
  github: "https://github.com/ragul1911",
  linkedin: "https://linkedin.com/in/ragul-m-0a8ba2331",
};
