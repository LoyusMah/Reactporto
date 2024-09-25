import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="title">
        <span>Contact</span>
      </h2>
      <div className="flex social">
        <a href="https://github.com/LoyusMah" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="iMessage://0452362665">
          <i className="fa-solid fa-mobile"></i>
        </a>
      </div>
      <h3>OR</h3>
      <div className="flex-center">
        <a href="" className="email-section flex-center">
          <span>maharjanloyus123@gmail.com</span>
          <div className="email flex-center">
            <i className="fa-solid fa-inbox"></i>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
