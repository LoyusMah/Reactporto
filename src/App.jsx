import "./App.css";
import Aboutme from "./component/Aboutme";
import Banner from "./component/Banner";
function App() {
  return (
    <>
      {/* <!-- dark mode toggler\ --> */}

      <input type="checkbox" id="darkmode" />
      <div className="wrapper">
        <label htmlFor="darkmode">
          <i className="fa-brands fa-connectdevelop"></i>{" "}
        </label>
        {/* <!-- navbar --> */}
        <header>
          <div className="header container flex">
            <div className="logo flex">
              <div>Loyus Maharjan</div>
              <div className="line">Full Stack Developer</div>
            </div>
            <div className="menu">
              <ul className="flex navigation">
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {/* <!-- hero --> */}
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
              <img src="./assets/loyus.png" alt="Prem's speaking" />
            </div>
          </div>
        </section>
        {/* <!-- banner --> */}
        <Banner />
        {/* <!-- skills --> */}
        <div className="skills" id="skills">
          <h2 className="title">
            <span>Skills</span>
          </h2>
          <div className="container flex skills-container">
            <div>
              <i className="fa-brands fa-html5" style={{ color: "orange" }}></i>
              <span>HTML</span>
            </div>
            <div>
              <i className="fa-brands fa-js" style={{ color: "yellow" }}></i>
              <span>JavaScript</span>
            </div>
            <div>
              <i
                className="fa-brands fa-css3-alt"
                style={{ color: "blue" }}
              ></i>
              <span>CSS</span>
            </div>
            <div>
              <i className="fa-brands fa-figma" style={{ color: "purple" }}></i>
              <span>Figma</span>
            </div>
            <div>
              <i className="fa-brands fa-github"></i>
              <span>Github</span>
            </div>
          </div>
        </div>
        {/* <!-- projects--> */}
        <section className="projects" id="projects">
          <h2 className="title">
            <span> My Projects </span>
          </h2>

          <div className="grid project-container">
            <div className="project-card">
              <div className="top">
                <img src="./assets/open.png" alt="" width="100%" />
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
                <img src="./assets/open.png" alt="" width="100%" />
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
                <img src="./assets/open.png" alt="" width="100%" />
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
                <img src="./assets/open.png" alt="" width="100%" />
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
        <Aboutme />;{/* <!-- contact--> */}
        <section className="contact" id="contact">
          <h2 className="title">
            <span>Contact</span>
          </h2>
          <div className="flex social">
            <a href="https://github.com/CrossFirerr">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i className="fa-solid fa-mobile"></i>
            </a>
          </div>
          <h3>OR</h3>
          <div class="flex-center">
            <a href="" className="email-section flex-center">
              <span>maharjanloyus123@gmail.com</span>
              <div className="email flex-center">
                <i className="fa-solid fa-inbox"></i>
              </div>
            </a>
          </div>
        </section>
        {/* <!-- footer--> */}
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
      </div>
    </>
  );
}

export default App;
