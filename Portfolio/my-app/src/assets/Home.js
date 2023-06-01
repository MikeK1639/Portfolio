import React from 'react'
import Header from "../components/Header/Header"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Projects from "../components/Projectlist/Projectslist"
import Skills from "../components/Skills"

function Home() {
  return (
    <>
     <Header/> 
     <Skills/> 
     <Projects/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default Home