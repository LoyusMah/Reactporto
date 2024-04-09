import { Route, Routes } from "react-router-dom";
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
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="banner" element={<Banner />} />
          <Route path="skills" element={<Skills />} />
          <Route path="project" element={<Projects />} />
          <Route path="aboutme" element={<Aboutme />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
