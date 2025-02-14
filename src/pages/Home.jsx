import React, { useEffect } from "react";
import Hero from '../components/Hero'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
gsap.registerPlugin(ScrollTrigger);

// gsap.to(".home", {
//   y: -700, 
//   ease: "power4.out", // Heavy easing
//   scrollTrigger: {
//     trigger: ".home",
//     start: "top top",
//     end: "bottom top",
//     markers:true,
//     scrub: 2,
//   }
// });
const Home = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2,
      smooth: true,
      ease: 0.1, // Adjust for heavier effect
    });
  
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
  
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className='home'>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Skills/>
    </div>
  )
}

export default Home