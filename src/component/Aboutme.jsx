import React from "react";

const Aboutme = () => {
  return (
    <section className="about" id="about">
      <h2 className="title">
        <span> About me </span>
      </h2>
      <div className="container flex about-content">
        <div className="flex-center myImg"></div>
        <div className="my-bio container">
          <h2>Loyus Maharjan</h2>
          <p>
            With over five years of expertise in retail operations. Currently,
            I'm pursuing a full stack developer course with the aim of
            transitioning into a career in software development. With a strong
            foundation in management and a growing skill set in software
            development, I demonstrates a commitment to professional growth and
            adaptability. My combination of managerial experience and dedication
            to learning new technologies positions them as a promising candidate
            for a future role in software development.
          </p>
          <p>
            Dedicated and diligent professional seeking opportunities to
            contribute my hardworking nature and smart approach to achieving
            organizational objectives. With a proven track record of commitment
            and a knack for strategic problem-solving, I aim to make meaningful
            contributions to a dynamic team.
          </p>
          <p>Sydney, Australia</p>
          <div>
            <div className="tag">Interest</div>
            <div className="flex">
              <span>Coding</span>
              <span>Reading</span>
              <span>Cooking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
