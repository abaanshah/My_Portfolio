import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import logistosPreview from "../assets/videos/Logistospreview.mp4";
import safinacarpetspreview from "../assets/videos/safinacarpetspreview.mp4";
import AuditFlowpreview from "../assets/videos/AuditFlowpreview.mp4";
import Amazonpreview from "../assets/videos/amazonpreview.mp4";
import Netflixpreview from "../assets/videos/netflixpreview.mp4";

gsap.registerPlugin(ScrollTrigger);

// ---------------------------- PROJECT DATA ----------------------------
const projectsData = [
  {
    title: "AuditFlow - Intelligent Website Audit & Lead Discovery",
    description:
      "Built an advanced auditing platform that scans websites in real-time for performance issues, security gaps, SEO problems, mobile responsiveness, and UI/UX flaws. Includes automated scoring, lead qualification filters, screenshots, and contact extraction to help developers instantly identify high-value clients.",
    video: AuditFlowpreview,
    tech: ["React", "Node.js", "Express", "MongoDB", "Puppeteer", "Lighthouse"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Safina - Scalable E-commerce Solution",
    description:
      "Architected and built a high-performance e-commerce platform focused on 3D product visualization and a secure, streamlined checkout experience using Stripe. Developed a comprehensive admin dashboard for complete control over products, orders, and user management.",
    video: safinacarpetspreview,
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Three.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Logistos - Enterprise Logistics Platform",
    description:
      "As a key frontend developer, I helped transform the logistics industry by building the UI for a cutting-edge platform that unifies FTL, LTL, Parcel, and Ocean Freight into a single dashboard. I implemented features like smart pricing, AI-driven automation, and real-time tracking to optimize supply chain operations.",
    video: logistosPreview,
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "GraphQL",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "http://logistos.in",
    githubUrl: "#",
  },
  {
    title: "Amazon Clone",
    description:
      "This was my first web development project, where I recreated the core features of Amazon’s shopping experience. I learned the fundamentals of HTML, CSS, and JavaScript, including DOM manipulation, responsive layouts, and interactive UI elements.",
    video: Amazonpreview,
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "NETFLIX CLONE",
    description:
      "Built this Netflix Clone to practice modern frontend development. I focused on recreating UI elements, animations, and interactive features using HTML, CSS, and JavaScript. This helped me understand responsive layouts and dynamic content handling.",
    video: Netflixpreview,
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://chocolate-nessie-66.tiiny.site/",
    githubUrl: "#",
  },
];

// ---------------------------- COMPONENT ----------------------------
const Projects = () => {
  useEffect(() => {
    const triggers = [];

    gsap.utils.toArray(".project-card").forEach((card) => {
      const t = gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%", // FIXED: triggers exactly on entry
            toggleActions: "play none none reverse",
            scrub: false,
          },
        }
      );
      triggers.push(t);
    });

    return () => {
      triggers.forEach((t) => t.scrollTrigger?.kill());
    };
  }, []);

  return (
    <section id="projects" className="py-24 px-4 w-full">
      <div className="container mx-auto max-w-7xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-100">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            A selection of projects demonstrating my passion for building
            interactive, modern, and high-performance digital experiences.
          </p>
        </div>

        {/* Project List */}
        <div className="space-y-32">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              className="project-card flex flex-col lg:flex-row items-center gap-12"
            >
              {/* MEDIA */}
              <div
                className={`w-full lg:w-[50%] rounded-2xl overflow-hidden relative ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <video
                    src={project.video}
                    preload="metadata"
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded-2xl"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                  />
                </a>
              </div>

              {/* TEXT CONTENT */}
              <div
                className={`w-full lg:w-1/2 ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <h3 className="text-3xl font-bold text-gray-100 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((techName) => (
                    <span
                      key={techName}
                      className="bg-gray-800 text-sky-300 text-sm font-semibold px-3 py-1 rounded-full"
                    >
                      {techName}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-200 font-semibold hover:text-sky-400 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-200 font-semibold hover:text-sky-400 transition-colors duration-300"
                  >
                    <FaGithub />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
