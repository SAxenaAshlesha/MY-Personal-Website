import { useState, useEffect } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300)
  }, [])

  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero">
      <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
        <h1>Hi, I'm <span className="highlight">Ashlesha Saxena</span></h1>
        <p className="tagline">Data Analyst | Python Developer | Power BI Specialist</p>
        <p className="subtitle">Transforming data into actionable insights</p>
        <div className="cta-buttons">
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
          <a href="#projects" className="btn btn-secondary">View My Work</a>
        </div>
      </div>
      <div className="scroll-down" onClick={handleScrollDown}>
        <span>Scroll Down</span>
        <FaChevronDown />
      </div>
    </section>
  )
}

export default Hero
