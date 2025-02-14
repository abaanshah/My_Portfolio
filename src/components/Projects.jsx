import React from "react";
import "./Projects.css";
const Projects = () => {
  return (
    <div className="projects">
      <h2>PROJECTS</h2>
      <div className="project-cards">
        <div className="leftcards">
          <div className="card card1">
            <img
              src="https://img.freepik.com/premium-photo/computer-monitor-with-blue-red-light-screen_1064589-163666.jpg"
              alt=""
            />
          </div>
          <div className="card card2">
            <img
              src="https://img.freepik.com/premium-photo/computer-monitor-with-blue-red-light-screen_1064589-163666.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="rightcards">
          <div className="card card3">
            <img
              src="https://img.freepik.com/premium-photo/computer-monitor-with-blue-red-light-screen_1064589-163666.jpg"
              alt=""
            />
          </div>
          <div className="card card4">
            <img
              src="https://img.freepik.com/premium-photo/computer-monitor-with-blue-red-light-screen_1064589-163666.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
