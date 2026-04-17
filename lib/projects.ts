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
    type: "Full-Stack ML Application",
    description:
      "ML powered platform that predicts placement probability using academic, aptitude and interview metrics. Includes analytics dashboard, probability trend graphs and downloadable PDF reports.",
    features: [
      "ML-powered prediction engine",
      "Analytics dashboard",
      "Trend visualization",
      "PDF report generation",
      "Data analysis capabilities",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Python", "Scikit-learn"],
    deployment: "https://student-placement-prediction-ten.vercel.app/",
    stats: {
      activeUsers: "187",
      newUsers: "186",
      totalViews: "4.4k",
      engagementTime: "6m 5s",
      bounceRate: "22.5%",
      events: "6.7k",
    },
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
