import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "./components"
import { StarCanvas } from './components/canvas'


function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <div className='bg-tech-pattern bg-cover bg-no-repeat bg-center'>
          <Tech />
        </div>
        <Works />
        <div className="relative z-0 bg-primary">
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarCanvas />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
