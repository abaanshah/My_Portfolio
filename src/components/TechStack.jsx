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
} from "react-icons/fa";
import {
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
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandThreejs } from "react-icons/tb";
import { MdOutlineEmail } from "react-icons/md";

// UPDATED: Added a 'description' for each technology to be displayed in the modal.
const techCategories = [
  {
    title: "Frontend",
    technologies: [
      {
        name: "React",
        icon: <FaReact size={32} className="text-blue-400" />,
        description:
          "The foundation of my UIs. I use React to build fast, scalable, and component-based interfaces for everything from product pages to complex dashboards.",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={32} className="text-blue-500" />,
        description:
          "I use TypeScript to add static typing to JavaScript. This is crucial in large applications for preventing bugs, improving code clarity, and enabling better tooling.",
      },
      {
        name: "Redux Toolkit",
        icon: <SiRedux size={32} className="text-purple-500" />,
        description:
          "The central 'brain' for application state. I use Redux to manage global state like shopping carts and user authentication, ensuring data consistency across all components.",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={32} className="text-teal-400" />,
        description:
          "My go-to for styling. Tailwind's utility-first approach allows me to build custom, responsive designs directly in the markup, dramatically speeding up development.",
      },
      {
        name: "Framer Motion",
        icon: <TbBrandFramerMotion size={32} className="text-purple-500" />,
        description:
          "For creating fluid, high-quality animations in React. I use it for page transitions, interactive micro-animations, and enhancing the overall user experience.",
      },
      {
        name: "Three.js / R3F",
        icon: <TbBrandThreejs size={32} className="text-gray-800" />,
        description:
          "The core technology for 3D web graphics. I use it with React Three Fiber (R3F) to build interactive 3D product visualizers and immersive experiences.",
      },
      {
        name: "React Query",
        icon: <span className="text-2xl font-bold text-rose-500">RQ</span>,
        description:
          "A powerful tool for fetching, caching, and updating server state. It simplifies data management, making applications feel faster and more reliable.",
      },
      {
        name: "GSAP",
        icon: <span className="text-2xl font-bold text-green-500">GSAP</span>,
        description:
          "A high-performance animation library for complex, sequenced animations. I use it for intricate timelines and effects that require precise control.",
      },
    ],
  },
  {
    title: "Backend",
    technologies: [
      {
        name: "Node.js",
        icon: <FaNodeJs size={32} className="text-green-500" />,
        description:
          "The JavaScript runtime that powers my backend. It allows me to build fast, scalable network applications and APIs using a single language across the stack.",
      },
      {
        name: "Express.js",
        icon: <SiExpress size={32} className="text-gray-400" />,
        description:
          "A minimal and flexible Node.js framework for building robust APIs. I use it to define routes, handle requests, and manage server-side logic.",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={32} className="text-green-600" />,
        description:
          "My primary NoSQL database. Its flexible, document-based structure is ideal for storing application data like user profiles, product catalogs, and orders.",
      },
      {
        name: "GraphQL",
        icon: <SiGraphql size={32} className="text-pink-500" />,
        description:
          "A modern query language for APIs. It allows the frontend to request exactly the data it needs, making my applications more efficient than with traditional REST APIs.",
      },
      {
        name: "Socket.IO",
        icon: <SiSocketdotio size={32} className="text-gray-400" />,
        description:
          "For real-time, bi-directional communication. I use it to power features like live chats and real-time notifications, creating instant user interactions.",
      },
      {
        name: "Nodemailer",
        icon: <MdOutlineEmail size={32} className="text-blue-400" />,
        description:
          "The tool I use to send transactional emails from the server, such as order confirmations, password resets, and shipping notifications.",
      },
      {
        name: "Stripe",
        icon: <SiStripe size={32} className="text-indigo-500" />,
        description:
          "The payment processing platform I integrate to securely handle all customer payments, subscriptions, and financial transactions.",
      },
      {
        name: "Razorpay",
        icon: <SiRazorpay size={32} className="text-indigo-400" />,
        description:
          "The payment processing platform I integrate to securely handle all customer payments, subscriptions, and financial transactions.",
      },
      {
        name: "JWT",
        icon: <SiJsonwebtokens size={32} className="text-purple-700" />,
        description:
          "The standard for user authentication. I use JSON Web Tokens to create secure sessions, ensuring that user data is protected.",
      },
    ],
  },
  {
    title: "Testing",
    technologies: [
      {
        name: "Jest",
        icon: <SiJest size={32} className="text-red-600" />,
        description:
          "A delightful JavaScript testing framework. I use it to write and run unit and integration tests to ensure my code is reliable and bug-free.",
      },
      {
        name: "React Testing Library",
        icon: <SiTestinglibrary size={32} className="text-red-500" />,
        description:
          "For testing React components from a user's perspective. It helps me ensure that my UI works as intended and is accessible.",
      },
    ],
  },
  {
    title: "DevOps & Tools",
    technologies: [
      {
        name: "Git & GitHub",
        icon: <FaGitAlt size={32} className="text-orange-600" />,
        description:
          "The foundation of my development workflow. I use Git for version control and GitHub for hosting repositories and collaborating on code.",
      },
      {
        name: "Docker",
        icon: <FaDocker size={32} className="text-blue-500" />,
        description:
          "I use Docker to containerize my applications, ensuring they run consistently across any environment, from my local machine to production.",
      },
      {
        name: "Vite",
        icon: <SiVite size={32} className="text-purple-600" />,
        description:
          "My preferred frontend build tool. It provides an extremely fast development server and an optimized build process for high-performance applications.",
      },
      {
        name: "Vercel",
        icon: <SiVercel size={32} className="text-gray-800" />,
        description:
          "A seamless platform for deploying my frontend applications. It integrates directly with GitHub for continuous deployment and global distribution.",
      },
      {
        name: "ESLint",
        icon: <SiEslint size={32} className="text-indigo-600" />,
        description:
          "A static code analysis tool. I use it to automatically find and fix problems in my code, maintaining high standards of quality and consistency.",
      },
      {
        name: "AI Integration",
        icon: <SiOpenai size={32} className="text-teal-500" />,
        description:
          "Refers to my experience integrating third-party AI services like the OpenAI API to power intelligent features such as chatbots and content generation.",
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
