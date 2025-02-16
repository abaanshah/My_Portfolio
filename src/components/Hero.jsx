import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";
import AutoAnimation from "../Animations/AutoAnimation";
// import BackToTop from "./BackToTop";
// import {scrollToSection} from "../components/Navbar";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Step 1: Set hero section opacity (ensures smooth transition)
    gsap.set(".hero", { opacity: 1 });

    // Step 2: Animate text reveal with a blurred left-to-right effect
    gsap.fromTo(
      ".hero",
      {filter: "blur(20px)", opacity: 0,},
      {
        // x: "0"
        filter: "blur(0px)",
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => setAnimationComplete(true),
      }
    );
  }, []);

  return (
    <>
      <div className={`hero ${animationComplete ? "show" : ""}`}>
        <div className={`hero-container ${animationComplete ? "show" : ""}`}>
          <div className="hero-text">
            <p className="text-pretty">
              I'm a <AutoAnimation scrollTrigger={false} text="front-end developer"/> with a passion for creating 
              <AutoAnimation text="engaging and visually" /> appealing websites.
            </p>
          </div>
        </div>
  
        <div className="hero-subpart">
          <div className="social-links">
            <a href="">LINKEDIN &nbsp;<span>🔗</span></a>
            <a href="">GITHUB &nbsp;<span>🔗</span></a>
            <a href="">INSTAGRAM &nbsp;<span>🔗</span></a>
            <a href="">GMAIL &nbsp;<span>🔗</span></a>
          </div>
          <div className="hero-subtext">
            Helping businesses create visually stunning, high-performance, and user-friendly websites.
            <button>LET'S TALK</button>
          </div>
        </div>
  
        <div className="logo-slider">
          <div className="logo-track">
            <p>DEVELOPER</p>
            <p>DESIGNER</p>
            <p>ANIMATION</p>
            <p>GRAPHICS</p>
          </div>
        </div>
      </div>
  

      {/* <BackToTop /> */}
    </>
  );
  
};

export default Hero;
