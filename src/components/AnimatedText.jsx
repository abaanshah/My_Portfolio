import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text, color , stagger = 0.05, scrollTrigger = false }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll(".letter-animate");
    
    if (scrollTrigger) {
      gsap.fromTo(
        letters,
        { opacity: 0.1, color: "#aebaa1" },
        { 
          opacity: 1,
          color: "white",
          duration: 0.3,
          stagger: stagger,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "top 20%",  // Scroll-based progress
            scrub: true,  // Makes animation progress smooth on scroll
            toggleActions: "play none none reverse"
          }
        }
      );
    } else {
      gsap.fromTo(
        ".letter-animate ",
        {
          color: "#aebaa1",
          // opacity: 0,
          // y: 10, // Slight upward movement for effect
        },
        {
          color: "#b5ff6d",
          // opacity: 1,
          // y: 0,
          duration: .5,
          stagger: 0.05, // Animate letter by letter
          ease: "power2.out",
          delay: 0.3,
        }
        );

    }

  }, [ stagger, scrollTrigger]);

  return (
    <div ref={textRef}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="word-animate" style={{ display: "inline-block", }}>
          {word.split("").map((char, i) => (
            <span key={i} className="letter-animate" style={{ display: "inline-block" }}>
              {char}
            </span>
          ))}
          &nbsp;
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
