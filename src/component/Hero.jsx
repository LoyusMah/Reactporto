import React from "react";
import Img from "../assets/main/loyus.png";

const Hero = () => {
  return (
    <section className="hero-section container" id="hero">
      <div className="grid hero">
        <div className="left flex">
          <div>
            Hi I'm <span>Loyus Maharjan</span>
          </div>
          <div className="tag">Full Stack Developer</div>
          <p>I want to be the Developer</p>
          <div>
            <a href="./assets/Loyus Linkedin.pdf" download>
              <button>
                Download CV <i class="fa-solid fa-download"></i>
              </button>
            </a>
          </div>
        </div>
        <div className="right flex">
          <img src={Img} alt="loyus" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
