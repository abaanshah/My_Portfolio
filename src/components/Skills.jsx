import React, { useState } from "react";
import "./Skills.css";
import SpotlightCard from "../ui/SpotlightCard";

const Skills = () => {
  const defaultVideo =
    "https://videos.pexels.com/video-files/2887463/2887463-hd_1920_1080_25fps.mp4";

  const [videoSrc, setVideoSrc] = useState(defaultVideo);

  const skills = [
    {
      name: "DEVELOPMENT",
      video:
        "https://cdn.pixabay.com/video/2015/12/11/1625-148614367_medium.mp4",
    },
    {
      name: "DESIGNING",
      video:
        "https://videos.pexels.com/video-files/4464847/4464847-uhd_2560_1440_25fps.mp4",
    },
    {
      name: "MARKETING",
      video:
        "https://videos.pexels.com/video-files/3626152/3626152-uhd_2732_1440_25fps.mp4",
    },
    {
      name: "ARTIFICIAL INTELLIGENCE",
      video:
        "https://videos.pexels.com/video-files/2792370/2792370-hd_1920_1080_30fps.mp4",
    },
  ];

  return (
    <div className="skills">
      <h2>SKILLS</h2>

      <div className="skills-container">
        <div className="skill-cards">
          {skills.map((skill, index) => (
            <SpotlightCard spotlightColor="rgba(100, 329,35, 0.15)" key={index}>
              <div
                className={`scard ${index % 2 === 0 ? "left" : "right"}`}
                onMouseEnter={() => setVideoSrc(skill.video)}
                onMouseLeave={() => setVideoSrc(defaultVideo)}
              >
                <p>{skill.name}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="skill-video">
          <div className="overlay"></div>
          <video src={videoSrc} autoPlay loop muted className="skill-media" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
