import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import gsap from "gsap";
// import { useGSAP } from '@gsap/react';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);

const Navbar = () => {
  useEffect(() => {
    if(window.innerWidth>=800){
      gsap.to(".navbar",{
        width: "50%", 
      y:10,
      duration: 1.5,
      // ease: "power",
      scrollTrigger: {
        trigger: ".navbar",
        start: "top 2%",
        end: "+=100",
        // markers: true,
        scrub: 2, // Smooth transition
      },
    });
    }
}, 
[]);

    // Custom smooth scrolling function
    const scrollToSection = (e, target) => {
      e.preventDefault();
      const section = document.querySelector(target);
      if (section) {
        const yOffset = section.offsetTop; // Get section position
        gsap.to(window, { duration: 1.5, scrollTo: yOffset-105, ease: "power2.out" });
      }
    };
  

  return (
    <>
    <nav className="navbar">
      <div className="logo">
        {/* <a href=".hero" onClick={(e) => scrollToSection(e, ".hero")}>Abaan</a> */}
      </div>
      <ul className="nav-links">
      {/* <li><a href=".hero" onClick={(e) => scrollToSection(e, ".hero")}>Home</a></li> */}
        <li><a href=".aboutme" onClick={(e) => scrollToSection(e, ".aboutme")}>About</a></li>
        <li><a href=".tech" onClick={(e) => scrollToSection(e, ".tech")}>Tech Stack</a></li>
        <li><a href=".projects" onClick={(e) => scrollToSection(e, ".projects")}>Projects</a></li>
        <li><a href=".skills" onClick={(e) => scrollToSection(e, ".skills")}>Skills</a></li>
        <li><a href=".contact" onClick={(e) => scrollToSection(e, ".contact")}>Contact</a></li>
      </ul>
      <div className="theme">
        {/* <ThemeToggle/>  */}
        </div>
      
     
    </nav>
    <div className="top"><a href=".hero" onClick={(e) => scrollToSection(e, ".hero")}>↑</a></div>
    </>
  );
};

export default Navbar;