import "./App.css";
import Aboutme from "./component/Aboutme";
import Banner from "./component/Banner";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      {/* <!-- dark mode toggler\ --> */}

      <input type="checkbox" id="darkmode" />
      <div className="wrapper">
        <label htmlFor="darkmode">
          <i className="fa-brands fa-connectdevelop"></i>{" "}
        </label>

        <Navbar />

        <Hero />

        <Banner />

        <Skills />

        <Projects />
        <Aboutme />

        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
