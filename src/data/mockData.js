// Mock data for the portfolio website
export const teamMembers = [
  {
    id: 1,
    name: "Lokesh A",
    role: "UI/UX Designer & Accounts Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Creative designer specializing in user experience design, account management, and visual content creation with Canva.",
    skills: ["UI/UX Design", "Accounts Management", "Canva Designer", "Client Relations"],
    social: {
      linkedin: "https://www.linkedin.com/in/lokesh-a-759835322/",
      github: "https://github.com/Lokeshloki159"
    },
    icon: "Palette",
    color: "text-cyan-400"
  },
  {
    id: 2,
    name: "Shine Titus",
    role: "Backend Developer, Python Developer, MLOps",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612c18c?w=400&h=400&fit=crop&crop=face",
    bio: "Passionate developer skilled in backend systems, Python programming, and MLOps practices to deliver scalable solutions.",
    skills: ["Backend Development", "Python", "MLOps", "API Development"],
    social: {
      linkedin: "https://www.linkedin.com/in/shine-titus-ab0b2b287/",
      github: "https://github.com/Shine-Titus"
    },
    icon: "Code",
    color: "text-purple-400"
  },
  {
    id: 3,
    name: "Prabhavathi S",
    role: "UI/UX Designer, Full Stack Web Developer, Project Manager, Canva Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Versatile professional excelling in UI/UX design, full-stack web development, and project management while delivering engaging client solutions.",
    skills: ["UI/UX Design", "Full Stack Development", "Project Management", "Canva Design"],
    social: {
      linkedin: "https://www.linkedin.com/in/prabhavathi-s-a6342b2a2/",
      github: "https://github.com/Prabhavathi2006"
    },
    icon: "Smartphone",
    color: "text-pink-400"
  },
  {
    id: 4,
    name: "Sriharini M",
    role: "UI/UX Designer, Frontend & Backend Developer, Client Manager, Canva Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Creative and technical professional skilled in frontend and backend development, poster design, and client management.",
    skills: ["UI/UX Design", "Frontend Development", "Backend Development", "Canva Design"],
    social: {
      linkedin: "https://www.linkedin.com/in/m-sri-harini-7505a1292",
      github: "https://github.com/srihar12"
    },
    icon: "Rocket",
    color: "text-cyan-400"
  },
  {
    id: 5,
    name: "Dhekshath S",
    role: "Full Stack Web Developer and App Developer",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=face",
    bio: "Passionate full stack web and app developer, turning ideas into functional digital solutions.",
    skills: ["Full Stack Web Development", "App Development", "React", "Node.js"],
    social: {
      linkedin: "https://www.linkedin.com/in/dhekshath-s",
      github: "https://github.com/Dhekshath1510"
    },
    icon: "TrendingUp",
    color: "text-purple-400"
  }
];


// Services
export const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites built with modern frameworks.",
    icon: "Code",
    features: [
      "Responsive Design",
      "Optimized Performance",
      "SEO Friendly"
    ]
  },
  {
    id: 2,
    title: "Mobile Apps",
    description: "Cross-platform apps for Android and iOS.",
    icon: "Smartphone",
    features: [
      "Flutter & React Native",
      "Push Notifications",
      "App Store Deployment"
    ]
  },
  {
    id: 3,
    title: "Design",
    description: "Creative visual content and graphics.",
    icon: "Palette",
    features: [
      "Social Media Design",
      "Brand Identity Essentials",
      "Marketing Materials"
    ]
  }
];

// Portfolio Projects
export const portfolioProjects = [
  {
    id: 1,
    title: "Smart Bus Tracking & Alerts",
    description: "Tracks buses in real-time and sends instant alerts to passengers for safer, easier travel.",
    image: require("../assets/smartbus.jpg"),
    category: "Web Development"
  },
  {
    id: 2,
    title: "GreenBee",
    description: "Gamified platform teaching eco-friendly habits through interactive challenges.",
    image: require("../assets/greenbee.jpg"), 
    category: "App Development"
  },
  {
    id: 3,
    title: "Bike Advertisement",
    description: "Creative advertisements and promotional content for a bike brand.",
    image: require("../assets/bike.jpg"),
    category: "Design"
  },
  {
    id: 4,
    title: "Task Management",
    description: "A task management app with login security (JWT), supporting multiple users and role-based access.",
    image: require("../assets/task.jpg"),
    category: "Web Development"
  }
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "CEO, TechCorp",
    feedback: "The team delivered beyond expectations — creative, reliable, and fast!",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Michael Lee",
    role: "Founder, StartUpHub",
    feedback: "A pleasure to work with. Their design and development skills are top-notch.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Sophia Martinez",
    role: "Marketing Director, Brandify",
    feedback: "They understood our vision perfectly and brought it to life beautifully.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];
