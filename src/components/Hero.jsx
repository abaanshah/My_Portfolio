import React, { useEffect } from "react";
import gsap from "gsap";
import AutoAnimation from "../Animations/AutoAnimation";

// --- Data for social links and skills ---
const socialLinks = [
  { name: "LINKEDIN", href: "#" },
  { name: "GITHUB", href: "#" },
  { name: "INSTAGRAM", href: "#" },
  { name: "GMAIL", href: "#" },
];

const skills = [
  "FULL STACK DEV",
  "MERN SPECIALIST",
  "UI/UX DESIGN",
  "SECURE SYSTEMS",
  "HIGH PERFORMANCE",
  "ANIMATIONS",
  "RESPONSIVE DESIGN",
  "API DEVELOPMENT",
  "CLOUD DEPLOYMENT",
  "MODERN UI",
  "SCALABILITY",
  "OPTIMIZATION",
  "WEB SECURITY"
];
const marqueeSkills = [...skills, ...skills, ...skills];

// --- CSS animation defined as a string ---
const marqueeKeyframes = `
  @keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  .marquee-animation {
    animation: scroll 20s linear infinite;
  }
`;

const Hero = () => {
  useEffect(() => {
    gsap.set(".hero", { opacity: 1 });
    gsap.fromTo(
      ".hero",
      { filter: "blur(50px)", opacity: 0 },
      { filter: "blur(0px)", opacity: 1, duration: 2.5, ease: "power2.out" }
    );
  }, []);

  return (
    <>
      <style>{marqueeKeyframes}</style>

      <section className="hero w-full pb-18 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Main Hero Content */}
        <div className="mt-[13vh] flex flex-col items-start">
          <div className="hero-text w-full lg:w-4/5 text-left text-[#aebaa1] font-semibold">
            <p className="text-4xl sm:text-5xl md:text-6xl lg:text-[65px] leading-tight">
              I'm a <AutoAnimation text="MERN Stack Developer" /> passionate about building{" "}
              <AutoAnimation text="scalable, user-friendly," /> and visually engaging web applications.
            </p>
          </div>
        </div>

        {/* Sub-section with Social Links and CTA */}
        <div className="mt-20 flex flex-col lg:flex-row gap-12 lg:gap-8 border-t border-gray-800 pt-12">
          
          {/* Social Links */}
          <div className="social-links group flex w-full lg:w-1/2 flex-wrap gap-x-6 gap-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center text-sm text-[#b4b7ba] transition-all duration-300 group-hover:opacity-50 hover:!opacity-100 hover:scale-105"
              >
                {link.name}
                <span className="ml-2">🔗</span>
              </a>
            ))}
          </div>

          {/* Subtext and Button */}
          <div className="w-full lg:w-1/2">
            <p className="text-lg mb-5 text-[#9b9fa0]">
              Helping businesses create visually stunning, high-performance, and user-friendly websites.
            </p>
            
            {/* CHANGE 1 & 2: Button lowered and unique hover animation added */}
            <button className="group flex items-center justify-center bg-[#b4b7ba] text-black h-12 w-40 rounded-full font-semibold text-base transition-all duration-300 overflow-hidden cursor-pointer hover:bg-green-100">
              <span className="group-hover:-translate-x-3 transition-transform duration-300">
                LET'S TALK
              </span>
              <span className="absolute translate-x-20 opacity-0 group-hover:opacity-100  group-hover:translate-x-10 translate-y-[1px] transition-all duration-300 text-sm">
  ➜
</span>

            </button>
          </div>
        </div>

        {/* CHANGE 3: Responsive Slider */}
        <div 
          className="logo-slider mt-10 py-8 bg-[#0b0c0e] border-y border-gray-700 overflow-hidden whitespace-nowrap cursor-default [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          {/* Responsive gap added */}
          <div className="logo-track flex gap-10 md:gap-16 marquee-animation">
            {marqueeSkills.map((skill, index) => (
              // Responsive text size added
              <p key={index} className="text-3xl md:text-4xl text-[#787b7c] font-semibold transition-colors duration-300 hover:text-white">
                {skill}
              </p>
            ))}
          </div>
        </div>

      </section>
    </>
  );
};

export default Hero;