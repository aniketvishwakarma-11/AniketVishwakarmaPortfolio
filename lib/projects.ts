export interface Project {
  id: number;
  title: string;
  type: string;
  category: "fullstack" | "ai" | "realtime" | "civic";
  role: string;
  architecture: string;
  problemSolved: string;
  description: string;
  highlights: string[];
  features: string[];
  techStack: string[];
  deployment: string;
  githubUrl?: string;
  featured?: boolean;
  badge?: string;
  accentColor: string;
  accentBorder: string;
  accentGlow: string;
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
    title: "Student Placement Prediction",
    type: "Full-Stack ML & AI Application",
    category: "ai",
    role: "Lead Full-Stack & ML Engineer",
    architecture: "Next.js App Router · FastAPI / Node.js · Scikit-learn · Gemini AI · Firebase",
    problemSolved:
      "Engineering students lacked predictive insights into placement readiness and received no automated, objective feedback on resume ATS compatibility before campus drives.",
    featured: true,
    badge: "⭐ Featured",
    accentColor: "#06b6d4",
    accentBorder: "rgba(6,182,212,0.3)",
    accentGlow: "rgba(6,182,212,0.08)",
    description:
      "Advanced placement prediction platform combining Scikit-learn machine learning and Google Gemini AI to evaluate student placement probability with actionable analytics. Includes ATS resume scoring, an intelligent conversational career counselor, role-based dashboards, and PDF report generation.",
    highlights: [
      "Dual prediction modes: Standard questionnaire & Resume-Based ML classification",
      "Scikit-learn classification models trained on historical academic and interview data",
      "Contextual AI career counselor powered by Gemini API with Cloudflare Workers AI fallback",
      "Automated ATS resume parser evaluating skill keyword density and formatting on a 0-100 scale",
      "Role-Based Access Control (RBAC) with dedicated portals for Admin, Mentor, TPO, and Student",
      "Firebase Auth with secure HTTP-only session cookies and CSRF protection",
      "Over 187+ verified active students and 6,700+ user events logged in production",
    ],
    features: [
      "Dual prediction modes: Standard & Resume-Based with ML models",
      "AI-powered result analysis with Gemini AI and Cloudflare fallback",
      "Resume upload with ATS score calculation (0-100 scale)",
      "Contextual AI chat interface for placement counseling",
      "Placement probability trend graphs with date/time tracking",
      "Downloadable PDF reports with AI insights and recommendations",
      "Role-based dashboards: Admin, Mentor, TPO, Student",
      "Firebase authentication with HTTP-only cookie security",
      "Real-time analytics tracking views, engagement time, and user events",
    ],
    techStack: [
      "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js",
      "Express.js", "MongoDB", "Python", "Scikit-learn",
      "Google Gemini AI", "Firebase Auth", "Cloudflare Workers AI",
    ],
    deployment: "https://student-placement-prediction-ten.vercel.app/",
    stats: {
      activeUsers: "187+",
      totalViews: "4.4k",
      engagementTime: "6m 5s",
      events: "6.7k",
    },
  },
  {
    id: 2,
    title: "EcoVision Bharat",
    type: "Full-Stack Civic Tech Platform",
    category: "civic",
    role: "Full-Stack & AI Engineer (GNA 4.0 Domain Winner 🏆)",
    architecture: "React 19 · FastAPI · YOLOv8 Computer Vision · PostgreSQL · Supabase",
    problemSolved:
      "Municipal civic reporting suffered from unverified spam submissions, lack of automated waste severity analysis, and fragmented sanitation worker dispatch.",
    badge: "🏆 Domain Winner",
    accentColor: "#10b981",
    accentBorder: "rgba(16,185,129,0.3)",
    accentGlow: "rgba(16,185,129,0.08)",
    description:
      "AI-powered civic technology platform enabling citizens to report community waste with live GPS geotagging and photo evidence. An integrated YOLOv8 computer vision model analyzes waste severity in real time, enabling municipal officers to verify and dispatch field workers efficiently. Awarded Domain Winner in Clean & Green Technology at GNA Hackathon 4.0.",
    highlights: [
      "Domain Winner in Clean & Green Technology track at GNA Hackathon 4.0 (GNA University, Punjab)",
      "Custom YOLOv8 computer vision inference deployed on FastAPI analyzing photo severity in <200ms",
      "Reverse geolocation and browser GPS capture pinpointing waste coordinates on interactive maps",
      "4-Tier RBAC workflow coordinating Citizens, Verification Officers, Sanitation Workers, and Admins",
      "Gamified community leaderboard awarding civic points upon verified municipal resolution",
      "Cloudinary image pipeline ensuring compressed, tamper-proof photographic evidence storage",
    ],
    features: [
      "Citizen waste reporting with image upload and GPS geolocation",
      "AI-powered severity analysis using YOLOv8 computer vision",
      "Officer verification and worker assignment workflow",
      "Real-time notifications and status tracking across lifecycle",
      "Gamified scoring system with public community leaderboards",
      "Role-based access control (Citizen, Officer, Worker, Admin)",
      "Supabase real-time subscriptions and PostgreSQL database sync",
    ],
    techStack: [
      "React 19", "Vite", "Express.js", "Node.js",
      "FastAPI", "Python", "YOLOv8", "Supabase",
      "PostgreSQL", "Cloudinary", "TailwindCSS",
    ],
    deployment: "#",
  },
  {
    id: 3,
    title: "Karma Connect",
    type: "Full-Stack Social Networking Platform",
    category: "fullstack",
    role: "Full-Stack Developer",
    architecture: "Next.js · Redux Toolkit · Socket.IO · Node.js · MongoDB · Cloudinary",
    problemSolved:
      "Engineered an end-to-end professional networking platform demonstrating scalable bi-directional messaging, dynamic feed rendering, and user relation graphs.",
    accentColor: "#7c3aed",
    accentBorder: "rgba(124,58,237,0.3)",
    accentGlow: "rgba(124,58,237,0.08)",
    description:
      "Full-stack social networking platform inspired by LinkedIn featuring real-time messaging, customizable user profiles, post creation with rich media, and a bi-directional professional connection system powered by Socket.IO and Redux Toolkit.",
    highlights: [
      "Bi-directional real-time private messaging with Socket.IO rooms, typing indicators, and delivery status",
      "Redux Toolkit global state architecture synchronizing user feeds, notifications, and active chats",
      "Cloudinary asset pipeline supporting high-resolution image uploads, resizing, and caching",
      "Interactive social feed with instant likes, comments, and connection request workflows",
      "MongoDB database indexing for optimized user queries, mutual connection discovery, and feed loading",
    ],
    features: [
      "Real-time messaging system with Socket.IO",
      "User profile management with custom banner and avatar uploads",
      "Interactive post feeds, media attachments, likes, and comment threads",
      "Connection and networking request system with accept/decline flows",
      "Cloudinary cloud storage integration for optimized media delivery",
      "JWT-secured authentication with password hashing and session tokens",
    ],
    techStack: ["Next.js", "Redux Toolkit", "Socket.IO", "MongoDB", "Cloudinary", "Node.js", "Express.js"],
    deployment: "https://karmaconnect-five.vercel.app/",
  },
  {
    id: 4,
    title: "Vishwakarma Video Call",
    type: "Real-Time Video Conferencing App",
    category: "realtime",
    role: "Real-Time Systems Developer",
    architecture: "React · WebRTC · Socket.IO Signaling · Node.js · MongoDB",
    problemSolved:
      "Created a zero-dependency, browser-native video conferencing system delivering low-latency peer-to-peer audio, video, and screen sharing without third-party plugins.",
    accentColor: "#3b82f6",
    accentBorder: "rgba(59,130,246,0.3)",
    accentGlow: "rgba(59,130,246,0.08)",
    description:
      "Production-ready peer-to-peer video conferencing platform built on WebRTC and Socket.IO. Features seamless screen sharing, synchronized in-call text messaging, user authentication, and persistent meeting history logging.",
    highlights: [
      "Direct browser-to-browser P2P media streaming via WebRTC RTCPeerConnection API",
      "Custom Socket.IO signaling server managing SDP offers/answers and ICE candidate negotiation",
      "Real-time screen broadcasting allowing users to share windows or full monitors with peers",
      "Synchronized in-call text chat operating concurrently alongside active media streams",
      "Meeting history archive tracking participant logs, call durations, and past sessions",
    ],
    features: [
      "WebRTC peer-to-peer encrypted video and audio conferencing",
      "Real-time monitor and window screen sharing capability",
      "In-call chat functionality synchronized via WebRTC data channels",
      "User authentication and encrypted room code access",
      "Meeting history dashboard logging past call sessions",
      "Socket.IO real-time signaling server with ICE candidate exchange",
    ],
    techStack: ["React", "WebRTC", "Socket.IO", "Node.js", "MongoDB", "Tailwind CSS"],
    deployment: "https://vishwakarma-video-call.onrender.com/",
  },
  {
    id: 5,
    title: "HomeFix",
    type: "Service Booking Platform",
    category: "fullstack",
    role: "Full-Stack Developer",
    architecture: "Node.js · Express.js · MongoDB · Passport.js · EJS / Vanilla JS",
    problemSolved:
      "Bridged the gap between local homeowners and verified domestic professionals (cleaning, plumbing, cooking) with end-to-end booking, scheduling, and provider dashboards.",
    accentColor: "#f59e0b",
    accentBorder: "rgba(245,158,11,0.3)",
    accentGlow: "rgba(245,158,11,0.08)",
    description:
      "Full-featured domestic service booking platform connecting homeowners with background-verified service professionals. Includes multi-category service discovery, date/time scheduling, provider verification, and dual-role user/provider management portals.",
    highlights: [
      "End-to-end service booking lifecycle: Selection → Provider Dispatch → Status Updates → Completion",
      "Dual user roles with separate dashboard views for customer bookings and service provider jobs",
      "Passport.js local authentication securing provider registrations, background credentials, and client orders",
      "Modular MongoDB schemas modeling service categories, pricing matrices, and provider reviews",
    ],
    features: [
      "Professional verification and background certification system",
      "Multi-category service booking (cleaning, cooking, electrical, plumbing)",
      "Flexible appointment scheduling with calendar slot availability",
      "Dual-role portals: Customer order dashboard & Provider job queue",
      "Passport.js authentication with encrypted session cookie management",
      "Transparent customer review and rating system per provider",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "Passport.js", "Tailwind CSS"],
    deployment: "https://home-eaze.onrender.com/",
  },
  {
    id: 6,
    title: "Stock Monitoring Dashboard",
    type: "Financial Analytics Dashboard",
    category: "fullstack",
    role: "Frontend & Financial Analytics Developer",
    architecture: "React · Node.js · MongoDB · Chart.js · Financial APIs · JWT",
    problemSolved:
      "Retail stock investors needed a clean, Zerodha-inspired interface to visualize real-time portfolio holdings, profit/loss distribution, and historical equity trends without cognitive clutter.",
    accentColor: "#06b6d4",
    accentBorder: "rgba(6,182,212,0.3)",
    accentGlow: "rgba(6,182,212,0.08)",
    description:
      "Modern financial trading and portfolio analytics dashboard inspired by Zerodha Kite. Integrates external financial APIs for live market valuation, interactive Chart.js equity curves, asset allocation pie charts, and JWT-secured investment tracking.",
    highlights: [
      "Real-time market valuation engine calculating live gain/loss across user holdings and watchlist",
      "Interactive Chart.js visualizations supporting multi-timeframe analysis (1D, 1W, 1M, 1Y, All)",
      "Portfolio diversification metrics highlighting capital allocation across equities, cash, and sectors",
      "JWT-authenticated user sessions securing portfolio balances, trade history, and custom watchlists",
    ],
    features: [
      "Holdings analytics with realized and unrealized profit & loss calculation",
      "Real-time external stock market data integration and price ticker updates",
      "Interactive Chart.js visualizations with responsive timeline filtering",
      "JWT authentication protecting personal portfolio balance records",
      "Watchlist management with instant price change percentage indicators",
      "Clean dark-mode trading interface optimized for high data density",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Chart.js", "JWT", "REST APIs"],
    deployment: "#",
  },
  {
    id: 7,
    title: "HomeVista",
    type: "Accommodation Listing Platform",
    category: "fullstack",
    role: "Full-Stack Developer",
    architecture: "Node.js · Express.js · MongoDB · Cloudinary · OpenCage Geolocation API",
    problemSolved:
      "Created an Airbnb-style accommodation platform supporting geographic coordinate search, host property listings with multi-image cloud uploads, and verified guest reviews.",
    accentColor: "#f43f5e",
    accentBorder: "rgba(244,63,94,0.3)",
    accentGlow: "rgba(244,63,94,0.08)",
    description:
      "Airbnb-style accommodation listing and vacation rental platform. Features dynamic geographic search powered by OpenCage Geocoding API, Cloudinary multi-image property hosting, interactive location mapping, and a transparent guest review & rating architecture.",
    highlights: [
      "Integrated OpenCage Geocoding API converting addresses to latitude/longitude for precise map positioning",
      "Cloudinary asset pipeline handling multi-image property uploads with cloud transformation and caching",
      "Host management dashboard enabling property CRUD, amenity toggles, pricing rules, and booking availability",
      "Community rating and review system calculating average guest scores per accommodation",
    ],
    features: [
      "Property listing platform with multi-photo upload capability",
      "Geolocation-based search and address geocoding via OpenCage API",
      "Review and 5-star rating system with guest feedback logs",
      "Cloudinary image hosting with automatic responsive transformations",
      "Property details management: Amenities, pricing, host bio, and location maps",
      "MongoDB spatial queries supporting location-based search filtering",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "Cloudinary", "OpenCage API", "Tailwind CSS"],
    deployment: "https://homevista-qvj8.onrender.com/",
  },
];
