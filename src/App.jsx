
import Contact from "./Components/Contact"
import Hero from "./Components/Hero"

import Navbar from "./Components/Navbar/Navbar"
import ProjectCard from "./Components/Projects/ProjectCard"
import Projects from "./Components/Projects/Projects"
import Skills from "./Components/Skills/Skills"

function App() {


  return (
    <>
      <div className="bg-[#001D3D] h-auto w-full overflow-hidden"> <Navbar />
        <Hero />
        <Projects />
        <ProjectCard />

        <Skills />
        <Contact />
      </div>

    </>
  )
}

export default App
