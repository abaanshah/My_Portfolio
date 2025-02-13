import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";
// import "..assets/fonts/clash-display.css"

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text }) => {
  useEffect(() => {
    gsap.fromTo(
      ".word-animate .letter-animate",
      {
        color: "white",
        // opacity: 0,
        // scale:0,
        // y: 50,
      },
      {
        color: "#b5ff6d",
        // opacity: 1,
        // scale:1,
        // y: 0,
        duration: 0.5,
        stagger: 0.05, // Animate letter by letter
        ease: "power2.out",
        delay: 0.3,
      }
      );
      

  }, []);


  return (
    <>
      {text.split(" ").map((word, index) => (
        <span key={index} className="word-animate" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.split("").map((char, i) => (
            <span key={i} className="letter-animate" style={{ display: "inline-block" }}>
              {char}
            </span>
          ))}
          &nbsp;
        </span>
      ))}
    </>
  );
};;

// Hero Component
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        {/* <div className="hero-img">
          <img src="https://learnenglish.britishcouncil.org/sites/podcasts/files/2021-10/RS6715_492969113-hig.jpg" alt="" />
        </div> */}
        <div className="hero-text">
        <p className="text-pretty">I'm a <AnimatedText text="front-end developer"/>with a passion for creating <AnimatedText text="engaging and visually"/>appealing websites.</p>
        </div>
        {/* <a href="#about">Learn More</a> */}
      </div>
      <div className="hero-subpart">
      <div className="social-links">
        <a href="">LINKEDIN &nbsp; <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right "><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg></span></a>
        <a href="">GITHUB &nbsp; <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right "><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg></span></a>
        <a href="">INSTAGRAM &nbsp;<span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right "><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg></span></a>
        <a href="">GMAIL &nbsp;<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right "><path d="M7 17 17 7"></path><path d="M7 7h10v10"></path></svg></span></a>
      </div>
      <div className="hero-subtext">Helping businesses create visually stunning, high-performance, and user-friendly websites.
      <button>LET'S TALK</button></div>
        
      </div>
      <div class="logo-slider">
        <div class="logo-track">
            <p>DEVELOPER</p>
            <p>DESIGNER</p>
            <p>ANIMATION</p>
            <p>GRAPHICS</p>
            <p>DEVELOPER</p>
            <p>DESIGNER</p>
            <p>ANIMATION</p>
            <p>GRAPHICS</p>
            <p>DEVELOPER</p>
            <p>DESIGNER</p>
            <p>ANIMATION</p>
            <p>GRAPHICS</p>
            <p>DEVELOPER</p>
            <p>DESIGNER</p>
            <p>ANIMATION</p>
            <p>GRAPHICS</p>
            <p>DEVELOPER</p>
            <p>DESIGNER</p>
            <p>ANIMATION</p>
            <p>GRAPHICS</p>
            <p>DEVELOPER</p>
            <p>DESIGNER</p>
            <p>ANIMATION</p>
            <p>GRAPHICS</p>
        
        </div>
    </div>
    </div>
  );
};

export default Hero;
