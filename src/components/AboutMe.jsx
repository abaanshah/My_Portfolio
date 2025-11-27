import './AboutME.css'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import AnimatedText from './AnimatedText'
import ScrollAnimation from '../Animations/ScrollAnimation';
const AboutMe = () => {
  return (
    <div className='aboutme' >
      <h2>ABOUT ME</h2>
      <p>
  <ScrollAnimation  
    color="white"  
    scrollTrigger={true}  
    text="I craft modern, high-performance web applications that merge clean design with seamless functionality. From interactive business websites to 3D experiences with Three.js, I leverage the MERN stack, Nextjs, GSAP,Framer and automation tools to deliver engaging digital solutions. My expertise extends to building intelligent chatbots, integrating AI-driven features, and exploring cutting-edge technologies that make projects scalable, innovative, and future-ready. Let's turn your vision into a powerful digital reality!"  
  />  
</p></div>
  )
}

export default AboutMe;





// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const AnimatedText = ({ text, color = "#b5ff6d", stagger = 0.05, scrollTrigger = false }) => {
//   const textRef = useRef(null);

//   useEffect(() => {
//     if (!textRef.current) return;

//     const letters = textRef.current.querySelectorAll(".letter-animate");
    
//     if (scrollTrigger) {
//       gsap.fromTo(
//         letters,
//         {  color: "#aebaa1" },
//         { 
//           color: color,
//           duration: 0.2,
//           stagger: stagger,
//           // ease: "power2.out",
//           scrollTrigger: {
//             trigger: textRef.current,
//             start: "top 80%",
//             end: "top 20%",  // Scroll-based progress
//             scrub: true,  // Makes animation progress smooth on scroll
//             toggleActions: "play none none reverse"
//           }
//         }
//       );
//     } else {
//       gsap.fromTo(
//         letters,
//         { color: "#aebaa1" },
//         { 
//           color: color, 
//           duration: 0.2, 
//           stagger: stagger,
//           ease: "power2.out"
//         }
//       );
//     }

//   }, [color, stagger, scrollTrigger]);

//   return (
//     <div ref={textRef}>
//       {text.split(" ").map((word, wordIndex) => (
//         <span key={wordIndex} className="word-animate" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
//           {word.split("").map((char, i) => (
//             <span key={i} className="letter-animate" style={{ display: "inline-block" }}>
//               {char}
//             </span>
//           ))}
//           &nbsp;
//         </span>
//       ))}
//     </div>
//   );
// };

// export default AnimatedText;
