import React from "react";
import ScrollAnimation from "../Animations/ScrollAnimation";

const AboutMe = () => {
  return (
    <div
      className=" aboutme
        w-[80vw] 
        h-[60vh] 
        pt-8 
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
          text="I build modern, high-performance digital experiences using the MERN stack, Next.js, and powerful animation tools like GSAP and Framer. My focus is simple: create fast, secure, and visually engaging applications that help businesses grow.

From interactive websites to AI-integrated features and automated workflows, I blend clean design with scalable engineering. Whether it’s enhancing UX, improving performance, or adding intelligent chatbot systems, I turn ideas into reliable, future-ready digital products.

Let’s bring your vision to life with design, speed, and real impact."
        />
      </p>
    </div>
  );
};

export default AboutMe;
