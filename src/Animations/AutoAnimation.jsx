import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const AutoAnimation = ({ text, color = "white", stagger = 0.04 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      ".letter-animate",
      { color: "#aebaa1" },
      {
        color: "#b5ff6d",
        duration: 0.2,
        stagger: stagger,
        ease: "power2.out",
        delay: 0.3,
      }
    );
  }, [color, stagger]);

  return (
    <span ref={textRef}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="word-animate" style={{ display: "inline-block" }}>
          {word.split("").map((char, i) => (
            <span key={i} className="letter-animate" style={{ display: "inline-block" }}>
              {char}
            </span>
          ))}
          &nbsp;
        </span>
      ))}
    </span>
  );
};

export default AutoAnimation;










