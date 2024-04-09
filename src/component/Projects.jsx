import React from "react";
import data from "../assets/main/open.png";
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="title">
        <span> My Projects </span>
      </h2>

      <div className="grid project-container">
        <div className="project-card">
          <div className="top">
            <img src={data} alt="" width="100%" />
          </div>
          <div className="bottom">
            <h3>Personal portfolio</h3>
            <p>Techstack: HTML, CSS, Javascript,</p>
            <div>
              <a
                href="https://github.com/CrossFirerr/prank-caculator"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={data} alt="" width="100%" />
          </div>
          <div className="bottom">
            <h3>Personal portfolio</h3>
            <p>Techstack: HTML, CSS, Javascript,</p>
            <div>
              <a
                href="https://github.com/CrossFirerr/prank-caculator"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={data} alt="" width="100%" />
          </div>
          <div className="bottom">
            <h3>Personal portfolio</h3>
            <p>Techstack: HTML, CSS, Javascript,</p>
            <div>
              <a
                href="https://github.com/CrossFirerr/prank-caculator"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={data} alt="" width="100%" />
          </div>
          <div className="bottom">
            <h3>Personal portfolio</h3>
            <p>Techstack: HTML, CSS, Javascript,</p>
            <div>
              <a
                href="https://github.com/CrossFirerr/prank-caculator"
                target="_blank"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-chrome"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
