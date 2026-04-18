export interface Project {
  id: number;
  title: string;
  type: string;
  description: string;
  features: string[];
  techStack: string[];
  deployment: string;
  stats?: {
    activeUsers?: string;
    newUsers?: string;
    totalViews?: string;
    engagementTime?: string;
    bounceRate?: string;
    events?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Student Placement Prediction System",
    type: "Full-Stack ML & AI Application",
    description:
      "Advanced placement prediction platform using ML and AI that predicts student placement probability with AI-powered analysis. Features resume ATS scoring, intelligent chatbot counselor, personalized recommendations, trend graphs, and role-based dashboards. Includes smart AI orchestration with automatic fallback between Gemini AI and Cloudflare Workers AI.",
    features: [
      "Dual prediction modes: Standard & Resume-Based with ML models",
      "AI-powered result analysis with Gemini AI and Cloudflare fallback",
      "Resume upload with ATS score calculation (0-100 scale)",
      "Section-wise scoring: Skills, Experience, Projects, Education",
      "Contextual AI chat interface for placement counseling",
      "Placement probability trend graphs with date/time tracking",
      "Downloadable PDF reports with AI insights and recommendations",
      "Role-based dashboards: Admin, Mentor, TPO, Student",
      "Firebase authentication with HTTP-only cookie security",
      "Video recommendations by score level (Beginner/Intermediate/Advanced)",
      "Keywords analysis: Found and missing high-value ATS keywords",
      "30-day actionable improvement suggestions",
      "Student progress tracking and mentor feedback system",
      "Bulk mock result uploads by TPO",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Firebase Authentication",
      "Google Gemini AI 2.5",
      "Cloudflare Workers AI",
      "Affinda Resume Parser",
      "Axios",
      "Multer",
    ],
    deployment: "https://student-placement-prediction-ten.vercel.app/",
    stats: {
      activeUsers: "187+",
      newUsers: "186",
      totalViews: "4.4k",
      engagementTime: "6m 5s",
      bounceRate: "22.5%",
      events: "6.7k",
    },
  },
  {
    id: 2,
    title: "EcoVision Bharat - Swachhta & LiFE Waste Management Platform",
    type: "Full-Stack Civic Tech Platform",
    description:
      "AI-powered waste management platform enabling citizens to report waste with photos and location, officers to verify and assign work, and sanitation workers to track cleanup progress. Features YOLO-based ML inference for waste severity estimation and gamified scoring system. Won Clean and Green Technology prize at GNA 4.0 Hackathon (GNA University, Phagwara, Punjab).",
    features: [
      "Citizen waste reporting with image upload and GPS geolocation",
      "AI-powered waste severity analysis using YOLOv8",
      "Officer verification and worker assignment workflow",
      "Real-time notifications and status tracking",
      "Sanitation worker mobile workflow with before/after proof",
      "Gamified scoring system with rankings and leaderboards",
      "Role-based access control (Citizen, Officer, Worker, Admin)",
      "Reverse geocoding with manual address fallback",
    ],
    techStack: [
      "React 19",
      "Vite",
      "Express.js",
      "Node.js",
      "FastAPI",
      "Python",
      "YOLOv8",
      "Supabase",
      "PostgreSQL",
      "Cloudinary",
      "OpenStreetMap",
      "TailwindCSS",
    ],
    deployment: "#",
  },
  {
    id: 3,
    title: "Karma Connect",
    type: "Full-Stack Social Networking Platform",
    description:
      "Full-stack social networking platform inspired by LinkedIn featuring real-time messaging, profile management, post feeds and connection system.",
    features: [
      "Real-time messaging system",
      "User profile management",
      "Post feeds and interactions",
      "Connection/networking system",
      "User profiles with image upload",
    ],
    techStack: ["Next.js", "Redux Toolkit", "Socket.IO", "MongoDB", "Cloudinary"],
    deployment: "https://karmaconnect-five.vercel.app/",
  },
  {
    id: 4,
    title: "Vishwakarma Video Call",
    type: "Real-Time Video Conferencing Application",
    description:
      "Real-time video conferencing system built with WebRTC supporting screen sharing, chat, authentication and meeting history.",
    features: [
      "Video conferencing with WebRTC",
      "Real-time screen sharing",
      "In-call chat functionality",
      "User authentication",
      "Meeting history tracking",
      "Peer-to-peer communication",
    ],
    techStack: ["React", "WebRTC", "Socket.IO", "Node.js", "MongoDB"],
    deployment: "https://vishwakarma-video-call.onrender.com/",
  },
  {
    id: 5,
    title: "HomeFix",
    type: "Service Booking Platform",
    description:
      "Home services booking platform connecting users with verified professionals for cleaning, cooking, babysitting and more.",
    features: [
      "Professional verification system",
      "Service booking & scheduling",
      "Multiple service categories",
      "User dashboard",
      "Provider management",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "Passport.js"],
    deployment: "https://home-eaze.onrender.com/",
  },
  {
    id: 6,
    title: "Stock Monitoring Dashboard",
    type: "Financial Analytics Dashboard",
    description:
      "Zerodha-inspired trading dashboard with holdings analytics, portfolio charts and external stock market API integration.",
    features: [
      "Holdings analytics",
      "Portfolio visualization",
      "Real-time stock data",
      "Chart.js integration",
      "Investment tracking",
      "Portfolio analysis",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Chart.js", "JWT"],
    deployment: "#",
  },
  {
    id: 7,
    title: "HomeVista",
    type: "Accommodation Listing Platform",
    description:
      "Airbnb-style accommodation listing platform with image uploads, geolocation search and review system.",
    features: [
      "Property listing platform",
      "Image upload functionality",
      "Geolocation-based search",
      "Review and rating system",
      "Property details management",
      "Location mapping",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "Cloudinary", "OpenCage API"],
    deployment: "https://homevista-qvj8.onrender.com/",
  },
];
