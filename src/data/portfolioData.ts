export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "all" | "ai" | "fullstack" | "security";
  categoryLabel: string;
  summary: string;
  methodology: string;
  results: string;
  tags: string[];
  featured: boolean;
  github: string | null;
  live: string | null;
  stats?: string;
}

export interface ExperienceItem {
  number: number;
  period: string;
  role: string;
  company: string;
  division: string;
  highlights: string[];
  skills: string[];
}

export interface SimulatorScenario {
  id: string;
  name: string;
  endpoint: string;
  ip: string;
  asn: string;
  tls: string;
  payload: string;
  mlScore: number;
  verdict: "PASS" | "DROP & BAN" | "QUARANTINE" | "RATE LIMIT & DROP";
  verdictType: "safe" | "danger" | "warning";
  logs: { step: string; text: string }[];
}

export const PERSONAL_INFO = {
  name: "Ilham Wahyu Saputro",
  shortName: "Ilham Wahyu S.",
  role: "Full Stack Developer",
  tagline: "Bridging Deep Learning Models with Resilient Web Architecture & Linux Services",
  location: "Semarang, Central Java, Indonesia",
  email: "Ilhamwahyu0987@gmail.com",
  phone: "+6287860152435",
  phoneFormatted: "+62 878-6015-2435",
  whatsappUrl: "https://wa.me/6287860152435",
  linkedinUrl: "https://linkedin.com/in/ilham-wahyu-saputro",
  githubUrl: "https://github.com/ilhamws",
  profileImg: "/pose.png",
  status: "Available for Full-time, Projects, & Remote",
};

export const PROJECTS: Project[] = [
  {
    id: "retinascan",
    title: "RetinaScan – Clinical Retinopathy Diagnostic Platform",
    subtitle: "DBS Foundation x Accenture • Capstone Project",
    category: "ai",
    categoryLabel: "AI & Full Stack",
    summary: "A web-based clinical screening platform that analyzes fundus eye images using machine learning to detect and classify diabetic retinopathy severity stages, integrated with interactive Three.js 3D retinal visualization.",
    methodology: "Integrated a deep learning CNN diagnostic model into an Express.js & Node.js backend. Rendered interactive 3D anatomical eye structures using Three.js to provide intuitive diagnostic visualization for clinicians and patients.",
    results: "Built an end-to-end diagnosis pipeline with real-time inference, seamless patient report generation, and an intuitive UI with Tailwind CSS.",
    tags: ["React.js", "Node.js", "Express.js", "Three.js", "MongoDB", "Tailwind CSS", "Machine Learning"],
    featured: true,
    github: "https://github.com/ilhamws",
    live: "https://ilhamws.github.io/portfolio/",
    stats: "3D Visualization + AI Inference"
  },
  {
    id: "ritapi-minifw",
    title: "RitAPI & ARCHANGEL 2.0 MiniFW-AI",
    subtitle: "PT. Sydeco • Production Security Ecosystem",
    category: "security",
    categoryLabel: "Security & Systems",
    summary: "Production maintenance and core module engineering for an AI-driven Layer 6 API security firewall, featuring automated threat detection and robust Linux server deployment.",
    methodology: "Built modular Python detection engines (TLS certificate validation, ASN trust scoring, JSON schema verification) integrated with Scikit-learn anomaly detection. Productionized scripts into Linux systemd daemons and .deb debian packaging pipelines.",
    results: "Ensured 99.9% uptime across WSL/Linux environments, prevented malicious API payloads, and overhauled the frontend UI with sticky navigation and responsive layouts.",
    tags: ["Python", "Scikit-Learn", "systemd", "Debian Packaging", "Linux / WSL", "Bootstrap 5", "JavaScript"],
    featured: true,
    github: null,
    live: null,
    stats: "99.9% Uptime • Debian (.deb)"
  },
  {
    id: "sibi-sign-language",
    title: "SIBI Sign Language Recognition (CNN & OpenCV)",
    subtitle: "Undergraduate Thesis • Computer Vision",
    category: "ai",
    categoryLabel: "AI & Computer Vision",
    summary: "Real-time Indonesian Sign Language (SIBI) letter classification using a custom Convolutional Neural Network (CNN) with live webcam stream processing.",
    methodology: "Developed a CNN architecture trained on 64x64 grayscale hand gesture images with controlled data augmentation, resizing, and normalization. Interfaced live webcam video feeds via OpenCV with confidence threshold filtering.",
    results: "Achieved high-accuracy real-time alphabet recognition with zero noticeable latency, providing an accessible assistive communication tool.",
    tags: ["Python", "TensorFlow / Keras", "OpenCV", "NumPy", "Scikit-Learn", "CNN"],
    featured: true,
    github: "https://github.com/ilhamws",
    live: null,
    stats: "Real-time CNN Video Feed"
  },
  {
    id: "security-dashboard",
    title: "Real-Time Threat Monitoring Dashboard",
    subtitle: "PT. Sydeco • Internal Operations",
    category: "fullstack",
    categoryLabel: "Full Stack & Monitoring",
    summary: "A high-performance Flask web dashboard delivering live telemetry, firewall alerts, incoming threat metrics, and blocked IP tables for security operations.",
    methodology: "Engineered a lightweight Flask application connected to RitAPI's detection logs. Implemented dynamic visualizations with Chart.js and structured tables optimized for fast decision-making by operational staff.",
    results: "Significantly reduced security incident response time by providing centralized visual intelligence without overhead.",
    tags: ["Python", "Flask", "Jinja2", "Chart.js", "JavaScript", "HTML5/CSS3"],
    featured: true,
    github: "https://github.com/ilhamws",
    live: null,
    stats: "Real-time Telemetry & Charts"
  },
  {
    id: "contract-risk-analyzer",
    title: "Contract Risk Analyzer – Multilingual Dataset",
    subtitle: "PT. Sydeco • Legal AI Pipeline",
    category: "ai",
    categoryLabel: "Data Engineering & AI",
    summary: "Data architecture and normalization of a trilingual (English, Indonesian, French) legal dataset engineered to train automated risk scoring models for contractual clauses.",
    methodology: "Curated and classified contract clauses into hazardous categories (abusive, non-compliant, dangerous clauses). Cleaned and structured relational CSV repositories for model ingestion.",
    results: "Delivered a zero-duplicate, standardized legal dataset powering the Contract Risk Analyzer MVP for cross-jurisdictional compliance evaluation.",
    tags: ["Python", "Pandas", "Data Engineering", "CSV/Excel", "Legal AI"],
    featured: false,
    github: null,
    live: null,
    stats: "Trilingual (EN, ID, FR)"
  },
  {
    id: "enggal-jaya-profile",
    title: "PT. Enggal Jaya Corporate Web Platform",
    subtitle: "Internship Project • Company Profile",
    category: "fullstack",
    categoryLabel: "Web Development",
    summary: "A sleek, responsive corporate website featuring interactive service showcases, Google Maps API location visualization, and real-time visitor tracking.",
    methodology: "Engineered responsive multi-page architecture using modern semantic HTML, CSS3, Bootstrap, and JavaScript. Integrated Firebase Realtime Database for live counter analytics.",
    results: "Delivered an engaging brand presence with smooth image sliders, interactive touchpoints, and instant visitor statistics.",
    tags: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "Firebase", "Google Maps API"],
    featured: false,
    github: "https://github.com/ilhamws",
    live: null,
    stats: "Firebase Realtime DB"
  }
];

export const SIMULATOR_SCENARIOS: Record<string, SimulatorScenario> = {
  legitimate: {
    id: "legitimate",
    name: "Legitimate API Call",
    endpoint: "POST /v1/auth/token",
    ip: "103.24.12.89",
    asn: "AS7713 (Telkom Indonesia, Trust: 0.98)",
    tls: "TLS 1.3 (ECDHE-ECDSA-AES256-GCM-SHA384, Let's Encrypt Valid)",
    payload: '{"client_id": "app_mobile_v2", "grant_type": "refresh_token"}',
    mlScore: 0.04,
    verdict: "PASS",
    verdictType: "safe",
    logs: [
      { step: "INGEST", text: "nftables tap captured frame on eth0:443 (len=842b)" },
      { step: "TLS", text: "Verified TLS 1.3 handshake. Cipher suite is secure." },
      { step: "ASN", text: "ASN AS7713 resolved. Reputation score: 0.98 / 1.0 (Trusted)" },
      { step: "SCHEMA", text: "JSON payload matches strict schema definition." },
      { step: "ML_ANOMALY", text: "Scikit-learn IsolationForest score: 0.04 (threshold: 0.55)" },
      { step: "VERDICT", text: "[PASS] Clean traffic allowed. Latency impact: 1.4ms" }
    ]
  },
  tls_anomaly: {
    id: "tls_anomaly",
    name: "TLS Certificate Anomaly",
    endpoint: "POST /v1/api/telemetry",
    ip: "185.220.101.42",
    asn: "AS60729 (Zwiebelfreunde Tor Exit, Trust: 0.12)",
    tls: "TLS 1.0 (Weak Cipher: RC4-MD5, Self-Signed CN: unknown-ca)",
    payload: '{"metric_dump": "malicious_chunk_stream"}',
    mlScore: 0.89,
    verdict: "DROP & BAN",
    verdictType: "danger",
    logs: [
      { step: "INGEST", text: "nftables tap captured frame on eth0:443 (len=1420b)" },
      { step: "TLS", text: "WARNING: Deprecated TLS 1.0 handshake detected! Invalid self-signed cert." },
      { step: "ASN", text: "FLAG: High-risk ASN identified. Known malicious threat actor list." },
      { step: "SCHEMA", text: "Key 'metric_dump' exceeds buffer limit size." },
      { step: "ML_ANOMALY", text: "Scikit-learn MLP inference flagged behavioral anomaly: 0.89" },
      { step: "VERDICT", text: "[DROP & BAN] nftables blacklist rule injected for IP 185.220.101.42" }
    ]
  },
  json_injection: {
    id: "json_injection",
    name: "JSON Schema SQLi Injection",
    endpoint: "POST /v1/orders/checkout",
    ip: "45.154.255.10",
    asn: "AS44477 (Hosting Provider, Trust: 0.41)",
    tls: "TLS 1.3 (Valid Cert, Non-standard user-agent: python-requests/2.28)",
    payload: '{"order_id": 9912, "coupon": "PROMO\'; DROP TABLE orders;--"}',
    mlScore: 0.76,
    verdict: "QUARANTINE",
    verdictType: "warning",
    logs: [
      { step: "INGEST", text: "Frame ingested via MiniFW-AI L6 proxy socket tap" },
      { step: "TLS", text: "TLS 1.3 negotiated successfully." },
      { step: "ASN", text: "Cloud host ASN with medium trust score: 0.41" },
      { step: "SCHEMA", text: "SCHEMA VIOLATION: Regex failure on field 'coupon' (SQLi pattern detected)" },
      { step: "ML_ANOMALY", text: "Behavioral model scored request at 0.76 deviance." },
      { step: "VERDICT", text: "[QUARANTINE] Request diverted to Honeypot Sink. Alert dispatched to Flask SOC." }
    ]
  },
  asn_deviance: {
    id: "asn_deviance",
    name: "High-Risk ASN Credential Stuffing",
    endpoint: "POST /v1/auth/login",
    ip: "194.26.29.112",
    asn: "AS200019 (Bulletproof Hosting, Trust: 0.08)",
    tls: "TLS 1.2 (Automated bot TLS fingerprint mismatch)",
    payload: '{"user": "admin", "pwd": "password123"}',
    mlScore: 0.94,
    verdict: "RATE LIMIT & DROP",
    verdictType: "danger",
    logs: [
      { step: "INGEST", text: "128 packets/sec burst rate on /v1/auth/login from AS200019" },
      { step: "TLS", text: "JA3 Fingerprint corresponds to known credential brute-forcing tool." },
      { step: "ASN", text: "ALERT: AS200019 blacklisted on global threat intelligence feeds." },
      { step: "SCHEMA", text: "Syntax valid, but request frequency violates sliding rate window." },
      { step: "ML_ANOMALY", text: "Scikit-learn model confidence: 0.94 anomaly probability." },
      { step: "VERDICT", text: "[DROP] Automated IP ban enforced. Logged to RitAPI Sentinel database." }
    ]
  }
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    number: 1,
    period: "Apr 2026 – Present",
    role: "Full Stack Engineer",
    company: "PT. Sydeco",
    division: "AI-Driven Cybersecurity & Enterprise Platforms",
    highlights: [
      "Engineered Python detection modules for RitAPI (Layer 6 AI security firewall): TLS certificate validation, ASN trust scoring, JSON schema verification, and Scikit-learn anomaly scoring.",
      "Productionized background processes into resilient Linux systemd services, orchestrated Debian (.deb) packaging pipelines, and managed cross-platform deployments (WSL/Linux).",
      "Built real-time Flask monitoring dashboard (firewall alerts, telemetry, blocked IP tables); overhauled MiniFW-AI frontend with modern responsive layouts.",
      "Engineered and normalized a trilingual (EN, ID, FR) dataset for Contract Risk Analyzer to power automated legal risk scoring."
    ],
    skills: ["Python", "Flask", "Scikit-Learn", "systemd", ".deb Packaging", "Linux / WSL", "Bootstrap 5", "REST APIs"]
  },
  {
    number: 2,
    period: "Feb – Jul 2025",
    role: "Full Stack Developer Scholar",
    company: "DBS Foundation x Dicoding",
    division: "Powered by Accenture Curriculum",
    highlights: [
      "Completed 9 intensive specialized Full Stack modules covering modern JavaScript, server architecture, asynchronous patterns, and full lifecycle implementation.",
      "Developed capstone project RetinaScan: a web-based clinical diabetic retinopathy screening application with machine learning diagnosis and Three.js 3D retinal visualization."
    ],
    skills: ["React.js", "Node.js", "Express.js", "Three.js", "MongoDB", "Tailwind CSS", "RESTful Architecture"]
  },
  {
    number: 3,
    period: "Internship",
    role: "Web Developer Intern",
    company: "PT. Enggal Jaya",
    division: "Corporate Web Platform",
    highlights: [
      "Designed and engineered a multi-page responsive corporate web application (Home, Service, About, Contact) prioritizing structured navigation and fast load times.",
      "Implemented real-time visitor tracking using Firebase Realtime Database and integrated Google Maps API for interactive company location visualization."
    ],
    skills: ["HTML5 / CSS3", "JavaScript", "Bootstrap", "Firebase", "Google Maps API"]
  },
  {
    number: 4,
    period: "2022 – 2026",
    role: "Organization & Leadership",
    company: "Universitas Stikubank & BriComp",
    division: "Student Association & Community",
    highlights: [
      "Active leadership in student association, coordinating campus technical events, workshops, and student programming hackathons.",
      "Managed digital presence, user engagement campaigns, and community communications at BriComp."
    ],
    skills: ["Leadership", "Community Management", "Event Coordination", "Technical Workshops"]
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: "Core / Advanced", detail: "Flask, ML, OpenCV, Pandas" },
      { name: "JavaScript / TypeScript", level: "Full Stack", detail: "ESNext, Node.js, React" },
      { name: "SQL", level: "Relational DB", detail: "PostgreSQL, MySQL, SQLite" },
      { name: "HTML5 & CSS3", level: "Semantic / Modern", detail: "Tailwind, Responsive, Animations" },
    ]
  },
  {
    category: "Frameworks & Frontend",
    skills: [
      { name: "React 19 & Next.js", level: "Advanced", detail: "Hooks, Router, Vite, Tailwind v4" },
      { name: "Motion & Aceternity UI", level: "Production", detail: "Framer Motion, 3D, Micro-interactions" },
      { name: "Node.js & Express.js", level: "Backend Services", detail: "REST APIs, Auth, Middleware" },
      { name: "Three.js", level: "3D Graphics", detail: "Interactive anatomical models" }
    ]
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "Computer Vision & CNN", level: "Deep Learning", detail: "TensorFlow, Keras, OpenCV" },
      { name: "Anomaly Detection", level: "Security ML", detail: "Scikit-Learn, Isolation Forest, MLP" },
      { name: "Data Engineering", level: "Pipelines", detail: "Pandas, NumPy, Dataset Normalization" },
      { name: "Model Deployment", level: "Inference", detail: "REST Model Serving, Socket Streams" }
    ]
  },
  {
    category: "Systems & Infrastructure",
    skills: [
      { name: "Linux / Debian / WSL", level: "Advanced", detail: "Shell scripting, Package management" },
      { name: "systemd & Daemons", level: "Production", detail: "Service lifecycle, Auto-restart, Uptime" },
      { name: ".deb Packaging", level: "Release Engineering", detail: "Debian binary packaging pipeline" },
      { name: "Git & MongoDB", level: "Version & Data", detail: "GitHub CI/CD, Document Stores" }
    ]
  }
];
