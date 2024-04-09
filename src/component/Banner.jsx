import React from "react";

const Banner = () => {
  return (
    <section className="flex banner container">
      <div className="flex info-content">
        <div className="flex-center icone-container">
          <i className="fa-solid fa-star"></i>
        </div>
        <div>
          <span>Bootcamp</span>
          <p>Graduated</p>
        </div>
      </div>
      <div className="flex info-content">
        <div>
          <div className="info-divider"></div>
        </div>
        <div className="flex-center icone-container">
          <i className="fa-solid fa-star"></i>
        </div>
        <div>
          <span>2+ Projects</span>
          <p>Comnpleted</p>
        </div>
      </div>
      <div className="flex info-content">
        <div>
          <div className="info-divider"></div>
        </div>
        <div className="flex-center icone-container">
          <i className="fa-solid fa-star"></i>
        </div>
        <div>
          <span>5+years</span>
          <p>Store manager</p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
