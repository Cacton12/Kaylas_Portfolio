import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Education from "./Components/Education";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Education />
      <Experience />
      <ContactMe />
      <Footer />
    </div>
  );
}
