import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'
import ScrollProgress from './components/ScrollProgress'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <ScrollProgress />
    <Header />
    <Home />
    <About />
    <Projects />
    <Contact />
    <Footer />
    
    </>
  )
}

export default App
