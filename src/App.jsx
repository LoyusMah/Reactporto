import "./App.css";

function App() {
  return (
    <>
      {/* <!-- dark mode toggler\ --> */}

      <input type="checkbox" id="darkmode" />
      <div class="wrapper">
        <label for="darkmode">
          <i class="fa-brands fa-connectdevelop"></i>{" "}
        </label>
        {/* <!-- navbar --> */}
        <header>
          <div class="header container flex">
            <div class="logo flex">
              <div>Loyus Maharjan</div>
              <div class="line">Full Stack Developer</div>
            </div>
            <div class="menu">
              <ul class="flex navigation">
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
        <section class="hero-section container" id="hero">
          <div class="grid hero">
            <div class="left flex">
              <div>
                Hi I'm <span>Loyus Maharjan</span>
              </div>
              <div class="tag">Full Stack Developer</div>
              <p>I want to be the Developer</p>
              <div>
                <a href="./assets/Loyus Linkedin.pdf" download>
                  <button>
                    Download CV <i class="fa-solid fa-download"></i>
                  </button>
                </a>
              </div>
            </div>
            <div class="right flex">
              <img src="./assets/loyus.png" alt="Prem's speaking" />
            </div>
          </div>
        </section>
        {/* <!-- banner --> */}
        <section class="flex banner container">
          <div class="flex info-content">
            <div class="flex-center icone-container">
              <i class="fa-solid fa-star"></i>
            </div>
            <div>
              <span>Bootcamp</span>
              <p>Graduated</p>
            </div>
          </div>
          <div class="flex info-content">
            <div>
              <div class="info-divider"></div>
            </div>
            <div class="flex-center icone-container">
              <i class="fa-solid fa-star"></i>
            </div>
            <div>
              <span>2+ Projects</span>
              <p>Comnpleted</p>
            </div>
          </div>
          <div class="flex info-content">
            <div>
              <div class="info-divider"></div>
            </div>
            <div class="flex-center icone-container">
              <i class="fa-solid fa-star"></i>
            </div>
            <div>
              <span>5+years</span>
              <p>Store manager</p>
            </div>
          </div>
        </section>
        {/* <!-- skills --> */}
        <div class="skills" id="skills">
          <h2 class="title">
            <span>Skills</span>
          </h2>
          <div class="container flex skills-container">
            <div>
              <i class="fa-brands fa-html5" style="color: orange"></i>
              <span>HTML</span>
            </div>
            <div>
              <i class="fa-brands fa-js" style="color: yellow"></i>
              <span>JavaScript</span>
            </div>
            <div>
              <i class="fa-brands fa-css3-alt" style="color: blue"></i>
              <span>CSS</span>
            </div>
            <div>
              <i class="fa-brands fa-figma" style="color: purple"></i>
              <span>Figma</span>
            </div>
            <div>
              <i class="fa-brands fa-github"></i>
              <span>Github</span>
            </div>
          </div>
        </div>
        {/* <!-- projects--> */}
        <section class="projects" id="projects">
          <h2 class="title">
            <span> My Projects </span>
          </h2>

          <div class="grid project-container">
            <div class="project-card">
              <div class="top">
                <img src="./assets/open.png" alt="" width="100%" />
              </div>
              <div class="bottom">
                <h3>Personal portfolio</h3>
                <p>Techstack: HTML, CSS, Javascript,</p>
                <div>
                  <a
                    href="https://github.com/CrossFirerr/prank-caculator"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-chrome"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-card">
              <div class="top">
                <img src="./assets/open.png" alt="" width="100%" />
              </div>
              <div class="bottom">
                <h3>Personal portfolio</h3>
                <p>Techstack: HTML, CSS, Javascript,</p>
                <div>
                  <a
                    href="https://github.com/CrossFirerr/prank-caculator"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-chrome"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-card">
              <div class="top">
                <img src="./assets/open.png" alt="" width="100%" />
              </div>
              <div class="bottom">
                <h3>Personal portfolio</h3>
                <p>Techstack: HTML, CSS, Javascript,</p>
                <div>
                  <a
                    href="https://github.com/CrossFirerr/prank-caculator"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-chrome"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="project-card">
              <div class="top">
                <img src="./assets/open.png" alt="" width="100%" />
              </div>
              <div class="bottom">
                <h3>Personal portfolio</h3>
                <p>Techstack: HTML, CSS, Javascript,</p>
                <div>
                  <a
                    href="https://github.com/CrossFirerr/prank-caculator"
                    target="_blank"
                  >
                    <i class="fa-brands fa-github"></i>
                  </a>
                  <a href="">
                    <i class="fa-brands fa-chrome"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- about me÷ --> */}
        <section class="about" id="about">
          <h2 class="title">
            <span> About me </span>
          </h2>
          <div class="container flex about-content">
            <div class="flex-center myImg"></div>
            <div class="my-bio container">
              <h2>Loyus Maharjan</h2>
              <p>
                With over five years of expertise in retail operations.
                Currently, I'm pursuing a full stack developer course with the
                aim of transitioning into a career in software development. With
                a strong foundation in management and a growing skill set in
                software development, I demonstrates a commitment to
                professional growth and adaptability. My combination of
                managerial experience and dedication to learning new
                technologies positions them as a promising candidate for a
                future role in software development.
              </p>
              <p>
                Dedicated and diligent professional seeking opportunities to
                contribute my hardworking nature and smart approach to achieving
                organizational objectives. With a proven track record of
                commitment and a knack for strategic problem-solving, I aim to
                make meaningful contributions to a dynamic team.
              </p>
              <p>Sydney, Australia</p>
              <div>
                <div class="tag">Interest</div>
                <div class="flex">
                  <span>Coding</span>
                  <span>Reading</span>
                  <span>Cooking</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- contact--> */}
        <section class="contact" id="contact">
          <h2 class="title">
            <span>Contact</span>
          </h2>
          <div class="flex social">
            <a href="https://github.com/CrossFirerr">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="">
              <i class="fa-solid fa-mobile"></i>
            </a>
          </div>
          <h3>OR</h3>
          <div class="flex-center">
            <a href="" class="email-section flex-center">
              <span>maharjanloyus123@gmail.com</span>
              <div class="email flex-center">
                <i class="fa-solid fa-inbox"></i>
              </div>
            </a>
          </div>
        </section>
        {/* <!-- footer--> */}
        <footer class="flex-center">
          <div class="top-flex">
            <div class="links">
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
            <div class="social">
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

          <div class="bottom">&copy; Copy right all reserved 2024.💼</div>
        </footer>
      </div>
    </>
  );
}
export default App;
