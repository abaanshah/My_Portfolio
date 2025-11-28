import React, { useEffect } from "react";
import gsap from "gsap";
// This is your actual component import that contains the animation logic
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
  "WEB SECURITY",
];
const marqueeSkills = [...skills, ...skills, ...skills];

// --- CSS animation for marquee ---
const marqueeKeyframes = `
  @keyframes scroll {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
  .marquee-animation {
    animation: scroll 5s linear infinite;
  }
  @media (min-width: 768px) {
    .marquee-animation {
      animation-duration: 15s; /* 🐢 slower on bigger screens */
    }
  }
  
  @media (min-width: 1024px) {
    .marquee-animation {
      animation-duration: 20s; /* 🐌 slowest on large desktop */
    }
  }
`;

const Hero = () => {
  // ❌ REMOVED: const AutoAnimation = ({ text }) => <span>{text}</span>; ❌
  // The actual component is now used via the 'import' statement above.

  useEffect(() => {
    // GSAP animation remains as it is for visual effect
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

      {/* Hero Section (Responsive Tailwind classes from last step remain) */}
      <section className="hero w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent pb-16">
        
        {/* Main Hero Content */}
        <div className="mt-20 md:mt-32 flex flex-col items-start">
          <div className="hero-text w-full lg:w-11/12 xl:w-4/5 text-left text-[#aebaa1] font-semibold">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[65px] leading-snug lg:leading-tight">
              I'm a <AutoAnimation text="MERN Stack Developer" /> passionate
              about building <AutoAnimation text="scalable, user-friendly," />{" "}
              and visually engaging web applications.
            </p>
          </div>
        </div>

        {/* Sub-section with Social Links and CTA */}
        <div className="mt-16 md:mt-24 flex flex-col lg:flex-row gap-10 border-t border-gray-800 pt-10 md:pt-12">
          
          {/* Social Links */}
          <div className="social-links group flex w-full lg:w-1/2 flex-wrap gap-x-6 gap-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center text-sm md:text-base text-[#b4b7ba] transition-all duration-300 group-hover:opacity-50 hover:!opacity-100 hover:scale-105"
              >
                {link.name}
                <span className="ml-2">🔗</span>
              </a>
            ))}
          </div>

          {/* Subtext and Button */}
          <div className="w-full lg:w-1/2">
            <p className="text-base md:text-lg mb-8 text-[#9b9fa0]">
              Helping businesses create visually stunning, high-performance, and
              user-friendly websites.
            </p>

            {/* CTA Button */}
            <button className="group relative flex items-center justify-center bg-[#b4b7ba] text-black h-12 w-40 rounded-full font-semibold text-base transition-all duration-300 overflow-hidden cursor-pointer hover:bg-green-100">
              <span className="group-hover:-translate-x-3 transition-transform duration-300">
                LET'S TALK
              </span>
              <span className="absolute translate-x-20 opacity-0 group-hover:opacity-100 group-hover:translate-x-10 translate-y-[1px] transition-all duration-300 text-sm">
                ➜
              </span>
            </button>
          </div>
        </div>

        {/* Responsive Slider (Marquee) */}
        <div className="logo-slider mt-16 md:mt-24 py-4 sm:py-6 md:py-8 bg-[#0b0c0e] border-y border-gray-700 overflow-hidden whitespace-nowrap cursor-default [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
  <div className="logo-track flex gap-6 sm:gap-8 md:gap-12 lg:gap-16 marquee-animation">
    {marqueeSkills.map((skill, index) => (
      <p
        key={index}
        className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-[#787b7c] font-semibold transition-colors duration-300 hover:text-white"
      >
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