import React from "react";
import ScrollAnimation from "../Animations/ScrollAnimation";

const AboutMe = () => {
  return (
    <div
      className="
        w-[80vw] 
        h-[60vh] 
        pt-12 
        mx-auto 
        flex 
        flex-col 
        items-center 
        justify-start
        text-center
      "
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        ABOUT ME
      </h2>

      <p
        className="
          text-lg 
          sm:text-xl 
          md:text-2xl 
          lg:text-3xl 
          text-white 
          leading-relaxed 
          max-w-5xl
        "
      >
        <ScrollAnimation
          color="white"
          scrollTrigger={true}
          text="I craft modern, high-performance web applications that merge clean design with seamless functionality. From interactive business websites to 3D experiences with Three.js, I leverage the MERN stack, Nextjs, GSAP, Framer and automation tools to deliver engaging digital solutions. My expertise extends to building intelligent chatbots, integrating AI-driven features, and exploring cutting-edge technologies that make projects scalable, innovative, and future-ready. Let's turn your vision into a powerful digital reality!"
        />
      </p>
    </div>
  );
};

export default AboutMe;
