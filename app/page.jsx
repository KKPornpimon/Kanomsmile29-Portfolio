
import Hero from "@/components/Hero"
import About from "./about/page"
// import Experiences from "./experience/page"
import Contact from "./contact/page"
import Project from "./project/page"
import Experiences from "@/components/Experiences"

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      {/* <Experiences /> */}
      <Experiences />
      <Project />
      <Contact />
    </>
  )
}
export default Home