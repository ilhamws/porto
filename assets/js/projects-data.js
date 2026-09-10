const projectsData = [
  {
    id: "minifw-ai",
    title: "MiniFW-AI & RitAPI Security Engine",
    category: ["security", "devops", "ml"],
    badge: "PT. Sydeco Enterprise",
    featured: true,
    metric: "Layer 6 AI Behavioral Firewall",
    imageAccent: "from-emerald-500/20 via-cyan-500/10 to-transparent",
    summary: "AI-driven Layer 6 API security engine and behavioral firewall deployed on Linux gateway hardware to detect unknown network threats.",
    description: "Contributed to RitAPI, an AI-powered behavioral firewall deployed on Linux gateway hardware. Developed core Python detection modules (TLS Certificate analysis, ASN Trust scoring, and JSON Schema validation) and integrated Scikit-learn anomaly detection into the ARCHANGEL 2.0 MiniFW-AI ecosystem. Productionized detection scripts into Linux systemd daemons and built Debian (.deb) packaging pipelines for zero-downtime gateway deployment.",
    problem: "Traditional rule-based firewalls fail against zero-day API threats, automated credential abuse, and subtle TLS/ASN deviations that mimic normal client behavior.",
    solution: "Built a multi-tier behavioral pipeline combining hard rule gates, threat intelligence scoring, Scikit-learn anomaly detection, and YARA pattern matching directly on Linux gateway hardware.",
    architecture: [
      "Gateway Network Packet Ingestion via nftables & socket tap",
      "Layer 6 Protocol Parser (TLS Handshake, ASN verification, JSON Schema)",
      "Scikit-learn Anomaly Detection & Behavioral Deviation Scoring",
      "Hard Gate Verdicts (Pass / Quarantine / Block) with automated IP throttling",
      "Linux systemd daemon lifecycle management with Debian .deb updates"
    ],
    highlights: [
      "Engineered Python detection modules for TLS certificate validity, cipher integrity, and ASN trust scoring",
      "Integrated Scikit-learn ML anomaly detection with MLP and behavioral modeling into ARCHANGEL 2.0",
      "Containerized & productionized scripts into Linux systemd services for continuous zero-downtime execution",
      "Created Debian (.deb) packaging pipelines to streamline customer hardware gateway updates",
      "Overhauled MiniFW-AI web UI with sticky navigation, optimized responsive spacing, and cross-browser consistency"
    ],
    tags: ["Python", "Scikit-learn", "Linux / WSL", "systemd", "Debian .deb", "nftables", "YARA", "Security"],
    links: []
  },
  {
    id: "security-dashboard",
    title: "Real-Time Security Monitoring Dashboard",
    category: ["web", "security"],
    badge: "PT. Sydeco Internal",
    featured: true,
    metric: "Real-Time Threat Telemetry",
    imageAccent: "from-blue-500/20 via-indigo-500/10 to-transparent",
    summary: "Flask-powered telemetry dashboard visualizing real-time threat alerts, blocked IP feeds, and anomaly detection logs for security operations.",
    description: "Engineered an internal web-based operations dashboard for PT. Sydeco, directly integrating with the RitAPI detection backend. Designed dynamic views to visualize live security alerts, threat event logs, and automated blocked IP lists, giving SOC and operational teams immediate visibility into network traffic anomalies.",
    problem: "Operational staff needed an intuitive, real-time interface to inspect complex Layer 6 security alerts without parsing raw gateway logs via CLI.",
    solution: "Developed an asynchronous Flask web application with Chart.js telemetry, server-rendered views, live log streaming, and intuitive severity color-coding.",
    architecture: [
      "RitAPI Security Backend log sink & event streaming",
      "Flask REST controller and Jinja2 templating layer",
      "Chart.js dynamic visualizers for threat frequency and ASN distribution",
      "Interactive IP search, blacklist management, and quick filtering"
    ],
    highlights: [
      "Built low-latency Flask endpoints consuming live telemetry from RitAPI detection daemons",
      "Designed dynamic Chart.js dashboards displaying threat categorization and real-time traffic spikes",
      "Crafted an intuitive UI focused on fast decision-making for non-technical operations personnel",
      "Accelerated incident response times by over 60% through actionable alert visualizers"
    ],
    tags: ["Python", "Flask", "Chart.js", "Jinja2", "JavaScript", "HTML5/CSS3", "Bootstrap"],
    links: []
  },
  {
    id: "sibi-gesture",
    title: "Real-Time SIBI Sign Language Recognition",
    category: ["ml"],
    badge: "Undergraduate Thesis (GPA 3.71)",
    featured: true,
    metric: "Deep Learning + Computer Vision",
    imageAccent: "from-purple-500/20 via-pink-500/10 to-transparent",
    summary: "Real-time Indonesian Sign Language (SIBI) letter classification using Convolutional Neural Networks and MediaPipe hand landmark tracking.",
    description: "Developed a deep learning computer vision pipeline for real-time Indonesian Sign Language (SIBI) alphabet recognition. Combined MediaPipe Hands for spatial landmark extraction with a custom Convolutional Neural Network (CNN) trained on 64x64 normalized grayscale gesture inputs with controlled data augmentation.",
    problem: "Communication barriers for the deaf and speech-impaired community in Indonesia, compounded by the complexity and variance of dynamic hand gestures in varying lighting conditions.",
    solution: "Constructed an end-to-end vision pipeline using OpenCV for real-time webcam frame acquisition, MediaPipe Hands for region-of-interest isolation, and a CNN model with confidence threshold filtering.",
    architecture: [
      "Webcam Video Stream Frame Capture via OpenCV",
      "Hand Landmark Detection & ROI Extraction via MediaPipe Hands",
      "Grayscale conversion, 64x64 normalization, and controlled augmentation",
      "CNN Feature Extraction & Multi-class Softmax Classification",
      "Real-time confidence scoring & HUD visualizer overlay"
    ],
    highlights: [
      "Built custom CNN architecture optimized for low-latency live webcam inference",
      "Implemented controlled data augmentation (rotation, zoom, brightness) to overcome diverse background lighting",
      "Integrated MediaPipe Hands with OpenCV for reliable hand tracking and spatial normalization",
      "Achieved high classification accuracy with minimal false positives using confidence filtering"
    ],
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "MediaPipe Hands", "NumPy", "Scikit-Learn"],
    links: []
  },
  {
    id: "retinascan",
    title: "RetinaScan: Diabetic Retinopathy Detection",
    category: ["web", "ml"],
    badge: "DBS Foundation Capstone",
    featured: true,
    metric: "Full-Stack ML & 3D Web",
    imageAccent: "from-amber-500/20 via-orange-500/10 to-transparent",
    summary: "Web-based clinical platform integrating machine learning for early detection of diabetic retinopathy with interactive Three.js 3D eyeball visualization.",
    description: "Capstone project developed during the DBS Foundation Coding Camp powered by Dicoding. Designed and built an end-to-end full-stack medical diagnosis web platform that accepts patient fundus retinal scans, runs machine learning inference to detect early stages of diabetic retinopathy, and presents interactive 3D visualizations using Three.js.",
    problem: "Diabetic retinopathy is a leading cause of blindness that can be prevented if diagnosed early, yet manual fundus photography inspection requires scarce specialist availability.",
    solution: "Provided an accessible web platform enabling clinics to upload fundus images, receive automated severity classifications, explore interactive 3D anatomical models, and track longitudinal patient records.",
    architecture: [
      "React.js single-page application with responsive medical dashboard UI",
      "Three.js 3D canvas rendering interactive anatomical eye models",
      "Node.js & Express.js REST API handling image uploads and secure auth",
      "Machine learning inference pipeline assessing diabetic retinopathy severity",
      "MongoDB database storing patient histories, diagnoses, and clinic telemetry"
    ],
    highlights: [
      "Architected complete full-stack architecture using React.js, Express.js, and MongoDB",
      "Embedded interactive 3D eyeball visualization using Three.js for patient education and diagnostics",
      "Engineered secure multi-role dashboard for doctors and administrative medical staff",
      "Recognized as standout capstone project in the DBS Foundation Coding Camp"
    ],
    tags: ["React.js", "Three.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Machine Learning"],
    links: []
  },
  {
    id: "cra-legal",
    title: "Contract Risk Analyzer (CRA) - Legal Dataset Engineering",
    category: ["ml", "security"],
    badge: "PT. Sydeco Internal",
    featured: false,
    metric: "Trilingual Legal NLP Dataset",
    imageAccent: "from-rose-500/20 via-pink-500/10 to-transparent",
    summary: "Trilingual (English, Indonesian, French) legal contract dataset engineering and normalization powering an automated hazardous clause risk scorer.",
    description: "Built and normalized high-integrity trilingual legal corpora for PT. Sydeco's Contract Risk Analyzer (CRA). Designed categorized clause schemas (abusive, illegal, ambiguous, indemnification liabilities) and constructed clean CSV repositories used to train and validate automated risk scoring algorithms.",
    problem: "Enterprise legal contracts contain multi-jurisdictional ambiguities and hazardous liability clauses in multiple languages that require hours of human legal audit.",
    solution: "Engineered a structured, normalized trilingual legal dataset spanning Indonesian, English, and French commercial contracts, eliminating noise and standardizing clause risk taxonomies.",
    architecture: [
      "Raw legal contract extraction across EN, ID, and FR corporate agreements",
      "Text normalization, duplicate deduplication, and clause segmentation using Pandas",
      "Taxonomy classification into dangerous, abusive, and non-standard risk categories",
      "Dataset validation and benchmark integration into the CRA MVP ML pipeline"
    ],
    highlights: [
      "Designed standardized clause classification schema across 3 languages (EN, ID, FR)",
      "Applied automated deduplication and regex-based normalization via Python and Pandas",
      "Delivered a zero-duplicate dataset directly integrated into the CRA MVP risk scoring engine",
      "Ensured cross-border compliance compatibility for enterprise contract audits"
    ],
    tags: ["Python", "Pandas", "NLP", "Data Engineering", "LegalTech", "Regex"],
    links: []
  },
  {
    id: "sydeco-web",
    title: "PT. Sydeco Corporate Web Platform",
    category: ["web"],
    badge: "PT. Sydeco Maintenance",
    featured: false,
    metric: "Production Web Engineering",
    imageAccent: "from-teal-500/20 via-emerald-500/10 to-transparent",
    summary: "Ongoing maintenance, optimization, and feature development for PT. Sydeco's official corporate digital presence and cybersecurity showcase.",
    description: "Maintained and continuously improved the official web platform for PT. Sydeco. Implemented modern UI updates, optimized asset delivery for faster global load times, refined cross-device responsiveness, and integrated interactive cybersecurity product portfolios (including RitAPI and MiniFW-AI).",
    problem: "Corporate cybersecurity websites require high reliability, seamless responsive design, and compelling visual showcases of complex enterprise software.",
    solution: "Performed iterative code refactoring, image compression, modular CSS styling, and structured product pages highlighting Sydeco's security innovations.",
    architecture: [
      "Modular web layout structure with responsive CSS grid and flexbox",
      "Cross-browser testing across mobile, tablet, and high-DPI desktop viewports",
      "Version control and deployment workflows via Git"
    ],
    highlights: [
      "Maintained corporate web stability, security headers, and responsive layouts",
      "Revamped product showcase sections for MiniFW-AI and enterprise security offerings",
      "Optimized asset loading speeds and eliminated layout shift bugs"
    ],
    tags: ["JavaScript", "HTML5", "CSS3", "Responsive Design", "Git", "Web Performance"],
    links: []
  },
  {
    id: "enggal-jaya",
    title: "PT. Enggal Jaya Corporate Profile & Tracking",
    category: ["web"],
    badge: "Internship Project",
    featured: false,
    metric: "Real-Time Firebase Analytics",
    imageAccent: "from-blue-500/20 via-sky-500/10 to-transparent",
    summary: "Responsive company profile featuring real-time visitor analytics powered by Firebase Realtime Database and interactive Google Maps API integration.",
    description: "Designed and implemented a responsive multi-page corporate website for PT. Enggal Jaya. Built clean navigation across Home, Services, About, and Contact pages, integrated Firebase Realtime Database for live visitor analytics tracking, and embedded Google Maps API for interactive company branch navigation.",
    problem: "The client lacked a modern digital identity and had no visibility into client visit counts or geographic interest.",
    solution: "Developed an interactive Bootstrap/JavaScript platform with dynamic sliders, real-time Firebase tracking, and embedded Google Maps geolocation.",
    architecture: [
      "Client-side Bootstrap responsive UI framework",
      "Firebase Realtime Database visitor event tracker",
      "Google Maps JavaScript API interactive location pin"
    ],
    highlights: [
      "Engineered real-time visitor counter powered by Firebase Realtime Database",
      "Embedded interactive Google Maps API with customized map markers",
      "Created dynamic UI components including touch-friendly hero sliders and service showcases"
    ],
    tags: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "Firebase", "Google Maps API"],
    links: []
  },
  {
    id: "story-app",
    title: "Story App: Geo-Tagged Social Feed",
    category: ["web"],
    badge: "Dicoding Intermediate",
    featured: false,
    metric: "Leaflet Maps & Camera API",
    imageAccent: "from-indigo-500/20 via-violet-500/10 to-transparent",
    summary: "Progressive social storytelling web application featuring native camera capture, Leaflet map location pins, and token authentication.",
    description: "Built as an intermediate web application capstone for Dicoding Indonesia. Allows users to create stories with photos taken directly from their device camera, automatically capture GPS coordinates, visualize post origins on Leaflet interactive maps, and browse paginated feeds with infinite scroll.",
    problem: "Building a fluid mobile-first social experience using vanilla JavaScript standards without relying on bulky frontend frameworks.",
    solution: "Utilized modern ES6 modules, custom Web Components, HTML5 MediaDevices API for camera access, and Leaflet.js for interactive geo-mapping.",
    architecture: [
      "Vanilla ES6 modular application structure",
      "HTML5 Camera Stream API (getUserMedia) integration",
      "Leaflet.js interactive OpenStreetMap tile renderer",
      "Bearer token authentication against Dicoding Story REST API"
    ],
    highlights: [
      "Integrated native device camera capture and custom canvas compression",
      "Implemented interactive geospatial map pins showing where stories were published",
      "Strict client-side token validation and secure session persistence"
    ],
    tags: ["JavaScript (ES6)", "Leaflet.js", "Web Components", "REST API", "HTML5 Camera API"],
    links: []
  }
];

if (typeof window !== 'undefined') {
  window.projectsData = projectsData;
}
if (typeof module !== 'undefined') {
  module.exports = projectsData;
}
