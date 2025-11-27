import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import logistosPreview from "../assets/videos/Logistospreview.mp4";
import safinacarpetspreview from "../assets/videos/safinacarpetspreview.mp4";
import AuditFlowpreview from "../assets/videos/AuditFlowpreview.mp4";
import Amazonpreview from "../assets/videos/amazonpreview.mp4";
import Netflixpreview from "../assets/videos/netflixpreview.mp4";
// Placeholder images - replace with your actual project screenshots
const safinaImage =
  "https://placehold.co/1200x800/c9f887/4a4a4a?text=Safina+Project";
const AuditFlowImage =
  "https://placehold.co/1200x800/c9f887/4a4a4a?text=Audit+Flow";
// Updated image placeholder for a more professional look
const logistosImage =
  "https://placehold.co/1200x800/1e40af/ffffff?text=Global+Logistics+Network";
const projectThreeImage =
  "https://placehold.co/1200x800/b2ecf9/4a4a4a?text=Project+Three";
const projectFourImage =
  "https://placehold.co/1200x800/bff8df/4a4a4a?text=Project+Four";

gsap.registerPlugin(ScrollTrigger);

// --- Project Data Array ---
// This makes adding/updating projects much easier and cleaner
const projectsData = [
  {
    title: "AuditFlow - Intelligent Website Audit & Lead Discovery",
    description:
      "Built an advanced auditing platform that scans websites in real-time for performance issues, security gaps, SEO problems, mobile responsiveness, and UI/UX flaws. Includes automated scoring, lead qualification filters, screenshots, and contact extraction to help developers instantly identify high-value clients.",
    image: AuditFlowImage,
    video: AuditFlowpreview,
    tech: ["React", "Node.js", "Express", "MongoDB", "Puppeteer", "Lighthouse"],
    liveUrl: "#",
    githubUrl: "#",
    // imageBgColor: "bg-[#b7e3ff]/40",
  },
  {
    title: "Safina - Scalable E-commerce Solution",
    description:
      "Architected and built a high-performance e-commerce platform focused on 3D product visualization and a secure, streamlined checkout experience using Stripe. Developed a comprehensive admin dashboard for complete control over products, orders, and user management.",
    image: safinaImage,
    video: safinacarpetspreview,
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Three.js"],
    liveUrl: "#",
    githubUrl: "#",
    // imageBgColor: "bg-[#c9f887]/40",
  },

  {
    title: "Logistos - Enterprise Logistics Platform",
    // UPDATED: Description rewritten from your perspective to highlight your contribution
    description:
      "As a key frontend developer, I helped transform the logistics industry by building the UI for a cutting-edge platform that unifies Full Truckload (FTL), Less-than-Truckload (LTL), Parcel, and Ocean Freight into a single dashboard. My work focused on implementing features for smart pricing, AI-driven automation, and real-time tracking to empower businesses and optimize their supply chain operations.",
    image: logistosImage,
    video: logistosPreview,
    // UPDATED: Tech stack expanded to reflect a comprehensive frontend role
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "GraphQL",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "http://logistos.in",
    githubUrl: "#", // Keep this private for professional client work
    // imageBgColor: "bg-[#f4a0c4]/30",
  },
  {
    title: "Amazon Clone",
    description:
      "This was my first web development project, where I recreated the core features of Amazon’s shopping experience. Through this project, I learned the fundamentals of HTML, CSS, and JavaScript, including DOM manipulation, responsive layouts, and interactive UI elements. It was a key step in building my confidence as a developer.",
    image: projectThreeImage,
    video: Amazonpreview,
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    imageBgColor: "bg-[#b2ecf9]/60",
  },

  {
    title: "NETFLIX CLONE",
    description:
      "Built this Netflix Clone as a way to practice modern frontend development techniques. I focused on recreating the UI, animations, and interactive features using HTML, CSS, and JavaScript, learning how to structure components and manage state effectively. This project helped me understand responsive design and dynamic content handling.",
    image: projectFourImage,
    video: Netflixpreview,
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://chocolate-nessie-66.tiiny.site/",
    githubUrl: "#",
    imageBgColor: "bg-[#bff8df]/70",
  },
];

const Projects = () => {
  useEffect(() => {
    // Target the new project-card class for a staggered animation effect
    gsap.utils.toArray(".project-card").forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%", // Start animation when card is 90% from the top of the viewport
            end: "bottom 60%",
            scrub: 1,
            // markers: true, // Uncomment to debug trigger points
          },
        }
      );
    });
  }, []);

  return (
    <section id="projects" className="py-24 px-4 w-full">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center  mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-100">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">
            A selection of projects that demonstrate my passion for creating
            modern, responsive, and user-friendly web applications.
          </p>
        </div>

        <div className="space-y-30">
          {projectsData.map((project, index) => (
            <div
              key={project.title}
              className="project-card flex flex-col lg:flex-row items-center gap-12"
            >
              {/* Media Wrapper */}
              <div
                className={`flex-shrink-0 h-auto w-[600px] rounded-2xl overflow-hidden relative ${
                  index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  {project.video && (
                    <>
                      <video
                        src={project.video}
                        // poster={project.image}
                        preload="metadata"
                        muted
                        playsInline
                        className="w-full h-full object-contain rounded-2xl"
                        onMouseEnter={(e) => e.currentTarget.play()}
                        onMouseLeave={(e) => e.currentTarget.pause()}
                      />
                      {/* Overlay that is dark when not hovered, disappears on hover */}
                      {/* <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-0 transition-opacity duration-300 pointer-events-none"></div> */}
                    </>
                  )}
                </a>
              </div>

              {/* Text Wrapper */}
              <div
                className={`w-full lg:w-1/2 flex-1 ${
                  index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <h3 className="text-3xl font-bold text-gray-100 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack tags */}
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

                {/* Project links */}
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
