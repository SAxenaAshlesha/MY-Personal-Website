import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">AS</div>
        <p>Designed & Built by Ashlesha Saxena</p>
        <div className="footer-links">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
          <a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About</a>
          <a href="#education" onClick={(e) => handleNavClick(e, '#education')}>Education</a>
          <a href="#experience" onClick={(e) => handleNavClick(e, '#experience')}>Experience</a>
          <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://github.com/SAxenaAshlesha" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/ashlesha-saxena-a5078a240" target="_blank" rel="noopener noreferrer" className="social-link">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Ashlesha Saxena. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
