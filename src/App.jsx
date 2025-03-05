import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Project from './components/Project'
import Projects from './components/Project'
import Review from './components/Review'
import Skill from './components/Skill'
import Work from './components/Work'

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        {/* <Project /> */}
        <Work />
        {/* <Review /> */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
