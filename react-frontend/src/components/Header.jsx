import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)

      // Update active section
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
          current = `#${section.getAttribute('id')}`
        }
      })
      
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <nav>
        <div className="logo">AS</div>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" className={activeSection === '#home' ? 'active' : ''} onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
          <li><a href="#about" className={activeSection === '#about' ? 'active' : ''} onClick={(e) => handleNavClick(e, '#about')}>About</a></li>
          <li><a href="#education" className={activeSection === '#education' ? 'active' : ''} onClick={(e) => handleNavClick(e, '#education')}>Education</a></li>
          <li><a href="#experience" className={activeSection === '#experience' ? 'active' : ''} onClick={(e) => handleNavClick(e, '#experience')}>Experience</a></li>
          <li><a href="#projects" className={activeSection === '#projects' ? 'active' : ''} onClick={(e) => handleNavClick(e, '#projects')}>Projects</a></li>
          <li><a href="#contact" className={activeSection === '#contact' ? 'active' : ''} onClick={(e) => handleNavClick(e, '#contact')}>Contact</a></li>
        </ul>
        <div 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
    </header>
  )
}

export default Header
