import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Journeys from "./components/Journeys.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import RidgelineDivider from "./components/ui/RidgelineDivider.jsx";

export default function App() {
  return (
    <main>
      <Hero />
      <About />
      <RidgelineDivider flip />
      <Journeys />
      <RidgelineDivider />
      <Projects />
      <RidgelineDivider flip />
      <Experience />
      <RidgelineDivider />
      <Contact />
    </main>
  );
}
