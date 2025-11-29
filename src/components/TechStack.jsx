import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJava,
  FaDocker,
  FaTimes,
  FaLock,
  FaRobot,
  FaPaperPlane,
  FaEye,
} from "react-icons/fa";
import {
  SiRender,
  SiRailway,
  SiCloudinary,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiVite,
  SiTypescript,
  SiOpenai,
  SiJsonwebtokens,
  SiStripe,
  SiGraphql,
  SiCplusplus,
  SiRedux,
  SiSocketdotio,
  SiJest,
  SiTestinglibrary,
  SiVercel,
  SiEslint,
  SiRazorpay,
  SiNextdotjs,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandThreejs } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";

// UPDATED: Added a 'description' for each technology to be displayed in the modal.
const techCategories = [
  // ============================
  // FRONTEND
  // ============================
  {
    title: "Frontend",
    technologies: [
      {
        name: "React",
        icon: <FaReact size={32} className="text-blue-400" />,
        description:
          "The core library I use to build fast, interactive, and scalable user interfaces for dashboards, websites, and apps.",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs size={32} className="text-gray-300" />,
        description:
          "The framework I use for SEO-friendly, high-performance applications with server-side rendering and API routes.",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={32} className="text-blue-500" />,
        description:
          "Ensures clean, reliable, and scalable code by adding type-safety to my React and Node.js projects.",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={32} className="text-teal-400" />,
        description:
          "Utility-first CSS framework that helps me build custom, responsive designs quickly and efficiently.",
      },
      {
        name: "Framer Motion",
        icon: <TbBrandFramerMotion size={32} className="text-purple-500" />,
        description:
          "Used for smooth UI animations, page transitions, and premium micro-interactions.",
      },
      {
        name: "GSAP",
        icon: <span className="text-2xl font-bold text-green-500">GSAP</span>,
        description:
          "My go-to library for advanced, high-performance animations and timeline-based effects.",
      },
      {
        name: "Redux Toolkit",
        icon: <SiRedux size={32} className="text-purple-500" />,
        description:
          "Global state management for features like carts, filters, user auth, and multi-page data sync.",
      },
      {
        name: "React Query",
        icon: <span className="text-2xl font-bold text-rose-500">RQ</span>,
        description:
          "Handles data fetching, caching, and re-validation to make apps feel faster and more responsive.",
      },
      // {
      //   name: "Three.js / R3F",
      //   icon: <TbBrandThreejs size={32} className="text-gray-200" />,
      //   description:
      //     "Used for building 3D product views and immersive web experiences directly inside React.",
      // },
    ],
  },

  // ============================
  // BACKEND
  // ============================
  {
    title: "Backend",
    technologies: [
      {
        name: "Node.js",
        icon: <FaNodeJs size={32} className="text-green-500" />,
        description:
          "JavaScript runtime that powers my backend logic, APIs, and real-time applications.",
      },
      {
        name: "Express.js",
        icon: <SiExpress size={32} className="text-gray-400" />,
        description:
          "Framework I use to build secure APIs, route handling, authentication, and server-side logic.",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={32} className="text-green-600" />,
        description:
          "Primary database I use for storing user data, products, orders, and application content.",
      },
      {
        name: "Mongoose",
        icon: <SiMongodb size={32} className="text-green-500" />,
        description:
          "ODM library I use to structure MongoDB models and handle database queries cleanly.",
      },
      {
        name: "JWT Auth",
        icon: <SiJsonwebtokens size={32} className="text-purple-700" />,
        description:
          "Secure authentication system for user login, roles, sessions, and protected routes.",
      },
      {
        name: "Bcrypt",
        icon: <FaLock size={32} className="text-gray-300" />,
        description:
          "Used for hashing and securing user passwords in authentication systems.",
      },
      {
        name: "Socket.IO",
        icon: <SiSocketdotio size={32} className="text-gray-400" />,
        description:
          "Adds real-time communication features like chat, notifications, and live updates.",
      },
      {
        name: "Nodemailer",
        icon: <MdOutlineEmail size={32} className="text-blue-400" />,
        description:
          "Used to send emails such as OTPs, order confirmations, and contact form messages.",
      },
      {
        name: "Cloudinary",
        icon: <SiCloudinary size={32} className="text-blue-500" />,
        description:
          "Cloud media storage I use for uploading, optimizing, and delivering images.",
      },
      {
        name: "Stripe",
        icon: <SiStripe size={32} className="text-indigo-500" />,
        description:
          "Secure payment gateway I integrate for card payments, checkouts, and subscription billing.",
      },
      {
        name: "Razorpay",
        icon: <SiRazorpay size={32} className="text-indigo-400" />,
        description:
          "Indian payment gateway used for UPI, wallet, and card transactions in e-commerce apps.",
      },
    ],
  },

  // ============================
  // AI & AUTOMATION
  // ============================
  {
    title: "AI & Automation",
    technologies: [
      {
        name: "OpenAI API",
        icon: <SiOpenai size={32} className="text-teal-500" />,
        description:
          "I integrate AI features like chatbots, content generation, audit automation, and smart recommendations.",
      },
      {
        name: "AI Product Visualization",
        icon: <FaEye size={32} className="text-pink-300" />,
        description: "Used AI and image processing techniques to build a Rug Visualizer that shows how products look inside real room photos.",
      },
      
      {
        name: "AI-Enhanced Workflows",
        icon: <FaRobot size={32} className="text-purple-400" />,
        description:
          "Used for automating audits, creating redesign suggestions, and speeding up development processes.",
      },
    ],
  },

  // ============================
  // DEVOPS & DEPLOYMENT
  // ============================
  {
    title: "Deployment & Tools",
    technologies: [
      {
        name: "Vercel",
        icon: <SiVercel size={32} className="text-gray-300" />,
        description:
          "My primary platform for deploying Next.js and frontend apps with global CDN performance.",
      },
      {
        name: "Render",
        icon: <SiRender size={32} className="text-blue-400" />,
        description:
          "Used for hosting Node.js backends, cron jobs, and API services.",
      },
      {
        name: "Railway",
        icon: <SiRailway size={32} className="text-purple-300" />,
        description:
          "Deploys backend servers and databases with automatic scaling.",
      },
      {
        name: "Git & GitHub",
        icon: <FaGitAlt size={32} className="text-orange-600" />,
        description:
          "Version control and code collaboration for all my projects.",
      },
      {
        name: "Postman / Thunder Client",
        icon: <FaPaperPlane size={32} className="text-red-400" />,
        description:
          "Used to test APIs, debug routes, and validate server responses.",
      },
    ],
  },
];

// Animation variants for the container and items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
};

// NEW: Modal component for displaying technology details
const TechModal = ({ tech, onClose }) => {
  if (!tech) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="bg-gray-800 border border-gray-700 rounded-2xl p-6 sm:p-8 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <FaTimes size={20} />
        </button>
        <div className="flex items-center gap-4 mb-4">
          <div className="text-5xl">{tech.icon}</div>
          <h3 className="text-2xl font-bold text-white">{tech.name}</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">{tech.description}</p>
      </motion.div>
    </motion.div>
  );
};

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState(techCategories[0].title);
  // NEW: State to manage the selected technology for the modal
  const [selectedTech, setSelectedTech] = useState(null);

  const currentCategory = techCategories.find(
    (cat) => cat.title === activeCategory
  );

  return (
    <>
      <section
        id="tech-stack"
        className="
    pt-45 
    pb-24 
    px-4 
    w-full 
    min-h-screen 
    md:pt-40 
    relative 
    z-10
  "
      >
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-100">
              My Technology Stack
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
              An interactive overview of the tools and technologies I use to
              build modern web applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
            {techCategories.map((category) => (
              <button
                key={category.title}
                onClick={() => setActiveCategory(category.title)}
                className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ${
                  activeCategory === category.title
                    ? "bg-gray-200 text-gray-900 shadow-lg shadow-gray-200/20"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="
  grid 
  grid-cols-2 
  sm:grid-cols-3 
  md:grid-cols-4 
  lg:grid-cols-5 
  gap-3 
  sm:gap-5 
  md:gap-6
"
            >
              {currentCategory &&
                currentCategory.technologies.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={itemVariants}
                    // NEW: onClick handler to open the modal with the selected tech
                    onClick={() => setSelectedTech(tech)}
                    className="group flex flex-col items-center justify-center gap-3 p-4 bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-xl transition-all duration-300 hover:bg-gray-700/70 hover:border-sky-500 hover:scale-105 cursor-pointer"
                  >
                    <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                      {tech.icon}
                    </div>
                    <span className="font-semibold text-gray-300 text-sm text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* NEW: Render the modal conditionally */}
      <AnimatePresence>
        {selectedTech && (
          <TechModal
            tech={selectedTech}
            onClose={() => setSelectedTech(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default TechStack;
