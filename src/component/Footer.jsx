import React from "react";

const Footer = () => {
  return (
    <footer className="flex-center">
      <div className="top-flex">
        <div className="links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#hero"></a>Home
            </li>
            <li>
              <a href="#skills"></a>Skills
            </li>
            <li>
              <a href="#projects"></a>Projects
            </li>
            <li>
              <a href="#contact"></a>Contact
            </li>
          </ul>
        </div>
        <div className="social">
          <h3>Social</h3>
          <ul>
            <li>
              <a href=""></a>Github
            </li>
            <li>
              <a href=""></a>Linkedin
            </li>
            <li>
              <a href=""></a>fa-facebook
            </li>
            <li>
              <a href=""></a>Instagram
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom">&copy; Copy right all reserved 2024.💼</div>
    </footer>
  );
};

export default Footer;
