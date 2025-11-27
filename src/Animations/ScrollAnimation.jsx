import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = ({ text, color = "white", stagger = 0.05 }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      (".letters-animate"),
      { opacity: 0.2, color: "#aebaa1" },
      {
        opacity: 1,
        color: color,
        duration: 0.3,
        stagger: stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 96%",
          end: "top 30%",
          scrub: true,
          // markers:true,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [color, stagger]);

  return (
    <span ref={textRef}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="word-animate" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.split("").map((char, i) => (
            <span key={i} className="letters-animate" style={{ display: "inline-block" }}>
              {char}
            </span>
          ))}
          &nbsp;
        </span>
      ))}
    </span>
  );
};

export default ScrollAnimation;
