import React, { useEffect } from "react";
import gsap from "gsap";
// import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Navbar.css";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  useEffect(() => {
    gsap.to(".navbar", {
      width: "55%", 
      duration: 1.5,
      y:10,
      // ease: "power",
      scrollTrigger: {
        trigger: ".navbar",
        start: "top 2%",
        end: "+=200",
        // markers: true,
        scrub: 2, // Smooth transition
      },
    });
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <p>AB</p>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="theme"></div>
    </nav>
  );
};

export default Navbar;
